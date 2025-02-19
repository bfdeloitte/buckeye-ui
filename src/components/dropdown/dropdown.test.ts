import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type Dropdown from './dropdown';

describe('<bui-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown open>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.true;
  });

  it('should emit bui-show and bui-after-show when calling show()', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit bui-hide and bui-after-hide when calling hide()', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown open>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit bui-show and bui-after-show when setting open = true', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit bui-hide and bui-after-hide when setting open = false', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown open>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should still open on arrow navigation when no menu items', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu> </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should open on arrow navigation', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should navigate to first focusable item on arrow navigation', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-label>Top Label</bui-menu-label>
          <bui-menu-item>Item 1</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;
    const item = el.querySelector('bui-menu-item')!;

    await clickOnElement(trigger);
    await trigger.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(document.activeElement).to.equal(item);
  });

  it('should close on escape key', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown open>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.focus();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should not open on arrow navigation when no menu exists', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <div>Some custom content</div>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should open on enter key', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should focus on menu items when clicking the trigger and arrowing through options', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
          <bui-menu-item>Item 2</bui-menu-item>
          <bui-menu-item>Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;
    const secondMenuItem = el.querySelectorAll('bui-menu-item')[1];

    await clickOnElement(trigger);
    await trigger.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(document.activeElement).to.equal(secondMenuItem);
  });

  it('should open on enter key when no menu exists', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <div>Some custom content</div>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should hide when clicked outside container and initially open', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown open>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);

    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should hide when clicked outside container', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Item 1</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const trigger = el.querySelector('bui-button')!;

    trigger.click();
    await el.updateComplete;
    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should close and stop propagating the keydown event when Escape is pressed and the dropdown is open ', async () => {
    const el = await fixture<Dropdown>(html`
      <bui-dropdown open>
        <bui-button slot="trigger" caret>Toggle</bui-button>
        <bui-menu>
          <bui-menu-item>Dropdown Item 1</bui-menu-item>
          <bui-menu-item>Dropdown Item 2</bui-menu-item>
          <bui-menu-item>Dropdown Item 3</bui-menu-item>
        </bui-menu>
      </bui-dropdown>
    `);
    const firstMenuItem = el.querySelector('bui-menu-item')!;
    const hideHandler = sinon.spy();

    document.body.addEventListener('keydown', hideHandler);
    firstMenuItem.focus();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
    expect(hideHandler).to.not.have.been.called;
  });
});
