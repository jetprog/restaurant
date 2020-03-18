"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeOrderName = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("../i18n/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeOrderName = function composeOrderName(order, locale) {
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var recurring_date = arguments.length > 3 ? arguments[3] : undefined;
  var persona = arguments.length > 4 ? arguments[4] : undefined;
  var order_name = "Order";

  if (order) {
    if (order.name) {
      order_name = order.name;
    } else {
      if (order.prestation) {
        // if date included
        if (date) {
          if (order.is_recurring && recurring_date) {
            if (locale == "fr") {
              order_name = (0, _utils.getTranslation)(order.prestation, locale).name + " caféteria le " + (0, _moment.default)(recurring_date).format("LL");
            } else {
              order_name = "Cafeteria " + (0, _utils.getTranslation)(order.prestation, locale).name + " on " + (0, _moment.default)(recurring_date).format("LL");
            }
          } else {
            if (locale == "fr") {
              order_name = (0, _utils.getTranslation)(order.prestation, locale).name + " on the " + (0, _moment.default)(order.delivery_date).format("LL");
            } else {
              order_name = (0, _utils.getTranslation)(order.prestation, locale).name + " le " + (0, _moment.default)(order.delivery_date).format("LL");
            }
          } // if no date included

        } else {
          if (order.is_recurring) {
            if (locale == "fr") {
              order_name = (0, _utils.getTranslation)(order.prestation, locale).name + " caféteria";
            } else {
              order_name = "Cafeteria " + (0, _utils.getTranslation)(order.prestation, locale).name;
            }
          } else {
            if (locale == "fr") {
              order_name = (0, _utils.getTranslation)(order.prestation, locale).name;
            } else {
              order_name = (0, _utils.getTranslation)(order.prestation, locale).name;
            }
          }
        }
      }
    }

    if (persona == "manager" && order.business) {
      if (locale == "fr") {
        order_name += " pour " + order.business.name;
      } else {
        order_name += " for " + order.business.name;
      }
    }
  }

  return order_name;
};

exports.composeOrderName = composeOrderName;