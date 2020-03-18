"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _time = require("../../utils/time");

var _reactDeviceDetect = require("react-device-detect");

var _reactIntl = require("react-intl");

var _CalendarNav = _interopRequireDefault(require("../CalendarNav"));

var _CalendarDay = _interopRequireDefault(require("../CalendarDay"));

var _ErrorBoundary = _interopRequireDefault(require("../ErrorBoundary"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: calc(100% - 62px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: calc(100% - 62px);\n"]);

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

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$view = _this$props.view,
          view = _this$props$view === void 0 ? "week" : _this$props$view,
          _this$props$showToggl = _this$props.showToggle,
          showToggle = _this$props$showToggl === void 0 ? false : _this$props$showToggl,
          userOrders = _this$props.userOrders,
          adminOrders = _this$props.adminOrders,
          managerOrders = _this$props.managerOrders,
          previousLink = _this$props.previousLink,
          nextLink = _this$props.nextLink,
          navFilters = _this$props.navFilters,
          navButtons = _this$props.navButtons,
          leftNavButtons = _this$props.leftNavButtons,
          dayButtonsDisplayed = _this$props.dayButtonsDisplayed,
          weeklyNavLock = _this$props.weeklyNavLock,
          date = _this$props.date,
          purchases = _this$props.purchases,
          confirmedPurchases = _this$props.confirmedPurchases,
          breakfastDisplayed = _this$props.breakfastDisplayed,
          lunchDisplayed = _this$props.lunchDisplayed,
          dinnerDisplayed = _this$props.dinnerDisplayed,
          numbersDisplayed = _this$props.numbersDisplayed,
          getStickers = _this$props.getStickers,
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
          intl = _this$props.intl,
          weekDates = _this$props.weekDates,
          exportCSV = _this$props.exportCSV,
          addPurchase = _this$props.addPurchase,
          _this$props$baseUrl = _this$props.baseUrl,
          baseUrl = _this$props$baseUrl === void 0 ? "/" : _this$props$baseUrl,
          user = _this$props.user,
          deletePurchase = _this$props.deletePurchase,
          isLoading = _this$props.isLoading,
          _this$props$isGetting = _this$props.isGettingStickers,
          isGettingStickers = _this$props$isGetting === void 0 ? false : _this$props$isGetting,
          isLoadingPurchases = _this$props.isLoadingPurchases,
          numbersLabel = _this$props.numbersLabel,
          showCreateOrder = _this$props.showCreateOrder; // default to day view on mobile

      var activeView = view;

      if (_reactDeviceDetect.isMobile) {
        activeView = "day";
      }

      var navOrders = userOrders;

      if (!userOrders) {
        if (!adminOrders) {
          navOrders = managerOrders;
        } else {
          navOrders = adminOrders;
        }
      }

      return _react.default.createElement(Wrap, null, _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement(_CalendarNav.default, {
        view: activeView,
        showToggle: showToggle,
        orders: navOrders,
        previousLink: previousLink,
        nextLink: nextLink,
        filters: navFilters,
        buttons: navButtons,
        leftButtons: leftNavButtons,
        weeklyNavLock: weeklyNavLock,
        isLoading: isLoading,
        date: date,
        weekDates: weekDates,
        baseUrl: baseUrl
      })), activeView == "week" && _react.default.createElement(WeekWrap, null, _react.default.createElement(Week, null, weekDates.map(function (current_date, key) {
        return _react.default.createElement(_ErrorBoundary.default, {
          key: key
        }, _react.default.createElement(_CalendarDay.default, {
          purchases: purchases && purchases.filter(function (p) {
            return (0, _moment.default)(p.delivery_date).format("YYYY-MM-DD") === current_date.format("YYYY-MM-DD");
          }),
          confirmedPurchases: confirmedPurchases,
          current_date: current_date,
          userOrders: userOrders && userOrders.filter(function (o) {
            return (0, _moment.default)(o.delivery_date).format("YYYY-MM-DD") === current_date.format("YYYY-MM-DD");
          }),
          adminOrders: adminOrders && adminOrders.filter(function (o) {
            return (0, _moment.default)(o.delivery_date).format("YYYY-MM-DD") === current_date.format("YYYY-MM-DD");
          }),
          managerOrders: managerOrders && managerOrders.filter(function (o) {
            return (0, _moment.default)(o.delivery_date).format("YYYY-MM-DD") === current_date.format("YYYY-MM-DD");
          }),
          mode: "week",
          breakfastDisplayed: breakfastDisplayed,
          lunchDisplayed: lunchDisplayed,
          dinnerDisplayed: dinnerDisplayed,
          numbersDisplayed: numbersDisplayed,
          buttonsDisplayed: dayButtonsDisplayed,
          getStickers: getStickers,
          showConfirmedTotal: showConfirmedTotal,
          showExtrasTotal: showExtrasTotal,
          showInCartTotal: showInCartTotal,
          showHotPlateTotal: showHotPlateTotal,
          showSaladTotal: showSaladTotal,
          showSandwichTotal: showSandwichTotal,
          exportCSV: exportCSV,
          addPurchase: addPurchase,
          baseUrl: baseUrl,
          user: user,
          deletePurchase: deletePurchase,
          isGettingStickers: isGettingStickers,
          isLoading: isLoading,
          isLoadingPurchases: isLoadingPurchases,
          numbersLabel: numbersLabel,
          showCreateOrder: showCreateOrder
        }));
      }))), activeView == "day" && _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement(_CalendarDay.default, {
        purchases: purchases && purchases.filter(function (p) {
          return (0, _moment.default)(p.delivery_date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
        }),
        confirmedPurchases: confirmedPurchases,
        current_date: date,
        userOrders: userOrders && userOrders.filter(function (o) {
          return (0, _moment.default)(o.delivery_date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
        }),
        adminOrders: adminOrders && adminOrders.filter(function (o) {
          return (0, _moment.default)(o.delivery_date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
        }),
        managerOrders: managerOrders && managerOrders.filter(function (o) {
          return (0, _moment.default)(o.delivery_date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
        }),
        mode: "day",
        breakfastDisplayed: breakfastDisplayed,
        lunchDisplayed: lunchDisplayed,
        dinnerDisplayed: dinnerDisplayed,
        numbersDisplayed: numbersDisplayed,
        showConfirmedTotal: showConfirmedTotal,
        showExtrasTotal: showExtrasTotal,
        showInCartTotal: showInCartTotal,
        showHotPlateTotal: showHotPlateTotal,
        showSaladTotal: showSaladTotal,
        showSandwichTotal: showSandwichTotal,
        addPurchase: addPurchase,
        baseUrl: baseUrl,
        user: user,
        deletePurchase: deletePurchase,
        isLoading: isLoading,
        isLoadingPurchases: isLoadingPurchases,
        buttonsDisplayed: dayButtonsDisplayed,
        exportCSV: exportCSV,
        getStickers: getStickers
      })));
    }
  }]);

  return Calendar;
}(_react.default.Component);

var Wrap = (0, _reactEmotion.default)("div")(_templateObject());
var WeekWrap = (0, _reactEmotion.default)("div")(_templateObject2());
var Week = (0, _reactEmotion.default)("div")(_templateObject3());

var _default = (0, _reactIntl.injectIntl)(Calendar);

exports.default = _default;