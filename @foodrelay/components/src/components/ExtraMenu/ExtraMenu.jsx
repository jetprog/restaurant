import React from "react";
import onClickOutside from "react-onclickoutside";
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

class ExtraMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { extra_menu_shown: false };
  }

  handleClickOutside = evt => {
    this.setState({
      extra_menu_shown: false
    });
  };

  toggleExtraMenu() {
    this.setState({
      extra_menu_shown: !this.state.extra_menu_shown
    });
  }

  render() {
    const {
      buttons,
      direction = "vertical",
      buttonColor = "transparent"
    } = this.props;
    const { extra_menu_shown } = this.state;

    return (
      <ExtraMenuWrapper className="extra-menu-wrap">
        <ExtraMenuButton
          className="extra-menu"
          onClick={() => this.toggleExtraMenu()}
        >
          <FontAwesomeIcon
            icon={direction === "horizontal" ? "ellipsis-h" : "ellipsis-v"}
          />
        </ExtraMenuButton>
        {extra_menu_shown && <ExtraMenuContent>{buttons}</ExtraMenuContent>}
      </ExtraMenuWrapper>
    );
  }
}

// Styles

const ExtraMenuWrapper = styled("div")`
  position: relative;
  display: inline-block;
`;

const ExtraMenuButton = styled("a")`
  width: 36px;
  height: 36px;
  display: block;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background: #f5daad;
  }

  @media (max-width: 1300px) {
    width: 30px;
    height: 28px;
    line-height: 28px;
  }
`;

const ExtraMenuContent = styled("div")`
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 10;
  width: 150px;
  box-shadow: 0 0 32px #00000021;

  a.button,
  a.csv-button {
    margin: 0;
    border-radius: 0 !important;
    display: block !important;
  }
`;

export default onClickOutside(ExtraMenu);
