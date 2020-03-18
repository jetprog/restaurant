import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
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
import Tag from "../Tag";

const OrderStateIndicator = ({
  current_state,
  is_recurring,
  small = true,
  showColor = true,
  intl
}) => {
  let color = "";
  if (current_state && current_state.value === "Draft") {
    color = "light-grey";
  }
  if (current_state && current_state.value === "Confirmed") {
    color = "eat-your-greens";
  }
  if (current_state && current_state.value === "Cancelled") {
    color = "squash";
  }
  let label = null;
  if (current_state && current_state.value) {
    label = getTranslation(current_state, intl.locale);
  }

  return (
    <Tag
      label={label ? label.name : ""}
      style={small && "small"}
      icon={is_recurring && "sync-alt"}
      background={showColor}
      color={color}
    />
  );
};
// Styles

const Indicator = styled("div")`
  width: auto;
  display: inline-block;
  height: 20px;
  min-height: 20px;
  min-width: 40px;
  line-height: 20px;
  border-radius: 16px;
  overflow: hidden;
  background: ${props => props.showColor && Colors.utility.lightGrey.default};
  text-align: center;
  cursor: default;
  transition: ${Animation.defaultSpeed};
  font-family: ${Typography.body.fontFamily};
  font-size: ${props =>
    props.small ? Typography.small.fontSize : Typography.body.fontSize};
  padding: 0 ${Spacing.sm};
  margin-right: ${Spacing.sm};

  svg {
    margin-right: ${Spacing.sm};
  }
`;

const DraftColor = css`
  color: ${Colors.utility.black.default};
  opacity: 1;
`;
const DraftBack = css`
  background: ${Colors.utility.lightGrey.default};
  color: ${Colors.utility.black.default};
  opacity: 1;
`;

const ConfirmedColor = css`
  color: ${Colors.secondary.spinach.default};
  opacity: 1;
`;
const ConfirmedBack = css`
  background: ${Colors.secondary.eatYourGreens.default};
  color: ${Colors.secondary.spinach.default};
  opacity: 1;
`;

export default injectIntl(OrderStateIndicator);
