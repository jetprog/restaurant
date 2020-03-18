"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  overflow: hidden;\n  background: ", ";\n  position: absolute;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  z-index: 1000;\n  width: 250px;\n  margin-right: 0;\n  box-shadow: ", ";\n  padding: ", ";\n\n  hr {\n    border: 0;\n    outline: 0;\n    height: 2px;\n    width: auto;\n    background-color: ", ";\n    margin: 0;\n    display: block;\n    margin: 0 ", ";\n  }\n\n  a {\n    margin: 0;\n    border-radius: 0;\n    display: block;\n    color: ", ";\n    line-height: 1rem;\n    background: transparent;\n    transition: ", ";\n    padding: ", " ", ";\n    border-radius: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    border: 0;\n    text-decoration: none;\n\n    svg {\n      margin-right: ", ";\n    }\n\n    span {\n      border: 0;\n      color: ", ";\n      text-decoration: none;\n    }\n  }\n\n  .menu {\n    padding: ", " ", ";\n  }\n\n  a:hover,\n  a.active,\n  a.active:hover {\n    color: ", ";\n    background: ", ";\n  }\n\n  strong {\n    font-family: ", ";\n    font-size: 18px;\n    color: ", ";\n    border-bottom: 2px solid ", ";\n    padding-bottom: ", ";\n    font-weight: 600;\n    display: block;\n    padding: ", " 0;\n    margin: 0 ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  padding-top: -20px;\n"]);

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

var DropDownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropDownMenu, _React$Component);

  function DropDownMenu(props) {
    _classCallCheck(this, DropDownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropDownMenu).call(this, props));
  }

  _createClass(DropDownMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttons = _this$props.buttons,
          shown = _this$props.shown,
          position = _this$props.position,
          _this$props$padding = _this$props.padding,
          padding = _this$props$padding === void 0 ? true : _this$props$padding;
      return _react.default.createElement(DropDownMenuWrapper, {
        className: "dropdown-menu-wrap"
      }, shown && buttons && _react.default.createElement(DropDownMenuContent, {
        className: "drop-down-menu-content",
        position: position,
        padding: padding
      }, buttons));
    }
  }]);

  return DropDownMenu;
}(_react.default.Component); // Styles


var DropDownMenuWrapper = (0, _reactEmotion.default)("div")(_templateObject());
var DropDownMenuContent = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.BorderRadius.sm, _rules.Colors.utility.white.default, _rules.Spacing.md, function (props) {
  return props.position == "right" ? _rules.Spacing.sm : "auto";
}, function (props) {
  return props.position == "left" ? _rules.Spacing.sm : "auto";
}, _rules.Shadows.level3, function (props) {
  return props.padding ? _rules.Spacing.md : "0";
}, _rules.Colors.secondary.mushrooms.default, _rules.Spacing.md, _rules.Colors.secondary.eggplant.lighter, _rules.Animation.defaultSpeed, _rules.Spacing.sm, _rules.Spacing.sm, _rules.BorderRadius.sm, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Spacing.sm, _rules.Colors.utility.black.default, _rules.Spacing.sm, _rules.Spacing.md, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.eggshell.default, _rules.Typography.title.fontFamily, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.mushrooms.default, _rules.Spacing.sm, _rules.Spacing.sm, _rules.Spacing.md);
var _default = DropDownMenu;
exports.default = _default;