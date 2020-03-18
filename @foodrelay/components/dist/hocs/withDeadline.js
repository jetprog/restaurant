"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _time = require("../utils/time");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// CURRENT DEADLINES

/*
Editing deadline is 2 days before order delivery date, at midnight
Ordering deadline for breakfasts is 8am on the order delivery date
Ordering deadline for lunches is 10am on the order delivery date
Ordering deadline for dinners is 3pm on the order delivery date
*/
// CHECK FUNCTIONS
var is_passed = function is_passed(deadline, now) {
  var remaining = deadline.diff(now);

  if (remaining <= 0) {
    return true;
  } else {
    return false;
  }
};

var remaining = function remaining(deadline, now) {
  return now.to(deadline);
};

var withDeadline = function withDeadline(WrappedComponent) {
  var HOC =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC(props) {
      var _this;

      _classCallCheck(this, HOC);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HOC).call(this, props));
      _this.state = {
        now: (0, _moment.default)()
      };
      return _this;
    }

    _createClass(HOC, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.intervalID = setInterval(function () {
          return _this2.tick();
        }, 1000);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearInterval(this.intervalID);
      }
    }, {
      key: "tick",
      value: function tick() {
        this.setState({
          now: (0, _moment.default)()
        });
      }
    }, {
      key: "render",
      value: function render() {
        var now = this.state.now;
        var order = this.props.order ? this.props.order : null;
        var prestation = this.props.prestation ? this.props.prestation : null;
        var date = null;

        if (this.props.current_date) {
          date = (0, _moment.default)(this.props.current_date).add(5, "hours");
        }

        var deadlines = {
          editing: {
            passed: false,
            remaining: 0
          },
          ordering: {
            passed: false,
            remaining: 0
          }
        }; // if component receives a single order, adjust deadlines for that order

        if (order) {
          if (order.prestation) {
            var deadline_time = order.prestation.deadline;
            var ordering_deadline = (0, _moment.default)(order.delivery_date).startOf("day").add(_moment.default.duration(deadline_time));
            var editing_deadline = (0, _moment.default)(order.delivery_date).subtract(2, "days").endOf("day");
            deadlines = {
              editing: {
                moment: editing_deadline,
                passed: is_passed(editing_deadline, now),
                remaining: remaining(editing_deadline, now)
              },
              ordering: {
                moment: ordering_deadline,
                passed: is_passed(ordering_deadline, now),
                remaining: remaining(ordering_deadline, now)
              }
            };
          } // otherwise return ordering deadline depending on type and date

        } else if (prestation && date) {
          var _deadline_time = prestation.deadline;

          var _ordering_deadline = date.clone().startOf("day").add(_moment.default.duration(_deadline_time));

          deadlines = {
            ordering: {
              moment: _ordering_deadline,
              passed: is_passed(_ordering_deadline, now),
              remaining: remaining(_ordering_deadline, now)
            }
          };
        }

        return _react.default.createElement(WrappedComponent, _extends({}, this.props, {
          deadlines: deadlines
        }));
      }
    }]);

    return HOC;
  }(_react.default.Component);

  return HOC;
};

var _default = withDeadline;
exports.default = _default;