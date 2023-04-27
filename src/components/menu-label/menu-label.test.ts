import { expect, fixture, html } from '@open-wc/testing';
import type MenuLabel from './menu-label';

describe('<bui-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<MenuLabel>(html` <bui-menu-label>Test</bui-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
