import {
  Alert
} from "./chunk.E3ZIP6M7.js";

// src/react/alert/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var alert_default = createComponent({
  tagName: "bui-alert",
  elementClass: Alert,
  react: React,
  events: {
    onBuiShow: "bui-show",
    onBuiAfterShow: "bui-after-show",
    onBuiHide: "bui-hide",
    onBuiAfterHide: "bui-after-hide"
  }
});

export {
  alert_default
};
