import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, cx } from "react-emotion";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const Button = ({
  onClick,
  icon,
  color = "egg-yolk",
  label,
  disabled,
  iconRight,
  highlighted
}) => (
  <LinkElement
    onClick={disabled ? console.log("disabled") : () => onClick()}
    className={cx(
      { [Cherry]: color === "cherry" && !disabled },
      { [Squash]: color === "squash" && !disabled },
      { [EggYolk]: color === "egg-yolk" && !disabled },
      { [Lettuce]: color === "lettuce" && !disabled },
      { [Eggplant]: color === "eggplant" && !disabled },
      { [Spinach]: color === "spinach" && !disabled },
      { [EatYourGreens]: color === "eat-your-greens" && !disabled },
      { [Mushrooms]: color === "mushrooms" && !disabled },
      { [EggShell]: color === "egg-shell" && !disabled },
      { [GreenBeans]: color === "green-beans" && !disabled },
      { [Black]: color === "black" && !disabled },
      { [Charcoal]: color === "charcoal" && !disabled },
      { [Grey]: color === "grey" && !disabled },
      { [White]: color === "white" && !disabled },
      { [Transparent]: color === "transparent" && !disabled },
      { [Disabled]: disabled },
      { [Highlighted]: highlighted },
      "button"
    )}
  >
    {icon && <FontAwesomeIcon icon={icon} />}
    {label}
    {iconRight && <FontAwesomeIcon className="icon-right" icon={iconRight} />}
  </LinkElement>
);

// Styles

const LinkElement = styled("a")`
  flex-direction: row;
  display: flex;
  display: inline-block;
  cursor: pointer;
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  transition: ${Animation.defaultSpeed};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  line-height: ${Typography.body.lineHeight};
  max-height: 20px;

  svg {
    margin-right: ${Spacing.sm};
  }

  svg.icon-right {
    margin-left: ${Spacing.sm};
    margin-right: 0;
  }

  @media (max-width: 1300px) {
    padding: 6px 12px;
  }
`;

// Color styles
const Cherry = css`
  background: ${Colors.primary.cherry.default};
  color: ${Colors.utility.white.default};

  &:hover {
    background: ${Colors.primary.cherry.lighter};
    color: ${Colors.utility.white.default};
  }
`;
const Squash = css`
  background: ${Colors.primary.squash.default};
  color: ${Colors.utility.white.default};

  &:hover {
    background: ${Colors.primary.squash.lighter};
    color: ${Colors.utility.white.default};
  }
`;
const EggYolk = css`
  background: ${Colors.primary.eggYolk.default};
  color: ${Colors.secondary.eggplant.default};

  &:hover {
    background: ${Colors.primary.eggYolk.lighter};
    color: ${Colors.secondary.eggplant.default};
  }
`;
const Lettuce = css`
  background: ${Colors.primary.lettuce.default};
  color: ${Colors.secondary.spinach.default};

  &:hover {
    background: ${Colors.primary.lettuce.lighter};
    color: ${Colors.secondary.spinach.default};
  }
`;
const Eggplant = css`
  background: ${Colors.secondary.eggplant.default};
  color: ${Colors.utility.white.default};

  &:hover {
    background: ${Colors.secondary.eggplant.lighter};
    color: ${Colors.utility.white.default};
  }
`;
const Spinach = css`
  background: ${Colors.secondary.spinach.default};
  color: ${Colors.utility.white.default};

  &:hover {
    background: ${Colors.secondary.spinach.lighter};
    color: ${Colors.utility.white.default};
  }
`;
const EatYourGreens = css`
  background: ${Colors.secondary.eatYourGreens.default};
  color: ${Colors.secondary.spinach.default};

  &:hover {
    background: ${Colors.secondary.eatYourGreens.default}85;
    color: ${Colors.secondary.spinach.default};
  }
`;
const Mushrooms = css`
  background: ${Colors.secondary.mushrooms.default};
  color: ${Colors.secondary.eggplant.default};

  &:hover {
    background: ${Colors.secondary.mushrooms.default};
    color: ${Colors.secondary.eggplant.default};
  }
`;
const EggShell = css`
  background: ${Colors.secondary.eggshell.default};
  color: ${Colors.secondary.eggplant.default};

  &:hover {
    background: ${Colors.secondary.mushrooms.default};
    color: ${Colors.secondary.eggplant.default};
  }
`;
const GreenBeans = css`
  background: ${Colors.secondary.greenBeans.default};
  color: ${Colors.utility.white.default};

  &:hover {
    background: ${Colors.secondary.greenBeans.default};
    color: ${Colors.utility.white.default};
  }
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
const White = css`
  background: ${Colors.utility.white.default};
  color: ${Colors.utility.black.default};
`;
const Transparent = css`
  background: transparent;
  color: ${Colors.utility.black.default};
`;

// State styles

const Disabled = css`
  color: ${Colors.utility.grey.default};
  cursor: default;
  background: ${Colors.utility.lightGrey.default};

  &:hover {
    color: ${Colors.utility.grey.default};
    cursor: default;
    background: ${Colors.utility.lightGrey.default};
  }
`;

const Highlighted = css`
  box-shadow: ${Shadows.level2};

  &:hover {
    box-shadow: ${Shadows.level3};
  }
`;

export default Button;
