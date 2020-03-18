"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRouterDom = require("react-router-dom");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Numbers = _interopRequireDefault(require("../Numbers"));

var _Button = _interopRequireDefault(require("../Button"));

var _RebateIndicator = _interopRequireDefault(require("../RebateIndicator"));

var _OrderStateIndicator = _interopRequireDefault(require("../OrderStateIndicator"));

var _reactIntl = require("react-intl");

var _text = require("../../utils/text");

var _color = require("../../utils/color.js");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject18() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  .type-indicator,\n  .NumberContainer {\n    display: none;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  height: 6px;\n  width: ", "%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  margin-right: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  color: ", ";\n  opacity: 0.5;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  height: 6px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  display: inline-block;\n  height: 32px;\n  min-height: 32px;\n  border-radius: 16px;\n  overflow: hidden;\n  background: ", ";\n  text-align: center;\n  line-height: 32px;\n  cursor: default;\n  transition: 0.3s;\n  font-family: ", ";\n  font-size: ", ";\n  padding: 0 ", ";\n  margin-right: ", ";\n\n  @media (max-width: 1300px) {\n    height: 20px;\n    min-height: 20px;\n    line-height: 20px;\n  }\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  padding: ", " ", ";\n  background: rgba(228, 89, 14, 0.3);\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  padding: ", " ", ";\n  background: rgba(178, 57, 69, 0.3);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  div {\n    margin-right: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-family: ", ";\n  color: ", ";\n  font-weight: normal;\n  transition: ", ";\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", " ", " ", ";\n  display: flex;\n  flex-direction: row;\n  border-bottom 1px solid ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  position: relative;\n  box-sizing: border-box;\n  border-radius: ", ";\n  overflow: hidden;\n  transition: 0.5s;\n  color: ", ";\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  order: ", ";\n  margin-bottom: ", ";\n  max-width: 400px;\n  min-width: 200px;\n  margin-right: ", ";\n  a {\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var removeAttendeesPlateChoice = function removeAttendeesPlateChoice(attendees, plate_choices) {
  var extra_choices = [];

  if (attendees && plate_choices.results) {
    var attendees_ids = attendees.map(function (a) {
      return String(a.id);
    });
    extra_choices = plate_choices.results.filter(function (pc) {
      return pc.user.id === null || attendees_ids.indexOf(pc.user.id) === -1;
    });
  }

  return extra_choices;
};

var CalendarOrderCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarOrderCard, _React$Component);

  function CalendarOrderCard(props) {
    var _this;

    _classCallCheck(this, CalendarOrderCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarOrderCard).call(this, props));
    _this.state = {
      hasWarningMenu: false,
      hasWarningAttendee: false,
      index: 1
    };
    return _this;
  }

  _createClass(CalendarOrderCard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var newIndex = 1;

      if (this.props.order) {
        if (!this.props.order.assigned_menu_plates || this.props.order.assigned_menu_plates.length == 0) {
          this.setState({
            hasWarningMenu: true
          });
          newIndex += 1;
        }

        if ((!this.props.purchases || this.props.purchases.length == 0) && (!this.props.order.total_attendees || this.props.order.total_attendees == 0) && this.props.cardType === "manager") {
          this.setState({
            hasWarningAttendee: true
          });
          newIndex += 2;
        }
      } else {
        newIndex += 10;
      }

      this.setState({
        index: newIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          order = _this$props.order,
          purchases = _this$props.purchases,
          isPast = _this$props.isPast,
          _this$props$showConfi = _this$props.showConfirmedTotal,
          showConfirmedTotal = _this$props$showConfi === void 0 ? true : _this$props$showConfi,
          _this$props$showExtra = _this$props.showExtrasTotal,
          showExtrasTotal = _this$props$showExtra === void 0 ? true : _this$props$showExtra,
          _this$props$showInCar = _this$props.showInCartTotal,
          showInCartTotal = _this$props$showInCar === void 0 ? false : _this$props$showInCar,
          _this$props$showSalad = _this$props.showSaladTotal,
          showSaladTotal = _this$props$showSalad === void 0 ? false : _this$props$showSalad,
          _this$props$showHotPl = _this$props.showHotPlateTotal,
          showHotPlateTotal = _this$props$showHotPl === void 0 ? false : _this$props$showHotPl,
          _this$props$showSandw = _this$props.showSandwichTotal,
          showSandwichTotal = _this$props$showSandw === void 0 ? false : _this$props$showSandw,
          _this$props$showRebat = _this$props.showRebate,
          showRebate = _this$props$showRebat === void 0 ? false : _this$props$showRebat,
          cardType = _this$props.cardType,
          _this$props$marginRig = _this$props.marginRight,
          marginRight = _this$props$marginRig === void 0 ? 0 : _this$props$marginRig,
          intl = _this$props.intl;
      var _this$state = this.state,
          hasWarningMenu = _this$state.hasWarningMenu,
          hasWarningAttendee = _this$state.hasWarningAttendee,
          index = _this$state.index;
      var plate_choices = [];
      var numbers = [];
      var state = {};
      var has_notes = false;
      var total_max_orders = 0;
      var is_recurring_link = false;
      var order_name = "";

      if (order) {
        order_name = (0, _text.composeOrderName)(order, intl.locale, false, null, cardType);

        if (order.state.value === "Draft" && isPast) {
          state.value = "Cancelled";
          state.id = 0;
          state.translation = [];
          state.translation[0] = {
            id: 0,
            name: "Annulée",
            language: {
              id: 1,
              locale: "fr"
            }
          };
          state.translation[1] = {
            id: 0,
            name: "Cancelled",
            language: {
              id: 2,
              locale: "en"
            }
          };
        } else {
          state = order.state;
        }

        if (order.plate_choices && order.plate_choices.results.length > 0) {
          plate_choices = order.plate_choices.results;
        }

        if (order.notes || cardType == "manager" && order.admin_notes) {
          has_notes = true;
        }

        total_max_orders = order.total_attendees;
        is_recurring_link = order.is_recurring ? (0, _moment.default)(order.delivery_date).format("YYYY-MM-DD") + "/" : "";
      }

      var total_confirmed = purchases.filter(function (p) {
        return p.status === "paid" && p.not_eating === false && p.user;
      }).length;
      var total_extras = purchases.filter(function (p) {
        return p.status === "paid" && p.not_eating === false && !p.user;
      }).length;
      var total_in_cart = purchases.filter(function (p) {
        return p.status === "cart";
      }).length;
      var total_not_eating = purchases.filter(function (p) {
        return p.not_eating === true;
      }).length;
      var percentage_chosen = 0;
      var total_hot_plate = purchases.filter(function (p) {
        return (p.plate && (p.plate.category == "normal" && p.plate.is_hot_meal || p.plate.category == "hot_plate") || p.extra_plate_name) && p.status === "paid";
      }).length;
      var total_salad = purchases.filter(function (p) {
        return p.plate && (p.plate.category == "normal" && !p.plate.is_hot_meal || p.plate.category == "salad") && p.status === "paid";
      }).length;
      var total_sandwich = purchases.filter(function (p) {
        return p.plate && p.plate.category == "sandwich" && p.status === "paid";
      }).length;
      var choices_label = intl.formatMessage({
        id: "orderCard.choice_label"
      });
      var no_menu_warning = intl.formatMessage({
        id: "orderCard.no_menu_warning"
      });
      var no_attendees_warning = intl.formatMessage({
        id: "orderCard.no_attendees_warning"
      });
      var forLabel = intl.formatMessage({
        id: "calendarOrderCard.for"
      });

      if (total_max_orders > 0) {
        percentage_chosen = Math.round(total_confirmed / total_max_orders * 100);
      } // compile numbers and show only the ones we should


      if (showConfirmedTotal) {
        if (cardType == "manager") {
          numbers.push({
            name: "confirmed",
            total: total_confirmed + total_extras,
            icon: "check",
            color: _rules.Colors.primary.lettuce.default,
            display: "always"
          });
        } else {
          numbers.push({
            name: "confirmed",
            total: total_confirmed,
            icon: "check",
            color: _rules.Colors.primary.lettuce.default,
            display: "always",
            label: "choix employés"
          });
        }
      }

      if (showExtrasTotal) {
        if (cardType == "manager") {} else {
          numbers.push({
            name: "extras",
            icon: "plus",
            color: _rules.Colors.secondary.mushrooms.default,
            total: total_extras,
            display: "always"
          });
        }
      }

      if (showInCartTotal) {
        numbers.push({
          name: "in-cart",
          icon: "shopping-cart",
          color: _rules.Colors.secondary.mushrooms.default,
          total: total_in_cart,
          display: "always"
        });
      }

      if (showHotPlateTotal) {
        numbers.push({
          name: "hot_plate",
          icon: "soup",
          color: _rules.Colors.primary.squash.default,
          total: total_hot_plate,
          display: "always"
        });
      }

      if (showSaladTotal) {
        numbers.push({
          name: "salad",
          icon: "salad",
          color: _rules.Colors.secondary.eatYourGreens.default,
          total: total_salad,
          display: "always"
        });
      }

      if (showSandwichTotal) {
        numbers.push({
          name: "sandwich",
          icon: "sandwich",
          color: _rules.Colors.primary.eggYolk.default,
          total: total_sandwich,
          display: "always"
        });
      }

      if (order) {
        return _react.default.createElement(OrderCardContainer, {
          index: index,
          className: "order-card",
          marginRight: marginRight
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: "/order/" + order.id + "/" + is_recurring_link
        }, _react.default.createElement(OrderCard, {
          isPast: isPast,
          className: (0, _reactEmotion.cx)(_defineProperty({}, Draft, order.state && order.state.value === "Draft"), _defineProperty({}, Confirmed, order.state && order.state.value === "Confirmed"))
        }, _react.default.createElement(TypeIndicator, {
          primary_color: order.prestation.color,
          secondary_color: (0, _color.lightenColor)(order.prestation.color),
          isTextColorLight: (0, _color.isTextColorLight)(order.prestation.color)
        }, _react.default.createElement(Level, {
          primary_color: order.prestation.color,
          secondary_color: (0, _color.lightenColor)(order.prestation.color),
          isTextColorLight: (0, _color.isTextColorLight)(order.prestation.color)
        })), _react.default.createElement(Header, null, _react.default.createElement(LunchInfo, null, _react.default.createElement(Title, {
          isPast: isPast
        }, order_name), _react.default.createElement(Details, {
          isPast: isPast
        }, _react.default.createElement(Time, null, intl.locale == "en" ? (0, _moment.default)(order.delivery_date).format("h:mm A") : (0, _moment.default)(order.delivery_date).format("H:mm"))), _react.default.createElement(Status, null, _react.default.createElement(_OrderStateIndicator.default, {
          current_state: state,
          is_recurring: order.is_recurring
        }), showRebate && _react.default.createElement(_RebateIndicator.default, {
          order: order,
          small: true
        }), has_notes && _react.default.createElement(NotesIcon, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "sticky-note"
        }), "Notes")))), hasWarningMenu && (cardType === "manager" ? _react.default.createElement(WarningMenu, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "exclamation-triangle"
        }), "\xA0 ", no_menu_warning) : _react.default.createElement(MessageContainer, null, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "calendar.no_menu_admin",
          defaultMessage: "No menu have been assigned to this order yet."
        }))), hasWarningAttendee && _react.default.createElement(WarningAttendee, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "user-slash"
        }), "\xA0 ", no_attendees_warning), !hasWarningMenu && !hasWarningAttendee && (total_confirmed > 0 || total_extras > 0 || total_in_cart > 0 || cardType != "manager") && _react.default.createElement(NumberContainer, {
          className: "NumberContainer"
        }, _react.default.createElement(_Numbers.default, {
          numbers: numbers,
          light: true
        })))));
      } else {
        return _react.default.createElement(OrderCardContainer, {
          index: index
        }, _react.default.createElement(OrderCard, {
          isPast: false
        }));
      }
    }
  }]);

  return CalendarOrderCard;
}(_react.default.Component); // Styles


