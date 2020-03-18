"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  div {\n    color: ", ";\n    background: ", "90;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  font-weight: bold;\n  font-family: ", ";\n  font-size: ", ";\n\n  div {\n    padding: 2px ", ";\n    border-radius: 12px;\n    margin-bottom: 8px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  margin: 0 ", " ", " 0;\n  font-family: ", ";\n  font-size: ", ";\n  display: inline-block;\n  font-size: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  margin: 0 ", " ", " 0;\n  font-family: ", ";\n  font-size: ", ";\n  display: inline-block;\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " 0 ", " 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tags = function Tags(_ref) {
  var restrictions = _ref.restrictions,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? "all" : _ref$display,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "default" : _ref$size,
      _ref$isPassed = _ref.isPassed,
      isPassed = _ref$isPassed === void 0 ? false : _ref$isPassed,
      intl = _ref.intl;

  if (restrictions) {
    return _react.default.createElement(TagContainer, {
      className: (0, _reactEmotion.cx)(_defineProperty({}, Small, size === "small"), _defineProperty({}, Past, isPassed))
    }, restrictions.is_vegan && (display == "all" || display == "diet") && _react.default.createElement(RestrictionTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "dietTag.vegan",
      defaultMessage: "Vegan"
    })), restrictions.is_vegetarian && (display == "all" || display == "diet") && _react.default.createElement(RestrictionTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "dietTag.vegetarian",
      defaultMessage: "Vegetarian"
    })), (restrictions.is_gluten_free || !restrictions.has_gluten) && (display == "all" || display == "diet") && _react.default.createElement(RestrictionTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "dietTag.gluten_free",
      defaultMessage: "Gluten Free"
    })), restrictions.has_milk && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_dairy",
      defaultMessage: "Contains dairy"
    })), (restrictions.has_gluten || restrictions.is_gluten_free == false) && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_gluten",
      defaultMessage: "Contains gluten"
    })), restrictions.has_soy && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_soybeans",
      defaultMessage: "Contains Soybeans"
    })), restrictions.has_shellfish && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_shellfish",
      defaultMessage: "Contains Shellfish"
    })), restrictions.has_corn && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_corn",
      defaultMessage: "Contains corn"
    })), restrictions.has_nuts && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_nuts",
      defaultMessage: "Contains tree nuts"
    })), restrictions.has_eggs && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_eggs",
      defaultMessage: "Contains eggs"
    })), restrictions.has_peanuts && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_peanuts",
      defaultMessage: "Contains peanuts"
    })), restrictions.has_pork && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_pork",
      defaultMessage: "Contains pork"
    })), restrictions.has_fish && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_fish",
      defaultMessage: "Contains fish"
    })), restrictions.has_alcohol && (display == "all" || display == "allergy") && _react.default.createElement(AllergyTag, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "allergyTag.has_alcohol",
      defaultMessage: "Contains alcohol"
    })));
  } else {
    return _react.default.createElement("div", null);
  }
};

var TagContainer = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.md, _rules.Spacing.sm);
var RestrictionTag = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.xs, _rules.Spacing.sm, _rules.BorderRadius.sm, _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.darker, _rules.Spacing.sm, _rules.Spacing.md, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize);
var AllergyTag = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.xs, _rules.Spacing.sm, _rules.BorderRadius.sm, _rules.Colors.primary.squash.lighter, _rules.Colors.utility.white.default, _rules.Spacing.sm, _rules.Spacing.md, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize);
var Small = (0, _reactEmotion.css)(_templateObject4(), _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize, _rules.Spacing.sm);
var Past = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.secondary.eggplant.lighter, _rules.Colors.secondary.mushrooms.default);

var _default = (0, _reactIntl.injectIntl)(Tags);

exports.default = _default;