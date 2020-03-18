"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dollars = function Dollars(_ref) {
  var cents = _ref.cents;
  var dollars = (cents / 100).toFixed(2);
  return _react.default.createElement("span", null, dollars, "$");
};

var _default = Dollars;
exports.default = _default;