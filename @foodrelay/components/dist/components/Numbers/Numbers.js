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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  color: ", ";\n  font-size: 14px;\n  min-width: 50px;\n\n  hr {\n    display: none;\n  }\n  svg {\n    color: ", ";\n    font-size: 14px;\n    opacity: 0.5;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " 0;\n  margin: 0 ", " 0 0;\n  font-family: ", ";\n  font-weight: 400;\n  color: ", ";\n  font-size: 18px;\n  opacity: ", ";\n  transition: ", ";\n  flex: 1;\n  flex-grow: 2;\n  min-width: 65px;\n  max-width: 180px;\n  box-sizing: border-box;\n\n  .label {\n    color: ", ";\n    padding-top: ", ";\n  }\n\n  hr {\n    background-color: ", ";\n    border: 0;\n    height: 2px;\n  }\n\n  svg {\n    margin-left: ", ";\n    font-size: 14px;\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-right: -", ";\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-family: ", ";\n  display: inline-block;\n  margin-left: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &:hover .on-hover {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Numbers = function Numbers(_ref) {
  var _ref$numbers = _ref.numbers,
      numbers = _ref$numbers === void 0 ? [] : _ref$numbers,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light;
  return _react.default.createElement(NumberWrap, null, _react.default.createElement(Row, null, numbers && numbers.length > 0 && numbers.map(function (n, k) {
    return _react.default.createElement(Number, _defineProperty({
      key: k,
      color: n.color,
      display: n.display,
      className: n.display,
      empty: parseInt(n.total) < 1
    }, "className", (0, _reactEmotion.cx)(_defineProperty({}, Light, light))), _react.default.createElement(NumberInfo, null, n.total, n.icon && !n.label && _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: n.icon
    }), n.label && _react.default.createElement(Label, null, n.label)), _react.default.createElement("hr", null));
  })));
}; // Styles


var NumberWrap = (0, _reactEmotion.default)("div")(_templateObject());
var Label = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Typography.body.fontFamily, _rules.Spacing.sm);
var Row = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.sm);
var Number = (0, _reactEmotion.default)("h2")(_templateObject4(), _rules.Spacing.xs, _rules.Spacing.sm, _rules.Typography.body.fontFamily, function (props) {
  return props.empty ? _rules.Colors.utility.grey.default : _rules.Colors.utility.black.default;
}, function (props) {
  return props.display == "always" ? "1" : "0";
}, _rules.Animation.defaultSpeed, _rules.Colors.utility.grey.default, _rules.Spacing.xs, function (props) {
  return props.color;
}, _rules.Spacing.sm, function (props) {
  return props.color;
});
var NumberInfo = (0, _reactEmotion.default)("div")(_templateObject5());
var Light = (0, _reactEmotion.css)(_templateObject6(), _rules.Colors.utility.grey.default, _rules.Colors.utility.grey.default);
var _default = Numbers;
exports.default = _default;