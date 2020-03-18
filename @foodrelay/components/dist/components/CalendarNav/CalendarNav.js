"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _reactDeviceDetect = require("react-device-detect");

var _time = require("../../utils/time.js");

var _reactRouterDom = require("react-router-dom");

var _ButtonLink = _interopRequireDefault(require("../ButtonLink"));

var _Button = _interopRequireDefault(require("../Button"));

var _DropDownMenu = _interopRequireDefault(require("../DropDownMenu"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  background: #f5daad;\n  color: #4f1d28;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  opacity: 1;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 1;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 0.5;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  color: #bfbcbc;\n  opacity: 1;\n  background: transparent;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0; margin-left:5px;}\n  100% {opacity: 0.5; margin-left:-5px;}\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  width: 30px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  text-transform: uppercase;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  opacity: 0.5;\n  text-align: left;\n  margin-left: 0;\n  line-height: 35px;\n  width: 30px;\n  position: relative;\n  animation: ", " 0.3s ease normal forwards;\n  top: 0;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  margin-top: 8px;\n  position: relative;\n  border-radius: 18px;\n  height: 35px;\n  display: flex;\n  background: ", ";\n  font-family: ", ";\n  flex-direction: row;\n  padding: 0 0 0 ", ";\n  box-sizing: border-box;\n  text-decoration: none;\n  color: ", ";\n  font-weight: bold;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: right;\n  max-width: 35px;\n  .button-link {\n    text-align: right;\n    text-decoration: none;\n    background: transparent !important;\n    border: 0;\n    padding: 8px;\n    border-bottom: 0;\n    margin: 0;\n    svg {\n      margin-left: 0;\n      margin-right: 0;\n    }\n  }\n  a:hover {\n    border-bottom: 0;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: left;\n  max-width: 35px;\n  .button-link {\n    text-decoration: none;\n    border: 0;\n    background: transparent !important;\n    padding: 8px;\n    border-bottom: 0;\n    margin: 0;\n    svg {\n      margin-left: 0;\n      margin-right: 0;\n    }\n  }\n  a:hover {\n    border-bottom: 0;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 16px;\n  background: #fff;\n\n  h4 {\n    margin: 8px 0;\n    text-transform: capitalize;\n    color: #4f1d28;\n  }\n\n  .markers {\n    margin: 0;\n  }\n  .top-section {\n    margin: 0 8px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  line-height: 35px;\n  margin-left: ", ";\n  display: inline-block;\n  font-family: ", ";\n  font-size: ", ";\n  text-transform: capitalize;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-right: ", ";\n  display: inline-block;\n  position: relative;\n\n  .dropdown-menu-wrap {\n    position: absolute;\n    left: -8px;\n    top: 22px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  a {\n    margin-right: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  a {\n    margin-right: ", ";\n  }\n  a:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n\n  a,\n  span {\n    border-radius: 50%;\n    padding: ", " 11px;\n\n    svg,\n    svg.icon-right {\n      margin: 0;\n    }\n  }\n\n  span.disabled {\n    background: transparent;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  a {\n    margin-right: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", ";\n  box-sizing: border-box;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 2px solid ", "75;\n  padding: ", " 0;\n"]);

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

var getMobileDayClass = function getMobileDayClass(date) {
  var class_name = Future;

  if ((0, _time.isToday)(date)) {
    class_name = Present;
  } else if ((0, _time.isPast)(date)) {
    class_name = Past;
  }

  return class_name;
};

var CalendarNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarNav, _React$Component);

  function CalendarNav(props) {
    var _this;

    _classCallCheck(this, CalendarNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleDropDown", function () {
      _this.setState({
        dropDownShown: !_this.state.dropDownShown
      });
    });

    _this.state = {
      dropDownShown: false,
      left: 0,
      touchStartX: 0
    };
    return _this;
  }

  _createClass(CalendarNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleChangeWeek",
    value: function handleChangeWeek() {}
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart() {
      console.log("touch start");
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove() {
      console.log("touch move");
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      console.log("touch end");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$weekDates = _this$props.weekDates,
          weekDates = _this$props$weekDates === void 0 ? [] : _this$props$weekDates,
          _this$props$view = _this$props.view,
          view = _this$props$view === void 0 ? "week" : _this$props$view,
          _this$props$showToggl = _this$props.showToggle,
          showToggle = _this$props$showToggl === void 0 ? true : _this$props$showToggl,
          orders = _this$props.orders,
          previousLink = _this$props.previousLink,
          nextLink = _this$props.nextLink,
          dayLink = _this$props.dayLink,
          filters = _this$props.filters,
          buttons = _this$props.buttons,
          leftButtons = _this$props.leftButtons,
          weeklyNavLock = _this$props.weeklyNavLock,
          isLoading = _this$props.isLoading,
          date = _this$props.date,
          intl = _this$props.intl,
          _this$props$forceMobi = _this$props.forceMobile,
          forceMobile = _this$props$forceMobi === void 0 ? false : _this$props$forceMobi,
          baseUrl = _this$props.baseUrl;
      var dropDownShown = this.state.dropDownShown;
      var month = "";
      var class_name = Future;
      var isNextDisabled = false;
      var showMobile = _reactDeviceDetect.isMobile;
      var nextDayLink = "";
      var previousDayLink = "";
      var todayLink = "/";
      var root = "/";
      var dayBaseUrl = baseUrl;
      var weekBaseUrl = baseUrl;
      var todayLabel = intl.formatMessage({
        id: "calendarNav.today"
      });
      var dayLabel = intl.formatMessage({
        id: "calendarNav.day"
      });
      var weekLabel = intl.formatMessage({
        id: "calendarNav.week"
      });
      console.log("base url");
      console.log(baseUrl);

      if (baseUrl) {
        root = "/" + baseUrl.split("/")[1] + "/"; // switch from day to week and back

        if (baseUrl.includes("day")) {
          dayBaseUrl = baseUrl;
          weekBaseUrl = baseUrl.replace("day", "week");
        } else if (baseUrl.includes("week")) {
          dayBaseUrl = baseUrl.replace("week", "day");
          weekBaseUrl = baseUrl;
        } else {
          weekBaseUrl = root + "week/";
          dayBaseUrl = root + "day/";
        }
      }

      if (date && _moment.default.isMoment(date)) {
        month = date.format("MMMM YYYY"); // create next previous links on day mode
        // monday skip to friday on previous

        if (date.isoWeekday() == 1) {
          previousDayLink = root + "day/" + date.clone().subtract(3, "day").format("YYYY-MM-DD") + "/";
        } else {
          previousDayLink = root + "day/" + date.clone().subtract(1, "day").format("YYYY-MM-DD") + "/";
        } // friday skip to monday on next


        if (date.isoWeekday() == 5) {
          nextDayLink = root + "day/" + date.clone().add(3, "day").format("YYYY-MM-DD") + "/";
        } else {
          nextDayLink = root + "day/" + date.clone().add(1, "day").format("YYYY-MM-DD") + "/";
        }
      }

      if (view == "day") {
        todayLink = root + "day/";
      } else {
        todayLink = root + "week/";
      }

      if (weeklyNavLock) {
        var lockDate = (0, _moment.default)().startOf("week").add(weeklyNavLock - 1, "w");

        if (weekDates && weekDates.length > 0) {
          isNextDisabled = (0, _moment.default)(weekDates[0]).isSameOrAfter(lockDate, "d");
        }
      }

      if (forceMobile) {
        showMobile = true;
      }

      if (!showMobile) {
        return _react.default.createElement(Nav, null, _react.default.createElement(Wrap, null, _react.default.createElement(Row, null, leftButtons && _react.default.createElement(ButtonsLeft, null, leftButtons), _react.default.createElement(BackToToday, null, _react.default.createElement(_ButtonLink.default, {
          to: todayLink,
          label: todayLabel,
          color: "egg-shell",
          disabled: !todayLink
        })), showToggle && _react.default.createElement(Toggle, null, _react.default.createElement(_Button.default, {
          onClick: this.toggleDropDown,
          label: view == "week" ? weekLabel : view == "day" && dayLabel,
          color: "egg-shell",
          iconRight: "chevron-down"
        }), _react.default.createElement(_DropDownMenu.default, {
          shown: dropDownShown,
          padding: false,
          position: "left",
          buttons: _react.default.createElement("div", {
            onClick: this.toggleDropDown
          }, _react.default.createElement(_reactRouterDom.NavLink, {
            to: weekBaseUrl
          }, weekLabel), _react.default.createElement(_reactRouterDom.NavLink, {
            to: dayBaseUrl
          }, dayLabel))
        })), view == "day" && !_reactDeviceDetect.isMobile ? _react.default.createElement(NavButtons, null, _react.default.createElement(_ButtonLink.default, {
          to: previousDayLink,
          label: "",
          color: "transparent",
          icon: "arrow-left",
          disabled: isLoading || !previousLink
        }), _react.default.createElement(_ButtonLink.default, {
          to: nextDayLink,
          label: "",
          color: "transparent",
          iconRight: "arrow-right",
          disabled: isNextDisabled || isLoading || !nextLink
        })) : _react.default.createElement(NavButtons, null, _react.default.createElement(_ButtonLink.default, {
          to: previousLink,
          label: "",
          color: "transparent",
          icon: "arrow-left",
          disabled: isLoading || !previousLink
        }), _react.default.createElement(_ButtonLink.default, {
          to: nextLink,
          label: "",
          color: "transparent",
          iconRight: "arrow-right",
          disabled: isNextDisabled || isLoading || !nextLink
        })), _react.default.createElement(Month, null, month), filters && _react.default.createElement(Filters, null, filters), buttons && _react.default.createElement(Buttons, null, buttons))));
      } else {
        return _react.default.createElement(MobileNav, null, _react.default.createElement(Row, {
          className: "top-section"
        }, _react.default.createElement(Left, null, _react.default.createElement(_ButtonLink.default, {
          icon: "arrow-left",
          label: "",
          color: "transparent",
          to: previousLink,
          disabled: isLoading || !previousLink
        })), _react.default.createElement(Right, null, _react.default.createElement(_ButtonLink.default, {
          icon: "arrow-right",
          label: "",
          color: "transparent",
          to: nextLink,
          disabled: isLoading || isNextDisabled || !nextLink
        })), _react.default.createElement(Month, null, month)), _react.default.createElement(Row, {
          className: "markers",
          onTouchStart: function onTouchStart(touchStartEvent) {
            return _this2.handleTouchStart(touchStartEvent);
          },
          onTouchMove: function onTouchMove(touchMoveEvent) {
            return _this2.handleTouchMove(touchMoveEvent);
          },
          onTouchEnd: function onTouchEnd() {
            return _this2.handleTouchEnd();
          }
        }, weekDates.map(function (current_date, key) {
          return _react.default.createElement(Day, {
            key: key,
            className: (0, _reactEmotion.cx)(_defineProperty({}, getMobileDayClass(current_date), true), _defineProperty({}, Active, current_date.isSame(date, "day"))),
            to: root + "day/" + current_date.format("YYYY-MM-DD") + "/"
          }, _react.default.createElement(WeekDay, null, current_date.format("dd").charAt(0)), _react.default.createElement(Date, {
            className: (0, _reactEmotion.cx)(_defineProperty({}, Loading, isLoading))
          }, current_date.format("D")));
        })));
      }
    }
  }]);

  return CalendarNav;
}(_react.default.Component); // Styles


