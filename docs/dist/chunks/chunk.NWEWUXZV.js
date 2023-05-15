import {
  Carousel
} from "./chunk.EVECY4DX.js";

// src/react/carousel/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var carousel_default = createComponent({
  tagName: "bui-carousel",
  elementClass: Carousel,
  react: React,
  events: {
    onBuiSlideChange: "bui-slide-change"
  }
});

export {
  carousel_default
};