var OrderCardContainer = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.index;
}, _rules.Spacing.md, function (props) {
  return props.marginRight;
});
var OrderCard = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Colors.utility.white.default, _rules.Shadows.level1, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.BorderRadius.sm, function (props) {
  return props.isPast ? _rules.Colors.utility.grey.default : _rules.Colors.utility.black.default;
}, function (props) {
  return props.isPast ? _rules.Colors.utility.grey.default : _rules.Colors.utility.black.default;
}, _rules.Shadows.level3);
var Header = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.md, _rules.Spacing.md, _rules.Spacing.sm, _rules.Spacing.md, _rules.Colors.utility.lightGrey.default);
var NumberContainer = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.sm, _rules.Spacing.md);
var MessageContainer = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.sm, _rules.Spacing.md);
var Title = (0, _reactEmotion.default)("h4")(_templateObject6(), _rules.Typography.body.fontFamily, function (props) {
  return props.isPast ? _rules.Colors.utility.grey.default : _rules.Colors.secondary.eggplant.default;
}, _rules.Animation.defaultSpeed);
var BusinessName = (0, _reactEmotion.default)("span")(_templateObject7());
var Status = (0, _reactEmotion.default)("div")(_templateObject8(), _rules.Spacing.sm, _rules.Spacing.sm);
var WarningMenu = (0, _reactEmotion.default)("div")(_templateObject9(), _rules.Colors.primary.cherry.darker, _rules.Spacing.sm, _rules.Spacing.md);
var WarningAttendee = (0, _reactEmotion.default)("div")(_templateObject10(), _rules.Colors.primary.squash.darker, _rules.Spacing.sm, _rules.Spacing.md);
var LunchInfo = (0, _reactEmotion.default)("div")(_templateObject11());
var NotesIcon = (0, _reactEmotion.default)("span")(_templateObject12(), _rules.Colors.utility.lightGrey.default, _rules.Typography.body.fontFamily, _rules.Typography.small.fontSize, _rules.Spacing.sm, _rules.Spacing.sm, _rules.Spacing.sm);
var TypeIndicator = (0, _reactEmotion.default)("div")(_templateObject13(), function (props) {
  return "linear-gradient(135deg, " + props.primary_color + "50 0%, " + props.secondary_color + "50 100%)";
});
var Details = (0, _reactEmotion.default)("div")(_templateObject14(), function (props) {
  return props.isPast ? _rules.Colors.utility.grey.default : _rules.Colors.secondary.eggplant.default;
});
var Time = (0, _reactEmotion.default)("div")(_templateObject15(), _rules.Spacing.sm);
var Level = (0, _reactEmotion.default)("div")(_templateObject16(), function (props) {
  return props.level;
}, function (props) {
  return "linear-gradient(135deg, " + props.primary_color + " 0%, " + props.secondary_color + " 100%)";
}); // Order states Styles

var Draft = (0, _reactEmotion.css)(_templateObject17());
var Confirmed = (0, _reactEmotion.css)(_templateObject18());

var _default = (0, _reactIntl.injectIntl)(CalendarOrderCard);

exports.default = _default;