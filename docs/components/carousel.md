# Carousel

[component-header:bui-carousel]

```html preview
<bui-carousel pagination navigation mouse-dragging loop>
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Carousel pagination mouse-dragging>
      <CarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </CarouselItem>
    </Carousel>
  </>
);
```

## Examples

### Pagination

Use the `pagination` attribute to show the total number of slides and the current slide as a set of interactive dots.

```html preview
<bui-carousel pagination>
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Carousel pagination>
    <CarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </CarouselItem>
  </Carousel>
);
```

### Navigation

Use the `navigation` attribute to show previous and next buttons.

```html preview
<bui-carousel navigation>
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Carousel navigation>
    <CarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </CarouselItem>
  </Carousel>
);
```

### Looping

By default, the carousel will not advanced beyond the first and last slides. You can change this behavior and force the carousel to "wrap" with the `loop` attribute.

```html preview
<bui-carousel loop navigation pagination>
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Carousel loop navigation pagination>
    <CarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </CarouselItem>
  </Carousel>
);
```

### Autoplay

The carousel will automatically advance when the `autoplay` attribute is used. To change how long a slide is shown before advancing, set `autoplay-interval` to the desired number of milliseconds. For best results, use the `loop` attribute when autoplay is enabled. Note that autoplay will pause while the user interacts with the carousel.

```html preview
<bui-carousel autoplay loop pagination>
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Carousel autoplay loop pagination>
    <CarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </CarouselItem>
    <CarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </CarouselItem>
  </Carousel>
);
```

### Mouse Dragging

The carousel uses [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) to position slides at various snap positions. This allows users to scroll through the slides very naturally, especially on touch devices. Unfortunately, desktop users won't be able to click and drag with a mouse, which can feel unnatural. Adding the `mouse-dragging` attribute can help with this.

This example is best demonstrated using a mouse. Try clicking and dragging the slide to move it. Then toggle the switch and try again.

```html preview
<div class="mouse-dragging">
  <bui-carousel pagination>
    <bui-carousel-item>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </bui-carousel-item>
    <bui-carousel-item>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </bui-carousel-item>
    <bui-carousel-item>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </bui-carousel-item>
    <bui-carousel-item>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </bui-carousel-item>
    <bui-carousel-item>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </bui-carousel-item>
  </bui-carousel>

  <bui-divider></bui-divider>

  <bui-switch>Enable mouse dragging</bui-switch>
</div>

<script>
  const container = document.querySelector('.mouse-dragging');
  const carousel = container.querySelector('bui-carousel');
  const toggle = container.querySelector('bui-switch');

  toggle.addEventListener('bui-change', () => {
    carousel.toggleAttribute('mouse-dragging', toggle.checked);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { Carousel, CarouselItem, Divider, SlSwitch } from 'buckeye-ui/dist/react';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Carousel navigation mouseDragging={isEnabled}>
        <CarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </CarouselItem>
      </Carousel>

      <Divider></Divider>

      <SlSwitch checked={isEnabled} onInput={() => setIsEnabled(!isEnabled)}>
        Enable mouse dragging
      </SlSwitch>
    </>
  );
};
```

### Multiple Slides Per View

The `slides-per-view` attribute makes it possible to display multiple slides at a time. You can also use the `slides-per-move` attribute to advance more than once slide at a time, if desired.

```html preview
<bui-carousel navigation pagination slides-per-page="2" slides-per-move="2">
  <bui-carousel-item style="background: var(--bui-color-red-200);">Slide 1</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-orange-200);">Slide 2</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-yellow-200);">Slide 3</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-green-200);">Slide 4</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-blue-200);">Slide 5</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-violet-200);">Slide 6</bui-carousel-item>
</bui-carousel>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Carousel navigation pagination slidesPerPage={2} slidesPerMove={2}>
    <CarouselItem style={{ background: 'var(--bui-color-red-200)' }}>Slide 1</CarouselItem>
    <CarouselItem style={{ background: 'var(--bui-color-orange-200)' }}>Slide 2</CarouselItem>
    <CarouselItem style={{ background: 'var(--bui-color-yellow-200)' }}>Slide 3</CarouselItem>
    <CarouselItem style={{ background: 'var(--bui-color-green-200)' }}>Slide 4</CarouselItem>
    <CarouselItem style={{ background: 'var(--bui-color-blue-200)' }}>Slide 5</CarouselItem>
    <CarouselItem style={{ background: 'var(--bui-color-violet-200)' }}>Slide 6</CarouselItem>
  </Carousel>
);
```

### Adding and Removing Slides

The content of the carousel can be changed by adding or removing carousel items. The carousel will update itself automatically.

