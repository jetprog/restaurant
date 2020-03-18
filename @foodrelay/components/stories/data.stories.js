import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import Numbers, { numbers_checklist } from "../src/components/Numbers";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../src/rules";

///////////////////
// DATA STORIES
///////////////////

storiesOf("Data", module).add(
  generateTitleWithProgress(numbers_checklist, "Numbers"),
  () => (
    <Numbers
      light={boolean("light", false)}
      numbers={[
        {
          name: "confirmed",
          icon: "check",
          color: Colors.primary.lettuce.default,
          total: "123",
          display: "always",
          label: "confirmed"
        },
        {
          name: "extras",
          icon: "plus",
          color: Colors.secondary.mushrooms.default,
          total: 3,
          display: "always",
          label: "extras"
        },
        {
          name: "in-cart",
          icon: "shopping-cart",
          color: Colors.secondary.mushrooms.default,
          total: 3,
          display: "always",
          label: "cart"
        },
        {
          name: "hot",
          icon: "soup",
          color: Colors.primary.squash.default,
          total: 3,
          display: "always",
          label: "hot"
        },
        {
          name: "cold",
          icon: "salad",
          color: Colors.secondary.eatYourGreens.default,
          total: 3,
          display: "always",
          label: "cold"
        }
      ]}
    />
  )
);
