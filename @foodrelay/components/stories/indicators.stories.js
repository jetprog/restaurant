import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number, select, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import RebateIndicator, {
  rebate_indicator_checklist
} from "../src/components/RebateIndicator";

import SpicyIndicator, {
  spicy_indicator_checklist
} from "../src/components/SpicyIndicator";
import PlateTypeIndicator, {
  plate_type_indicator_checklist
} from "../src/components/PlateTypeIndicator";
import PurchaseStateIndicator, {
  purchase_state_indicator_checklist
} from "../src/components/PurchaseStateIndicator";
import Hint, { hint_checklist } from "../src/components/Hint";
import Tag, { tag_checklist } from "../src/components/Tag";
import OrderStateIndicator, {
  order_state_indicator_checklist
} from "../src/components/OrderStateIndicator";
// mock data
import { order, plate, order_states } from "./mockData";

////////////////////
// INDICATORS STORIES
///////////////////
storiesOf("Indicators", module)
  .add(
    generateTitleWithProgress(rebate_indicator_checklist, "Rebate Indicator"),
    () => <RebateIndicator order={order} />
  )
  .add(
    generateTitleWithProgress(spicy_indicator_checklist, "Spicy Indicator"),
    () => <SpicyIndicator spicyness={2} />
  )
  .add(
    generateTitleWithProgress(
      plate_type_indicator_checklist,
      "Plate type Indicator"
    ),
    () => <PlateTypeIndicator plate={plate} />
  )
  .add(
    generateTitleWithProgress(
      purchase_state_indicator_checklist,
      "purchase state Indicator"
    ),
    () => <PurchaseStateIndicator current_state={"Cart"} />
  )
  .add(generateTitleWithProgress(hint_checklist, "Hint"), () => (
    <Hint
      hint={
        <p>
          Hints are little bits of extra contextual information about a specific
          feature and sometimes <a href="/">links to more help</a>
        </p>
      }
    />
  ))
  .add(generateTitleWithProgress(tag_checklist, "Tag"), () => (
    <Tag
      label={text("label", "Ghost")}
      color={text("color", "cherry")}
      style={text("style", "default")}
      icon={text("icon", "ghost")}
      background={boolean("background", true)}
    />
  ))
  .add(
    generateTitleWithProgress(
      order_state_indicator_checklist,
      "OrderStateIndicator"
    ),
    () => (
      <OrderStateIndicator
        current_state={object("current_state", order_states[1])}
        is_recurring={boolean("is_recurring", false)}
        small={boolean("small", false)}
        showColor={boolean("showColor", false)}
      />
    )
  );
