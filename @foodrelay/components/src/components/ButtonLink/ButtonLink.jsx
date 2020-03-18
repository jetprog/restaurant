import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, cx } from "react-emotion";
import { Link } from "react-router-dom";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const ButtonLink = ({
  to,
  icon,
  color = "egg-yolk",
  label,
  disabled,
  iconRight,
  highlighted
}) => {
  if (disabled) {
    return (
      <DisabledLinkElement className="button-link disabled">
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
        {iconRight && (
          <FontAwesomeIcon className="icon-right" icon={iconRight} />
        )}
      </DisabledLinkElement>
    );
  } else {
    return (
      <LinkElement
        to={to}
        className={cx(
          color === "cherry" && !disabled && Cherry,
          color === "squash" && !disabled && Squash,
          color === "egg-yolk" && !disabled && EggYolk,
          color === "lettuce" && !disabled && Lettuce,
          color === "eggplant" && !disabled && Eggplant,
          color === "spinach" && !disabled && Spinach,
          color === "eat-your-greens" && !disabled && EatYourGreens,
          color === "mushrooms" && !disabled && Mushrooms,
          color === "egg-shell" && !disabled && EggShell,
          color === "black" && !disabled && Black,
          color === "charcoal" && !disabled && Charcoal,
          color === "grey" && !disabled && Grey,
          color === "white" && !disabled && White,
          color === "transparent" && !disabled && Transparent,
          highlighted && Highlighted,
          "button-link"
        )}
      >
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
        {iconRight && (
          <FontAwesomeIcon className="icon-right" icon={iconRight} />
        )}
      </LinkElement>
    );
  }
};

// styles

const LinkElement = styled(Link)`
  flex-direction: row;
  display: flex;
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  display: inline-block;
  cursor: pointer;
  transition: ${Animation.defaultSpeed};
  text-decoration: none;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};

  svg {
    margin-right: ${Spacing.sm};
  }

  svg.icon-right {
    margin-left: ${Spacing.sm};
  }

  @media (max-width: 1300px) {
    padding: 6px 12px;
  }
`;

const DisabledLinkElement = styled("span")`
  flex-direction: row;
  display: flex;
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  display: inline-block;
  cursor: pointer;
  transition: ${Animation.defaultSpeed};
  text-decoration: none;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  color: ${Colors.utility.grey.default};
  cursor: default;
  background: ${Colors.utility.lightGrey.default};

  &:hover {
    color: ${Colors.utility.grey.default};
    cursor: default;
    background: ${Colors.utility.lightGrey.default};
  }

  svg {
    margin-right: ${Spacing.sm};
  }

  svg.icon-right {
    margin-left: ${Spacing.sm};
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
  background: ${Colors.primary.eggYolk.default}!important;
  color: ${Colors.secondary.eggplant.default}!important;
  &:hover {
    background: ${Colors.primary.eggYolk.lighter}!important;
    color: ${Colors.secondary.eggplant.default}!important;
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
    background: ${Colors.secondary.eatYourGreens.default};
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
  &:hover {
    background: ${Colors.secondary.mushrooms.default};
    color: ${Colors.secondary.eggplant.default};
  }
`;
const Highlighted = css`
  box-shadow: ${Shadows.level2};

  &:hover {
    box-shadow: ${Shadows.level3};
  }
`;

export default ButtonLink;
