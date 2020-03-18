import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled, { css, cx } from "react-emotion";
import { isMobile } from "react-device-detect";
// Atoms
import LocaleSwitch from "../LocaleSwitch";
import PersonaDropDown from "../PersonaDropDown";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import ErrorBoundary from "../ErrorBoundary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
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

class TopBar extends React.Component {
  componentWillMount() {}

  render() {
    const {
      logoLink,
      navButtons,
      userSecondaryButtons,
      businessSecondaryButtons,
      business,
      user,
      auth,
      showCart,
      cartContent,
      onLanguageChange,
      onLoggedInLanguageChange,
      onLogin,
      intl
    } = this.props;

    let cart_button_active = false;
    let count = 0;
    let is_business_admin = false;
    if (user && business && user.get_business_admin_of) {
      is_business_admin = user.get_business_admin_of == business.id;
    }

    if (cartContent) {
      let cartItems = cartContent.filter(item => !item.not_eating);
      count = cartItems.length;
      if (count > 0) {
        cart_button_active = true;
      }
    }

    const loginLabel = intl.formatMessage({ id: "topBar.login" });

    let logo_link = "/";

    if (logoLink) {
      logo_link = logoLink;
    } else {
      if (user) {
        if (is_business_admin) {
          logo_link = "/calendar/";
        } else {
          logo_link = "/get_food/";
        }
      }
    }

    return (
      <TopBarContainer>
        <ErrorBoundary>
          <Wrap>
            <Logo>
              <Link to={logo_link}>
                <img src={logo_img} alt="FoodRelay Logo" />
              </Link>
            </Logo>
            <MenuContainer>{user && navButtons}</MenuContainer>
            <CartButtonContainer>
              {user ? (
                !isMobile &&
                showCart &&
                count > 0 && (
                  <Button
                    onClick={showCart}
                    icon="shopping-cart"
                    label={"Cart(" + count + ")"}
                    color={cart_button_active ? "egg-yolk" : "eggplant"}
                    className="cart-button"
                  />
                )
              ) : (
                <LoginButton
                  to="/public/login/"
                  label={loginLabel}
                  color="egg-yolk"
                />
              )}
            </CartButtonContainer>
            <AccountMenuContainer>
              {user && (
                <PersonaDropDown user={user} buttons={userSecondaryButtons} />
              )}
            </AccountMenuContainer>
            {(onLanguageChange || onLoggedInLanguageChange) && (
              <LanguageButtons>
                <LocaleSwitch
                  user={user}
                  darkBack
                  onChange={onLanguageChange}
                  onChangeLoggedIn={onLoggedInLanguageChange}
                  currentLocale={intl.locale}
                />
              </LanguageButtons>
            )}
          </Wrap>
        </ErrorBoundary>
      </TopBarContainer>
    );
  }
}

const TopBarContainer = styled("div")`
  background-color: ${Colors.secondary.eggplant.default};
  height: 60px;
  margin-top: -60px;
  position: relative;
  z-index: 15000;
  @media (max-width: 480px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    margin-top: 0;
  }
`;

const Wrap = styled("div")`
  padding: 0 ${Spacing.lg};
  margin: 0 auto;
  box-sizing: border-box;
  height: 60px;
  @media (max-width: 480px) {
    padding: 0 ${Spacing.md};
  }
`;

const Logo = styled("div")`
  width: 150px;
  display: inline-block;
  vertical-align: center;
  height: 60px;
  padding: 10px 0;
  box-sizing: border-box;
  img {
    max-width: 150px;
    margin-top: 3px;
    display: inline-block;
  }
  @media (max-width: 480px) {
    overflow: hidden;
    img {
      width: 150px;
    }
  }
`;

const MenuContainer = styled("div")`
  display: inline-block;
  padding-left: 40px;
  box-sizing: border-box;
  vertical-align: top;
  a {
    margin-right: ${Spacing.lg};
    border-bottom: 2px solid transparent;
    border-radius: 0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #fff;
    vertical-align: top;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    font-family: ${Typography.body.fontFamily};
    transition: ${Animation.defaultSpeed};
    display: inline-block;
    box-sizing: border-box;
    margin-top: 15px;
  }
  a:hover,
  a.active {
    border-color: ${Colors.primary.eggYolk.default};
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const AccountMenuContainer = styled("div")`
  display: flex;
  flex-direction: row;
  float: right;
  padding: ${Spacing.sm} 0;
  box-sizing: border-box;
  vertical-align: top;
  a {
    margin-right: ${Spacing.sm};
  }
  @media (max-width: 480px) {
    .business-drop-down {
      display: none;
    }
    a {
      margin-right: 0;
    }
  }
`;

const LanguageButtons = styled("div")`
  float: right;
  margin: 19px ${Spacing.md} 19px 0;
  a {
    margin-top: ${Spacing.sm};
  }
  @media (max-width: 480px) {
    .locale-switch {
      padding-top: 0;
    }
  }
`;

const CartButtonContainer = styled("div")`
  float: right;
  margin-top: 6px;
  a {
    margin-top: ${Spacing.sm};
  }
`;

const LoginButton = styled(ButtonLink)`
  flex-direction: row;
  display: flex;
  display: inline-block;
  cursor: pointer;
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  transition: ${Animation.defaultSpeed};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  line-height: ${Typography.body.lineHeight};
  max-height: 20px;
  text-decoration: none;
  &:hover {
    background: ${Colors.primary.eggYolk.lighter};
    color: ${Colors.secondary.eggplant.default};
  }
`;

export default injectIntl(TopBar);
