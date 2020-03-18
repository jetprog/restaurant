"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _moment = _interopRequireDefault(require("moment"));

var _reactCsv = require("react-csv");

var _reactRouterDom = require("react-router-dom");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _LoadingItem = _interopRequireDefault(require("../LoadingItem"));

var _Button = _interopRequireDefault(require("../Button"));

var _ExtraMenu = _interopRequireDefault(require("../ExtraMenu"));

var _Numbers = _interopRequireDefault(require("../Numbers"));

var _CalendarPrestation = _interopRequireDefault(require("../CalendarPrestation"));

var _ErrorBoundary = _interopRequireDefault(require("../ErrorBoundary"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject21() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  opacity: 1;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  margin-top: ", ";\n  border-radius: ", ";\n  opacity: 0;\n  pointer-events: none;\n  background: ", "50;\n  transition: ", ";\n  cursor: pointer;\n  text-align: center;\n  font-family: ", ";\n  color: ", ";\n  order: 100;\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  display: inline-block;\n  border-radius: ", ";\n  text-decoration: none;\n  transition: ", ";\n  margin-right: ", ";\n  background: ", ";\n  color: ", ";\n  font-family: Montserrat;\n  font-size: 14px;\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: ", ";\n  box-sizing: border-box;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n  margin-right: -2px;\n  margin-top: -2px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-left: ", ";\n  vertical-align: top;\n  line-height: 28px;\n  text-transform: capitalize;\n  font-family: ", ";\n  color: inherit;\n  transition: ", ";\n  text-decoration: none;\n\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-left: ", ";\n  vertical-align: top;\n  line-height: 28px;\n  text-transform: capitalize;\n  font-family: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 25px;\n  font-weight: 600;\n  font-family: ", ";\n  display: inline-block;\n  line-height: 27px;\n  color: inherit;\n  text-decoration: none;\n  transition: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    line-height: 27px;\n    font-size: 21px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 25px;\n  font-weight: 600;\n  font-family: ", ";\n  display: inline-block;\n  line-height: 27px;\n\n  @media (max-width: 480px) {\n    line-height: 27px;\n    font-size: 21px;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  a {\n    color: inherit;\n    transition: ", ";\n  }\n\n  a:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", " 0 ", ";\n  opacity: 0;\n  animation: ", " 0.3s ease normal forwards;\n  position: relative;\n  z-index: 100;\n\n  .extra-menu-wrap {\n    float: right;\n    margin-top: -", ";\n    margin-right: -", ";\n    margin-left: ", ";\n  }\n\n  @media (max-width: 480px) {\n    padding-bottom: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0; left:", ";}\n  100% {opacity: 1; left:0;}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  border-right: 2px solid ", "75;\n  min-height: calc(100vh - 180px);\n  flex-grow: 1;\n  flex-shrink: 1;\n  max-width: ", ";\n  box-sizing: border-box;\n\n  .food-option-card,\n  .purchase-card {\n    margin-bottom: ", ";\n  }\n\n  &:hover .create-button {\n    opacity: 1;\n    pointer-events: auto;\n  }\n"]);

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

var Day =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day(props) {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, _getPrototypeOf(Day).call(this, props));
  }

  _createClass(Day, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          current_date = _this$props.current_date,
          _this$props$userOrder = _this$props.userOrders,
          userOrders = _this$props$userOrder === void 0 ? [] : _this$props$userOrder,
          _this$props$adminOrde = _this$props.adminOrders,
          adminOrders = _this$props$adminOrde === void 0 ? [] : _this$props$adminOrde,
          _this$props$managerOr = _this$props.managerOrders,
          managerOrders = _this$props$managerOr === void 0 ? [] : _this$props$managerOr,
          mode = _this$props.mode,
          _this$props$purchases = _this$props.purchases,
          purchases = _this$props$purchases === void 0 ? [] : _this$props$purchases,
          confirmedPurchases = _this$props.confirmedPurchases,
          _this$props$prestatio = _this$props.prestations,
          prestations = _this$props$prestatio === void 0 ? ["breakfast", "lunch", "dinner", "snack", "5@7"] : _this$props$prestatio,
          _this$props$buttonsDi = _this$props.buttonsDisplayed,
          buttonsDisplayed = _this$props$buttonsDi === void 0 ? false : _this$props$buttonsDi,
          _this$props$numbersDi = _this$props.numbersDisplayed,
          numbersDisplayed = _this$props$numbersDi === void 0 ? false : _this$props$numbersDi,
          _this$props$showConfi = _this$props.showConfirmedTotal,
          showConfirmedTotal = _this$props$showConfi === void 0 ? true : _this$props$showConfi,
          _this$props$showExtra = _this$props.showExtrasTotal,
          showExtrasTotal = _this$props$showExtra === void 0 ? true : _this$props$showExtra,
          _this$props$showInCar = _this$props.showInCartTotal,
          showInCartTotal = _this$props$showInCar === void 0 ? false : _this$props$showInCar,
          _this$props$showHotPl = _this$props.showHotPlateTotal,
          showHotPlateTotal = _this$props$showHotPl === void 0 ? false : _this$props$showHotPl,
          _this$props$showSalad = _this$props.showSaladTotal,
          showSaladTotal = _this$props$showSalad === void 0 ? false : _this$props$showSalad,
          _this$props$showSandw = _this$props.showSandwichTotal,
          showSandwichTotal = _this$props$showSandw === void 0 ? false : _this$props$showSandw,
          getStickers = _this$props.getStickers,
          exportCSV = _this$props.exportCSV,
          addPurchase = _this$props.addPurchase,
          baseUrl = _this$props.baseUrl,
          user = _this$props.user,
          deletePurchase = _this$props.deletePurchase,
          showCreateOrder = _this$props.showCreateOrder,
          isGettingStickers = _this$props.isGettingStickers,
          _this$props$isLoading = _this$props.isLoading,
          isLoading = _this$props$isLoading === void 0 ? false : _this$props$isLoading,
          isLoadingPurchases = _this$props.isLoadingPurchases,
          numbersLabel = _this$props.numbersLabel,
          intl = _this$props.intl;
      var today = (0, _moment.default)();
      var class_name = Future;
      var class_name_container = FutureContainer;
      var numbers = [];
      var csvData = [];
      var kitchenCsvFilename = "";
      var root = "/";
      var twoWeeksDelay = (0, _moment.default)().add(2, "d");
      var createOrderVisible = showCreateOrder;

      if ((0, _moment.default)(current_date).isBefore(twoWeeksDelay, "d")) {
        createOrderVisible = false;
      }

      if (baseUrl) {
        root = "/" + baseUrl.split("/")[1] + "/";
      }

      if (buttonsDisplayed) {
        csvData = exportCSV(managerOrders, confirmedPurchases);
        kitchenCsvFilename = current_date.format("DD-MM-YYYY") + "-AllDay-kitchen";
      }

      if (current_date) {
        if (current_date.isSame(today, "day")) {
          class_name = Present;
          class_name_container = PresentContainer;
        } else if (current_date.isBefore(today, "day")) {
          class_name = Past;
          class_name_container = PastContainer;
        }
      }

      var create_order_label = intl.formatMessage({
        id: "calendarDay.create_order_label"
      });
      var total_confirmed = purchases.filter(function (p) {
        return p.status === "paid" && p.not_eating === false && p.user;
      }).length;
      var total_extras = purchases.filter(function (p) {
        return p.status === "paid" && p.not_eating === false && !p.user;
      }).length;
      var total_not_eating = purchases.filter(function (p) {
        return p.not_eating === true;
      }).length;
      var total_in_cart = purchases.filter(function (p) {
        return p.status === "cart";
      }).length;
      var total_max_orders = 0;

      if (managerOrders.length > 0) {
        total_max_orders = managerOrders.reduce(function (a, i) {
          return a + i.total_attendees;
        }, 0);
      }

      var total_hot_plate = purchases.filter(function (p) {
        return (p.plate && p.plate.category == "hot_plate" || p.extra_plate_name) && p.status === "paid";
      }).length;
      var total_salad = purchases.filter(function (p) {
        return p.plate && p.plate.category == "salad" && p.status === "paid";
      }).length;
      var total_sandwich = purchases.filter(function (p) {
        return p.plate && p.plate.category == "sandwich" && p.status === "paid";
      }).length;

      if (showConfirmedTotal) {
        if (managerOrders.length > 0) {
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
            display: "always"
          });
        }
      }

      if (showExtrasTotal) {
        if (managerOrders.length > 0) {} else {
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
          name: "cold",
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

      var numbersHotPlate = [];
      var numbersSalad = [];
      var numbersSandwich = [];
      var numbersOtherPlate = [];
      var purchasesPaid = purchases.filter(function (p) {
        return p.status === "paid" && p.not_eating === false;
      });

      if (managerOrders.length > 0) {
        (function () {
          var all_menus = managerOrders.map(function (order) {
            return order.assigned_menu_plates;
          });
          var distinct_menu = [];

          for (var i in all_menus) {
            if (!distinct_menu.includes(all_menus[i])) {
              distinct_menu.push(all_menus[i]);
            }
          }

          var distinct_plates = {};

          for (var _i in distinct_menu) {
            if (distinct_menu && distinct_menu[_i] && distinct_menu[_i].plates) {
              distinct_menu[_i].plates.map(function (plate) {
                var category = "";

                if (plate.category == "normal") {
                  if (plate.is_hot_meal) {
                    category = "hot_plate";
                  } else {
                    category = "salad";
                  }
                } else {
                  category = plate.category;
                }

                distinct_plates[plate.id] = {
                  name: plate.name,
                  category: category,
                  count: 0
                };
              });
            }
          }

          for (var _i2 in purchasesPaid) {
            if (purchasesPaid[_i2].plate) {
              if (distinct_plates[purchasesPaid[_i2].plate.id]) {
                distinct_plates[purchasesPaid[_i2].plate.id].count++;
              } else {
                var category = "";

                if (purchasesPaid[_i2].plate.category == "normal") {
                  if (purchasesPaid[_i2].plate.is_hot_meal) {
                    category = "hot_plate";
                  } else {
                    category = "salad";
                  }
                } else {
                  category = purchasesPaid[_i2].plate.category;
                }

                distinct_plates[purchasesPaid[_i2].plate.id] = {
                  name: purchasesPaid[_i2].plate.name,
                  category: category,
                  is_hot_meal: purchasesPaid[_i2].plate.is_hot_meal,
                  count: 1
                };
              }
            } else {
              if (distinct_plates[-1]) {
                distinct_plates[-1].count++;
              } else {
                distinct_plates[-1] = {
                  name: "Other",
                  count: 1
                };
              }
            }
          }

          for (var _i3 in distinct_plates) {
            var color = _rules.Colors.utility.black.default;

            if (distinct_plates[_i3].category == "hot_plate") {
              color = _rules.Colors.primary.squash.default;
              numbersHotPlate.push({
                name: distinct_plates[_i3].name,
                label: distinct_plates[_i3].name,
                color: color,
                total: distinct_plates[_i3].count,
                display: "always"
              });
            } else if (distinct_plates[_i3].category == "salad") {
              color = _rules.Colors.secondary.eatYourGreens.default;
              numbersSalad.push({
                name: distinct_plates[_i3].name,
                label: distinct_plates[_i3].name,
                color: color,
                total: distinct_plates[_i3].count,
                display: "always"
              });
            } else if (distinct_plates[_i3].category == "sandwich") {
              color = _rules.Colors.primary.eggYolk.default;
              numbersSandwich.push({
                name: distinct_plates[_i3].name,
                label: distinct_plates[_i3].name,
                color: color,
                total: distinct_plates[_i3].count,
                display: "always"
              });
            } else {
              numbersOtherPlate.push({
                name: distinct_plates[_i3].name,
                label: distinct_plates[_i3].name,
                color: color,
                total: distinct_plates[_i3].count,
                display: "always"
              });
            }
          }
        })();
      }

      if (isLoading) {
        return _react.default.createElement(DayWrapper, {
          className: "day",
          mode: mode
        }, _react.default.createElement(Date, null, _react.default.createElement(_LoadingItem.default, {
          loading: true,
          type: "text"
        })), _react.default.createElement(_Numbers.default, {
          confirmed: 0,
          total: 0
        }), _react.default.createElement(Items, null, _react.default.createElement(_LoadingItem.default, {
          loading: true,
          type: "food_option"
        })));
      } else {
        return _react.default.createElement(DayWrapper, {
          className: (0, _reactEmotion.cx)(class_name_container, "day"),
          mode: mode
        }, _react.default.createElement(Date, {
          className: (0, _reactEmotion.cx)(class_name, _defineProperty({}, Loading, isLoading))
        }, current_date && _react.default.createElement(DateLabel, null, mode == "week" ? _react.default.createElement(_reactRouterDom.Link, {
          to: root + "day/" + current_date.format("YYYY-MM-DD") + "/"
        }, _react.default.createElement(NumberDay, null, current_date.format("D")), _react.default.createElement(Weekday, null, current_date.format("dddd"))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NumberDay, null, current_date.format("D")), _react.default.createElement(Weekday, null, current_date.format("dddd")))), buttonsDisplayed && _react.default.createElement(_ExtraMenu.default, {
          buttons: _react.default.createElement("div", null, getStickers && current_date && _react.default.createElement(_Button.default, {
            onClick: function onClick() {
              return getStickers(current_date.format("YYYY-MM-DD"), "salad");
            },
            color: "eat-your-greens",
            label: "Labels",
            icon: isGettingStickers ? "hourglass-half" : "salad",
            disabled: isGettingStickers
          }), getStickers && current_date && _react.default.createElement(_Button.default, {
            onClick: function onClick() {
              return getStickers(current_date.format("YYYY-MM-DD"), "hot_plate");
            },
            color: "squash",
            label: "Labels",
            icon: isGettingStickers ? "hourglass-half" : "soup",
            disabled: isGettingStickers
          }), getStickers && current_date && _react.default.createElement(_Button.default, {
            onClick: function onClick() {
              return getStickers(current_date.format("YYYY-MM-DD"), "sandwich");
            },
            color: "egg-yolk",
            label: "Labels",
            icon: isGettingStickers ? "hourglass-half" : "sandwich",
            disabled: isGettingStickers
          }), _react.default.createElement(CsvButton, {
            data: csvData,
            filename: kitchenCsvFilename + ".csv",
            separator: ",",
            icon: "download",
            className: "csv-button"
          }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: "download"
          }), "Kitchen CSV"))
        })), numbersDisplayed && (mode == "day" && managerOrders.length > 0 ? _react.default.createElement(NumbersWrap, null, _react.default.createElement(_Numbers.default, {
          numbers: numbers,
          label: numbersLabel
        }), _react.default.createElement(_Numbers.default, {
          numbers: numbersHotPlate,
          label: numbersLabel
        }), _react.default.createElement(_Numbers.default, {
          numbers: numbersSalad,
          label: numbersLabel
        }), _react.default.createElement(_Numbers.default, {
          numbers: numbersSandwich,
          label: numbersLabel
        }), _react.default.createElement(_Numbers.default, {
          numbers: numbersOtherPlate,
          label: numbersLabel
        })) : _react.default.createElement(NumbersWrap, null, _react.default.createElement(_Numbers.default, {
          numbers: numbers,
          label: numbersLabel
        }))), _react.default.createElement(Items, null, prestations.map(function (prestation, k) {
          return _react.default.createElement(_ErrorBoundary.default, {
            key: k
          }, _react.default.createElement(_CalendarPrestation.default, {
            key: k,
            userOrders: userOrders,
            adminOrders: adminOrders,
            managerOrders: managerOrders,
            prestation: prestation,
            showConfirmedTotal: showConfirmedTotal,
            showExtrasTotal: showExtrasTotal,
            showInCartTotal: showInCartTotal,
            showSaladTotal: showSaladTotal,
            showHotPlateTotal: showHotPlateTotal,
            showSandwichTotal: showSandwichTotal,
            current_date: current_date,
            purchases: purchases,
            today: today,
            addPurchase: addPurchase,
            deletePurchase: deletePurchase,
            baseUrl: baseUrl,
            user: user,
            isLoadingPurchases: isLoadingPurchases,
            mode: mode
          }));
        }), (adminOrders.length > 0 || managerOrders.length > 0) && createOrderVisible && _react.default.createElement(CreateButton, {
          className: "create-button",
          onClick: function onClick() {
            return showCreateOrder("lunch", current_date);
          }
        }, create_order_label)));
      }
    }
  }]);

  return Day;
}(_react.default.Component); // Styles


