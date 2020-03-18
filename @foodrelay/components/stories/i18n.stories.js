import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import LocaleSwitch, {
  locale_switch_checklist
} from "../src/components/LocaleSwitch";

////////////////////
// i18n STORIES
///////////////////

storiesOf("i18n", module).add(
  generateTitleWithProgress(locale_switch_checklist, "Locale Switch"),
  () => <LocaleSwitch currentLocale={text("Current Locale", "en")} />
);
