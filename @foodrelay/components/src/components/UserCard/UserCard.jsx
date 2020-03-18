import React from "react";
import PropTypes from "prop-types";
import styled, { css, cx } from "react-emotion";
import onClickOutside from "react-onclickoutside";
import moment from "moment";
// Atoms
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShortText from "../ShortText";
import Button from "../Button";
import ProfilePhoto from "../Photo";
import RoleIndicator from "../RoleIndicator";
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

class UserCard extends React.Component {
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
      user,
      current_business = null,
      extraButtons,
      showJoinedDate = false,
      showRole = true,
      intl
    } = this.props;
    const { extra_menu_shown } = this.state;

    if (user) {
      let displayed_role = null;
      if (current_business) {
        displayed_role = user.businessrole_set.find(
          br => br.business.id === current_business.id
        );
      }

      let joined_label = intl.formatMessage({
        id: "userCard.joined"
      });

      return (
        <UserCardContainer>
          <ProfilePhoto picture={user.picture} size="small" />
          <Content>
            <Title>
              <Link to={"/user/" + user.id}>
                {user.first_name && user.last_name ? (
                  <ShortText
                    text={user.first_name + " " + user.last_name}
                    maxLength={30}
                  />
                ) : (
                  <ShortText text={user.email} maxLength={25} />
                )}
              </Link>
            </Title>
            <TextItem marginBottom={showJoinedDate ? "0" : Spacing.sm}>
              {user.email}
            </TextItem>
            {showJoinedDate && (
              <TextItem marginBottom={Spacing.sm}>
                {joined_label + " " + moment(user.date_joined).format("LL")}
              </TextItem>
            )}
            {displayed_role && showRole && (
              <RoleIndicator role={displayed_role} />
            )}
            {user.has_payment_method && <Tag>Credit card</Tag>}
          </Content>
          <ExtraMenuButton
            className="extra-menu"
            onClick={() => this.toggleExtraMenu()}
          >
            <FontAwesomeIcon icon="ellipsis-v" />
          </ExtraMenuButton>
          {extra_menu_shown && <ExtraMenu>{extraButtons}</ExtraMenu>}
        </UserCardContainer>
      );
    } else {
      return <UserCardContainer />;
    }
  }
}

const UserCardContainer = styled("div")`
  position: relative;
  box-sizing: border-box;
  margin-bottom: ${Spacing.lg};
  flex: 1;
  margin: 12px;
  max-width: calc(25% - 24px);
  min-width: calc(25% - 24px);
  flex-direction: row;
  display: flex;
  color: ${Colors.secondary.eggplant.default};

  &:hover .extra-menu {
    opacity: 0.5;
  }
`;

const Content = styled("div")``;
const Title = styled("div")`
  margin: 0;
  margin-bottom: 4px;
  font-weight: bold;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};

  a {
    color: ${Colors.secondary.eggplant.default};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const TextItem = styled("div")`
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: ${props => props.marginBottom};
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
`;

const ExtraMenuButton = styled("a")`
  width: ${Spacing.lg};
  height: ${Spacing.lg};
  display: block;
  background: #fff;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  line-height: 24px;

  &:hover {
    opacity: 1;
  }
`;

const Tag = styled("div")`
  border-radius: 4px;
  background: ${Colors.primary.lettuce.default};
  padding: 4px 8px;
  font-size: 14px;
  display: inline-block;
  margin-top: 4px;
  margin-right: 4px;
  font-size: 12px;
  color: ${Colors.secondary.spinach.default};
`;

const ExtraMenu = styled("div")`
  border-radius: 4px;
  background: #fff;
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 10;
  box-shadow: 0 0 32px #00000021;
`;

export default injectIntl(onClickOutside(UserCard));
