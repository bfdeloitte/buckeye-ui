import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import BuckeyeElement from '../../internal/buckeye-element';
import styles from './carousel-item.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 *
 * @since 2.0
 * @status experimental
 *
 * @slot - The carousel item's content..
 *
 * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
 *
 */
@customElement('bui-carousel-item')
export default class CarouselItem extends BuckeyeElement {
  static styles: CSSResultGroup = styles;

  static isCarouselItem(node: Node) {
    return node instanceof Element && node.getAttribute('aria-roledescription') === 'slide';
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bui-carousel-item': CarouselItem;
  }
}
