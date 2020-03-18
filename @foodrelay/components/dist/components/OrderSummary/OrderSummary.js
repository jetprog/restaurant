"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactRouterDom = require("react-router-dom");

var _reactIntl = require("react-intl");

var _payment = require("../../utils/payment");

var _moment = _interopRequireDefault(require("moment"));

var _Title = _interopRequireDefault(require("../Title"));

var _Hint = _interopRequireDefault(require("../Hint"));

var _Button = _interopRequireDefault(require("../Button"));

var _Dollars = _interopRequireDefault(require("../Dollars"));

var _OrderStateIndicator = _interopRequireDefault(require("../OrderStateIndicator"));

var _PaymentMethod = _interopRequireDefault(require("../PaymentMethod"));

var _Tag = _interopRequireDefault(require("../Tag"));

var _withDeadline = _interopRequireDefault(require("../../hocs/withDeadline"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  .status {\n    background: ", ";\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  .status {\n    background: ", ";\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  .status {\n    background: ", ";\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  .status {\n    background: ", ";\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  .status {\n    background: ", ";\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  .status {\n    display: none;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  vertical-align: top;\n  text-align: ", ";\n  padding-left: ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  text-align: ", ";\n  width: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  height: 1em;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  height: 2px;\n  width: 100%;\n  background: ", ";\n  margin: ", " 0;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border-radius: 3px;\n  display: inline-block;\n  max-width: 22px;\n  max-height: 22px;\n  min-width: 22px;\n  min-height: 22px;\n  box-sizing: border-box;\n  margin-right: ", ";\n  line-height: 22px;\n  text-align: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  line-height: ", ";\n\n  label {\n    cursor: pointer;\n    padding-left: ", ";\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n    border-bottom: 1px solid ", ";\n    transition: ", ";\n  }\n  a:hover {\n    border-color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  display: block;\n  margin-bottom: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  transition: ", ";\n  cursor: ", ";\n\n  svg {\n    margin-right: ", ";\n  }\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  border-radius: ", ";\n  color: ", ";\n  background: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: right;\n  flex: 1;\n  margin-left: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  padding-right: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n  max-width: 400px;\n  background: #fff;\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PaymentMethodWithDeadlines = (0, _withDeadline.default)(_PaymentMethod.default);

var calculatePlatePrice = function calculatePlatePrice(is_recurring, base_plate_price, free_plate_price, free) {
  var price = 0;

  if (is_recurring) {
    if (free) {
      price = free_plate_price;
    } else {
      price = base_plate_price;
    }
  } else {
    price = base_plate_price;
  }

  return price;
};

var OrderSummary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrderSummary, _React$Component);

  function OrderSummary(props) {
    var _this;

    _classCallCheck(this, OrderSummary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderSummary).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changeTerms", function (e) {
      var selected = !_this.state.terms_accepted;

      _this.setState({
        terms_accepted: selected
      });
    });

    _this.state = {
      terms_accepted: false
    };
    return _this;
  }

  _createClass(OrderSummary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          order = _this$props.order,
          purchases = _this$props.purchases,
          stripe_customer = _this$props.stripe_customer,
          onChangePaymentMethod = _this$props.onChangePaymentMethod,
          onConfirm = _this$props.onConfirm,
          _this$props$termsLink = _this$props.termsLink,
          termsLink = _this$props$termsLink === void 0 ? "/" : _this$props$termsLink,
          gst = _this$props.gst,
          qst = _this$props.qst,
          _this$props$service_f = _this$props.service_fee,
          service_fee = _this$props$service_f === void 0 ? 0.05 : _this$props$service_f,
          delivery_fee = _this$props.delivery_fee,
          _this$props$base_plat = _this$props.base_plate_price,
          base_plate_price = _this$props$base_plat === void 0 ? 1200 : _this$props$base_plat,
          _this$props$free_plat = _this$props.free_plate_price,
          free_plate_price = _this$props$free_plat === void 0 ? 1100 : _this$props$free_plat,
          _this$props$persona = _this$props.persona,
          persona = _this$props$persona === void 0 ? "admin" : _this$props$persona,
          intl = _this$props.intl;
      var terms_accepted = this.state.terms_accepted;
      var estimate_title = intl.formatMessage({
        id: "order_summary.estimate_title"
      });
      var title = intl.formatMessage({
        id: "order_summary.title"
      });
      var attendees_subtitle = intl.formatMessage({
        id: "order_summary.attendees_subtitle"
      });
      var choices_subtitle = intl.formatMessage({
        id: "order_summary.choices_subtitle"
      });
      var attendees_label = intl.formatMessage({
        id: "order_summary.attendees_label"
      });
      var no_attendees_label = intl.formatMessage({
        id: "order_summary.no_attendees_label"
      });
      var choices_label = intl.formatMessage({
        id: "order_summary.choices_label"
      });
      var no_choices_label = intl.formatMessage({
        id: "order_summary.no_choices_label"
      });
      var price_label = intl.formatMessage({
        id: "order_summary.price_label"
      });
      var unit_price_label = intl.formatMessage({
        id: "order_summary.unit_price_label"
      });
      var total_price_label = intl.formatMessage({
        id: "order_summary.total_price_label"
      });
      var delivery_label = intl.formatMessage({
        id: "order_summary.delivery_label"
      });
      var delivery_hint = intl.formatMessage({
        id: "order_summary.delivery_hint"
      });
      var service_fee_label = intl.formatMessage({
        id: "order_summary.service_fee_label"
      });
      var service_fee_hint = intl.formatMessage({
        id: "order_summary.service_fee_hint"
      });
      var subtotal_label = intl.formatMessage({
        id: "order_summary.subtotal_label"
      });
      var gst_label = intl.formatMessage({
        id: "order_summary.gst_label"
      });
      var qst_label = intl.formatMessage({
        id: "order_summary.qst_label"
      });
      var total_label = intl.formatMessage({
        id: "order_summary.total_label"
      });
      var est_total_label = intl.formatMessage({
        id: "order_summary.est_total_label"
      });
      var payment_subtitle = intl.formatMessage({
        id: "order_summary.payment_subtitle"
      });
      var accepted_terms_label = intl.formatMessage({
        id: "order_summary.accepted_terms_label"
      });
      var terms_label = intl.formatMessage({
        id: "order_summary.terms_label"
      });
      var confirm_label = intl.formatMessage({
        id: "order_summary.confirm_label"
      });
      var meal_label = intl.formatMessage({
        id: "order_summary.meal_label"
      });
      var dessert_label = intl.formatMessage({
        id: "order_summary.dessert_label"
      });
      var drinks_label = intl.formatMessage({
        id: "order_summary.drinks_label"
      });
      var utensils_label = intl.formatMessage({
        id: "order_summary.utensils_label"
      });
      var recurring_price_message = intl.formatMessage({
        id: "order_summary.recurring_price_message"
      });

      if (order) {
        var now = (0, _moment.default)();
        var is_past = false;
        var is_cancelled = false;

        if (order.delivery_date) {
          is_past = (0, _moment.default)(order.delivery_date).isBefore((0, _moment.default)(now), "day");
        }

        var cancelled_state = {
          id: 2,
          value: "Cancelled",
          translation: [{
            id: 2,
            name: "Annulé",
            language: {
              id: 1,
              locale: "fr"
            }
          }, {
            id: 10,
            name: "Cancelled",
            language: {
              id: 2,
              locale: "en"
            }
          }]
        };
        var attendees_for_calculation = order.is_recurring ? order.attendees.length : order.number_of_expected_people;
        var choices = purchases.filter(function (p) {
          return p.status == "paid";
        }).length;
        var state = "Draft";

        if (order.state) {
          state = order.state.value;

          if (is_past && state == "Draft") {
            state = "Cancelled";
            is_cancelled = true;
          }
        }

        var cssClass = Draft;
        var lineItems = [{
          name: meal_label,
          unit_price: calculatePlatePrice(order.is_recurring, base_plate_price, free_plate_price, order.is_fully_paid),
          total_price: 0,
          rebate: 0,
          add_ons: []
        }];

        if (order.desserts) {
          lineItems[0].add_ons.push({
            name: dessert_label,
            unit_price: 200
          });
        }

        if (order.drinks) {
          lineItems[0].add_ons.push({
            name: drinks_label,
            unit_price: 200
          });
        }

        if (order.utensils) {
          lineItems[0].add_ons.push({
            name: utensils_label,
            unit_price: 100
          });
        } // apply rebate if drinks and utensils


        if (order.desserts && order.drinks) {
          lineItems[0].rebate = 100;
        }

        var estimate = (0, _payment.calculateOrderSummary)("estimate", lineItems, order, purchases, delivery_fee, gst, qst, service_fee);
        var summary = (0, _payment.calculateOrderSummary)("summary", lineItems, order, purchases, delivery_fee, gst, qst, service_fee);
        return _react.default.createElement(Summary, {
          className: (0, _reactEmotion.cx)(_defineProperty({}, Draft, state == "Draft"), _defineProperty({}, Confirmed, state == "Confirmed"), _defineProperty({}, Locked, state == "Locked"), _defineProperty({}, Cancelled, state == "Cancelled"), "order-summary")
        }, _react.default.createElement(Section, null, _react.default.createElement(_Title.default, {
          text: state == "Draft" ? estimate_title : title,
          level: 3,
          marginBottom: _rules.Spacing.md
        }), _react.default.createElement(Row, null, _react.default.createElement(Column, null, _react.default.createElement(Label, {
          marginBottom: _rules.Spacing.sm
        }, attendees_subtitle), _react.default.createElement("span", null, attendees_for_calculation > 0 ? attendees_for_calculation + " " + attendees_label : no_attendees_label)), state !== "Draft" && _react.default.createElement(Column, null, _react.default.createElement(Label, {
          marginBottom: _rules.Spacing.sm
        }, choices_subtitle), _react.default.createElement("span", null, choices > 0 ? choices + " " + choices_label : no_choices_label)))), order.is_recurring ? _react.default.createElement(Section, null, _react.default.createElement(Message, null, recurring_price_message)) : _react.default.createElement(Section, null, _react.default.createElement(Table, null, _react.default.createElement("thead", null, _react.default.createElement(TableRow, null, _react.default.createElement(TableHeadItem, null, _react.default.createElement(Label, null, price_label)), _react.default.createElement(TableHeadItem, {
          money: true
        }, _react.default.createElement(Label, null, unit_price_label)), _react.default.createElement(TableHeadItem, {
          money: true
        }, _react.default.createElement(Label, null, total_price_label)))), _react.default.createElement("tbody", null, state == "Draft" ? estimate.line_items.map(function (item, k) {
          return _react.default.createElement(_react.default.Fragment, {
            key: k
          }, _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, null, item.name), _react.default.createElement(TableItem, {
            money: true
          }, _react.default.createElement(_Dollars.default, {
            cents: item.unit_price
          }), item.rebate > 0 && _react.default.createElement(_Tag.default, {
            label: item.rebate / 100 + "$ off",
            color: "lettuce",
            style: "small"
          })), _react.default.createElement(TableItem, {
            money: true
          }, _react.default.createElement(_Dollars.default, {
            cents: item.total_price
          }))), item.add_ons.map(function (add_on, k) {
            return _react.default.createElement(TableRow, {
              key: k
            }, _react.default.createElement(TableItem, {
              smaller: true,
              colSpan: "3"
            }, add_on.name));
          }));
        }) : summary.line_items.map(function (item, k) {
          return _react.default.createElement(_react.default.Fragment, {
            key: k
          }, _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, null, item.name), _react.default.createElement(TableItem, {
            money: true
          }, _react.default.createElement(_Dollars.default, {
            cents: item.unit_price
          }), item.rebate > 0 && _react.default.createElement(_Tag.default, {
            label: item.rebate / 100 + "$ off",
            color: "lettuce",
            style: "small"
          })), _react.default.createElement(TableItem, {
            money: true
          }, _react.default.createElement(_Dollars.default, {
            cents: item.total_price
          }))), item.add_ons.map(function (add_on, k) {
            return _react.default.createElement(TableRow, {
              key: k
            }, _react.default.createElement(TableItem, {
              smaller: true,
              colSpan: "3"
            }, add_on.name));
          }));
        }), _react.default.createElement(TableRow, null), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, null, delivery_label), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          money: true
        }, summary.delivery_fee ? _react.default.createElement(_Dollars.default, {
          cents: summary.delivery_fee
        }) : "TBD")), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, null, service_fee_label, _react.default.createElement(_Hint.default, {
          hint: service_fee_hint
        })), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          money: true
        }, _react.default.createElement(_Dollars.default, {
          cents: state == "Draft" ? estimate.service_fee : summary.service_fee
        }))), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, {
          colSpan: 3
        }, _react.default.createElement(Separator, null))), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, null, subtotal_label), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          money: true
        }, _react.default.createElement(_Dollars.default, {
          cents: state == "Draft" ? estimate.subtotal : summary.subtotal
        }))), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, {
          smaller: true
        }, gst_label), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          smaller: true,
          money: true
        }, _react.default.createElement(_Dollars.default, {
          cents: state == "Draft" ? estimate.gst : summary.gst
        }))), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, {
          smaller: true
        }, qst_label), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          smaller: true,
          money: true
        }, _react.default.createElement(_Dollars.default, {
          cents: state == "Draft" ? estimate.qst : summary.qst
        }))), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, {
          colSpan: 3
        }, _react.default.createElement(Separator, null))), _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, {
          smaller: state !== "Draft",
          bigger: state == "Draft"
        }, est_total_label), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          money: true,
          smaller: state !== "Draft",
          bigger: state == "Draft"
        }, _react.default.createElement(_Dollars.default, {
          cents: estimate.total
        }))), state !== "Draft" && _react.default.createElement(TableRow, null, _react.default.createElement(TableItem, {
          bigger: true
        }, total_label), _react.default.createElement(TableItem, null), _react.default.createElement(TableItem, {
          money: true,
          bigger: true
        }, _react.default.createElement(_Dollars.default, {
          cents: summary.total
        })))))), _react.default.createElement(Section, null, _react.default.createElement(Label, {
          marginBottom: _rules.Spacing.sm
        }, payment_subtitle), persona == "manager" ? _react.default.createElement("div", null, stripe_customer ? _react.default.createElement(PaymentMessage, {
          background: _rules.Colors.primary.lettuce.default
        }, "Payment method added") : _react.default.createElement(PaymentMessage, {
          background: _rules.Colors.primary.squash.lighter
        }, "No payment method")) : _react.default.createElement(PaymentMethodWithDeadlines, {
          order: order,
          state: state,
          stripe_customer: stripe_customer,
          onChangePaymentMethod: onChangePaymentMethod
        })), persona !== "manager" && stripe_customer && _react.default.createElement(Section, {
          background: state == "Draft" && !terms_accepted && _rules.Colors.primary.squash.lighter + "50"
        }, state !== "Draft" ? _react.default.createElement(Terms, null, _react.default.createElement(Row, null, _react.default.createElement(FakeCheckBox, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "check"
        })), _react.default.createElement("label", null, accepted_terms_label + " ", _react.default.createElement(_reactRouterDom.Link, {
          to: termsLink
        }, terms_label)))) : _react.default.createElement(Terms, null, _react.default.createElement("input", {
          type: "checkbox",
          name: "accept-terms",
          id: "accept-terms",
          onChange: this.changeTerms,
          checked: terms_accepted
        }), _react.default.createElement("label", {
          htmlFor: "accept-terms"
        }, accepted_terms_label + " ", _react.default.createElement(_reactRouterDom.Link, {
          to: termsLink
        }, terms_label)))), state == "Draft" && _react.default.createElement(Section, null, _react.default.createElement(Row, null, _react.default.createElement(_Button.default, {
          label: confirm_label,
          onClick: onConfirm,
          disabled: !stripe_customer || !terms_accepted
        }))), state == "Locked" && _react.default.createElement(Section, null, _react.default.createElement(ExtraInfo, null, "You saved 300$ , 100kg de food and reduce carbon emissions by \u2026")), state == "Delivered" && _react.default.createElement(Section, null, _react.default.createElement(ExtraInfo, {
          onClick: console.log
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "download"
        }), "Download invoice")), state !== "Draft" && _react.default.createElement(Section, {
          className: "status"
        }, _react.default.createElement(_OrderStateIndicator.default, {
          current_state: is_cancelled ? cancelled_state : order.state,
          showColor: false,
          small: false
        })));
      } else {
        return _react.default.createElement(Summary, null);
      }
    }
  }]);

  return OrderSummary;
}(_react.default.Component); // Styles