var Nav = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Colors.secondary.mushrooms.default, _rules.Spacing.md);
var Wrap = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.lg);
var Row = (0, _reactEmotion.default)("div")(_templateObject3());
var BackToToday = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.md);
var NavButtons = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.sm);
var Filters = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Spacing.md);
var Buttons = (0, _reactEmotion.default)("div")(_templateObject7(), _rules.Spacing.md);
var ButtonsLeft = (0, _reactEmotion.default)("div")(_templateObject8(), _rules.Spacing.md);
var Toggle = (0, _reactEmotion.default)("div")(_templateObject9(), _rules.Spacing.md);
var Month = (0, _reactEmotion.default)("div")(_templateObject10(), _rules.Colors.secondary.eggplant.default, _rules.Spacing.md, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize);
var MobileNav = (0, _reactEmotion.default)("div")(_templateObject11());
var Left = (0, _reactEmotion.default)("div")(_templateObject12());
var Right = (0, _reactEmotion.default)("div")(_templateObject13());
var Day = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject14(), _rules.Colors.utility.white.default, _rules.Typography.body.fontFamily, _rules.Spacing.sm, _rules.Colors.utility.black.default);
var Date = (0, _reactEmotion.default)("div")(_templateObject15(), appearDate);
var WeekDay = (0, _reactEmotion.default)("div")(_templateObject16());
var appear = (0, _reactEmotion.keyframes)(_templateObject17());
var appearDate = (0, _reactEmotion.keyframes)(_templateObject18());
var Loading = (0, _reactEmotion.css)(_templateObject19());
var LoadingWeekDate = (0, _reactEmotion.css)(_templateObject20());
var Past = (0, _reactEmotion.css)(_templateObject21(), _rules.Colors.utility.black.default);
var Present = (0, _reactEmotion.css)(_templateObject22(), _rules.Colors.secondary.eggplant.default);
var Future = (0, _reactEmotion.css)(_templateObject23());
var Active = (0, _reactEmotion.css)(_templateObject24());

var _default = (0, _reactIntl.injectIntl)(CalendarNav);

exports.default = _default;