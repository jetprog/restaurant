"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _reactRouterDom = require("react-router-dom");

var _data_structure = require("../../utils/data_structure");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _Photo = _interopRequireDefault(require("../Photo"));

var _ShortText = _interopRequireDefault(require("../ShortText"));

var _RoleIndicator = _interopRequireDefault(require("../RoleIndicator"));

var _rules = require("../../rules");

var _email = _interopRequireDefault(require("../../img/email.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: ", ";\n  top: ", ";\n\n  a {\n    padding: ", ";\n    color: #f4af42;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  p {\n    margin: 0;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  opacity: 1;\n  margin-right: ", ";\n  display: inline-block;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 ", " 0;\n  text-transform: capitalize;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  overflow: hidden;\n  background: #fff;\n  position: absolute;\n  top: 45px;\n  right: 0;\n  z-index: 10;\n  width: 300px;\n  padding: ", ";\n  box-shadow: ", ";\n  left: 0;\n\n  .profile-photo {\n    flex: 1;\n  }\n\n  a {\n    margin: 0;\n    border-radius: 0;\n    display: block;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  opacity: 0.5;\n  margin-bottom: ", ";\n  font-family: ", ";\n  font-size: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  padding-top: ", ";\n  padding-right: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .photo {\n    display: inline-block;\n  }\n\n  .name {\n    color: ", ";\n    text-decoration: none;\n    font-weight: bold;\n    transition: ", ";\n  }\n\n  .name:hover {\n    text-decoration: ", ";\n  }\n\n  strong {\n    line-height: 36px;\n    display: inline-block;\n    vertical-align: top;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  cursor: ", ";\n  box-sizing: border-box;\n  text-decoration: none;\n  &:hover {\n    strong {\n      border-bottom: 2px solid;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n"]);

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

var ProfilePopup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePopup, _React$Component);

  function ProfilePopup(props) {
    var _this;

    _classCallCheck(this, ProfilePopup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfilePopup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      _this.setState({
        profile_popup_shown: false
      });
    });

    _this.state = {
      profile_popup_shown: false
    };
    return _this;
  }

  _createClass(ProfilePopup, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "toggleProfilePopup",
    value: function toggleProfilePopup() {
      this.setState({
        profile_popup_shown: !this.state.profile_popup_shown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          current_business = _this$props.current_business,
          _this$props$showRole = _this$props.showRole,
          showRole = _this$props$showRole === void 0 ? false : _this$props$showRole,
          _this$props$showPopup = _this$props.showPopupOnClick,
          showPopupOnClick = _this$props$showPopup === void 0 ? true : _this$props$showPopup,
          intl = _this$props.intl;
      var profile_popup_shown = this.state.profile_popup_shown;
      var displayed_role = null;

      if (current_business && user.businessrole_set) {
        displayed_role = user.businessrole_set.find(function (br) {
          return br.business.id === current_business.id;
        });
      } else if (user.is_email && user.role) {
        displayed_role = {
          role: user.role
        };
      }

      return _react.default.createElement(ProfilePopupWrapper, {
        className: "profile-popup-wrap"
      }, _react.default.createElement(ProfilePopupButton, {
        className: "extra-menu",
        showPopupOnClick: showPopupOnClick,
        onClick: showPopupOnClick ? function () {
          return _this2.toggleProfilePopup();
        } : function () {
          return console.log("don't show popup");
        }
      }, _react.default.createElement(User, {
        showPopupOnClick: showPopupOnClick
      }, user.is_email ? _react.default.createElement(_Photo.default, {
        size: "small",
        picture: _email.default
      }) : _react.default.createElement(_Photo.default, {
        size: "small",
        picture: user.picture
      }), _react.default.createElement(Content, null, user.first_name && user.last_name ? _react.default.createElement(_ShortText.default, {
        text: user.first_name + " " + user.last_name,
        maxLength: 30,
        classNames: "name"
      }) : _react.default.createElement(_ShortText.default, {
        text: user.email,
        classNames: "name",
        maxLength: 25
      }), _react.default.createElement(TextItem, null, user.email)), _react.default.createElement(Content, null, displayed_role && showRole && _react.default.createElement(_RoleIndicator.default, {
        role: displayed_role
      })))), profile_popup_shown && showPopupOnClick && _react.default.createElement(ProfilePopupContent, null, _react.default.createElement(Row, null, _react.default.createElement(_Photo.default, {
        size: "small",
        picture: user.picture
      }), _react.default.createElement(Info, null, _react.default.createElement(TextItem, null, _react.default.createElement(Id, null, "ID: ", user.id)), user.first_name && user.last_name && _react.default.createElement(Name, null, user.first_name + " " + user.last_name), _react.default.createElement(TextItem, null, user.email), _react.default.createElement(TextItem, null, (0, _data_structure.formatPhone)(user.mobile_phone, intl.locale))), _react.default.createElement("div", null)), _react.default.createElement(LinkToProfile, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/user/" + user.id + "/"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "external-link-alt"
      })))));
    }
  }]);

  return ProfilePopup;
}(_react.default.Component); // styles


var ProfilePopupWrapper = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Colors.secondary.eggplant.default);
var ProfilePopupButton = (0, _reactEmotion.default)("a")(_templateObject2(), function (props) {
  return props.showPopupOnClick ? "pointer" : "default";
});
var User = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Colors.secondary.eggplant.default, _rules.Animation.defaultSpeed, function (props) {
  return props.showPopupOnClick ? "underline" : "none";
});
var Content = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.xs, _rules.Spacing.md);
var TextItem = (0, _reactEmotion.default)("div")(_templateObject5(), function (props) {
  return props.marginBottom;
}, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize);
var ProfilePopupContent = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.BorderRadius.sm, _rules.Spacing.md, _rules.Shadows.level3);
var Row = (0, _reactEmotion.default)("div")(_templateObject7());
var Name = (0, _reactEmotion.default)("h3")(_templateObject8(), _rules.Spacing.sm);
var Id = (0, _reactEmotion.default)("span")(_templateObject9(), _rules.Spacing.sm);
var Info = (0, _reactEmotion.default)("div")(_templateObject10());
var LinkToProfile = (0, _reactEmotion.default)("div")(_templateObject11(), _rules.Spacing.sm, _rules.Spacing.sm, _rules.Spacing.sm);

var _default = (0, _reactIntl.injectIntl)((0, _reactOnclickoutside.default)(ProfilePopup));

exports.default = _default;