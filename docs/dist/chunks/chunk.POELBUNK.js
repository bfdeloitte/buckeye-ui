import {
  SlAnimation
} from "./chunk.Z46DE5LW.js";

// src/react/animation/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var animation_default = createComponent({
  tagName: "bui-animation",
  elementClass: SlAnimation,
  react: React,
  events: {
    onBuiCancel: "bui-cancel",
    onBuiFinish: "bui-finish",
    onBuiStart: "bui-start"
  }
});

export {
  animation_default
};
