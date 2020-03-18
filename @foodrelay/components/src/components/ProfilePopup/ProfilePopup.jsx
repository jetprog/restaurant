import React from "react";
import onClickOutside from "react-onclickoutside";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import { formatPhone } from "../../utils/data_structure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage } from "react-intl";
// Atoms
import Photo from "../Photo";
import ShortText from "../ShortText";
import RoleIndicator from "../RoleIndicator";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

import email_photo from "../../img/email.svg";

class ProfilePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile_popup_shown: false };
  }

  componentWillMount() {}

  handleClickOutside = evt => {
    this.setState({
      profile_popup_shown: false
    });
  };

  toggleProfilePopup() {
    this.setState({
      profile_popup_shown: !this.state.profile_popup_shown
    });
  }

  render() {
    const {
      user,
      current_business,
      showRole = false,
      showPopupOnClick = true,
      intl
    } = this.props;
    const { profile_popup_shown } = this.state;

    let displayed_role = null;
    if (current_business && user.businessrole_set) {
      displayed_role = user.businessrole_set.find(
        br => br.business.id === current_business.id
      );
    } else if (user.is_email && user.role) {
      displayed_role = { role: user.role };
    }

    return (
      <ProfilePopupWrapper className="profile-popup-wrap">
        <ProfilePopupButton
          className="extra-menu"
          showPopupOnClick={showPopupOnClick}
          onClick={
            showPopupOnClick
              ? () => this.toggleProfilePopup()
              : () => console.log("don't show popup")
          }
        >
          <User showPopupOnClick={showPopupOnClick}>
            {user.is_email ? (
              <Photo size="small" picture={email_photo} />
            ) : (
              <Photo size="small" picture={user.picture} />
            )}
            <Content>
              {user.first_name && user.last_name ? (
                <ShortText
                  text={user.first_name + " " + user.last_name}
                  maxLength={30}
                  classNames="name"
                />
              ) : (
                <ShortText text={user.email} classNames="name" maxLength={25} />
              )}
              <TextItem>{user.email}</TextItem>
            </Content>
            <Content>
              {displayed_role && showRole && (
                <RoleIndicator role={displayed_role} />
              )}
            </Content>
          </User>
        </ProfilePopupButton>
        {profile_popup_shown && showPopupOnClick && (
          <ProfilePopupContent>
            <Row>
              <Photo size="small" picture={user.picture} />
              <Info>
                <TextItem>
                  <Id>ID: {user.id}</Id>
                </TextItem>
                {user.first_name && user.last_name && (
                  <Name>{user.first_name + " " + user.last_name}</Name>
                )}
                <TextItem>{user.email}</TextItem>
                <TextItem>
                  {formatPhone(user.mobile_phone, intl.locale)}
                </TextItem>
              </Info>
              <div />
            </Row>
            <LinkToProfile>
              <Link to={"/user/" + user.id + "/"}>
                <FontAwesomeIcon icon="external-link-alt" />
              </Link>
            </LinkToProfile>
          </ProfilePopupContent>
        )}
      </ProfilePopupWrapper>
    );
  }
}

// styles

const ProfilePopupWrapper = styled("div")`
  position: relative;
  display: inline-block;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  color: ${Colors.secondary.eggplant.default};
`;

const ProfilePopupButton = styled("a")`
  display: block;
  cursor: ${props => (props.showPopupOnClick ? "pointer" : "default")};
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    strong {
      border-bottom: 2px solid;
    }
  }
`;

const User = styled("div")`
  .photo {
    display: inline-block;
  }

  .name {
    color: ${Colors.secondary.eggplant.default};
    text-decoration: none;
    font-weight: bold;
    transition: ${Animation.defaultSpeed};
  }

  .name:hover {
    text-decoration: ${props =>
      props.showPopupOnClick ? "underline" : "none"};
  }

  strong {
    line-height: 36px;
    display: inline-block;
    vertical-align: top;
  }
`;

const Content = styled("div")`
  display: inline-block;
  vertical-align: top;
  padding-top: ${Spacing.xs};
  padding-right: ${Spacing.md};
`;

const TextItem = styled("div")`
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: ${props => props.marginBottom};
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
`;

const ProfilePopupContent = styled("div")`
  border-radius: ${BorderRadius.sm};
  overflow: hidden;
  background: #fff;
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 10;
  width: 300px;
  padding: ${Spacing.md};
  box-shadow: ${Shadows.level3};
  left: 0;

  .profile-photo {
    flex: 1;
  }

  a {
    margin: 0;
    border-radius: 0;
    display: block;
  }
`;
const Row = styled("div")`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const Name = styled("h3")`
  margin: 0 0 ${Spacing.sm} 0;
  text-transform: capitalize;
`;

const Id = styled("span")`
  font-size: 14px;
  opacity: 1;
  margin-right: ${Spacing.sm};
  display: inline-block;
`;
const Info = styled("div")`
  p {
    margin: 0;
  }
`;

const LinkToProfile = styled("div")`
  position: absolute;
  right: ${Spacing.sm};
  top: ${Spacing.sm};

  a {
    padding: ${Spacing.sm};
    color: #f4af42;
  }
`;

export default injectIntl(onClickOutside(ProfilePopup));
