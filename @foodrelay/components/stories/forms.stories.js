import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number, select, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import LinkField, { link_field_checklist } from "../src/components/LinkField";
// mock data
import {
  order,
  purchases,
  additional_items,
  user,
  stripe_customer
} from "./mockData";

////////////////////
// ORDER STORIES
///////////////////

storiesOf("Forms", module).add(
  generateTitleWithProgress(link_field_checklist, "Link field"),
  () => (
    <LinkField
      linkUrl="https://really-long-url.com/really-long-stuff"
      label="label here"
      showCopyLink={boolean("show copy link", true)}
      small={boolean("small", false)}
    />
  )
);
