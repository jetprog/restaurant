"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _indicators = require("../../utils/indicators");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  svg {\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  svg {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-color: ", ";\n  color: #fff;\n  svg {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 31px;\n  text-align: center;\n  font-size: 20px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: ", ";\n  background: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 31px;\n  display: inline-block;\n  border-radius: 19px;\n  overflow: hidden;\n  line-height: 31px;\n  cursor: default;\n  border: 2px solid;\n  padding-right: ", ";\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PlateTypeIndicator = function PlateTypeIndicator(_ref) {
  var plate = _ref.plate,
      intl = _ref.intl;
  var plateType = null;
  var css_class = "";
  var icon = null;
  var tooltip = "";
  var hot_plate_label = intl.formatMessage({
    id: "plateTypeIndicator.hot_plate_label"
  });
  var salad_label = intl.formatMessage({
    id: "plateTypeIndicator.salad_label"
  });
  var sandwich_label = intl.formatMessage({
    id: "plateTypeIndicator.sandwich_label"
  });

  if (plate) {
    plateType = (0, _indicators.getPlateCategory)(plate);

    if (plateType === "hot_plate") {
      css_class = HotPlate;
      icon = "soup";
      tooltip = hot_plate_label;
    } else if (plateType === "salad") {
      css_class = Salad;
      icon = "salad";
      tooltip = salad_label;
    } else if (plateType === "sandwich") {
      css_class = Sandwich;
      icon = "sandwich";
      tooltip = sandwich_label;
    }
  }

  return _react.default.createElement(Indicator, {
    className: (0, _reactEmotion.cx)(css_class, "plate-type-indicator"),
    title: tooltip
  }, icon && _react.default.createElement(IconWrap, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  })), tooltip);
}; // Styles


var Indicator = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.sm, _rules.Typography.body.fontFamily);
var IconWrap = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.sm);
var HotPlate = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.primary.squash.default, _rules.Colors.primary.squash.default, _rules.Colors.primary.squash.default);
var Salad = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.secondary.eatYourGreens.default, _rules.Colors.secondary.eatYourGreens.default, _rules.Colors.secondary.spinach.default, _rules.Colors.secondary.eatYourGreens.default);
var Sandwich = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.primary.eggYolk.default, _rules.Colors.primary.eggYolk.default, _rules.Colors.secondary.eggplant.default, _rules.Colors.primary.eggYolk.default);

var _default = (0, _reactIntl.injectIntl)(PlateTypeIndicator);

exports.default = _default;