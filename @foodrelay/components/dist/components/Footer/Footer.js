"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _ErrorBoundary = _interopRequireDefault(require("../ErrorBoundary"));

var _rules = require("../../rules");

var _logotype_icon_white = _interopRequireDefault(require("../../img/logotype_icon_white.svg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  color: ", ";\n  opacity: 0.5;\n  font-family: ", ";\n  font-size: ", ";\n  max-width: 150px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  padding-left: ", ";\n  padding-right: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  span {\n    opacity: 0.5;\n    color: ", ";\n  }\n  a {\n    opacity: 0.5;\n    color: ", ";\n    text-decoration: none;\n    transition: ", ";\n    margin: 0 ", " 0 0;\n    font-size: ", ";\n    padding: 0;\n    position: relative;\n  }\n  a:after {\n    content: \"\u2022\";\n    position: absolute;\n    right: -", ";\n  }\n  a:last-child {\n    margin-right: 0;\n  }\n  a:last-child:after {\n    content: \"\";\n  }\n  a:hover,\n  a.active {\n    opacity: 1;\n    color: ", ";\n    border-color: transparent;\n  }\n  @media (max-width: 480px) {\n    display: block;\n    padding: 0;\n    a {\n      display: block;\n      margin: 0;\n    }\n    a:after {\n      content: \"\";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  width: 25px;\n  min-height: 40px;\n  img {\n    height: 30px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  padding-left: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  height: 30px;\n  line-height: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var year = (0, _moment.default)();

var Footer = function Footer(_ref) {
  var buttons = _ref.buttons,
      logoLink = _ref.logoLink,
      intl = _ref.intl;
  return _react.default.createElement(FooterWrap, null, _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement(Logo, null, _react.default.createElement("img", {
    src: _logotype_icon_white.default
  })), _react.default.createElement(Slogan, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "footer.slogan",
    defaultMessage: "Feeding Company Culture"
  })), buttons && _react.default.createElement(Nav, null, buttons), _react.default.createElement(Copyright, null, "\xA9 ", year.format("YYYY"), " FoodRelay inc.")));
}; // Styles


var FooterWrap = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.sm, _rules.Spacing.md);
var Slogan = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.md, _rules.Colors.secondary.eggplant.default, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize);
var Logo = (0, _reactEmotion.default)("div")(_templateObject3());
var Nav = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.md, _rules.Spacing.md, _rules.Colors.secondary.eggplant.default, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.eggplant.default, _rules.Animation.defaultSpeed, _rules.Spacing.lg, _rules.Typography.small.fontSize, _rules.Spacing.md, _rules.Colors.secondary.eggplant.default);
var Copyright = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Colors.secondary.eggplant.default, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize);

var _default = (0, _reactIntl.injectIntl)(Footer);

exports.default = _default;