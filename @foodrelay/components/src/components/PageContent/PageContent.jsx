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

const PageContent = ({
  paddingTop = Spacing.lg,
  paddingBottom = Spacing.lg,
  children
}) => (
  <Content paddingTop={paddingTop} paddingBottom={paddingBottom}>
    {children}
  </Content>
);

const Content = styled("div")`
  min-height: ${props =>
    "calc(100% - " + (props.paddingTop + " - " + props.paddingBottom) + ")"};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
`;

export default PageContent;
