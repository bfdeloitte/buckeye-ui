import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type ChangeEvent from '../../events/bui-change';
import type Radio from '../radio/radio';
import type RadioGroup from './radio-group';

describe('<bui-radio-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no radio is checked', async () => {
      const radioGroup = await fixture<RadioGroup>(html`
        <bui-radio-group required>
          <bui-radio value="1"></bui-radio>
          <bui-radio value="2"></bui-radio>
        </bui-radio-group>
      `);

      expect(radioGroup.checkValidity()).to.be.false;
    });

    it('should become valid when an option is checked', async () => {
      const radioGroup = await fixture<RadioGroup>(html`
        <bui-radio-group required>
          <bui-radio value="1"></bui-radio>
          <bui-radio value="2"></bui-radio>
        </bui-radio-group>
      `);

      radioGroup.value = '1';
      await radioGroup.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
    });

    it(`should be valid when required and one radio is checked`, async () => {
      const el = await fixture<RadioGroup>(html`
        <bui-radio-group label="Select an option" value="1" required>
          <bui-radio name="option" value="1">Option 1</bui-radio>
          <bui-radio name="option" value="2">Option 2</bui-radio>
          <bui-radio name="option" value="3">Option 3</bui-radio>
        </bui-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when required and no radios are checked`, async () => {
      const el = await fixture<RadioGroup>(html`
        <bui-radio-group label="Select an option" required>
          <bui-radio name="option" value="1">Option 1</bui-radio>
          <bui-radio name="option" value="2">Option 2</bui-radio>
          <bui-radio name="option" value="3">Option 3</bui-radio>
        </bui-radio-group>
      `);

      expect(el.checkValidity()).to.be.false;
    });

    it(`should be valid when required and a different radio is checked`, async () => {
      const el = await fixture<RadioGroup>(html`
        <bui-radio-group label="Select an option" value="3" required>
          <bui-radio name="option" value="1">Option 1</bui-radio>
          <bui-radio name="option" value="2">Option 2</bui-radio>
          <bui-radio name="option" value="3">Option 3</bui-radio>
        </bui-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when custom validity is set`, async () => {
      const el = await fixture<RadioGroup>(html`
        <bui-radio-group label="Select an option">
          <bui-radio name="option" value="1">Option 1</bui-radio>
          <bui-radio name="option" value="2">Option 2</bui-radio>
          <bui-radio name="option" value="3">Option 3</bui-radio>
        </bui-radio-group>
      `);

      el.setCustomValidity('Error');

      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const radioGroup = await fixture<RadioGroup>(html`
        <bui-radio-group value="1" required>
          <bui-radio value="1"></bui-radio>
          <bui-radio value="2"></bui-radio>
        </bui-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('bui-radio')[1];

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-valid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      await secondRadio.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const radioGroup = await fixture<RadioGroup>(html`
        <bui-radio-group required>
          <bui-radio value="1"></bui-radio>
          <bui-radio value="2"></bui-radio>
        </bui-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('bui-radio')[1];

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      radioGroup.value = '';
      await radioGroup.updateComplete;

      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <bui-radio-group required>
            <bui-radio value="1"></bui-radio>
            <bui-radio value="2"></bui-radio>
          </bui-radio-group>
        </form>
      `);
      const radioGroup = el.querySelector<RadioGroup>('bui-radio-group')!;

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-radio-group value="1">
            <bui-radio id="radio-1" name="a" value="1"></bui-radio>
            <bui-radio id="radio-2" name="a" value="2"></bui-radio>
          </bui-radio-group>
          <bui-button type="submit">Submit</bui-button>
        </form>
      `);
      const button = form.querySelector('bui-button')!;
      const radioGroup = form.querySelector<RadioGroup>('bui-radio-group')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      radioGroup.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();

      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });
  });
});

