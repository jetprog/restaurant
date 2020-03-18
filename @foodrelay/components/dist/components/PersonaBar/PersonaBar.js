"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _reactRouterDom = require("react-router-dom");

var _ButtonLink = _interopRequireDefault(require("../ButtonLink"));

var _Button = _interopRequireDefault(require("../Button"));

var _Photo = _interopRequireDefault(require("../Photo"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  margin-top: 0;\n\n  a {\n    margin-right: ", ";\n  }\n  a:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 0;\n  font-size: 30px;\n  color: #4f1d28;\n  margin-bottom: 0;\n  font-family: \"Garamond\";\n  line-height: 40px;\n  @media (max-width: 1300px) {\n    line-height: 30px;\n  }\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", ";\n  box-sizing: border-box;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: ", " 0;\n  @media (max-width: 480px) {\n    padding: ", " 0;\n  }\n"]);

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

var PersonaBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PersonaBar, _React$Component);

  function PersonaBar(props) {
    var _this;

    _classCallCheck(this, PersonaBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PersonaBar).call(this, props));
    _this.state = {
      dropDownShown: false
    };
    return _this;
  }

  _createClass(PersonaBar, [{
    key: "toggleDropDown",
    value: function toggleDropDown() {
      this.setState({
        dropDownShown: !this.state.dropDownShown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          business = _this$props.business,
          buttons = _this$props.buttons,
          onPictureClick = _this$props.onPictureClick,
          intl = _this$props.intl;
      var dropDownShown = this.state.dropDownShown;
      var helloLabel = intl.formatMessage({
        id: "greeting.hello"
      });

      if (user) {
        return _react.default.createElement(Nav, {
          className: "persona-bar"
        }, _react.default.createElement(Wrap, null, _react.default.createElement(Row, null, _react.default.createElement(PhotoWrapper, {
          className: "photo-wrapper"
        }, _react.default.createElement(_Photo.default, {
          picture: user && user.picture,
          size: "small",
          onClick: onPictureClick ? onPictureClick : console.log("no action")
        })), _react.default.createElement(BigTitle, null, helloLabel + " " + user.first_name, "!"), buttons && _react.default.createElement(Buttons, null, buttons))));
      } else if (business) {
        return _react.default.createElement(Nav, {
          className: "persona-bar"
        }, _react.default.createElement(Wrap, null, _react.default.createElement(Row, null, _react.default.createElement(PhotoWrapper, {
          className: "photo-wrapper"
        }, _react.default.createElement(_Photo.default, {
          picture: business.logo,
          size: "small",
          shape: "square",
          onClick: onPictureClick ? onPictureClick : console.log("no action")
        })), _react.default.createElement(BigTitle, null, business.name), buttons && _react.default.createElement(Buttons, null, buttons))));
      } else {
        return _react.default.createElement(Nav, null, _react.default.createElement(Wrap, null, _react.default.createElement(Row, null)));
      }
    }
  }]);

  return PersonaBar;
}(_react.default.Component); // Styles


var Nav = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Colors.secondary.eggshell.default, _rules.Spacing.md, _rules.Spacing.sm);
var Wrap = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.lg);
var Row = (0, _reactEmotion.default)("div")(_templateObject3());
var BigTitle = (0, _reactEmotion.default)("h2")(_templateObject4());
var PhotoWrapper = (0, _reactEmotion.default)("div")(_templateObject5());
var Buttons = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Spacing.md);

var _default = (0, _reactIntl.injectIntl)(PersonaBar);

exports.default = _default;