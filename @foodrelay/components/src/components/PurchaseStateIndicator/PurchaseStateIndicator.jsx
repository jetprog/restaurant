import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const PurchaseStateIndicator = ({ current_state, not_eating, warning }) => {
  let css_class = "";
  let icon = null;
  let tooltip = "";
  if (current_state === "cart") {
    css_class = InCart;
    icon = "shopping-cart";
    tooltip = "in cart";
  } else if (not_eating) {
    css_class = Delivered;
    icon = "minus";
    tooltip = "not eating";
  } else if (current_state === "paid" && !not_eating) {
    css_class = Confirmed;
    icon = "check";
    tooltip = "paid";
  } else if (current_state === "out for delivery") {
    css_class = Delivered;
    icon = "truck";
    tooltip = "out for delivery";
  } else if (warning) {
    css_class = InCart;
    icon = "exclamation";
  }
  return (
    <Indicator className={css_class} title={tooltip}>
      {icon && <FontAwesomeIcon icon={icon} />}
    </Indicator>
  );
};

// Styles

const Indicator = styled("div")`
  height: 20px;
  min-height: 20px;
  width: 20px;
  min-width: 20px;
  line-height: 20px;
  border-radius: 50%;
  overflow: hidden;
  background: ${Colors.utility.lightGrey.default};
  text-align: center;
  cursor: default;
  transition: 0.3s;
`;

const InCart = css`
  background: #fff;
  color: ${Colors.utility.black.default};
  opacity: 1;
`;

const Confirmed = css`
  background: #fff;
  color: ${Colors.utility.black.default};
  opacity: 1;
`;

const Delivered = css`
  background: #fff;
  color: ${Colors.utility.black.default};
  opacity: 1;
`;

export default PurchaseStateIndicator;
