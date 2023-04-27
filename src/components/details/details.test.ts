// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type Details from './details';
import type HideEvent from '../../events/bui-hide';
import type SlShowEvent from '../../events/bui-show';

describe('<bui-details>', () => {
  describe('accessibility', () => {
    it('should be accessible when closed', async () => {
      const details = await fixture<Details>(html`<bui-details summary="Test"> Test text </bui-details>`);

      await expect(details).to.be.accessible();
    });

    it('should be accessible when open', async () => {
      const details = await fixture<Details>(html`<bui-details open summary="Test">Test text</bui-details>`);

      await expect(details).to.be.accessible();
    });
  });

  it('should be visible with the open attribute', async () => {
    const el = await fixture<Details>(html`
      <bui-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<Details>(html`
      <bui-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit bui-show and bui-after-show when calling show()', async () => {
    const el = await fixture<Details>(html`
      <bui-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit bui-hide and bui-after-hide when calling hide()', async () => {
    const el = await fixture<Details>(html`
      <bui-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit bui-show and bui-after-show when setting open = true', async () => {
    const el = await fixture<Details>(html`
      <bui-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('bui-show', showHandler);
    el.addEventListener('bui-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit bui-hide and bui-after-hide when setting open = false', async () => {
    const el = await fixture<Details>(html`
      <bui-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('bui-hide', hideHandler);
    el.addEventListener('bui-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should not open when preventing bui-show', async () => {
    const el = await fixture<Details>(html`
      <bui-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const showHandler = sinon.spy((event: SlShowEvent) => event.preventDefault());

    el.addEventListener('bui-show', showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when preventing bui-hide', async () => {
    const el = await fixture<Details>(html`
      <bui-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </bui-details>
    `);
    const hideHandler = sinon.spy((event: HideEvent) => event.preventDefault());

    el.addEventListener('bui-hide', hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<Details>(html`
      <div>
        <bui-details>
          <div style="height: 200px;"></div>
        </bui-details>
        <bui-details>
          <div style="height: 400px;"></div>
        </bui-details>
      </div>
    `);
    const first = el.querySelectorAll('bui-details')[0];
    const second = el.querySelectorAll('bui-details')[1];
    const firstBody = first.shadowRoot!.querySelector('.details__body')!;
    const secondBody = second.shadowRoot!.querySelector('.details__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(232); // 200 + 16px + 16px (vertical padding)
    expect(secondBody.clientHeight).to.equal(432); // 400 + 16px + 16px (vertical padding)
  });
});
