import React from "react";
import PropTypes from "prop-types";
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

const IconButton = ({ onClick, color = "egg-yolk", disabled, icon }) => {
  return (
    <IconButtonElement
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
        { [Black]: color === "black" && !disabled },
        { [Charcoal]: color === "charcoal" && !disabled },
        { [Grey]: color === "grey" && !disabled },
        { [Disabled]: disabled },
        "icon-button"
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
    </IconButtonElement>
  );
};

// Styles

const IconButtonElement = styled("a")`
  padding: ${Spacing.sm} 12px;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

// Color styles
const Cherry = css`
  color: ${Colors.primary.cherry.default};

  &:hover {
    color: ${Colors.primary.cherry.lighter};
  }
`;
const Squash = css`
  color: ${Colors.primary.squash.default};

  &:hover {
    color: ${Colors.primary.squash.lighter};
  }
`;
const EggYolk = css`
  color: ${Colors.primary.eggYolk.default};

  &:hover {
    color: ${Colors.primary.eggYolk.lighter};
  }
`;
const Lettuce = css`
  color: ${Colors.primary.lettuce.default};

  &:hover {
    color: ${Colors.primary.lettuce.lighter};
  }
`;
const Eggplant = css`
  color: ${Colors.secondary.eggplant.default};

  &:hover {
    color: ${Colors.secondary.eggplant.lighter};
  }
`;
const Spinach = css`
  color: ${Colors.secondary.spinach.default};

  &:hover {
    color: ${Colors.secondary.spinach.lighter};
  }
`;
const EatYourGreens = css`
  color: ${Colors.secondary.eatYourGreens.default};

  &:hover {
    color: ${Colors.secondary.eatYourGreens.default};
  }
`;
const Mushrooms = css`
  color: ${Colors.secondary.mushrooms.default};

  &:hover {
    color: ${Colors.secondary.mushrooms.default};
  }
`;
const EggShell = css`
  color: ${Colors.secondary.eggshell.default};

  &:hover {
    color: ${Colors.secondary.eggshell.default};
  }
`;
const Black = css`
  color: ${Colors.utility.black.default};
`;
const Charcoal = css`
  color: ${Colors.utility.charcoal.default};
`;
const Grey = css`
  color: ${Colors.utility.grey.default};
`;

// State styles

const Disabled = css`
  color: ${Colors.utility.grey.default};
  cursor: default;

  &:hover {
    color: ${Colors.utility.grey.default};
    cursor: default;
  }
`;

IconButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string
};

export default IconButton;
