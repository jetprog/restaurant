import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import Button, { button_checklist } from "../src/components/Button";
import ButtonLink, {
  button_link_checklist
} from "../src/components/ButtonLink";
import TextButton, {
  text_button_checklist
} from "../src/components/TextButton";
import SubmitButton, {
  submit_button_checklist
} from "../src/components/SubmitButton";
import IconButton, {
  icon_button_checklist
} from "../src/components/IconButton";

///////////////////
// BUTTONS STORIES
///////////////////

storiesOf("Buttons", module)
  .add(generateTitleWithProgress(button_checklist, "Button"), () => (
    <Button
      disabled={boolean("Disabled", false)}
      label={text("Label", "some button")}
      icon={text("Icon", "times")}
      color={text("Color", "egg-yolk")}
    />
  ))
  .add(generateTitleWithProgress(button_link_checklist, "Button link"), () => (
    <ButtonLink
      disabled={boolean("Disabled", false)}
      label={text("Label", "some button")}
      icon={text("Icon", "times")}
      color={text("Color", "egg-yolk")}
      to="/"
    />
  ))
  .add(generateTitleWithProgress(text_button_checklist, "Text Button"), () => (
    <TextButton
      disabled={boolean("Disabled", false)}
      label={text("Label", "Hello Button")}
      icon={text("Icon", "times")}
      color={text("Color", "egg-yolk")}
      className={text("class name", "class")}
    />
  ))
  .add(
    generateTitleWithProgress(submit_button_checklist, "Submit Button"),
    () => (
      <SubmitButton
        disabled={boolean("Disabled", false)}
        label={text("Label", "Hello Button")}
        icon={text("Icon", "times")}
        color={text("Color", "egg-yolk")}
      />
    )
  )
  .add(generateTitleWithProgress(icon_button_checklist, "Icon Button"), () => (
    <IconButton
      disabled={boolean("Disabled", false)}
      icon={text("Icon", "times")}
      color={text("Color", "egg-yolk")}
    />
  ));
