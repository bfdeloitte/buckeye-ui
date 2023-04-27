// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type Drawer from './drawer';

describe('<bui-drawer>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<Drawer>(html`
      <bui-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<Drawer>(
      html` <bui-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit bui-show and bui-after-show when calling show()', async () => {
    const el = await fixture<Drawer>(html`
      <bui-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit bui-hide and bui-after-hide when calling hide()', async () => {
    const el = await fixture<Drawer>(html`
      <bui-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit bui-show and bui-after-show when setting open = true', async () => {
    const el = await fixture<Drawer>(html`
      <bui-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit bui-hide and bui-after-hide when setting open = false', async () => {
    const el = await fixture<Drawer>(html`
      <bui-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when bui-request-close is prevented', async () => {
    const el = await fixture<Drawer>(html`
      <bui-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bui-drawer>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;

    el.addEventListener('bui-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<Drawer>(html` <bui-drawer><input /></bui-drawer> `);
    const input = el.querySelector<HTMLInputElement>('input')!;
    const initialFocusHandler = sinon.spy((event: InputEvent) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('bui-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });

  it('should close when pressing Escape', async () => {
    const el = await fixture<Drawer>(html` <bui-drawer open></bui-drawer> `);
    const hideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);

    await sendKeys({ press: 'Escape' });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });
});
