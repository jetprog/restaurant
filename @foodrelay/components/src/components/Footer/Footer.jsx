import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import ErrorBoundary from "../ErrorBoundary";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

import logo_img from "../../img/logotype_icon_white.svg";

let year = moment();

const Footer = ({ buttons, logoLink, intl }) => (
  <FooterWrap>
    <ErrorBoundary>
      <Logo>
        <img src={logo_img} />
      </Logo>
      <Slogan>
        <FormattedMessage
          id="footer.slogan"
          defaultMessage={`Feeding Company Culture`}
        />
      </Slogan>
      {buttons && <Nav>{buttons}</Nav>}
      <Copyright>© {year.format("YYYY")} FoodRelay inc.</Copyright>
    </ErrorBoundary>
  </FooterWrap>
);

// Styles

const FooterWrap = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
  height: 30px;
  line-height: 30px;
`;

const Slogan = styled("div")`
  display: inline-block;
  vertical-align: top;
  padding-left: ${Spacing.md};
  color: ${Colors.secondary.eggplant.default};
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  font-weight: bold;
`;

const Logo = styled("div")`
  display: inline-block;
  vertical-align: top;
  width: 25px;
  min-height: 40px;
  img {
    height: 30px;
  }
`;

const Nav = styled("div")`
  display: inline-block;
  vertical-align: top;
  padding-left: ${Spacing.md};
  padding-right: ${Spacing.md};
  color: ${Colors.secondary.eggplant.default};
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  span {
    opacity: 0.5;
    color: ${Colors.secondary.eggplant.default};
  }
  a {
    opacity: 0.5;
    color: ${Colors.secondary.eggplant.default};
    text-decoration: none;
    transition: ${Animation.defaultSpeed};
    margin: 0 ${Spacing.lg} 0 0;
    font-size: ${Typography.small.fontSize};
    padding: 0;
    position: relative;
  }
  a:after {
    content: "•";
    position: absolute;
    right: -${Spacing.md};
  }
  a:last-child {
    margin-right: 0;
  }
  a:last-child:after {
    content: "";
  }
  a:hover,
  a.active {
    opacity: 1;
    color: ${Colors.secondary.eggplant.default};
    border-color: transparent;
  }
  @media (max-width: 480px) {
    display: block;
    padding: 0;
    a {
      display: block;
      margin: 0;
    }
    a:after {
      content: "";
    }
  }
`;

const Copyright = styled("div")`
  display: inline-block;
  vertical-align: top;
  color: ${Colors.secondary.eggplant.default};
  opacity: 0.5;
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  max-width: 150px;
`;

export default injectIntl(Footer);
