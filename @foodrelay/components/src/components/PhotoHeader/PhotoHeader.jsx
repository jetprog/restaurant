import React from "react";
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

const PhotoHeader = ({
  photo,
  title,
  subtitle,
  buttons,
  backColor = "fcf7f0",
  textColor = "ffffff"
}) => (
  <Header photo={photo} backColor={backColor}>
    <Scrim backColor={backColor} />
    <Wrap>
      <Row>
        <Infos>
          {title && <Title textColor={textColor}>{title}</Title>}
          {subtitle && <SubTitle textColor={textColor}>{subtitle}</SubTitle>}
        </Infos>
        <Buttons>{buttons}</Buttons>
      </Row>
    </Wrap>
  </Header>
);

const Header = styled("header")`
  padding: ${Spacing.xl} 0;
  box-sizing: border-box;
  min-height: 300px;
  background-size: cover;
  background-image: url(${props => props.photo});
  background-color: #${props => props.backColor};
  background-position: center;
  position: relative;
`;

const Scrim = styled("div")`
  background: #${props => props.backColor};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

const Wrap = styled("div")`
  max-width: 1158px;
  padding: 0 ${Spacing.lg};
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Infos = styled("div")`
  flex: 1;
`;

const Buttons = styled("div")`
  flex: 1;
  text-align: right;
`;

const Title = styled("h1")`
  margin: 0;
  font-size: 72px;
  color: #${props => props.textColor};
`;

const SubTitle = styled("h3")`
  margin: ${Spacing.md} 0;
  color: #${props => props.textColor};
  max-width: 300px;
  opacity: 0.5;
`;

export default PhotoHeader;
