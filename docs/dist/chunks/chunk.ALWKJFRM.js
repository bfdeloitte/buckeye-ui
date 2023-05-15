import {
  ColorPicker
} from "./chunk.744NGSSL.js";

// src/react/color-picker/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var color_picker_default = createComponent({
  tagName: "bui-color-picker",
  elementClass: ColorPicker,
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
  color_picker_default
};
