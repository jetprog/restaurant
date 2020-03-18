import React from "react";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage } from "react-intl";
// Atoms
import { NavLink } from "react-router-dom";
import ButtonLink from "../ButtonLink";
import Button from "../Button";
import Photo from "../Photo";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class PersonaBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDownShown: false };
  }

  toggleDropDown() {
    this.setState({
      dropDownShown: !this.state.dropDownShown
    });
  }

  render() {
    const { user, business, buttons, onPictureClick, intl } = this.props;

    const { dropDownShown } = this.state;

    const helloLabel = intl.formatMessage({
      id: "greeting.hello"
    });

    if (user) {
      return (
        <Nav className="persona-bar">
          <Wrap>
            <Row>
              <PhotoWrapper className="photo-wrapper">
                <Photo
                  picture={user && user.picture}
                  size="small"
                  onClick={
                    onPictureClick ? onPictureClick : console.log("no action")
                  }
                />
              </PhotoWrapper>
              <BigTitle>{helloLabel + " " + user.first_name}!</BigTitle>
              {buttons && <Buttons>{buttons}</Buttons>}
            </Row>
          </Wrap>
        </Nav>
      );
    } else if (business) {
      return (
        <Nav className="persona-bar">
          <Wrap>
            <Row>
              <PhotoWrapper className="photo-wrapper">
                <Photo
                  picture={business.logo}
                  size="small"
                  shape="square"
                  onClick={
                    onPictureClick ? onPictureClick : console.log("no action")
                  }
                />
              </PhotoWrapper>
              <BigTitle>{business.name}</BigTitle>
              {buttons && <Buttons>{buttons}</Buttons>}
            </Row>
          </Wrap>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <Wrap>
            <Row />
          </Wrap>
        </Nav>
      );
    }
  }
}

// Styles

const Nav = styled("div")`
  background: ${Colors.secondary.eggshell.default};
  padding: ${Spacing.md} 0;
  @media (max-width: 480px) {
    padding: ${Spacing.sm} 0;
  }
`;

const Wrap = styled("div")`
  padding: 0 ${Spacing.lg};
  box-sizing: border-box;
  position: relative;
`;

const Row = styled("div")`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const BigTitle = styled("h2")`
  margin-top: 0;
  font-size: 30px;
  color: #4f1d28;
  margin-bottom: 0;
  font-family: "Garamond";
  line-height: 40px;
  @media (max-width: 1300px) {
    line-height: 30px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const PhotoWrapper = styled("div")`
  @media (max-width: 480px) {
    display: none;
  }
`;

const Buttons = styled("div")`
  margin-left: auto;
  margin-top: 0;

  a {
    margin-right: ${Spacing.md};
  }
  a:last-child {
    margin-right: 0;
  }
`;

export default injectIntl(PersonaBar);
