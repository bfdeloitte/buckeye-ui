import { expect, fixture, html } from '@open-wc/testing';

describe('<bui-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <bui-mutation-observer></bui-mutation-observer> `);

    expect(el).to.exist;
  });
});
