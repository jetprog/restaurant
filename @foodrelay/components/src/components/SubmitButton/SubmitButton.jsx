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

const SubmitButton = ({ color = "egg-yolk", label, disabled }) => (
  <LinkElement
    type="submit"
    value={label}
    disabled={disabled}
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
      { [Black]: color === "black" && !disabled },
      { [Charcoal]: color === "charcoal" && !disabled },
      { [Grey]: color === "grey" && !disabled },
      { [White]: color === "white" && !disabled },
      { [Transparent]: color === "transparent" && !disabled },
      { [Disabled]: disabled },
      "submit-button"
    )}
  />
);

const LinkElement = styled("input")`
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  transition: ${Animation.defaultSpeed};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  flex-direction: row;
  display: flex;
  display: inline-block;
  cursor: pointer;
  appearance: none;
  border: 0;

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
  color: #ffffff;

  &:hover {
    background: ${Colors.primary.cherry.lighter};
    color: #ffffff;
  }
`;
const Squash = css`
  background: ${Colors.primary.squash.default};
  color: #ffffff;

  &:hover {
    background: ${Colors.primary.squash.lighter};
    color: #ffffff;
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
  color: #ffffff;

  &:hover {
    background: ${Colors.secondary.eggplant.lighter};
    color: #ffffff;
  }
`;
const Spinach = css`
  background: ${Colors.secondary.spinach.default};
  color: #ffffff;

  &:hover {
    background: ${Colors.secondary.spinach.lighter};
    color: #ffffff;
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
    background: ${Colors.secondary.eggshell.default};
    color: ${Colors.secondary.eggplant.default};
  }
`;
const Black = css`
  background: ${Colors.utility.black.default};
  color: #ffffff;
`;
const Charcoal = css`
  background: ${Colors.utility.charcoal.default};
  color: #ffffff;
`;
const Grey = css`
  background: ${Colors.utility.grey.default};
  color: ${Colors.utility.black.default};
`;
const White = css`
  background: #ffffff;
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
export default SubmitButton;
