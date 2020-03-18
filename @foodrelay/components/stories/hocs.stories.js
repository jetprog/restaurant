import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
import moment from "moment";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Addons
import { text, boolean, number, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import withDeadline from "../src/hocs/withDeadline";

///////////////////
// HOCS STORIES
///////////////////

const DeadlineInfos = props => (
  <div>
    {props.deadlines.editing && (
      <div>
        editing deadline moment:{" "}
        {props.deadlines.editing.moment &&
          moment(props.deadlines.editing.moment).format()}
        <br />
        editing deadline passed:{" "}
        {props.deadlines.editing.passed ? "true" : "false"}
        <br />
        editing deadline remaining: {props.deadlines.editing.remaining}
      </div>
    )}
    ordering deadline moment:
    {props.deadlines.ordering &&
      props.deadlines.ordering.moment &&
      moment(props.deadlines.ordering.moment).format()}
    <br />
    ordering deadline passed:{" "}
    {props.deadlines.ordering.passed ? "true" : "false"}
    <br />
    ordering deadline remaining:{props.deadlines.ordering.remaining}
  </div>
);

const DeadlineInfosWithDeadlines = withDeadline(DeadlineInfos);

storiesOf("Higher order components", module).add("withDeadline", () => (
  <DeadlineInfosWithDeadlines
    prestation={object("prestation", { deadline: "10:00:00" })}
    current_date={text("current_date", "2019-07-06")}
  />
));
