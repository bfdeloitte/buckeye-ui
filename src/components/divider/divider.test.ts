import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type Divider from './divider';

describe('<bui-divider>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<Divider>(html` <bui-divider></bui-divider> `);
      await expect(el).to.be.accessible();
    });

    it('default properties', async () => {
      const el = await fixture<Divider>(html` <bui-divider></bui-divider> `);

      expect(el.vertical).to.be.false;
      expect(el.getAttribute('role')).to.equal('separator');
      expect(el.getAttribute('aria-orientation')).to.equal('horizontal');
    });
  });

  describe('vertical property change ', () => {
    it('aria-orientation is updated', async () => {
      const el = await fixture<Divider>(html` <bui-divider></bui-divider> `);

      el.vertical = true;
      await elementUpdated(el);

      expect(el.getAttribute('aria-orientation')).to.equal('vertical');
    });
  });
});
