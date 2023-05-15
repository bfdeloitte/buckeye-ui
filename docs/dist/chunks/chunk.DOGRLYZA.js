import {
  Tooltip
} from "./chunk.35HWWIVV.js";

// src/react/tooltip/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var tooltip_default = createComponent({
  tagName: "bui-tooltip",
  elementClass: Tooltip,
  react: React,
  events: {
    onBuiShow: "bui-show",
    onBuiAfterShow: "bui-after-show",
    onBuiHide: "bui-hide",
    onBuiAfterHide: "bui-after-hide"
  }
});

export {
  tooltip_default
};
