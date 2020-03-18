import React from "react";
import styled, { css, cx } from "react-emotion";
import { injectIntl, FormattedMessage } from "react-intl";
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

const Tag = ({ label, color, background = true, icon, style = "default" }) => {
  return (
    <TagElement
      className={cx(
        { [Small]: style === "small" },
        { [Cherry]: color === "cherry" },
        { [Squash]: color === "squash" },
        { [EggYolk]: color === "egg-yolk" },
        { [Lettuce]: color === "lettuce" },
        { [Eggplant]: color === "eggplant" },
        { [Spinach]: color === "spinach" },
        { [EatYourGreens]: color === "eat-your-greens" },
        { [Mushrooms]: color === "mushrooms" },
        { [EggShell]: color === "egg-shell" },
        { [GreenBeans]: color === "green-beans" },
        { [Black]: color === "black" },
        { [Charcoal]: color === "charcoal" },
        { [Grey]: color === "grey" },
        { [LightGrey]: color === "light-grey" },
        { [White]: color === "white" },
        { [Transparent]: !background }
      )}
    >
      {icon && (
        <Icon>
          <FontAwesomeIcon icon={icon} />
        </Icon>
      )}
      {label}
    </TagElement>
  );
};

const Icon = styled("span")`
  padding: 0 ${Spacing.sm} 0 0;
  font-size: ${Typography.small.fontSize};
`;

const TagElement = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.lg};
  background: ${Colors.secondary.mushrooms.default};
  color: ${Colors.secondary.eggplant.darker};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  display: inline-block;
`;

const Cherry = css`
  background: ${Colors.primary.cherry.default};
  color: ${Colors.utility.white.default};
`;
const Squash = css`
  background: ${Colors.primary.squash.default};
  color: ${Colors.utility.white.default};
`;
const EggYolk = css`
  background: ${Colors.primary.eggYolk.default};
  color: ${Colors.secondary.eggplant.default};
`;
const Lettuce = css`
  background: ${Colors.primary.lettuce.default};
  color: ${Colors.secondary.spinach.default};
`;
const Eggplant = css`
  background: ${Colors.secondary.eggplant.default};
  color: ${Colors.utility.white.default};
`;
const Spinach = css`
  background: ${Colors.secondary.spinach.default};
  color: ${Colors.utility.white.default};
`;
const EatYourGreens = css`
  background: ${Colors.secondary.eatYourGreens.default};
  color: ${Colors.secondary.spinach.default};
`;
const Mushrooms = css`
  background: ${Colors.secondary.mushrooms.default};
  color: ${Colors.secondary.eggplant.default};
`;
const EggShell = css`
  background: ${Colors.secondary.eggshell.default};
  color: ${Colors.secondary.eggplant.default};
`;
const GreenBeans = css`
  background: ${Colors.secondary.greenBeans.default};
  color: ${Colors.utility.white.default};
`;
const Black = css`
  background: ${Colors.utility.black.default};
  color: ${Colors.utility.white.default};
`;
const Charcoal = css`
  background: ${Colors.utility.charcoal.default};
  color: ${Colors.utility.white.default};
`;
const Grey = css`
  background: ${Colors.utility.grey.default};
  color: ${Colors.utility.black.default};
`;
const LightGrey = css`
  background: ${Colors.utility.lightGrey.default};
  color: ${Colors.utility.black.default};
`;
const White = css`
  background: ${Colors.utility.white.default};
  color: ${Colors.utility.black.default};
`;
const Transparent = css`
  background: transparent;
`;

const Small = css`
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  padding: 0 ${Spacing.sm};
  height: 20px;
  min-height: 20px;
  line-height: 20px;
`;

export default Tag;