var Summary = (0, _reactEmotion.default)("div")(_templateObject(), _rules.BorderRadius.sm, _rules.Shadows.level2, _rules.Typography.body.fontFamily);
var Section = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.md, function (props) {
  return props.background;
});
var Row = (0, _reactEmotion.default)("div")(_templateObject3());
var Column = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.md);
var Right = (0, _reactEmotion.default)("div")(_templateObject5());
var PaymentMessage = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Spacing.sm, _rules.Spacing.md, _rules.BorderRadius.sm, _rules.Colors.secondary.eggplant.default, function (props) {
  return props.background;
});
var ExtraInfo = (0, _reactEmotion.default)("div")(_templateObject7(), _rules.Spacing.md, _rules.Colors.secondary.eggshell.default, _rules.Colors.secondary.eggplant.default, _rules.BorderRadius.sm, _rules.Animation.defaultSpeed, function (props) {
  return props.onClick ? "pointer" : "default";
}, _rules.Spacing.md, function (props) {
  return props.onClick ? _rules.Colors.secondary.mushrooms.default : _rules.Colors.secondary.eggshell.default;
});
var Label = (0, _reactEmotion.default)("label")(_templateObject8(), _rules.Colors.secondary.eggplant.default, _rules.Typography.small.fontSize, function (props) {
  return props.marginBottom;
});
var Terms = (0, _reactEmotion.default)("div")(_templateObject9(), _rules.Typography.small.fontSize, _rules.Typography.small.fontSize, _rules.Spacing.sm, _rules.Colors.utility.black.default, _rules.Colors.utility.black.default, _rules.Animation.defaultSpeed, _rules.Colors.primary.eggYolk.default);
var FakeCheckBox = (0, _reactEmotion.default)("div")(_templateObject10(), _rules.Colors.primary.lettuce.default, _rules.Colors.secondary.spinach.default, _rules.Spacing.md);
var Separator = (0, _reactEmotion.default)("hr")(_templateObject11(), _rules.Colors.secondary.mushrooms.default, _rules.Spacing.sm);
var Message = (0, _reactEmotion.default)("div")(_templateObject12(), _rules.Colors.secondary.eggplant.lighter, _rules.Typography.small.fontSize);
var Table = (0, _reactEmotion.default)("table")(_templateObject13());
var TableRow = (0, _reactEmotion.default)("tr")(_templateObject14());
var TableHeadItem = (0, _reactEmotion.default)("td")(_templateObject15(), function (props) {
  return props.money ? "right" : "left";
}, function (props) {
  return props.money && "60px";
});
var TableItem = (0, _reactEmotion.default)("td")(_templateObject16(), function (props) {
  return props.smaller ? _rules.Colors.utility.grey.default : _rules.Colors.utility.black.default;
}, function (props) {
  if (props.bigger) {
    return _rules.Typography.subTitle.fontSize;
  } else if (props.smaller) {
    return _rules.Typography.small.fontSize;
  } else {
    return _rules.Typography.body.fontSize;
  }
}, function (props) {
  return props.money ? "right" : "left";
}, function (props) {
  return props.money ? _rules.Spacing.md : "";
}); // State styles

var Draft = (0, _reactEmotion.css)(_templateObject17());
var Confirmed = (0, _reactEmotion.css)(_templateObject18(), _rules.Colors.secondary.eatYourGreens.default);
var Locked = (0, _reactEmotion.css)(_templateObject19(), _rules.Colors.secondary.eatYourGreens.default);
var InPrep = (0, _reactEmotion.css)(_templateObject20(), _rules.Colors.secondary.eatYourGreens.default);
var Delivered = (0, _reactEmotion.css)(_templateObject21(), _rules.Colors.secondary.eatYourGreens.default);
var Cancelled = (0, _reactEmotion.css)(_templateObject22(), _rules.Colors.primary.squash.default);

var _default = (0, _reactIntl.injectIntl)(OrderSummary);

exports.default = _default;