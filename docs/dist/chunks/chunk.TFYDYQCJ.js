import {
  Button
} from "./chunk.GMEMMQTZ.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var button_default = createComponent({
  tagName: "bui-button",
  elementClass: Button,
  react: React,
  events: {
    onBuiBlur: "bui-blur",
    onBuiFocus: "bui-focus",
    onBuiInvalid: "bui-invalid"
  }
});

export {
  button_default
};
