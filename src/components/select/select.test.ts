import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form';
import sinon from 'sinon';
import type Option from '../option/option';
import type SlSelect from './select';

describe('<bui-select>', () => {
  describe('accessibility', () => {
    it('should pass accessibility tests when closed', async () => {
      const select = await fixture<SlSelect>(html`
        <bui-select label="Select one">
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);
      await expect(select).to.be.accessible();
    });

    it('should pass accessibility tests when open', async () => {
      const select = await fixture<SlSelect>(html`
        <bui-select label="Select one">
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);

      await select.show();

      await expect(select).to.be.accessible();
    });
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select disabled>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    expect(el.displayInput.disabled).to.be.true;
  });

  it('should show a placeholder when no options are selected', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select placeholder="Select one">
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select one');
  });

  it('should show a placeholder when no options are selected and multiple is set', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select placeholder="Select a few" multiple>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select a few');
  });

  it('should not allow selection when the option is disabled', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1">
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2" disabled>Option 2</bui-option>
      </bui-select>
    `);
    const disabledOption = el.querySelector('bui-option[disabled]')!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal('option-1');
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select label="Select One">
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('bui-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit bui-change when the value is changed with the mouse', async () => {
      const el = await fixture<SlSelect>(html`
        <bui-select value="option-1">
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);
      const secondOption = el.querySelectorAll<Option>('bui-option')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('bui-change', changeHandler);
      el.addEventListener('bui-input', inputHandler);

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit bui-change and bui-input when the value is changed with the keyboard', async () => {
      const el = await fixture<SlSelect>(html`
        <bui-select value="option-1">
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('bui-change', changeHandler);
      el.addEventListener('bui-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: ' ' }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the third option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-3');
    });

    it('should not emit bui-change or bui-input when the value is changed programmatically', async () => {
      const el = await fixture<SlSelect>(html`
        <bui-select value="option-1">
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);

      el.addEventListener('bui-change', () => expect.fail('bui-change should not be emitted'));
      el.addEventListener('bui-input', () => expect.fail('bui-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });

    it('should emit bui-change and bui-input with the correct validation message when the value changes', async () => {
      const el = await fixture<SlSelect>(html`
        <bui-select required>
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);
      const option2 = el.querySelectorAll('bui-option')[1];
      const handler = sinon.spy((event: CustomEvent) => {
        if (el.validationMessage) {
          expect.fail(`Validation message should be empty when ${event.type} is emitted and a value is set`);
        }
      });

      el.addEventListener('bui-change', handler);
      el.addEventListener('bui-input', handler);

      await clickOnElement(el);
      await aTimeout(500);
      await clickOnElement(option2);
      await el.updateComplete;

      expect(handler).to.be.calledTwice;
    });
  });

  it('should open the listbox when any letter key is pressed with bui-select is on focus', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the listbox when ctrl + R is pressed with bui-select is on focus', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select>
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const select = el.querySelector<SlSelect>('bui-select')!;
      expect(select.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select required>
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const select = el.querySelector<SlSelect>('bui-select')!;
      expect(select.checkValidity()).to.be.false;
    });

    it('should focus on the displayInput when constraint validation occurs', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select required>
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const select = el.querySelector<SlSelect>('bui-select')!;
      el.requestSubmit();
      expect(select.shadowRoot!.activeElement).to.equal(select.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<SlSelect>(html`
        <bui-select label="Select one" required value="option-1">
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);
      const secondOption = el.querySelectorAll('bui-option')[1]!;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<SlSelect>(html`
        <bui-select label="Select one" required>
          <bui-option value="option-1">Option 1</bui-option>
          <bui-option value="option-2">Option 2</bui-option>
          <bui-option value="option-3">Option 3</bui-option>
        </bui-select>
      `);
      const secondOption = el.querySelectorAll('bui-option')[1]!;

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      el.value = '';
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <bui-select required>
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const select = el.querySelector<SlSelect>('bui-select')!;

      expect(select.hasAttribute('data-required')).to.be.true;
      expect(select.hasAttribute('data-optional')).to.be.false;
      expect(select.hasAttribute('data-invalid')).to.be.true;
      expect(select.hasAttribute('data-valid')).to.be.false;
      expect(select.hasAttribute('data-user-invalid')).to.be.false;
      expect(select.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select name="a" value="option-1">
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('option-1');
    });

    it('should serialize its name and value in FormData when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select name="a" value="option-2 option-3" multiple>
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.getAll('a')).to.include('option-2');
      expect(formData.getAll('a')).to.include('option-3');
    });

    it('should serialize its name and value in JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select name="a" value="option-1">
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('option-1');
    });

    it('should serialize its name and value in JSON when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select name="a" value="option-2 option-3" multiple>
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </form>
      `);
      const json = serialize(form);
      expect(JSON.stringify(json)).to.equal(JSON.stringify({ a: ['option-2', 'option-3'] }));
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <bui-button type="submit">Submit</bui-button>
          </form>
          <bui-select form="f" name="a" value="option-1">
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option-1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <bui-select value="option-1">
            <bui-option value="option-1">Option 1</bui-option>
            <bui-option value="option-2">Option 2</bui-option>
            <bui-option value="option-3">Option 3</bui-option>
          </bui-select>
          <bui-button type="reset">Reset</bui-button>
        </form>
      `);
      const resetButton = form.querySelector('bui-button')!;
      const select = form.querySelector('bui-select')!;

      select.value = 'option-3';
      await select.updateComplete;
      expect(select.value).to.equal('option-3');

      setTimeout(() => clickOnElement(resetButton));
      await oneEvent(form, 'reset');
      await select.updateComplete;
      expect(select.value).to.equal('option-1');
    });
  });

  it('should update the display label when an option changes', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1">
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;
    const option = el.querySelector('bui-option')!;

    expect(displayInput.value).to.equal('Option 1');

    option.textContent = 'updated';
    await oneEvent(option, 'slotchange');
    await el.updateComplete;

    expect(displayInput.value).to.equal('updated');
  });

  it('should emit bui-focus and bui-blur when receiving and losing focus', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1">
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const focusHandler = sinon.spy();
    const blurHandler = sinon.spy();

    el.addEventListener('bui-focus', focusHandler);
    el.addEventListener('bui-blur', blurHandler);

    el.focus();
    await el.updateComplete;
    el.blur();
    await el.updateComplete;

    expect(focusHandler).to.have.been.calledOnce;
    expect(blurHandler).to.have.been.calledOnce;
  });

  it('should emit bui-clear when the clear button is clicked', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1" clearable>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const clearHandler = sinon.spy();
    const clearButton = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener('bui-clear', clearHandler);
    await el.show();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
  });

  it('should emit bui-change and bui-input when a tag is removed', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1 option-2 option-3" multiple>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;
    const removeButton = tag.shadowRoot!.querySelector('[part~="remove-button"]')!;

    el.addEventListener('bui-change', changeHandler);
    el.addEventListener('bui-input', inputHandler);

    await clickOnElement(removeButton);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
  });

  it('should emit bui-show, bui-after-show, bui-hide, and bui-after-hide events when the listbox opens and closes', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1">
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);

    await el.show();
    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;

    await el.hide();
    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should have rounded tags when using the pill attribute', async () => {
    const el = await fixture<SlSelect>(html`
      <bui-select value="option-1 option-2" multiple pill>
        <bui-option value="option-1">Option 1</bui-option>
        <bui-option value="option-2">Option 2</bui-option>
        <bui-option value="option-3">Option 3</bui-option>
      </bui-select>
    `);
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;

    expect(tag.hasAttribute('pill')).to.be.true;
  });

  runFormControlBaseTests('bui-select');
});
