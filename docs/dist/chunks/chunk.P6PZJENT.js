import {
  Checkbox
} from "./chunk.AQ2MA4AI.js";

// src/react/checkbox/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var checkbox_default = createComponent({
  tagName: "bui-checkbox",
  elementClass: Checkbox,
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
  checkbox_default
};
