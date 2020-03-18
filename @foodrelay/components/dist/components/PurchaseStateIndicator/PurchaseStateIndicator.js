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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  min-height: 20px;\n  width: 20px;\n  min-width: 20px;\n  line-height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: ", ";\n  text-align: center;\n  cursor: default;\n  transition: 0.3s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PurchaseStateIndicator = function PurchaseStateIndicator(_ref) {
  var current_state = _ref.current_state,
      not_eating = _ref.not_eating,
      warning = _ref.warning;
  var css_class = "";
  var icon = null;
  var tooltip = "";

  if (current_state === "cart") {
    css_class = InCart;
    icon = "shopping-cart";
    tooltip = "in cart";
  } else if (not_eating) {
    css_class = Delivered;
    icon = "minus";
    tooltip = "not eating";
  } else if (current_state === "paid" && !not_eating) {
    css_class = Confirmed;
    icon = "check";
    tooltip = "paid";
  } else if (current_state === "out for delivery") {
    css_class = Delivered;
    icon = "truck";
    tooltip = "out for delivery";
  } else if (warning) {
    css_class = InCart;
    icon = "exclamation";
  }

  return _react.default.createElement(Indicator, {
    className: css_class,
    title: tooltip
  }, icon && _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  }));
}; // Styles


var Indicator = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Colors.utility.lightGrey.default);
var InCart = (0, _reactEmotion.css)(_templateObject2(), _rules.Colors.utility.black.default);
var Confirmed = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.utility.black.default);
var Delivered = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.utility.black.default);
var _default = PurchaseStateIndicator;
exports.default = _default;