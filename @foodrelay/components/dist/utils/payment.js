"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateOrderSummary = exports.calculatePercentage = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var calculatePercentage = function calculatePercentage(amount, percentage) {
  var result = 0;

  if (amount && percentage) {
    result = parseInt(amount) * parseInt(percentage) / 100;
  }

  return result;
};

exports.calculatePercentage = calculatePercentage;

var calculateOrderSummary = function calculateOrderSummary(mode, line_items, order, purchases, delivery_fee, gst, qst, service_fee) {
  var estimated_attendees = order.is_recurring ? order.attendees.length : order.number_of_expected_people;
  var choices = purchases.filter(function (p) {
    return p.status == "paid";
  }).length;
  var service_fee_amount = service_fee * 100;
  var gst_amount = gst * 100;
  var qst_amount = qst * 100;
  var summary = {
    line_items: [],
    delivery_fee: delivery_fee,
    service_fee: 0,
    subtotal_without_service_fee: 0,
    subtotal: 0,
    gst: 0,
    qst: 0,
    total: 0
  };
  line_items.map(function (li) {
    var unit_price = li.unit_price;
    var total_price = 0;

    var line_item = _objectSpread({}, li); // adjust unit price based on add ons


    if (li.add_ons.length > 0) {
      li.add_ons.map(function (ao) {
        unit_price += ao.unit_price;
      });

      if (li.rebate > 0) {
        unit_price -= li.rebate;
      }
    }

    if (mode == "estimate") {
      total_price = unit_price * estimated_attendees;
    } else if (mode == "summary") {
      total_price = unit_price * choices;
    }

    line_item.unit_price = unit_price;
    line_item.total_price = total_price;
    summary.line_items.push(line_item);
    summary.subtotal_without_service_fee += total_price;
  });

  if (delivery_fee) {
    summary.subtotal_without_service_fee += delivery_fee;
  }

  if (service_fee) {
    summary.service_fee = calculatePercentage(summary.subtotal_without_service_fee, service_fee_amount);
  }

  summary.subtotal = summary.subtotal_without_service_fee + summary.service_fee;

  if (gst) {
    summary.gst = calculatePercentage(summary.subtotal, gst_amount);
  }

  if (qst) {
    summary.qst = calculatePercentage(summary.subtotal, qst_amount);
  }

  summary.total = summary.subtotal + summary.gst + summary.qst;
  return summary;
};

exports.calculateOrderSummary = calculateOrderSummary;