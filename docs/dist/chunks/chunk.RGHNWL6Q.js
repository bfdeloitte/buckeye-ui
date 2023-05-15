import {
  SlSelect
} from "./chunk.H46ZMGSQ.js";

// src/react/select/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var select_default = createComponent({
  tagName: "bui-select",
  elementClass: SlSelect,
  react: React,
  events: {
    onBuiChange: "bui-change",
    onBuiClear: "bui-clear",
    onBuiInput: "bui-input",
    onBuiFocus: "bui-focus",
    onBuiBlur: "bui-blur",
    onBuiShow: "bui-show",
    onBuiAfterShow: "bui-after-show",
    onBuiHide: "bui-hide",
    onBuiAfterHide: "bui-after-hide",
    onBuiInvalid: "bui-invalid"
  }
});

export {
  select_default
};
