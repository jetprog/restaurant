"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _TextButton = _interopRequireDefault(require("../TextButton"));

var _Button = _interopRequireDefault(require("../Button"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: ", ";\n  padding-right: ", ";\n\n  @media (max-width: 480px) {\n    margin-bottom: ", ";\n  }\n\n  h3 {\n    margin-top: 0;\n    font-size: ", ";\n    font-family: ", ";\n    color: ", ";\n    margin-bottom: ", ";\n  }\n  a {\n    display: block;\n    color: ", ";\n    border-color: transparent;\n    padding: ", " 0;\n    text-decoration: none;\n\n    svg {\n      margin-right: ", ";\n      color: ", ";\n    }\n  }\n\n  a:hover,\n  a.active {\n    color: ", ";\n    border-color: transparent;\n    text-decoration: none;\n\n    svg {\n      color: ", ";\n    }\n  }\n"]);

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

// Atoms
var SecondaryNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SecondaryNav, _React$Component);

  function SecondaryNav(props) {
    _classCallCheck(this, SecondaryNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(SecondaryNav).call(this, props));
  }

  _createClass(SecondaryNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttons = _this$props.buttons,
          maxWidth = _this$props.maxWidth,
          title = _this$props.title;
      return _react.default.createElement(Nav, {
        maxWidth: maxWidth
      }, title && _react.default.createElement("h3", {
        className: "title"
      }, title), buttons);
    }
  }]);

  return SecondaryNav;
}(_react.default.Component); // Styles


var Nav = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.maxWidth;
}, _rules.Spacing.xl, _rules.Spacing.lg, _rules.Typography.subTitle.fontSize, _rules.Typography.subTitle.fontFamily, _rules.Colors.secondary.eggplant.default, _rules.Spacing.md, _rules.Colors.primary.eggYolk.default, _rules.Spacing.sm, _rules.Spacing.sm, _rules.Colors.primary.eggYolk.lighter, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.eggplant.lighter);

var _default = (0, _reactIntl.injectIntl)(SecondaryNav);

exports.default = _default;