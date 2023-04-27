import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SlSwitch from './switch';

describe('<bui-switch>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch>Switch</bui-switch> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);

    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch title="Test"></bui-switch> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch disabled></bui-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);

    expect(el.checkValidity()).to.be.true;
  });

  it('should emit bui-change and bui-input when clicked', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('bui-change', changeHandler);
    el.addEventListener('bui-input', inputHandler);
    el.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit bui-change when toggled with spacebar', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('bui-change', changeHandler);
    el.addEventListener('bui-input', inputHandler);
    el.focus();
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit bui-change and bui-input when toggled with the right arrow', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('bui-change', changeHandler);
    el.addEventListener('bui-input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowRight' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit bui-change and bui-input when toggled with the left arrow', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch checked></bui-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('bui-change', changeHandler);
    el.addEventListener('bui-input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowLeft' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.false;
  });

  it('should not emit bui-change or bui-input when checked is set by JavaScript', async () => {
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);
    el.addEventListener('bui-change', () => expect.fail('bui-change incorrectly emitted'));
    el.addEventListener('bui-input', () => expect.fail('bui-change incorrectly emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  it('should hide the native input with the correct positioning to scroll correctly when contained in an overflow', async () => {
    //
    // See: https://github.com/shoelace-style/shoelace/issues/1169
    //
    const el = await fixture<SlSwitch>(html` <bui-switch></bui-switch> `);
    const label = el.shadowRoot!.querySelector('.switch')!;
    const input = el.shadowRoot!.querySelector('.switch__input')!;

    const labelPosition = getComputedStyle(label).position;
    const inputPosition = getComputedStyle(input).position;

    expect(labelPosition).to.equal('relative');
    expect(inputPosition).to.equal('absolute');
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-switch name="a" value="1" checked></bui-switch>
          <bui-button type="submit">Submit</bui-button>
        </form>
      `);
      const button = form.querySelector('bui-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('1');
    });

    it('should submit "on" when no value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-switch name="a" checked></bui-switch>
          <bui-button type="submit">Submit</bui-button>
        </form>
      `);
      const button = form.querySelector('bui-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('on');
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-switch name="a" value="1" checked></bui-switch>
          <bui-button type="submit">Submit</bui-button>
        </form>
      `);
      const button = form.querySelector('bui-button')!;
      const slSwitch = form.querySelector('bui-switch')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      slSwitch.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();
      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });

    it('should be invalid when required and unchecked', async () => {
      const slSwitch = await fixture<HTMLFormElement>(html` <bui-switch required></bui-switch> `);
      expect(slSwitch.checkValidity()).to.be.false;
    });

    it('should be valid when required and checked', async () => {
      const slSwitch = await fixture<HTMLFormElement>(html` <bui-switch required checked></bui-switch> `);
      expect(slSwitch.checkValidity()).to.be.true;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <bui-button type="submit">Submit</bui-button>
          </form>
          <bui-switch form="f" name="a" value="1" checked></bui-switch>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html` <form novalidate><bui-switch required></bui-switch></form> `);
      const slSwitch = el.querySelector<SlSwitch>('bui-switch')!;

      expect(slSwitch.hasAttribute('data-required')).to.be.true;
      expect(slSwitch.hasAttribute('data-optional')).to.be.false;
      expect(slSwitch.hasAttribute('data-invalid')).to.be.true;
      expect(slSwitch.hasAttribute('data-valid')).to.be.false;
      expect(slSwitch.hasAttribute('data-user-invalid')).to.be.false;
      expect(slSwitch.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-switch name="a" value="1" checked></bui-switch>
          <bui-button type="reset">Reset</bui-button>
        </form>
      `);
      const button = form.querySelector('bui-button')!;
      const switchEl = form.querySelector('bui-switch')!;
      switchEl.checked = false;

      await switchEl.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.true;

      switchEl.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.false;
    });
  });

  runFormControlBaseTests('bui-switch');
});
