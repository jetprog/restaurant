import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage } from "react-intl";
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

const RebateIndicator = ({ order, small = false, intl }) => {
  let is_free = false;
  let rebate = 0;
  let has_rebate = false;

  const freeLabel = intl.formatMessage({
    id: "rebateIndicator.free"
  });
  const offLabel = intl.formatMessage({
    id: "rebateIndicator.off"
  });
  const fullPriceLabel = intl.formatMessage({
    id: "rebateIndicator.full_price"
  });

  is_free = order.is_fully_paid;
  rebate = order.amount_paid_by_business;
  has_rebate = is_free || rebate > 0;
  let label = "";
  if (has_rebate) {
    if (is_free) {
      label = freeLabel;
    } else {
      label = rebate / 100 + "$ " + offLabel;
    }
  } else {
    label = fullPriceLabel;
  }

  let color = "";
  if (rebate > 0 || is_free) {
    color = "lettuce";
  } else {
    color = "light-grey";
  }

  return (
    <Tag
      className={"rebate-indicator"}
      title={label}
      color={color}
      label={label}
      style={small && "small"}
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
  text-align: center;
  cursor: default;
  transition: ${Animation.defaultSpeed};
  font-family: ${Typography.body.fontFamily};
  font-size: ${props =>
    props.small ? Typography.small.fontSize : Typography.body.fontSize};
  padding: 0 ${Spacing.sm};
  margin-right: ${Spacing.sm};
`;

const Small = css``;

const Rebate = css`
  background: ${Colors.primary.lettuce.lighter};
  color: ${Colors.secondary.spinach.default};
  opacity: 1;
`;

const Free = css`
  background: ${Colors.primary.lettuce.lighter};
  color: ${Colors.secondary.spinach.default};
  opacity: 1;
`;

const FullPrice = css`
  background: ${Colors.utility.lightGrey.default};
  color: ${Colors.utility.black.default};
  opacity: 1;
`;

export default injectIntl(RebateIndicator);
