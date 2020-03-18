import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
import { NavLink } from "react-router-dom";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import Page, { page_checklist } from "../src/components/Page";
import PageContent, {
  page_content_checklist
} from "../src/components/PageContent";
import Title, { title_checklist } from "../src/components/Title";
import TopBar from "../src/components/TopBar";
import Footer, { footer_checklist } from "../src/components/Footer";
import Hint from "../src/components/Hint";

////////////////////
// LAYOUT STORIES
///////////////////

storiesOf("Layout", module)
  .add(generateTitleWithProgress(page_checklist, "Page"), () => (
    <Page>
      <TopBar />
      <PageContent>PageContent</PageContent>
      <Footer />
    </Page>
  ))
  .add(generateTitleWithProgress(footer_checklist, "Footer"), () => (
    <Footer
      buttons={
        <div>
          <NavLink to="/">Terms & Conditions</NavLink>
          <span>{"  •  "}</span>
          <NavLink to="/">Privacy Policy</NavLink>
          <span>{"  •  "}</span>
          <NavLink to="/">Changelog</NavLink>
          <span>{"  •  "}</span>
          <NavLink to="/">Help Center</NavLink>
        </div>
      }
    />
  ))
  .add(generateTitleWithProgress(title_checklist, "Title h1"), () => (
    <Title text="Title" />
  ))
  .add(generateTitleWithProgress(title_checklist, "Title h2"), () => (
    <Title
      text={
        <div>
          <span>Title</span>
          <Hint hint="this is a hint" />
        </div>
      }
      level="2"
    />
  ));
