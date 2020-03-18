"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _utils = require("../../i18n/utils.js");

var _rules = require("../../rules");

var _Tag = _interopRequireDefault(require("../Tag"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  display: inline-block;\n  height: 20px;\n  min-height: 20px;\n  min-width: 40px;\n  line-height: 20px;\n  border-radius: 16px;\n  overflow: hidden;\n  background: ", ";\n  text-align: center;\n  cursor: default;\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  padding: 0 ", ";\n  margin-right: ", ";\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderStateIndicator = function OrderStateIndicator(_ref) {
  var current_state = _ref.current_state,
      is_recurring = _ref.is_recurring,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? true : _ref$small,
      _ref$showColor = _ref.showColor,
      showColor = _ref$showColor === void 0 ? true : _ref$showColor,
      intl = _ref.intl;
  var color = "";

  if (current_state && current_state.value === "Draft") {
    color = "light-grey";
  }

  if (current_state && current_state.value === "Confirmed") {
    color = "eat-your-greens";
  }

  if (current_state && current_state.value === "Cancelled") {
    color = "squash";
  }

  var label = null;

  if (current_state && current_state.value) {
    label = (0, _utils.getTranslation)(current_state, intl.locale);
  }

  return _react.default.createElement(_Tag.default, {
    label: label ? label.name : "",
    style: small && "small",
    icon: is_recurring && "sync-alt",
    background: showColor,
    color: color
  });
}; // Styles


var Indicator = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.showColor && _rules.Colors.utility.lightGrey.default;
}, _rules.Animation.defaultSpeed, _rules.Typography.body.fontFamily, function (props) {
  return props.small ? _rules.Typography.small.fontSize : _rules.Typography.body.fontSize;
}, _rules.Spacing.sm, _rules.Spacing.sm, _rules.Spacing.sm);
var DraftColor = (0, _reactEmotion.css)(_templateObject2(), _rules.Colors.utility.black.default);
var DraftBack = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.utility.lightGrey.default, _rules.Colors.utility.black.default);
var ConfirmedColor = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.secondary.spinach.default);
var ConfirmedBack = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.secondary.eatYourGreens.default, _rules.Colors.secondary.spinach.default);

var _default = (0, _reactIntl.injectIntl)(OrderStateIndicator);

exports.default = _default;