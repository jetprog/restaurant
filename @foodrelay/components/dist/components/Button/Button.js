"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: default;\n  background: ", ";\n\n  &:hover {\n    color: ", ";\n    cursor: default;\n    background: ", ";\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  color: ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", "85;\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  display: inline-block;\n  cursor: pointer;\n  padding: ", " ", ";\n  border-radius: ", ";\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  max-height: 20px;\n\n  svg {\n    margin-right: ", ";\n  }\n\n  svg.icon-right {\n    margin-left: ", ";\n    margin-right: 0;\n  }\n\n  @media (max-width: 1300px) {\n    padding: 6px 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "egg-yolk" : _ref$color,
      label = _ref.label,
      disabled = _ref.disabled,
      iconRight = _ref.iconRight,
      highlighted = _ref.highlighted;
  return _react.default.createElement(LinkElement, {
    onClick: disabled ? console.log("disabled") : function () {
      return onClick();
    },
    className: (0, _reactEmotion.cx)(_defineProperty({}, Cherry, color === "cherry" && !disabled), _defineProperty({}, Squash, color === "squash" && !disabled), _defineProperty({}, EggYolk, color === "egg-yolk" && !disabled), _defineProperty({}, Lettuce, color === "lettuce" && !disabled), _defineProperty({}, Eggplant, color === "eggplant" && !disabled), _defineProperty({}, Spinach, color === "spinach" && !disabled), _defineProperty({}, EatYourGreens, color === "eat-your-greens" && !disabled), _defineProperty({}, Mushrooms, color === "mushrooms" && !disabled), _defineProperty({}, EggShell, color === "egg-shell" && !disabled), _defineProperty({}, GreenBeans, color === "green-beans" && !disabled), _defineProperty({}, Black, color === "black" && !disabled), _defineProperty({}, Charcoal, color === "charcoal" && !disabled), _defineProperty({}, Grey, color === "grey" && !disabled), _defineProperty({}, White, color === "white" && !disabled), _defineProperty({}, Transparent, color === "transparent" && !disabled), _defineProperty({}, Disabled, disabled), _defineProperty({}, Highlighted, highlighted), "button")
  }, icon && _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  }), label, iconRight && _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "icon-right",
    icon: iconRight
  }));
}; // Styles


var LinkElement = (0, _reactEmotion.default)("a")(_templateObject(), _rules.Spacing.sm, _rules.Spacing.md, _rules.BorderRadius.sm, _rules.Animation.defaultSpeed, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Typography.body.lineHeight, _rules.Spacing.sm, _rules.Spacing.sm); // Color styles

var Cherry = (0, _reactEmotion.css)(_templateObject2(), _rules.Colors.primary.cherry.default, _rules.Colors.utility.white.default, _rules.Colors.primary.cherry.lighter, _rules.Colors.utility.white.default);
var Squash = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.primary.squash.default, _rules.Colors.utility.white.default, _rules.Colors.primary.squash.lighter, _rules.Colors.utility.white.default);
var EggYolk = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.primary.eggYolk.default, _rules.Colors.secondary.eggplant.default, _rules.Colors.primary.eggYolk.lighter, _rules.Colors.secondary.eggplant.default);
var Lettuce = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.primary.lettuce.default, _rules.Colors.secondary.spinach.default, _rules.Colors.primary.lettuce.lighter, _rules.Colors.secondary.spinach.default);
var Eggplant = (0, _reactEmotion.css)(_templateObject6(), _rules.Colors.secondary.eggplant.default, _rules.Colors.utility.white.default, _rules.Colors.secondary.eggplant.lighter, _rules.Colors.utility.white.default);
var Spinach = (0, _reactEmotion.css)(_templateObject7(), _rules.Colors.secondary.spinach.default, _rules.Colors.utility.white.default, _rules.Colors.secondary.spinach.lighter, _rules.Colors.utility.white.default);
var EatYourGreens = (0, _reactEmotion.css)(_templateObject8(), _rules.Colors.secondary.eatYourGreens.default, _rules.Colors.secondary.spinach.default, _rules.Colors.secondary.eatYourGreens.default, _rules.Colors.secondary.spinach.default);
var Mushrooms = (0, _reactEmotion.css)(_templateObject9(), _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.default);
var EggShell = (0, _reactEmotion.css)(_templateObject10(), _rules.Colors.secondary.eggshell.default, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.default);
var GreenBeans = (0, _reactEmotion.css)(_templateObject11(), _rules.Colors.secondary.greenBeans.default, _rules.Colors.utility.white.default, _rules.Colors.secondary.greenBeans.default, _rules.Colors.utility.white.default);
var Black = (0, _reactEmotion.css)(_templateObject12(), _rules.Colors.utility.black.default, _rules.Colors.utility.white.default);
var Charcoal = (0, _reactEmotion.css)(_templateObject13(), _rules.Colors.utility.charcoal.default, _rules.Colors.utility.white.default);
var Grey = (0, _reactEmotion.css)(_templateObject14(), _rules.Colors.utility.grey.default, _rules.Colors.utility.black.default);
var White = (0, _reactEmotion.css)(_templateObject15(), _rules.Colors.utility.white.default, _rules.Colors.utility.black.default);
var Transparent = (0, _reactEmotion.css)(_templateObject16(), _rules.Colors.utility.black.default); // State styles

var Disabled = (0, _reactEmotion.css)(_templateObject17(), _rules.Colors.utility.grey.default, _rules.Colors.utility.lightGrey.default, _rules.Colors.utility.grey.default, _rules.Colors.utility.lightGrey.default);
var Highlighted = (0, _reactEmotion.css)(_templateObject18(), _rules.Shadows.level2, _rules.Shadows.level3);
var _default = Button;
exports.default = _default;