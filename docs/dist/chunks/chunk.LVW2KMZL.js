import {
  TreeItem
} from "./chunk.BTPV6REM.js";

// src/react/tree-item/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var tree_item_default = createComponent({
  tagName: "bui-tree-item",
  elementClass: TreeItem,
  react: React,
  events: {
    onBuiExpand: "bui-expand",
    onBuiAfterExpand: "bui-after-expand",
    onBuiCollapse: "bui-collapse",
    onBuiAfterCollapse: "bui-after-collapse",
    onBuiLazyChange: "bui-lazy-change",
    onBuiLazyLoad: "bui-lazy-load"
  }
});

export {
  tree_item_default
};
