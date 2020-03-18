import React from "react";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage } from "react-intl";
import { getTranslation } from "../../i18n/utils.js";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const RoleIndicator = ({ role, intl }) => {
  let style = Employee;

  if (role) {
    if (role.role.value == "Admin") {
      style = Admin;
    } else if (role.role.value == "TeamLead") {
      style = TeamLead;
    } else if (role.role.value == "Guest") {
      style = Guest;
    } else if (role.role.value == "Archived") {
      style = Archived;
    }

    let translated_role = getTranslation(role.role, intl.locale);

    return (
      <Indicator className={style}>
        {translated_role && translated_role.name}
      </Indicator>
    );
  } else {
    return <div />;
  }
};

// Styles
const Indicator = styled("div")`
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  line-height: ${Typography.small.fontSize};
  font-weight: bold;
  text-align: center;
  padding: 4px 10px;
  border-radius: ${BorderRadius.lg};
  overflow: hidden;
  display: inline-block;
`;

// State Styles
const Admin = css`
  background: ${Colors.primary.lettuce.default};
  color: ${Colors.secondary.spinach.default};
`;
const TeamLead = css`
  background: ${Colors.primary.eggYolk.default};
  color: ${Colors.secondary.eggplant.default};
`;
const Employee = css`
  background: ${Colors.secondary.mushrooms.default};
  color: ${Colors.secondary.eggplant.default};
`;
const Guest = css`
  background: ${Colors.secondary.eggshell.default};
  color: ${Colors.secondary.eggplant.default};
`;
const Archived = css`
  background: ${Colors.utility.lightGrey.default};
  color: ${Colors.utility.black.default};
`;

export default injectIntl(RoleIndicator);
