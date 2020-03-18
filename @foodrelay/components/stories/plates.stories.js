import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import PlateCard, { plate_card_checklist } from "../src/components/PlateCard";
import PlateCardDetail, {
  plate_card_detail_checklist
} from "../src/components/PlateCardDetail";
import Tags, { tags_checklist } from "../src/components/Tags";
// mock data
import { plate } from "./mockData";

////////////////////
// PLATES STORIES
///////////////////

storiesOf("Plates", module)
  .add(generateTitleWithProgress(plate_card_checklist, "Plate Card"), () => (
    <PlateCard
      item={plate}
      total={number("total", 1)}
      to={"/"}
      persona={text("persona", "manager")}
    />
  ))
  .add(
    generateTitleWithProgress(plate_card_detail_checklist, "Plate Card Detail"),
    () => <PlateCardDetail item={plate} />
  )
  .add(generateTitleWithProgress(tags_checklist, "Tags"), () => (
    <Tags restrictions={plate.restrictions} />
  ));
