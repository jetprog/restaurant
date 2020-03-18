import React from "react";
import styled, { css, cx } from "react-emotion";
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownMenu from "../DropDownMenu";
import ShortText from "../ShortText";
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

class PersonaDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDownShown: false };
  }

  handleClickOutside = evt => {
    this.setState({
      dropDownShown: false
    });
  };

  showDropDown() {
    this.setState({
      dropDownShown: true
    });
  }

  hideDropDown() {
    this.setState({
      dropDownShown: false
    });
  }

  toggleDropDown(persona) {
    this.setState({
      dropDownShown: !this.state.dropDownShown
    });
  }

  render() {
    const { user, business, buttons, activePersona, onChange } = this.props;
    const { dropDownShown } = this.state;

    if (user) {
      return (
        <Container
          onClick={() => this.toggleDropDown("user")}
          className="user-drop-down"
        >
          <Button>
            <Photo picture={user.picture} size="small" shape="circle" />
            <ShortText className="text" text={user.first_name} maxLength={20} />
          </Button>
          <DropDownMenu
            buttons={buttons}
            shown={dropDownShown}
            padding={false}
          />
        </Container>
      );
    } else {
      return <Container />;
    }
  }
}

const Container = styled("div")`
  display: inline-block;
  position: relative;

  .drop-down-menu-content {
    right: 0;
  }
`;

const Button = styled("a")`
  display: inline-block;
  padding: ${Spacing.xs} ${Spacing.sm};
  border-radius: ${BorderRadius.md};
  cursor: pointer;
  font-family: ${Typography.body.fontFamily};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${Colors.utility.white.default};
  background: ${Colors.secondary.eggplant.default};
  transition: ${Animation.defaultSpeed};
  .photo {
    display: inline-block;
    margin-right: ${Spacing.sm};
    position: relative;
    top: 2px;
    max-width: 30px;
    height: 30px;
    min-width: 30px;
  }

  span {
    vertical-align: top;
    line-height: 33px;
  }

  &:hover {
    background: ${Colors.secondary.eggplant.lighter};
    color: ${Colors.utility.white.default};
  }

  @media (max-width: 480px) {
    background: transparent;
    padding: 0;

    .photo {
      margin-right: 0;
      max-width: 40px;
      height: 40px;
      min-width: 40px;
    }

    &:hover {
      background: transparent;
    }

    .short-text,
    span {
      display: none;
    }
  }
`;

const Active = css`
  background: ${Colors.secondary.eggplant.lighter};
  color: ${Colors.utility.white.default};
`;

export default onClickOutside(PersonaDropDown);
