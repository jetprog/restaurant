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

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttons, shown, position, padding = true } = this.props;

    return (
      <DropDownMenuWrapper className="dropdown-menu-wrap">
        {shown && buttons && (
          <DropDownMenuContent
            className="drop-down-menu-content"
            position={position}
            padding={padding}
          >
            {buttons}
          </DropDownMenuContent>
        )}
      </DropDownMenuWrapper>
    );
  }
}

// Styles

const DropDownMenuWrapper = styled("div")`
  position: relative;
  display: inline-block;
  padding-top: -20px;
`;

const DropDownMenuContent = styled("div")`
  border-radius: ${BorderRadius.sm};
  overflow: hidden;
  background: ${Colors.utility.white.default};
  position: absolute;
  top: ${Spacing.md};
  right: ${props => (props.position == "right" ? Spacing.sm : "auto")};
  left: ${props => (props.position == "left" ? Spacing.sm : "auto")};
  z-index: 1000;
  width: 250px;
  margin-right: 0;
  box-shadow: ${Shadows.level3};
  padding: ${props => (props.padding ? Spacing.md : "0")};

  hr {
    border: 0;
    outline: 0;
    height: 2px;
    width: auto;
    background-color: ${Colors.secondary.mushrooms.default};
    margin: 0;
    display: block;
    margin: 0 ${Spacing.md};
  }

  a {
    margin: 0;
    border-radius: 0;
    display: block;
    color: ${Colors.secondary.eggplant.lighter};
    line-height: 1rem;
    background: transparent;
    transition: ${Animation.defaultSpeed};
    padding: ${Spacing.sm} ${Spacing.sm};
    border-radius: ${BorderRadius.sm};
    font-family: ${Typography.body.fontFamily};
    font-size: ${Typography.body.fontSize};
    border: 0;
    text-decoration: none;

    svg {
      margin-right: ${Spacing.sm};
    }

    span {
      border: 0;
      color: ${Colors.utility.black.default};
      text-decoration: none;
    }
  }

  .menu {
    padding: ${Spacing.sm} ${Spacing.md};
  }

  a:hover,
  a.active,
  a.active:hover {
    color: ${Colors.secondary.eggplant.default};
    background: ${Colors.secondary.eggshell.default};
  }

  strong {
    font-family: ${Typography.title.fontFamily};
    font-size: 18px;
    color: ${Colors.secondary.eggplant.default};
    border-bottom: 2px solid ${Colors.secondary.mushrooms.default};
    padding-bottom: ${Spacing.sm};
    font-weight: 600;
    display: block;
    padding: ${Spacing.sm} 0;
    margin: 0 ${Spacing.md};
  }
`;

export default DropDownMenu;
