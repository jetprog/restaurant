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

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: default;\n\n  &:hover {\n    color: ", ";\n    border-color: transparent;\n    cursor: default;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  padding: ", " 0;\n  display: inline-block;\n  cursor: pointer;\n  transition: ", ";\n  border-bottom: 2px solid;\n  border-color: transparent;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n\n  svg {\n    margin-right: ", ";\n  }\n\n  svg.icon-right {\n    margin-left: ", ";\n  }\n\n  &:hover {\n    border-bottom: 2px solid;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextButton = function TextButton(_ref) {
  var onClick = _ref.onClick,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "egg-yolk" : _ref$color,
      label = _ref.label,
      disabled = _ref.disabled,
      iconRight = _ref.iconRight,
      className = _ref.className;
  return _react.default.createElement(LinkElement, {
    onClick: disabled ? console.log("disabled") : function () {
      return onClick();
    },
    className: (0, _reactEmotion.cx)(_defineProperty({}, Cherry, color === "cherry" && !disabled), _defineProperty({}, Squash, color === "squash" && !disabled), _defineProperty({}, EggYolk, color === "egg-yolk" && !disabled), _defineProperty({}, Lettuce, color === "lettuce" && !disabled), _defineProperty({}, Eggplant, color === "eggplant" && !disabled), _defineProperty({}, Spinach, color === "spinach" && !disabled), _defineProperty({}, EatYourGreens, color === "eat-your-greens" && !disabled), _defineProperty({}, Mushrooms, color === "mushrooms" && !disabled), _defineProperty({}, EggShell, color === "egg-shell" && !disabled), _defineProperty({}, Black, color === "black" && !disabled), _defineProperty({}, Charcoal, color === "charcoal" && !disabled), _defineProperty({}, Grey, color === "grey" && !disabled), _defineProperty({}, Disabled, disabled), className, "text-button")
  }, icon && _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  }), label, iconRight && _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "icon-right",
    icon: iconRight
  }));
};

var LinkElement = (0, _reactEmotion.default)("a")(_templateObject(), _rules.Spacing.xs, _rules.Animation.defaultSpeed, _rules.Colors.primary.eggYolk.default, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Spacing.sm, _rules.Spacing.sm); // Color styles

var Cherry = (0, _reactEmotion.css)(_templateObject2(), _rules.Colors.primary.cherry.default, _rules.Colors.primary.cherry.lighter);
var Squash = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.primary.squash.default, _rules.Colors.primary.squash.lighter);
var EggYolk = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.primary.eggYolk.default, _rules.Colors.primary.eggYolk.lighter);
var Lettuce = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.primary.lettuce.default, _rules.Colors.primary.lettuce.lighter);
var Eggplant = (0, _reactEmotion.css)(_templateObject6(), _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.eggplant.lighter);
var Spinach = (0, _reactEmotion.css)(_templateObject7(), _rules.Colors.secondary.spinach.default, _rules.Colors.secondary.spinach.lighter);
var EatYourGreens = (0, _reactEmotion.css)(_templateObject8(), _rules.Colors.secondary.eatYourGreens.default, _rules.Colors.secondary.eatYourGreens.default);
var Mushrooms = (0, _reactEmotion.css)(_templateObject9(), _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.mushrooms.default);
var EggShell = (0, _reactEmotion.css)(_templateObject10(), _rules.Colors.secondary.eggshell.default, _rules.Colors.secondary.eggshell.default);
var Black = (0, _reactEmotion.css)(_templateObject11(), _rules.Colors.utility.black.default);
var Charcoal = (0, _reactEmotion.css)(_templateObject12(), _rules.Colors.utility.charcoal.default);
var Grey = (0, _reactEmotion.css)(_templateObject13(), _rules.Colors.utility.grey.default, _rules.Colors.utility.black.default); // State styles

var Disabled = (0, _reactEmotion.css)(_templateObject14(), _rules.Colors.utility.grey.default, _rules.Colors.utility.grey.default);
var _default = TextButton;
exports.default = _default;