```html preview
<bui-carousel class="dynamic-carousel" pagination navigation>
  <bui-carousel-item style="background: var(--bui-color-red-200)">Slide 1</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-orange-200)">Slide 2</bui-carousel-item>
  <bui-carousel-item style="background: var(--bui-color-yellow-200)">Slide 3</bui-carousel-item>
</bui-carousel>

<div class="carousel-options">
  <bui-button id="dynamic-add">Add slide</bui-button>
  <bui-button id="dynamic-remove">Remove slide</bui-button>
</div>

<style>
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    gap: var(--bui-spacing-x-small);
    margin-top: var(--bui-spacing-large);
  }

  .dynamic-carousel bui-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--bui-font-size-2x-large);
  }
</style>

<script>
  (() => {
    const dynamicCarousel = document.querySelector('.dynamic-carousel');
    const dynamicAdd = document.querySelector('#dynamic-add');
    const dynamicRemove = document.querySelector('#dynamic-remove');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    let colorIndex = 2;

    const addSlide = () => {
      const slide = document.createElement('bui-carousel-item');
      const color = colors[++colorIndex % colors.length];
      slide.innerText = `Slide ${dynamicCarousel.children.length + 1}`;
      slide.style.setProperty('background', `var(--bui-color-${color}-200)`);
      dynamicCarousel.appendChild(slide);
      dynamicRemove.disabled = false;
    };

    const removeSlide = () => {
      const slide = dynamicCarousel.children[dynamicCarousel.children.length - 1];
      const numSlides = dynamicCarousel.querySelectorAll('bui-carousel-item').length;

      if (numSlides > 1) {
        slide.remove();
        colorIndex--;
      }

      dynamicRemove.disabled = numSlides - 1 <= 1;
    };

    dynamicAdd.addEventListener('click', addSlide);
    dynamicRemove.addEventListener('click', removeSlide);
  })();
</script>
```

```jsx react
import { useState } from 'react';
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const css = `
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    margin-top: var(--bui-spacing-large);
  }

  .dynamic-carousel bui-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--bui-font-size-2x-large);
  }
`;

const App = () => {
  const [slides, setSlides] = useState(['#204ed8', '#be133d', '#6e28d9']);
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

  const addSlide = () => {
    setSlides([...slides, getRandomColor()]);
  };

  const removeSlide = () => {
    setSlides(slides.slice(0, -1));
  };

  return (
    <>
      <Carousel className="dynamic-carousel" pagination navigation>
        {slides.map((color, i) => (
          <CarouselItem style={{ background: colors[i % colors.length }}>
            Slide {i}
          </CarouselItem>
        ))}
      </Carousel>

      <div className="carousel-options">
        <Button onClick={addSlide}>Add slide</Button>
        <Button onClick={removeSlide}>Remove slide</Button>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Vertical Scrolling

Setting the `orientation` attribute to `vertical` will render the carousel in a vertical layout. If the content of your slides vary in height, you will need to set amn explicit `height` or `max-height` on the carousel using CSS.

```html preview
<bui-carousel class="vertical" pagination orientation="vertical">
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
<style>
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
</style>
```

```jsx react
import { Carousel, CarouselItem } from 'buckeye-ui/dist/react';

const css = `
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
`;

const App = () => (
  <>
    <Carousel className="vertical" loop pagination orientation="vertical">
      <CarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </CarouselItem>
    </Carousel>
    <style>{css}</style>
  </>
);
```

### Aspect Ratio

Use the `--aspect-ratio` custom property to customize the size of the carousel's viewport.

```html preview
<bui-carousel class="aspect-ratio" navigation pagination style="--aspect-ratio: 3/2;">
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>

<bui-divider></bui-divider>

<bui-select label="Aspect ratio" name="aspect" value="3/2">
  <bui-option value="1/1">1/1</bui-option>
  <bui-option value="3/2">3/2</bui-option>
  <bui-option value="16/9">16/9</bui-option>
</bui-select>

<script>
  (() => {
    const carousel = document.querySelector('bui-carousel.aspect-ratio');
    const aspectRatio = document.querySelector('bui-select[name="aspect"]');

    aspectRatio.addEventListener('bui-change', () => {
      carousel.style.setProperty('--aspect-ratio', aspectRatio.value);
    });
  })();
</script>
```

```jsx react
import { useState } from 'react';
import { Carousel, CarouselItem, Divider, SlSelect, Option } from 'buckeye-ui/dist/react';

