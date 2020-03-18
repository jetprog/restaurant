"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactDeviceDetect = require("react-device-detect");

var _reactIntl = require("react-intl");

var _CalendarOrderCard = _interopRequireDefault(require("../CalendarOrderCard"));

var _FoodOptionCard = _interopRequireDefault(require("../FoodOptionCard"));

var _ErrorBoundary = _interopRequireDefault(require("../ErrorBoundary"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  flex-wrap: wrap;\n\n  .food-option-card {\n    min-width: ", ";\n  }\n\n  .order-card {\n    min-width: ", ";\n  }\n"]);

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarPrestation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarPrestation, _React$Component);

  function CalendarPrestation(props) {
    _classCallCheck(this, CalendarPrestation);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarPrestation).call(this, props));
  }

  _createClass(CalendarPrestation, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          userOrders = _this$props.userOrders,
          adminOrders = _this$props.adminOrders,
          managerOrders = _this$props.managerOrders,
          prestation = _this$props.prestation,
          showConfirmedTotal = _this$props.showConfirmedTotal,
          showExtrasTotal = _this$props.showExtrasTotal,
          showInCartTotal = _this$props.showInCartTotal,
          showSaladTotal = _this$props.showSaladTotal,
          showHotPlateTotal = _this$props.showHotPlateTotal,
          showSandwichTotal = _this$props.showSandwichTotal,
          current_date = _this$props.current_date,
          purchases = _this$props.purchases,
          today = _this$props.today,
          addPurchase = _this$props.addPurchase,
          deletePurchase = _this$props.deletePurchase,
          baseUrl = _this$props.baseUrl,
          user = _this$props.user,
          isLoadingPurchases = _this$props.isLoadingPurchases,
          _this$props$mode = _this$props.mode,
          mode = _this$props$mode === void 0 ? {
        mode: mode
      } : _this$props$mode;
      return _react.default.createElement(Prestation, {
        mode: mode,
        isMobile: _reactDeviceDetect.isMobile
      }, managerOrders.length > 0 ? _react.default.createElement(_react.default.Fragment, null, console.log("manager"), managerOrders.map(function (order, k) {
        return order.prestation.value.toLowerCase() === prestation && _react.default.createElement(_CalendarOrderCard.default, {
          order: order,
          key: k,
          smallSize: mode === "week",
          purchases: purchases.filter(function (p) {
            return p.order === order.id;
          }),
          isPast: current_date && (0, _moment.default)(current_date).isBefore(today, "day"),
          showConfirmedTotal: showConfirmedTotal,
          showExtrasTotal: showExtrasTotal,
          showInCartTotal: showInCartTotal,
          showSaladTotal: showSaladTotal,
          showHotPlateTotal: showHotPlateTotal,
          showSandwichTotal: showSandwichTotal,
          marginRight: mode == "day" ? _rules.Spacing.md : "0px",
          showRebate: true,
          cardType: "manager"
        });
      })) : _react.default.createElement(_react.default.Fragment, null, userOrders.filter(function (o) {
        return o.prestation.value.toLowerCase() === prestation;
      }).map(function (order, k) {
        return order.prestation.value.toLowerCase() === prestation && _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement(_FoodOptionCard.default, {
          order: order,
          key: k,
          addPurchase: addPurchase,
          baseUrl: baseUrl,
          user: user,
          deletePurchase: deletePurchase,
          purchases: purchases.filter(function (p) {
            return p.order.id === order.id;
          }),
          isLoading: isLoadingPurchases,
          marginRight: mode == "day" ? _rules.Spacing.md : "0px"
        }));
      }), adminOrders.map(function (order, k) {
        return order.prestation.value.toLowerCase() === prestation && _react.default.createElement(_ErrorBoundary.default, {
          key: k
        }, _react.default.createElement(_CalendarOrderCard.default, {
          order: order,
          key: k,
          smallSize: mode === "week",
          purchases: purchases.filter(function (p) {
            return p.order === order.id;
          }),
          isPast: current_date && (0, _moment.default)(current_date).isBefore(today, "day"),
          showConfirmedTotal: showConfirmedTotal,
          showExtrasTotal: showExtrasTotal,
          showInCartTotal: showInCartTotal,
          showSaladTotal: showSaladTotal,
          showHotPlateTotal: showHotPlateTotal,
          showSandwichTotal: showSandwichTotal,
          cardType: "admin",
          marginRight: mode == "day" ? _rules.Spacing.md : "0px"
        }));
      })));
    }
  }]);

  return CalendarPrestation;
}(_react.default.Component); // styles


var Prestation = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.mode === "day" ? "row" : "column";
}, function (props) {
  return props.mode == "day" && !_reactDeviceDetect.isMobile ? "calc(25% - 16px)" : "100%";
}, function (props) {
  return props.mode == "day" && !_reactDeviceDetect.isMobile ? "calc(25% - 16px)" : "100%";
});
var _default = CalendarPrestation;
exports.default = _default;