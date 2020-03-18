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

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: ", " 0;\n  color: #", ";\n  max-width: 300px;\n  opacity: 0.5;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 72px;\n  color: #", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: right;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1158px;\n  padding: 0 ", ";\n  margin: 0 auto;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 10;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.3;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " 0;\n  box-sizing: border-box;\n  min-height: 300px;\n  background-size: cover;\n  background-image: url(", ");\n  background-color: #", ";\n  background-position: center;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PhotoHeader = function PhotoHeader(_ref) {
  var photo = _ref.photo,
      title = _ref.title,
      subtitle = _ref.subtitle,
      buttons = _ref.buttons,
      _ref$backColor = _ref.backColor,
      backColor = _ref$backColor === void 0 ? "fcf7f0" : _ref$backColor,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? "ffffff" : _ref$textColor;
  return _react.default.createElement(Header, {
    photo: photo,
    backColor: backColor
  }, _react.default.createElement(Scrim, {
    backColor: backColor
  }), _react.default.createElement(Wrap, null, _react.default.createElement(Row, null, _react.default.createElement(Infos, null, title && _react.default.createElement(Title, {
    textColor: textColor
  }, title), subtitle && _react.default.createElement(SubTitle, {
    textColor: textColor
  }, subtitle)), _react.default.createElement(Buttons, null, buttons))));
};

var Header = (0, _reactEmotion.default)("header")(_templateObject(), _rules.Spacing.xl, function (props) {
  return props.photo;
}, function (props) {
  return props.backColor;
});
var Scrim = (0, _reactEmotion.default)("div")(_templateObject2(), function (props) {
  return props.backColor;
});
var Wrap = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.lg);
var Row = (0, _reactEmotion.default)("div")(_templateObject4());
var Infos = (0, _reactEmotion.default)("div")(_templateObject5());
var Buttons = (0, _reactEmotion.default)("div")(_templateObject6());
var Title = (0, _reactEmotion.default)("h1")(_templateObject7(), function (props) {
  return props.textColor;
});
var SubTitle = (0, _reactEmotion.default)("h3")(_templateObject8(), _rules.Spacing.md, function (props) {
  return props.textColor;
});
var _default = PhotoHeader;
exports.default = _default;