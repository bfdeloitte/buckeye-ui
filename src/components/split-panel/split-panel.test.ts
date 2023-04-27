import { expect, fixture, html } from '@open-wc/testing';

describe('<bui-split-panel>', () => {
  it('should render a component', async () => {
    const splitPanel = await fixture(html` <bui-split-panel></bui-split-panel> `);

    expect(splitPanel).to.exist;
  });

  it('should be accessible', async () => {
    const splitPanel = await fixture(html`<bui-split-panel>
      <div slot="start">Start</div>
      <div slot="end">End</div>
    </bui-split-panel>`);

    await expect(splitPanel).to.be.accessible();
  });
});