const App = () => {
  const [aspectRatio, setAspectRatio] = useState('3/2');

  return (
    <>
      <Carousel className="aspect-ratio" navigation pagination style={{ '--aspect-ratio': aspectRatio }}>
        <CarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </CarouselItem>
      </Carousel>

      <Divider />

      <SlSelect
        label="Aspect ratio"
        name="aspect"
        value={aspectRatio}
        onChange={event => setAspectRatio(event.target.value)}
      >
        <Option value="1 / 1">1 / 1</Option>
        <Option value="3 / 2">3 / 2</Option>
        <Option value="16 / 9">16 / 9</Option>
      </SlSelect>

      <style>{css}</style>
    </>
  );
};
```

### Scroll Hint

Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.

```html preview
<bui-carousel class="scroll-hint" pagination style="--scroll-hint: 10%;">
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>
```

```jsx react
import { useState } from 'react';
import { Carousel, CarouselItem, Divider, Range } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Carousel className="scroll-hint" pagination style={{ '--scroll-hint': '10%' }}>
      <CarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </CarouselItem>
    </Carousel>
  </>
);
```

### Gallery Example

The carousel has a robust API that makes it possible to extend and customize. This example syncs the active slide with a set of thumbnails, effectively creating a gallery-style carousel.

```html preview
<bui-carousel class="carousel-thumbnails" navigation loop>
  <bui-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </bui-carousel-item>
  <bui-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </bui-carousel-item>
</bui-carousel>

<div class="thumbnails">
  <div class="thumbnails__scroller">
    <img alt="Thumbnail by 1" class="thumbnails__image active" src="/assets/examples/carousel/mountains.jpg" />
    <img alt="Thumbnail by 2" class="thumbnails__image" src="/assets/examples/carousel/waterfall.jpg" />
    <img alt="Thumbnail by 3" class="thumbnails__image" src="/assets/examples/carousel/sunset.jpg" />
    <img alt="Thumbnail by 4" class="thumbnails__image" src="/assets/examples/carousel/field.jpg" />
    <img alt="Thumbnail by 5" class="thumbnails__image" src="/assets/examples/carousel/valley.jpg" />
  </div>
</div>

<style>
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--bui-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--bui-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
</style>

<script>
  {
    const carousel = document.querySelector('.carousel-thumbnails');
    const scroller = document.querySelector('.thumbnails__scroller');
    const thumbnails = document.querySelectorAll('.thumbnails__image');

    scroller.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('.thumbnails__image')) {
        const index = [...thumbnails].indexOf(target);
        carousel.goToSlide(index);
      }
    });

    carousel.addEventListener('bui-slide-change', e => {
      const slideIndex = e.detail.index;

      [...thumbnails].forEach((thumb, i) => {
        thumb.classList.toggle('active', i === slideIndex);
        if (i === slideIndex) {
          thumb.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    });
  }
</script>
```

```jsx react
import { useRef } from 'react';
import { Carousel, CarouselItem, Divider, Range } from 'buckeye-ui/dist/react';

const css = `
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--bui-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--bui-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
`;

const images = [
  {
    src: '/assets/examples/carousel/mountains.jpg',
    alt: 'The sun shines on the mountains and trees (by Adam Kool on Unsplash'
  },
  {
    src: '/assets/examples/carousel/waterfall.jpg',
    alt: 'A waterfall in the middle of a forest (by Thomas Kelly on Unsplash'
  },
  {
    src: '/assets/examples/carousel/sunset.jpg',
    alt: 'The sun is setting over a lavender field (by Leonard Cotte on Unsplash'
  },
  {
    src: '/assets/examples/carousel/field.jpg',
    alt: 'A field of grass with the sun setting in the background (by Sapan Patel on Unsplash'
  },
  {
    src: '/assets/examples/carousel/valley.jpg',
    alt: 'A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash'
  }
];

const App = () => {
  const carouselRef = useRef();
  const thumbnailsRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const thumbnails = Array.from(thumbnailsRef.current.querySelectorAll('.thumbnails__image'));

    thumbnails[currentSlide]..scrollIntoView({
      block: 'nearest'
    });
  }, [currentSlide]);

  const handleThumbnailClick = (index) => {
    carouselRef.current.goToSlide(index);
  }

  const handleSlideChange = (event) => {
    const slideIndex = e.detail.index;
    setCurrentSlide(slideIndex);
  }

  return (
    <>
      <Carousel className="carousel-thumbnails" navigation loop onSlSlideChange={handleSlideChange}>
        {images.map({ src, alt }) => (
          <CarouselItem>
            <img
              alt={alt}
              src={src}
            />
          </CarouselItem>
        )}
      </Carousel>

      <div class="thumbnails">
        <div class="thumbnails__scroller">
          {images.map({ src, alt }, i) => (
            <img
              alt={`Thumbnail by ${i + 1}`}
              className={`thumbnails__image ${i === currentSlide ? 'active' : ''}`}
              onCLick={() => handleThumbnailClick(i)}
              src={src}
            />
          )}
        </div>
      </div>
      <style>{css}</style>
    </>
  );
};
```

[component-metadata:bui-carousel]
