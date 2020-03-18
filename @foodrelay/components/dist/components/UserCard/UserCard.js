"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRouterDom = require("react-router-dom");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _ShortText = _interopRequireDefault(require("../ShortText"));

var _Button = _interopRequireDefault(require("../Button"));

var _Photo = _interopRequireDefault(require("../Photo"));

var _RoleIndicator = _interopRequireDefault(require("../RoleIndicator"));

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  background: #fff;\n  position: absolute;\n  top: 30px;\n  right: 0;\n  z-index: 10;\n  box-shadow: 0 0 32px #00000021;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  background: ", ";\n  padding: 4px 8px;\n  font-size: 14px;\n  display: inline-block;\n  margin-top: 4px;\n  margin-right: 4px;\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  display: block;\n  background: #fff;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 14px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 24px;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  opacity: 0.5;\n  margin-bottom: ", ";\n  font-family: ", ";\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-bottom: 4px;\n  font-weight: bold;\n  font-family: ", ";\n  font-size: ", ";\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: ", ";\n  flex: 1;\n  margin: 12px;\n  max-width: calc(25% - 24px);\n  min-width: calc(25% - 24px);\n  flex-direction: row;\n  display: flex;\n  color: ", ";\n\n  &:hover .extra-menu {\n    opacity: 0.5;\n  }\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserCard, _React$Component);

  function UserCard(props) {
    var _this;

    _classCallCheck(this, UserCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserCard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      _this.setState({
        extra_menu_shown: false
      });
    });

    _this.state = {
      extra_menu_shown: false
    };
    return _this;
  }

  _createClass(UserCard, [{
    key: "toggleExtraMenu",
    value: function toggleExtraMenu() {
      this.setState({
        extra_menu_shown: !this.state.extra_menu_shown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          _this$props$current_b = _this$props.current_business,
          current_business = _this$props$current_b === void 0 ? null : _this$props$current_b,
          extraButtons = _this$props.extraButtons,
          _this$props$showJoine = _this$props.showJoinedDate,
          showJoinedDate = _this$props$showJoine === void 0 ? false : _this$props$showJoine,
          _this$props$showRole = _this$props.showRole,
          showRole = _this$props$showRole === void 0 ? true : _this$props$showRole,
          intl = _this$props.intl;
      var extra_menu_shown = this.state.extra_menu_shown;

      if (user) {
        var displayed_role = null;

        if (current_business) {
          displayed_role = user.businessrole_set.find(function (br) {
            return br.business.id === current_business.id;
          });
        }

        var joined_label = intl.formatMessage({
          id: "userCard.joined"
        });
        return _react.default.createElement(UserCardContainer, null, _react.default.createElement(_Photo.default, {
          picture: user.picture,
          size: "small"
        }), _react.default.createElement(Content, null, _react.default.createElement(Title, null, _react.default.createElement(_reactRouterDom.Link, {
          to: "/user/" + user.id
        }, user.first_name && user.last_name ? _react.default.createElement(_ShortText.default, {
          text: user.first_name + " " + user.last_name,
          maxLength: 30
        }) : _react.default.createElement(_ShortText.default, {
          text: user.email,
          maxLength: 25
        }))), _react.default.createElement(TextItem, {
          marginBottom: showJoinedDate ? "0" : _rules.Spacing.sm
        }, user.email), showJoinedDate && _react.default.createElement(TextItem, {
          marginBottom: _rules.Spacing.sm
        }, joined_label + " " + (0, _moment.default)(user.date_joined).format("LL")), displayed_role && showRole && _react.default.createElement(_RoleIndicator.default, {
          role: displayed_role
        }), user.has_payment_method && _react.default.createElement(Tag, null, "Credit card")), _react.default.createElement(ExtraMenuButton, {
          className: "extra-menu",
          onClick: function onClick() {
            return _this2.toggleExtraMenu();
          }
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "ellipsis-v"
        })), extra_menu_shown && _react.default.createElement(ExtraMenu, null, extraButtons));
      } else {
        return _react.default.createElement(UserCardContainer, null);
      }
    }
  }]);

  return UserCard;
}(_react.default.Component);

var UserCardContainer = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.lg, _rules.Colors.secondary.eggplant.default);
var Content = (0, _reactEmotion.default)("div")(_templateObject2());
var Title = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Colors.secondary.eggplant.default);
var TextItem = (0, _reactEmotion.default)("div")(_templateObject4(), function (props) {
  return props.marginBottom;
}, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize);
var ExtraMenuButton = (0, _reactEmotion.default)("a")(_templateObject5(), _rules.Spacing.lg, _rules.Spacing.lg);
var Tag = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Colors.primary.lettuce.default, _rules.Colors.secondary.spinach.default);
var ExtraMenu = (0, _reactEmotion.default)("div")(_templateObject7());

var _default = (0, _reactIntl.injectIntl)((0, _reactOnclickoutside.default)(UserCard));

exports.default = _default;