describe('when resetting a form', () => {
  it('should reset the element to its initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <bui-radio-group value="1">
          <bui-radio value="1"></bui-radio>
          <bui-radio value="2"></bui-radio>
        </bui-radio-group>
        <bui-button type="reset">Reset</bui-button>
      </form>
    `);
    const button = form.querySelector('bui-button')!;
    const radioGroup = form.querySelector('bui-radio-group')!;
    radioGroup.value = '2';

    await radioGroup.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset');
    await radioGroup.updateComplete;

    expect(radioGroup.value).to.equal('1');
  });
});

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <bui-radio-group name="a" value="1">
          <bui-radio id="radio-1" value="1"></bui-radio>
          <bui-radio id="radio-2" value="2"></bui-radio>
          <bui-radio id="radio-3" value="3"></bui-radio>
        </bui-radio-group>
        <bui-button type="submit">Submit</bui-button>
      </form>
    `);
    const button = form.querySelector('bui-button')!;
    const radio = form.querySelectorAll('bui-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);

      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('2');
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <bui-button type="submit">Submit</bui-button>
        </form>
        <bui-radio-group form="f" name="a" value="1">
          <bui-radio id="radio-1" value="1"></bui-radio>
          <bui-radio id="radio-2" value="2"></bui-radio>
          <bui-radio id="radio-3" value="3"></bui-radio>
        </bui-radio-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.get('a')).to.equal('1');
  });
});

describe('when a size is applied', () => {
  it('should apply the same size to all radios', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group size="large">
        <bui-radio id="radio-1" value="1"></bui-radio>
        <bui-radio id="radio-2" value="2"></bui-radio>
      </bui-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('bui-radio')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should apply the same size to all radio buttons', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group size="large">
        <bui-radio-button id="radio-1" value="1"></bui-radio-button>
        <bui-radio-button id="radio-2" value="2"></bui-radio-button>
      </bui-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('bui-radio-button')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });
});

describe('when the value changes', () => {
  it('should emit bui-change when toggled with the arrow keys', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group>
        <bui-radio id="radio-1" value="1"></bui-radio>
        <bui-radio id="radio-2" value="2"></bui-radio>
      </bui-radio-group>
    `);
    const firstRadio = radioGroup.querySelector<Radio>('#radio-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    radioGroup.addEventListener('bui-change', changeHandler);
    radioGroup.addEventListener('bui-input', inputHandler);
    firstRadio.focus();
    await sendKeys({ press: 'ArrowRight' });
    await radioGroup.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(radioGroup.value).to.equal('2');
  });

  it('should emit bui-change and bui-input when clicked', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group>
        <bui-radio id="radio-1" value="1"></bui-radio>
        <bui-radio id="radio-2" value="2"></bui-radio>
      </bui-radio-group>
    `);
    const radio = radioGroup.querySelector<Radio>('#radio-1')!;
    setTimeout(() => radio.click());
    const event = (await oneEvent(radioGroup, 'bui-change')) as ChangeEvent;
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should emit bui-change and bui-input when toggled with spacebar', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group>
        <bui-radio id="radio-1" value="1"></bui-radio>
        <bui-radio id="radio-2" value="2"></bui-radio>
      </bui-radio-group>
    `);
    const radio = radioGroup.querySelector<Radio>('#radio-1')!;
    radio.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(radioGroup, 'bui-change')) as ChangeEvent;
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should not emit bui-change or bui-input when the value is changed programmatically', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group value="1">
        <bui-radio id="radio-1" value="1"></bui-radio>
        <bui-radio id="radio-2" value="2"></bui-radio>
      </bui-radio-group>
    `);

    radioGroup.addEventListener('bui-change', () => expect.fail('bui-change should not be emitted'));
    radioGroup.addEventListener('bui-input', () => expect.fail('bui-input should not be emitted'));
    radioGroup.value = '2';
    await radioGroup.updateComplete;
  });

  runFormControlBaseTests('bui-radio-group');
});