var DayWrapper = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Colors.secondary.mushrooms.default, function (props) {
  return props.mode == "day" ? "100%" : "20%";
}, _rules.Spacing.md);
var appear = (0, _reactEmotion.keyframes)(_templateObject2(), _rules.Spacing.md);
var Date = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.md, _rules.Spacing.md, _rules.Spacing.md, appear, _rules.Spacing.lg, _rules.Spacing.sm, _rules.Spacing.sm);
var DateLabel = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Animation.defaultSpeed, _rules.Colors.primary.eggYolk.default);
var NumbersWrap = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.sm, _rules.Spacing.md);
var NumberDay = (0, _reactEmotion.default)("h2")(_templateObject6(), _rules.Typography.body.fontFamily);
var NumberLinkDay = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject7(), _rules.Typography.body.fontFamily, _rules.Animation.fastSpeed, _rules.Colors.primary.eggYolk.default);
var Weekday = (0, _reactEmotion.default)("span")(_templateObject8(), _rules.Spacing.sm, _rules.Typography.body.fontFamily);
var WeekdayLink = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject9(), _rules.Spacing.sm, _rules.Typography.body.fontFamily, _rules.Animation.fastSpeed, _rules.Colors.primary.eggYolk.default);
var DayButtons = (0, _reactEmotion.default)("div")(_templateObject10());
var ItemsWrap = (0, _reactEmotion.default)("div")(_templateObject11());
var Items = (0, _reactEmotion.default)("div")(_templateObject12(), function (props) {
  return props.mode === "day" ? "row" : "column";
}, _rules.Spacing.md);
var CsvButton = (0, _reactEmotion.default)(_reactCsv.CSVLink)(_templateObject13(), _rules.Spacing.sm, _rules.Spacing.md, _rules.BorderRadius.sm, _rules.Animation.defaultSpeed, _rules.Spacing.md, _rules.Colors.secondary.eggshell.default, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.default, _rules.Spacing.sm);
var CreateButton = (0, _reactEmotion.default)("div")(_templateObject14(), _rules.Spacing.md, _rules.Spacing.sm, _rules.BorderRadius.sm, _rules.Colors.primary.eggYolk.default, _rules.Animation.defaultSpeed, _rules.Typography.body.fontFamily, _rules.Colors.secondary.eggplant.default, _rules.Colors.primary.eggYolk.default);
var Past = (0, _reactEmotion.css)(_templateObject15(), _rules.Colors.utility.grey.default);
var Present = (0, _reactEmotion.css)(_templateObject16(), _rules.Colors.secondary.eggplant.default);
var Future = (0, _reactEmotion.css)(_templateObject17());
var Loading = (0, _reactEmotion.css)(_templateObject18());
var PresentContainer = (0, _reactEmotion.css)(_templateObject19(), _rules.Colors.secondary.eggshell.default);
var FutureContainer = (0, _reactEmotion.css)(_templateObject20());
var PastContainer = (0, _reactEmotion.css)(_templateObject21());

var _default = (0, _reactIntl.injectIntl)(Day);

exports.default = _default;