import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { MemoryRouter } from "react-router";
// i18n
import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import frLocaleData from "react-intl/locale-data/fr";
import en from "../src/i18n/en";
import fr from "../src/i18n/fr";
// Icons
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);
const messages = {
  en: en,
  fr: fr
};
const getMessages = locale => messages[locale];
setIntlConfig({
  locales: ["en", "fr"],
  defaultLocale: "en",
  getMessages
});

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(withIntl);
addDecorator(withA11y);
addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
function loadStories() {
  require("../stories/hocs.stories.js");
  require("../stories/buttons.stories.js");
  require("../stories/menus.stories.js");
  require("../stories/plates.stories.js");
  require("../stories/calendar.stories.js");
  require("../stories/data.stories.js");
  require("../stories/user.stories.js");
  require("../stories/layout.stories.js");
  require("../stories/navigation.stories.js");
  require("../stories/order.stories.js");
  require("../stories/indicators.stories.js");
  require("../stories/forms.stories.js");
  require("../stories/i18n.stories.js");
}

configure(loadStories, module);
