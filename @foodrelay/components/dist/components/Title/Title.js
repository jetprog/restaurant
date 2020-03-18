"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: 250px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n  text-align: right;\n\n  a {\n    margin-right: ", ";\n  }\n\n  a:last-child {\n    margin-right: 0;\n  }\n\n  .extra-menu-wrap {\n    vertical-align: top;\n\n    a {\n      margin-right: 0;\n    }\n  }\n\n  @media (max-width: 480px) {\n    padding-top: ", ";\n    text-align: left;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n  margin: 0;\n  font-family: ", ";\n  color: ", ";\n\n  @media (max-width: 480px) {\n    font-size: 20px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n  margin: 0;\n  font-family: ", ";\n  color: ", ";\n\n  @media (max-width: 480px) {\n    font-size: 24px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n  margin: 0;\n  color: ", ";\n\n  @media (max-width: 480px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  margin-bottom: ", ";\n  @media (max-width: 480px) {\n    margin-bottom: ", ";\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = function Title(_ref) {
  var text = _ref.text,
      buttons = _ref.buttons,
      numbers = _ref.numbers,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 1 : _ref$level,
      marginBottom = _ref.marginBottom;
  return _react.default.createElement(TitleContainer, {
    className: "title",
    marginBottom: marginBottom
  }, numbers && _react.default.createElement(Numbers, null, numbers), level == 1 && _react.default.createElement(Text, null, text), level == 2 && _react.default.createElement(Text2, null, text), level == 3 && _react.default.createElement(Text3, null, text), buttons && _react.default.createElement(Buttons, null, buttons));
}; // Styles


var TitleContainer = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.marginBottom ? props.marginBottom : _rules.Spacing.xl;
}, _rules.Spacing.lg);
var Text = (0, _reactEmotion.default)("h1")(_templateObject2(), _rules.Colors.secondary.eggplant.default);
var Text2 = (0, _reactEmotion.default)("h2")(_templateObject3(), _rules.Typography.body.fontFamily, _rules.Colors.secondary.eggplant.default);
var Text3 = (0, _reactEmotion.default)("h3")(_templateObject4(), _rules.Typography.body.fontFamily, _rules.Colors.secondary.eggplant.default);
var Buttons = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.md, _rules.Spacing.md);
var Numbers = (0, _reactEmotion.default)("div")(_templateObject6());
var _default = Title;
exports.default = _default;