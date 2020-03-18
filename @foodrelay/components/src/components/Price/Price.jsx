import React from "react";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, FormattedMessage } from "react-intl";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const Price = ({ price, paidByBusiness, free, intl }) => {
  let displayPrice = price;

  if (paidByBusiness && paidByBusiness > 0) {
    displayPrice = price - paidByBusiness;
  }

  if (free) {
    displayPrice = 0;
  }

  const freeLabel = intl.formatMessage({
    id: "rebateIndicator.free"
  });

  return (
    <PriceContainer className="price">
      {displayPrice <= 0 ? (
        <FreePrice>{freeLabel}</FreePrice>
      ) : (
        <FullPrice>{displayPrice / 100}$</FullPrice>
      )}
      {paidByBusiness > 0 && !free && (
        <Strikethrough>{price / 100}$</Strikethrough>
      )}
    </PriceContainer>
  );
};

const PriceContainer = styled("div")`
  display: flex;
  flex-direction: row;
  padding: ${Spacing.md} 0 ${Spacing.sm} 0;
  margin-left: auto;
  justify-content: flex-end;
  font-family: ${Typography.body.fontFamily};
`;

const Strikethrough = styled("div")`
  position: relative;
  margin-left: ${Spacing.md};
  line-height: 22px;
  font-size: 16px;
  color: ${Colors.utility.grey.default};

  &:after {
    position: absolute;
    top: 10px;
    height: 2px;
    left: -3px;
    right: -3px;
    width: calc(100% + 6px);
    background: ${Colors.utility.grey.default};
    display: block;
    content: "";
  }
`;

const FullPrice = styled("div")`
  font-weight: bold;
  font-size: 20px;
  position: relative;
  top: -2px;
`;

const FreePrice = styled("div")`
  font-weight: bold;
  font-size: 16px;
  font-size: 20px;
`;

export default injectIntl(Price);
