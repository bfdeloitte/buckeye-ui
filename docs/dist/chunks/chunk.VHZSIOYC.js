import {
  Dialog
} from "./chunk.I37B6IH5.js";

// src/react/dialog/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var dialog_default = createComponent({
  tagName: "bui-dialog",
  elementClass: Dialog,
  react: React,
  events: {
    onBuiShow: "bui-show",
    onBuiAfterShow: "bui-after-show",
    onBuiHide: "bui-hide",
    onBuiAfterHide: "bui-after-hide",
    onBuiInitialFocus: "bui-initial-focus",
    onBuiRequestClose: "bui-request-close"
  }
});

export {
  dialog_default
};
