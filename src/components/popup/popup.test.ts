import { expect, fixture, html } from '@open-wc/testing';

describe('<bui-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <bui-popup></bui-popup> `);

    expect(el).to.exist;
  });
});
