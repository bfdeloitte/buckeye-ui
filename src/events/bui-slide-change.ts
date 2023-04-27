import type CarouselItem from '../components/carousel-item/carousel-item';

type SlSlideChange = CustomEvent<{ index: number; slide: CarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-slide-change': SlSlideChange;
  }
}

export default SlSlideChange;
