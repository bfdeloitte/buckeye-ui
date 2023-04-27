import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type MenuItem from './menu-item';

describe('<bui-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<MenuItem>(html`
      <bui-menu>
        <bui-menu-item>Item 1</bui-menu-item>
        <bui-menu-item>Item 2</bui-menu-item>
        <bui-menu-item>Item 3</bui-menu-item>
        <bui-divider></bui-divider>
        <bui-menu-item type="checkbox" checked>Checked</bui-menu-item>
        <bui-menu-item type="checkbox">Unchecked</bui-menu-item>
      </bui-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<MenuItem>(html` <bui-menu-item>Test</bui-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<MenuItem>(html` <bui-menu-item disabled>Test</bui-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should not emit the click event when disabled', async () => {
    const el = await fixture<MenuItem>(html` <bui-menu-item disabled>Test</bui-menu-item> `);
    const clickHandler = sinon.spy();
    el.addEventListener('click', clickHandler);
    await clickOnElement(el);
    await el.updateComplete;

    expect(clickHandler).to.not.have.been.called;
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<MenuItem>(html` <bui-menu-item>Test</bui-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<MenuItem>(html` <bui-menu-item>Text</bui-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<MenuItem>(html`
      <bui-menu>
        <bui-menu-item inert>Item 1</bui-menu-item>
        <bui-menu-item>Item 2</bui-menu-item>
        <bui-menu-item>Item 3</bui-menu-item>
      </bui-menu>
    `);
    const item1 = menu.querySelector('bui-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
