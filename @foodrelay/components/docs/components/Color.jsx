import React from "react";
import styled from "react-emotion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Spacing,
  Colors,
  Shadows,
  BorderRadius,
  Typography
} from "../../rules";

class Color extends React.Component {
  render() {
    const { color, colorName, colorDetails } = this.props;
    return (
      <ColorItem>
        <Swatch small color={color.lighter}>
          <FontAwesomeIcon icon="sun" />
        </Swatch>
        <Swatch color={color.default}>
          <FontAwesomeIcon icon="star" />
        </Swatch>
        <Swatch small color={color.darker}>
          <FontAwesomeIcon icon="moon" />
        </Swatch>
        <Content>
          <Name>{colorName}</Name>
        </Content>
      </ColorItem>
    );
  }
}

// Styles
const ColorItem = styled("div")`
  background: #fff;
  border-radius: ${BorderRadius.md};
  box-shadow: ${Shadows.level1};
  overflow: hidden;
  margin: ${Spacing.sm};
  max-width: calc(25% - ${Spacing.md});
  min-width: calc(25% - ${Spacing.md});
`;

const Content = styled("div")`
  padding: ${Spacing.md};
`;

const Name = styled("h3")`
  font-family: ${Typography.body.fontFamily};
  font-weight: 400;
  margin: 0 0 ${Spacing.sm} 0;
`;

const Swatch = styled("div")`
  height: ${props => (props.small ? "60px" : "120px")};
  display: block;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: ${props => props.color};

  svg {
    position: absolute;
    top: 8px;
    left: 8px;
    opacity: 0.5;
    color: #fff;
    font-size: 14px;
  }
`;

export default Color;
