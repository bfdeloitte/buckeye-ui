import { expect, fixture, html } from '@open-wc/testing';
import type RadioButton from './radio-button';
import type RadioGroup from '../radio-group/radio-group';

describe('<bui-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<RadioGroup>(html`
      <bui-radio-group value="1">
        <bui-radio-button id="radio-1" value="1"></bui-radio-button>
        <bui-radio-button id="radio-2" value="2" disabled></bui-radio-button>
      </bui-radio-group>
    `);
    const radio1 = radioGroup.querySelector<RadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<RadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
