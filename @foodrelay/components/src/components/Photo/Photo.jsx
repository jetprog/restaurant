import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Placeholder1 from "../../img/placeholder-1.svg";
import Placeholder2 from "../../img/placeholder-2.svg";
import Placeholder3 from "../../img/placeholder-3.svg";
import Placeholder4 from "../../img/placeholder-4.svg";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";
const placeholders = {
  1: Placeholder1,
  2: Placeholder2,
  3: Placeholder3,
  4: Placeholder4
};

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomNb: 0 };
  }

  componentWillMount() {
    this.setState({
      randomNb: Math.floor(Math.random() * (5 - 1) + 1)
    });
  }

  render() {
    const { picture, size = "small", shape = "circle", onClick } = this.props;
    const { randomNb } = this.state;

    return (
      <Container
        className={cx(
          { [Small]: size === "small" },
          { [Medium]: size === "medium" },
          { [Large]: size === "large" },
          "photo"
        )}
        onClick={onClick}
        size={size}
      >
        {onClick && (
          <Icon className="icon" onClick={onClick}>
            <FontAwesomeIcon icon="pencil-alt" />
          </Icon>
        )}
        <PhotoElement
          onClick={onClick}
          className={cx(
            { [Square]: shape === "square" },
            { [Circle]: shape === "circle" }
          )}
        >
          {picture ? (
            <img src={picture} alt="" />
          ) : (
            <img className="default" src={placeholders[randomNb]} alt="" />
          )}
        </PhotoElement>
      </Container>
    );
  }
}

// Styles

const Container = styled("div")`
  position:relative;
  flex-1;
  margin-right:${props => (props.size == "small" ? Spacing.md : Spacing.lg)};

  @media (max-width: 1300px) {
    margin-right:${Spacing.md};
  }

  &:hover {
    .icon {
      opacity:1;
      background: ${Colors.primary.eggYolk.default};
      color: ${Colors.secondary.eggplant.default};
    }
  }
`;

const PhotoElement = styled("div")`
  width: 100%;
  height: 100%;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  overflow: hidden;
  position: relative;
  margin: 0 !important;

  img {
    max-width: 100%;
  }
`;

const Icon = styled("div")`
  width: ${Spacing.md};
  height: ${Spacing.md};
  transition: ${Animation.fastSpeed};
  background: ${Colors.utility.lightGrey.default};
  color: ${Colors.utility.grey.default};
  font-size: ${Typography.extraSmall.fontSize};
  line-height: 23px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: -3px;
  right: -3px;
  z-index: 100;
  margin: 0 !important;
  opacity: 0;
  cursor: pointer;

  svg {
    position: relative;
    top: -3px;
  }
`;

// Sizes

const Small = css`
  max-width: 40px;
  height: 40px;
  min-width: 40px;

  .icon {
    top: -3px;
    right: -3px;
  }

  @media (max-width: 1300px) {
    max-width: 30px;
    height: 30px;
    min-width: 30px;
  }
`;

const Medium = css`
  max-width: 60px;
  height: 60px;
  min-width: 60px;

  .icon {
    top: 0;
    right: 0;
  }
`;

const Large = css`
  max-width: 100px;
  height: 100px;
  min-width: 100px;

  .icon {
    top: ${Spacing.sm};
    right: ${Spacing.sm};
  }

  @media (max-width: 1300px) {
    max-width: 50px;
    height: 50px;
    min-width: 50px;
  }
`;

// Shapes

const Circle = css`
  border-radius: 50%;
`;

const Square = css`
  border-radius: ${BorderRadius.sm};
`;

export default Photo;
