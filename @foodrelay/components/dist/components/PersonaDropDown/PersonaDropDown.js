"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _DropDownMenu = _interopRequireDefault(require("../DropDownMenu"));

var _ShortText = _interopRequireDefault(require("../ShortText"));

var _Photo = _interopRequireDefault(require("../Photo"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: ", " ", ";\n  border-radius: ", ";\n  cursor: pointer;\n  font-family: ", ";\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  color: ", ";\n  background: ", ";\n  transition: ", ";\n  .photo {\n    display: inline-block;\n    margin-right: ", ";\n    position: relative;\n    top: 2px;\n    max-width: 30px;\n    height: 30px;\n    min-width: 30px;\n  }\n\n  span {\n    vertical-align: top;\n    line-height: 33px;\n  }\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    background: transparent;\n    padding: 0;\n\n    .photo {\n      margin-right: 0;\n      max-width: 40px;\n      height: 40px;\n      min-width: 40px;\n    }\n\n    &:hover {\n      background: transparent;\n    }\n\n    .short-text,\n    span {\n      display: none;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n\n  .drop-down-menu-content {\n    right: 0;\n  }\n"]);

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

var PersonaDropDown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PersonaDropDown, _React$Component);

  function PersonaDropDown(props) {
    var _this;

    _classCallCheck(this, PersonaDropDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PersonaDropDown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      _this.setState({
        dropDownShown: false
      });
    });

    _this.state = {
      dropDownShown: false
    };
    return _this;
  }

  _createClass(PersonaDropDown, [{
    key: "showDropDown",
    value: function showDropDown() {
      this.setState({
        dropDownShown: true
      });
    }
  }, {
    key: "hideDropDown",
    value: function hideDropDown() {
      this.setState({
        dropDownShown: false
      });
    }
  }, {
    key: "toggleDropDown",
    value: function toggleDropDown(persona) {
      this.setState({
        dropDownShown: !this.state.dropDownShown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          business = _this$props.business,
          buttons = _this$props.buttons,
          activePersona = _this$props.activePersona,
          onChange = _this$props.onChange;
      var dropDownShown = this.state.dropDownShown;

      if (user) {
        return _react.default.createElement(Container, {
          onClick: function onClick() {
            return _this2.toggleDropDown("user");
          },
          className: "user-drop-down"
        }, _react.default.createElement(Button, null, _react.default.createElement(_Photo.default, {
          picture: user.picture,
          size: "small",
          shape: "circle"
        }), _react.default.createElement(_ShortText.default, {
          className: "text",
          text: user.first_name,
          maxLength: 20
        })), _react.default.createElement(_DropDownMenu.default, {
          buttons: buttons,
          shown: dropDownShown,
          padding: false
        }));
      } else {
        return _react.default.createElement(Container, null);
      }
    }
  }]);

  return PersonaDropDown;
}(_react.default.Component);

var Container = (0, _reactEmotion.default)("div")(_templateObject());
var Button = (0, _reactEmotion.default)("a")(_templateObject2(), _rules.Spacing.xs, _rules.Spacing.sm, _rules.BorderRadius.md, _rules.Typography.body.fontFamily, _rules.Colors.utility.white.default, _rules.Colors.secondary.eggplant.default, _rules.Animation.defaultSpeed, _rules.Spacing.sm, _rules.Colors.secondary.eggplant.lighter, _rules.Colors.utility.white.default);
var Active = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.secondary.eggplant.lighter, _rules.Colors.utility.white.default);

var _default = (0, _reactOnclickoutside.default)(PersonaDropDown);

exports.default = _default;