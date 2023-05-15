import {
  RadioGroup
} from "./chunk.OIXXECE2.js";

// src/react/radio-group/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var radio_group_default = createComponent({
  tagName: "bui-radio-group",
  elementClass: RadioGroup,
  react: React,
  events: {
    onBuiChange: "bui-change",
    onBuiInput: "bui-input",
    onBuiInvalid: "bui-invalid"
  }
});

export {
  radio_group_default
};
