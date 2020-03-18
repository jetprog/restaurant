"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareValues = exports.formatPhone = exports.mapObj = void 0;

var mapObj = function mapObj(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
};

exports.mapObj = mapObj;

var formatPhone = function formatPhone(phone) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";

  if (phone) {
    phone = phone.substring(2).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    return phone;
  }

  if (locale == "fr") {
    return "Pas de téléphone";
  } else {
    return "No phone";
  }
}; // function for dynamic sorting


exports.formatPhone = formatPhone;

var compareValues = function compareValues(key) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "asc";
  return function (a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    var varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    var varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    var comparison = 0;

    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }

    return order === "desc" ? comparison * -1 : comparison;
  };
};

exports.compareValues = compareValues;