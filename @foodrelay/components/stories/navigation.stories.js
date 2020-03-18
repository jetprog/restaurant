import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
import { NavLink } from "react-router-dom";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import PersonaDropDown, {
  persona_drop_down_checklist
} from "../src/components/PersonaDropDown";
import PersonaBar, {
  persona_bar_checklist
} from "../src/components/PersonaBar";
import TopBar, { top_bar_checklist } from "../src/components/TopBar";
import ExtraMenu, { extra_menu_checklist } from "../src/components/ExtraMenu";
import DropDownMenu, {
  drop_down_menu_checklist
} from "../src/components/DropDownMenu";
import Button from "../src/components/Button";
// mock data
import {
  menu,
  plate,
  order,
  user,
  business,
  purchases,
  orderList,
  additional_items,
  attendees,
  generateDate
} from "./mockData";

////////////////////
// NAVIGATION STORIES
///////////////////

storiesOf("Navigation", module)
  .add(
    generateTitleWithProgress(persona_bar_checklist, "Persona bar / user"),
    () => (
      <PersonaBar
        user={user}
        buttons={<Button label="some button" />}
        onPictureClick={() => console.log("picture click")}
      />
    )
  )
  .add(
    generateTitleWithProgress(persona_bar_checklist, "Persona bar / business"),
    () => (
      <PersonaBar
        business={business}
        buttons={<Button label="some button" />}
      />
    )
  )
  .add(
    generateTitleWithProgress(persona_drop_down_checklist, "Persona dropdown"),
    () => (
      <PersonaDropDown
        user={user}
        buttons={<Button label="some button" />}
        activePersona="user"
      />
    )
  )
  .add(generateTitleWithProgress(top_bar_checklist, "Top bar"), () => (
    <TopBar
      user={user}
      business={business}
      buttons={<Button label="some button" />}
      activePersona={text("activePersona", "user")}
      navButtons={
        <div>
          <NavLink exact to="/calendar/">
            Calendar
          </NavLink>
          <NavLink exact to="/employees/">
            Employees
          </NavLink>
        </div>
      }
      userSecondaryButtons={
        <div>
          <div className="user">
            <strong>{user.email}</strong>
            <div className="menu">
              <NavLink exact to="/get_food/">
                <FontAwesomeIcon icon="utensils" />
                Get food
              </NavLink>
              <NavLink exact to="/account/settings/">
                <FontAwesomeIcon icon="user" />
                Account Overview
              </NavLink>
              <NavLink exact exact to="/account/settings/billing/">
                <FontAwesomeIcon icon="credit-card" />
                Billing Settings
              </NavLink>
              <NavLink exact to="/account/settings/payment_history/">
                <FontAwesomeIcon icon="receipt" />
                Payment History
              </NavLink>
            </div>
          </div>
          <div className="business">
            <strong>{business.name}</strong>
            <div className="menu">
              <NavLink exact to="/calendar/">
                <FontAwesomeIcon icon="calendar-alt" />
                Calendar
              </NavLink>
              <NavLink exact to="/employees/">
                <FontAwesomeIcon icon="users" />
                Employees
              </NavLink>
              <NavLink exact exact to="/account/settings/billing/">
                <FontAwesomeIcon icon="credit-card" />
                Billing Settings
              </NavLink>
              <NavLink exact to="/account/settings/payment_history/">
                <FontAwesomeIcon icon="file-invoice-dollar" />
                Payment History
              </NavLink>
            </div>
          </div>
          <hr />
          <div className="menu">
            <Button label="Log out" icon="sign-out" />
          </div>
        </div>
      }
    />
  ))
  .add(generateTitleWithProgress(extra_menu_checklist, "Extra menu"), () => (
    <ExtraMenu buttons={<Button label="Click me" />} />
  ))
  .add(
    generateTitleWithProgress(drop_down_menu_checklist, "Dropdown menu"),
    () => (
      <DropDownMenu
        shown={boolean("shown", true)}
        padding={boolean("padding", false)}
        buttons={<Button label="Click me" />}
        position={text("position", "left")}
      />
    )
  );
