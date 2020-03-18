import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextButton from "../TextButton";
import Button from "../Button";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage } from "react-intl";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";
// Atoms

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttons, maxWidth, title } = this.props;
    return (
      <Nav maxWidth={maxWidth}>
        {title && <h3 className="title">{title}</h3>}
        {buttons}
      </Nav>
    );
  }
}

// Styles
const Nav = styled("div")`
  flex: 1;
  max-width: ${props => props.maxWidth};
  padding-right: ${Spacing.xl};

  @media (max-width: 480px) {
    margin-bottom: ${Spacing.lg};
  }

  h3 {
    margin-top: 0;
    font-size: ${Typography.subTitle.fontSize};
    font-family: ${Typography.subTitle.fontFamily};
    color: ${Colors.secondary.eggplant.default};
    margin-bottom: ${Spacing.md};
  }
  a {
    display: block;
    color: ${Colors.primary.eggYolk.default};
    border-color: transparent;
    padding: ${Spacing.sm} 0;
    text-decoration: none;

    svg {
      margin-right: ${Spacing.sm};
      color: ${Colors.primary.eggYolk.lighter};
    }
  }

  a:hover,
  a.active {
    color: ${Colors.secondary.eggplant.default};
    border-color: transparent;
    text-decoration: none;

    svg {
      color: ${Colors.secondary.eggplant.lighter};
    }
  }
`;

export default injectIntl(SecondaryNav);
