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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageContent = function PageContent(_ref) {
  var _ref$paddingTop = _ref.paddingTop,
      paddingTop = _ref$paddingTop === void 0 ? _rules.Spacing.lg : _ref$paddingTop,
      _ref$paddingBottom = _ref.paddingBottom,
      paddingBottom = _ref$paddingBottom === void 0 ? _rules.Spacing.lg : _ref$paddingBottom,
      children = _ref.children;
  return _react.default.createElement(Content, {
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
  }, children);
};

var Content = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return "calc(100% - " + (props.paddingTop + " - " + props.paddingBottom) + ")";
}, function (props) {
  return props.paddingTop;
}, function (props) {
  return props.paddingBottom;
});
var _default = PageContent;
exports.default = _default;