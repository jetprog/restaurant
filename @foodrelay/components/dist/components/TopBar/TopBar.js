"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactDeviceDetect = require("react-device-detect");

var _LocaleSwitch = _interopRequireDefault(require("../LocaleSwitch"));

var _PersonaDropDown = _interopRequireDefault(require("../PersonaDropDown"));

var _Button = _interopRequireDefault(require("../Button"));

var _ButtonLink = _interopRequireDefault(require("../ButtonLink"));

var _ErrorBoundary = _interopRequireDefault(require("../ErrorBoundary"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

var _logotype_icon_white = _interopRequireDefault(require("../../img/logotype_icon_white.svg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  display: inline-block;\n  cursor: pointer;\n  padding: ", " ", ";\n  border-radius: ", ";\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  max-height: 20px;\n  text-decoration: none;\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n  margin-top: 6px;\n  a {\n    margin-top: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n  margin: 19px ", " 19px 0;\n  a {\n    margin-top: ", ";\n  }\n  @media (max-width: 480px) {\n    .locale-switch {\n      padding-top: 0;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  float: right;\n  padding: ", " 0;\n  box-sizing: border-box;\n  vertical-align: top;\n  a {\n    margin-right: ", ";\n  }\n  @media (max-width: 480px) {\n    .business-drop-down {\n      display: none;\n    }\n    a {\n      margin-right: 0;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-left: 40px;\n  box-sizing: border-box;\n  vertical-align: top;\n  a {\n    margin-right: ", ";\n    border-bottom: 2px solid transparent;\n    border-radius: 0;\n    font-weight: 600;\n    font-size: 14px;\n    letter-spacing: 0.5px;\n    color: #fff;\n    vertical-align: top;\n    height: 30px;\n    line-height: 30px;\n    text-decoration: none;\n    font-family: ", ";\n    transition: ", ";\n    display: inline-block;\n    box-sizing: border-box;\n    margin-top: 15px;\n  }\n  a:hover,\n  a.active {\n    border-color: ", ";\n  }\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 150px;\n  display: inline-block;\n  vertical-align: center;\n  height: 60px;\n  padding: 10px 0;\n  box-sizing: border-box;\n  img {\n    max-width: 150px;\n    margin-top: 3px;\n    display: inline-block;\n  }\n  @media (max-width: 480px) {\n    overflow: hidden;\n    img {\n      width: 150px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", ";\n  margin: 0 auto;\n  box-sizing: border-box;\n  height: 60px;\n  @media (max-width: 480px) {\n    padding: 0 ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 60px;\n  margin-top: -60px;\n  position: relative;\n  z-index: 15000;\n  @media (max-width: 480px) {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin-top: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TopBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopBar).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logoLink = _this$props.logoLink,
          navButtons = _this$props.navButtons,
          userSecondaryButtons = _this$props.userSecondaryButtons,
          businessSecondaryButtons = _this$props.businessSecondaryButtons,
          business = _this$props.business,
          user = _this$props.user,
          auth = _this$props.auth,
          showCart = _this$props.showCart,
          cartContent = _this$props.cartContent,
          onLanguageChange = _this$props.onLanguageChange,
          onLoggedInLanguageChange = _this$props.onLoggedInLanguageChange,
          onLogin = _this$props.onLogin,
          intl = _this$props.intl;
      var cart_button_active = false;
      var count = 0;
      var is_business_admin = false;

      if (user && business && user.get_business_admin_of) {
        is_business_admin = user.get_business_admin_of == business.id;
      }

      if (cartContent) {
        var cartItems = cartContent.filter(function (item) {
          return !item.not_eating;
        });
        count = cartItems.length;

        if (count > 0) {
          cart_button_active = true;
        }
      }

      var loginLabel = intl.formatMessage({
        id: "topBar.login"
      });
      var logo_link = "/";

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

      return _react.default.createElement(TopBarContainer, null, _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement(Wrap, null, _react.default.createElement(Logo, null, _react.default.createElement(_reactRouterDom.Link, {
        to: logo_link
      }, _react.default.createElement("img", {
        src: _logotype_icon_white.default,
        alt: "FoodRelay Logo"
      }))), _react.default.createElement(MenuContainer, null, user && navButtons), _react.default.createElement(CartButtonContainer, null, user ? !_reactDeviceDetect.isMobile && showCart && count > 0 && _react.default.createElement(_Button.default, {
        onClick: showCart,
        icon: "shopping-cart",
        label: "Cart(" + count + ")",
        color: cart_button_active ? "egg-yolk" : "eggplant",
        className: "cart-button"
      }) : _react.default.createElement(LoginButton, {
        to: "/public/login/",
        label: loginLabel,
        color: "egg-yolk"
      })), _react.default.createElement(AccountMenuContainer, null, user && _react.default.createElement(_PersonaDropDown.default, {
        user: user,
        buttons: userSecondaryButtons
      })), (onLanguageChange || onLoggedInLanguageChange) && _react.default.createElement(LanguageButtons, null, _react.default.createElement(_LocaleSwitch.default, {
        user: user,
        darkBack: true,
        onChange: onLanguageChange,
        onChangeLoggedIn: onLoggedInLanguageChange,
        currentLocale: intl.locale
      })))));
    }
  }]);

  return TopBar;
}(_react.default.Component);

var TopBarContainer = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Colors.secondary.eggplant.default);
var Wrap = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.lg, _rules.Spacing.md);
var Logo = (0, _reactEmotion.default)("div")(_templateObject3());
var MenuContainer = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.lg, _rules.Typography.body.fontFamily, _rules.Animation.defaultSpeed, _rules.Colors.primary.eggYolk.default);
var AccountMenuContainer = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.sm, _rules.Spacing.sm);
var LanguageButtons = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Spacing.md, _rules.Spacing.sm);
var CartButtonContainer = (0, _reactEmotion.default)("div")(_templateObject7(), _rules.Spacing.sm);
var LoginButton = (0, _reactEmotion.default)(_ButtonLink.default)(_templateObject8(), _rules.Spacing.sm, _rules.Spacing.md, _rules.BorderRadius.sm, _rules.Animation.defaultSpeed, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Typography.body.lineHeight, _rules.Colors.primary.eggYolk.lighter, _rules.Colors.secondary.eggplant.default);

var _default = (0, _reactIntl.injectIntl)(TopBar);

exports.default = _default;