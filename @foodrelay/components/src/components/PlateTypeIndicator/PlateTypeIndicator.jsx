import React from "react";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPlateCategory, getPlateIcon } from "../../utils/indicators";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const PlateTypeIndicator = ({ plate, intl }) => {
  let plateType = null;
  let css_class = "";
  let icon = null;
  let tooltip = "";

  let hot_plate_label = intl.formatMessage({
    id: "plateTypeIndicator.hot_plate_label"
  });
  let salad_label = intl.formatMessage({
    id: "plateTypeIndicator.salad_label"
  });
  let sandwich_label = intl.formatMessage({
    id: "plateTypeIndicator.sandwich_label"
  });

  if (plate) {
    plateType = getPlateCategory(plate);
    if (plateType === "hot_plate") {
      css_class = HotPlate;
      icon = "soup";
      tooltip = hot_plate_label;
    } else if (plateType === "salad") {
      css_class = Salad;
      icon = "salad";
      tooltip = salad_label;
    } else if (plateType === "sandwich") {
      css_class = Sandwich;
      icon = "sandwich";
      tooltip = sandwich_label;
    }
  }

  return (
    <Indicator
      className={cx(css_class, "plate-type-indicator")}
      title={tooltip}
    >
      {icon && (
        <IconWrap>
          <FontAwesomeIcon icon={icon} />
        </IconWrap>
      )}
      {tooltip}
    </Indicator>
  );
};

// Styles

const Indicator = styled("div")`
  height: 31px;
  display: inline-block;
  border-radius: 19px;
  overflow: hidden;
  line-height: 31px;
  cursor: default;
  border: 2px solid;
  padding-right: ${Spacing.sm};
  font-family: ${Typography.body.fontFamily};
`;

const IconWrap = styled("div")`
  width: 31px;
  text-align: center;
  font-size: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: ${Spacing.sm};
  background: #fff;
`;

const HotPlate = css`
  background: ${Colors.primary.squash.default};
  border-color: ${Colors.primary.squash.default};
  color: #fff;
  svg {
    color: ${Colors.primary.squash.default};
  }
`;

const Salad = css`
  background: ${Colors.secondary.eatYourGreens.default};
  border-color: ${Colors.secondary.eatYourGreens.default};
  color: ${Colors.secondary.spinach.default};
  svg {
    color: ${Colors.secondary.eatYourGreens.default};
  }
`;

const Sandwich = css`
  background: ${Colors.primary.eggYolk.default};
  border-color: ${Colors.primary.eggYolk.default};
  color: ${Colors.secondary.eggplant.default};
  svg {
    color: ${Colors.primary.eggYolk.default};
  }
`;

export default injectIntl(PlateTypeIndicator);
