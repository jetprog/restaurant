import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import MenuCard, { menu_card_checklist } from "../src/components/MenuCard";
// mock data
import { menu } from "./mockData";

////////////////////
// MENUS STORIES
///////////////////

storiesOf("Menus", module).add(
  generateTitleWithProgress(menu_card_checklist, "Menu Card"),
  () => <MenuCard item={menu} />
);
