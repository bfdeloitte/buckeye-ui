import {
  TabGroup
} from "./chunk.SDHT625Q.js";

// src/react/tab-group/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var tab_group_default = createComponent({
  tagName: "bui-tab-group",
  elementClass: TabGroup,
  react: React,
  events: {
    onBuiTabShow: "bui-tab-show",
    onBuiTabHide: "bui-tab-hide"
  }
});

export {
  tab_group_default
};
