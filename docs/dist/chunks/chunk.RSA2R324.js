import {
  Input
} from "./chunk.TE66AYII.js";

// src/react/input/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var input_default = createComponent({
  tagName: "bui-input",
  elementClass: Input,
  react: React,
  events: {
    onBuiBlur: "bui-blur",
    onBuiChange: "bui-change",
    onBuiClear: "bui-clear",
    onBuiFocus: "bui-focus",
    onBuiInput: "bui-input",
    onBuiInvalid: "bui-invalid"
  }
});

export {
  input_default
};
