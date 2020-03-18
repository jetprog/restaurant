import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const SpicyIndicator = ({ spicyness }) => {
  let tooltip = "";
  let levelText = (
    <FormattedMessage id="spicy.not_spicy" defaultMessage={`Not spicy`} />
  );
  let icons = "";

  if (spicyness) {
    if (spicyness == 1) {
      levelText = (
        <FormattedMessage
          id="spicy.slightly_spicy"
          defaultMessage={`Slightly spicy`}
        />
      );
      icons = <FontAwesomeIcon icon="pepper-hot" />;
    } else if (spicyness == 2) {
      levelText = (
        <FormattedMessage
          id="spicy.moderately_spicy"
          defaultMessage={`Moderately spicy`}
        />
      );
      icons = (
        <React.Fragment>
          <FontAwesomeIcon icon="pepper-hot" />
          <FontAwesomeIcon icon="pepper-hot" />
        </React.Fragment>
      );
    } else if (spicyness == 3) {
      levelText = (
        <FormattedMessage id="spicy.very_spicy" defaultMessage={`Very spicy`} />
      );
      icons = (
        <React.Fragment>
          <FontAwesomeIcon icon="pepper-hot" />
          <FontAwesomeIcon icon="pepper-hot" />
          <FontAwesomeIcon icon="pepper-hot" />
        </React.Fragment>
      );
    }

    return (
      <Indicator className="spicy-indicator" title={levelText}>
        {spicyness > 0 && <Icons>{icons}</Icons>}
        {levelText}
      </Indicator>
    );
  } else {
    return <Indicator />;
  }
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
  transition: 0.3s;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.small.fontSize};
  color: ${Colors.primary.squash.default};
  padding: 0 ${Spacing.sm};
  margin-right: ${Spacing.sm};
`;

const Icons = styled("div")`
  margin-right: ${Spacing.sm};
  display: inline-block;

  svg {
    font-size: 18px;
  }
`;

export default injectIntl(SpicyIndicator);
