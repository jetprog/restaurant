"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

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
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  opacity: 1;\n"]);

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  display: inline-block;\n  height: 20px;\n  min-height: 20px;\n  min-width: 40px;\n  line-height: 20px;\n  border-radius: 16px;\n  overflow: hidden;\n  text-align: center;\n  cursor: default;\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  padding: 0 ", ";\n  margin-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RebateIndicator = function RebateIndicator(_ref) {
  var order = _ref.order,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      intl = _ref.intl;
  var is_free = false;
  var rebate = 0;
  var has_rebate = false;
  var freeLabel = intl.formatMessage({
    id: "rebateIndicator.free"
  });
  var offLabel = intl.formatMessage({
    id: "rebateIndicator.off"
  });
  var fullPriceLabel = intl.formatMessage({
    id: "rebateIndicator.full_price"
  });
  is_free = order.is_fully_paid;
  rebate = order.amount_paid_by_business;
  has_rebate = is_free || rebate > 0;
  var label = "";

  if (has_rebate) {
    if (is_free) {
      label = freeLabel;
    } else {
      label = rebate / 100 + "$ " + offLabel;
    }
  } else {
    label = fullPriceLabel;
  }

  var color = "";

  if (rebate > 0 || is_free) {
    color = "lettuce";
  } else {
    color = "light-grey";
  }

  return _react.default.createElement(_Tag.default, {
    className: "rebate-indicator",
    title: label,
    color: color,
    label: label,
    style: small && "small"
  });
}; // Styles


var Indicator = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Animation.defaultSpeed, _rules.Typography.body.fontFamily, function (props) {
  return props.small ? _rules.Typography.small.fontSize : _rules.Typography.body.fontSize;
}, _rules.Spacing.sm, _rules.Spacing.sm);
var Small = (0, _reactEmotion.css)(_templateObject2());
var Rebate = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.primary.lettuce.lighter, _rules.Colors.secondary.spinach.default);
var Free = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.primary.lettuce.lighter, _rules.Colors.secondary.spinach.default);
var FullPrice = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.utility.lightGrey.default, _rules.Colors.utility.black.default);

var _default = (0, _reactIntl.injectIntl)(RebateIndicator);

exports.default = _default;