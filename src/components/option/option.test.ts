import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type Option from './option';

describe('<bui-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<Option>(html`
      <bui-select label="Select one">
        <bui-option value="1">Option 1</bui-option>
        <bui-option value="2">Option 2</bui-option>
        <bui-option value="3">Option 3</bui-option>
        <bui-option value="4" disabled>Disabled</bui-option>
      </bui-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<Option>(html` <bui-option>Test</bui-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<Option>(html` <bui-option>Test</bui-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<Option>(html` <bui-option>Text</bui-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should convert non-string values to string', async () => {
    const el = await fixture<Option>(html` <bui-option>Text</bui-option> `);

    // @ts-expect-error - intentional
    el.value = 10;
    await el.updateComplete;

    expect(el.value).to.equal('10');
  });
});
