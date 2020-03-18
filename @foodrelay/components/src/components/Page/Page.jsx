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

const Page = ({ children }) => <PageContainer>{children}</PageContainer>;

const PageContainer = styled("div")`
  padding: 60px 0 46px 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  min-height: 100%;

  @media (max-width: 480px) {
    padding-bottom: 250px;
  }
`;

export default Page;
