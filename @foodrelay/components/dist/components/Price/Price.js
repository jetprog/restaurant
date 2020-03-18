"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 16px;\n  font-size: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 20px;\n  position: relative;\n  top: -2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: ", ";\n  line-height: 22px;\n  font-size: 16px;\n  color: ", ";\n\n  &:after {\n    position: absolute;\n    top: 10px;\n    height: 2px;\n    left: -3px;\n    right: -3px;\n    width: calc(100% + 6px);\n    background: ", ";\n    display: block;\n    content: \"\";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding: ", " 0 ", " 0;\n  margin-left: auto;\n  justify-content: flex-end;\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Price = function Price(_ref) {
  var price = _ref.price,
      paidByBusiness = _ref.paidByBusiness,
      free = _ref.free,
      intl = _ref.intl;
  var displayPrice = price;

  if (paidByBusiness && paidByBusiness > 0) {
    displayPrice = price - paidByBusiness;
  }

  if (free) {
    displayPrice = 0;
  }

  var freeLabel = intl.formatMessage({
    id: "rebateIndicator.free"
  });
  return _react.default.createElement(PriceContainer, {
    className: "price"
  }, displayPrice <= 0 ? _react.default.createElement(FreePrice, null, freeLabel) : _react.default.createElement(FullPrice, null, displayPrice / 100, "$"), paidByBusiness > 0 && !free && _react.default.createElement(Strikethrough, null, price / 100, "$"));
};

var PriceContainer = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.md, _rules.Spacing.sm, _rules.Typography.body.fontFamily);
var Strikethrough = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.md, _rules.Colors.utility.grey.default, _rules.Colors.utility.grey.default);
var FullPrice = (0, _reactEmotion.default)("div")(_templateObject3());
var FreePrice = (0, _reactEmotion.default)("div")(_templateObject4());

var _default = (0, _reactIntl.injectIntl)(Price);

exports.default = _default;