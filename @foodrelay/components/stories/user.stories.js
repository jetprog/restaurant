import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import UserCard, { user_card_checklist } from "../src/components/UserCard";
import Photo, { photo_checklist } from "../src/components/Photo";
import Roles, { roles_checklist } from "../src/components/Roles";
import ProfilePopup, {
  profile_popup_checklist
} from "../src/components/ProfilePopup";
// mock data
import { user, businesses, user_business_roles } from "./mockData";

////////////////////
// USER STORIES
///////////////////

storiesOf("User", module)
  .add(generateTitleWithProgress(photo_checklist, "Photo"), () => (
    <Photo
      picture={text("Picture", user.picture)}
      size={text("Size", "large")}
      shape={text("Shape", "circle")}
      onClick={() => console.log("test")}
    />
  ))
  .add(generateTitleWithProgress(user_card_checklist, "User Card"), () => (
    <UserCard
      user={user}
      showJoinedDate={boolean("show joined date", true)}
      showRole={boolean("show role", true)}
      current_business={businesses[1]}
    />
  ))
  .add(generateTitleWithProgress(user_card_checklist, "Profile popup"), () => (
    <ProfilePopup user={user} current_business={businesses[1]} showRole />
  ))
  .add(generateTitleWithProgress(roles_checklist, "User Roles"), () => (
    <Roles
      roles={[undefined]}
      edit={() => console.log("edit role")}
      create={() => console.log("create role")}
      business_admin={200}
    />
  ));
