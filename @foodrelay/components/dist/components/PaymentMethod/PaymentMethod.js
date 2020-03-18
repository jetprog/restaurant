"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _data_structure = require("../../utils/data_structure");

var _Button = _interopRequireDefault(require("../Button"));

var _rules = require("../../rules");

var _mastercard = _interopRequireDefault(require("../../img/mastercard.svg"));

var _noCard = _interopRequireDefault(require("../../img/no-card.svg"));

var _visa = _interopRequireDefault(require("../../img/visa.svg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 4;\n\n  h3 {\n    margin: 0;\n    font-size: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  padding-right: ", ";\n  max-width: 60px;\n  line-height: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  transition: 0.3s;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  margin-top: ", ";\n  font-size: 0.8em;\n\n  &:hover {\n    border-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n\n  p {\n    margin-top: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaymentMethod = function PaymentMethod(_ref) {
  var stripe_customer = _ref.stripe_customer,
      onChangePaymentMethod = _ref.onChangePaymentMethod,
      state = _ref.state,
      deadlines = _ref.deadlines,
      intl = _ref.intl;
  var add_card_label = intl.formatMessage({
    id: "payment_method.add_card"
  });

  if (stripe_customer) {
    return _react.default.createElement(PaymentMethodWrap, null, _react.default.createElement(Card, null, _react.default.createElement(Icon, null, stripe_customer.stripe.sources.data[0].brand.toLowerCase() === "mastercard" && _react.default.createElement("img", {
      src: _mastercard.default
    }), stripe_customer.stripe.sources.data[0].brand.toLowerCase() === "visa" && _react.default.createElement("img", {
      src: _visa.default
    })), _react.default.createElement(CardInfos, null, _react.default.createElement("h3", null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "payment_method.card_ending",
      defaultMessage: "card ending in"
    }), " ", stripe_customer.stripe.sources.data[0].last4), state == "Draft" && !deadlines.editing.passed && _react.default.createElement(LinkText, {
      className: "change-payment-method",
      onClick: onChangePaymentMethod
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "payment_method.change_payment_label",
      defaultMessage: "Change payment method"
    })))));
  } else {
    return _react.default.createElement(NoCard, null, _react.default.createElement(Card, null, _react.default.createElement(Icon, null, _react.default.createElement("img", {
      src: _noCard.default
    })), _react.default.createElement(CardInfos, null, _react.default.createElement("h3", null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "payment_method.no_card",
      defaultMessage: "No card on file"
    })))), _react.default.createElement(_Button.default, {
      className: "add-payment-method",
      onClick: onChangePaymentMethod,
      label: add_card_label
    }));
  }
}; // Styles


var PaymentMethodWrap = (0, _reactEmotion.default)("div")(_templateObject());
var Card = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Typography.body.fontFamily);
var NoCard = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Colors.primary.squash.default, _rules.Typography.body.fontFamily, _rules.Spacing.sm);
var LinkText = (0, _reactEmotion.default)("span")(_templateObject4(), _rules.Colors.primary.eggYolk.default, _rules.Spacing.sm, _rules.Colors.primary.eggYolk.default);
var Icon = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.md, _rules.Spacing.lg);
var CardInfos = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Typography.body.fontSize);

var _default = (0, _reactIntl.injectIntl)(PaymentMethod);

exports.default = _default;