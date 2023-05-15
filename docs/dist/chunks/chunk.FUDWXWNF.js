import {
  Range
} from "./chunk.CHOBWQL7.js";

// src/react/range/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var range_default = createComponent({
  tagName: "bui-range",
  elementClass: Range,
  react: React,
  events: {
    onBuiBlur: "bui-blur",
    onBuiChange: "bui-change",
    onBuiFocus: "bui-focus",
    onBuiInput: "bui-input",
    onBuiInvalid: "bui-invalid"
  }
});

export {
  range_default
};
