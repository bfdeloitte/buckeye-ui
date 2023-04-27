import { expect, fixture, html } from '@open-wc/testing';

describe('<bui-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <bui-carousel-item></bui-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture(html` <div role="list"><bui-carousel-item></bui-carousel-item></div> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});
