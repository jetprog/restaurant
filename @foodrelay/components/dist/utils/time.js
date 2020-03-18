"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPast = exports.isToday = exports.getWeekDates = exports.getDateTimeUTC = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDateTimeUTC = function getDateTimeUTC(date) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "12:00";
  var utcDatetime = (0, _moment.default)(date).format("YYYY-MM-DD") + "T" + time;
  utcDatetime = new Date(utcDatetime);
  utcDatetime = _moment.default.utc(utcDatetime).format("YYYY-MM-DDTHH:mm:ss");
  return utcDatetime;
}; // get current week dates from monday to sunday


exports.getDateTimeUTC = getDateTimeUTC;

var getWeekDates = function getWeekDates(_ref) {
  var start_day = _ref.start_day,
      week_size = _ref.week_size;
  var start = (0, _moment.default)(start_day).utc().add(1, "days");
  start = (0, _moment.default)(start).startOf("isoweek");
  var weekDates = [];

  for (var i = 0; i < week_size; i++) {
    weekDates.push((0, _moment.default)(start).add(i, "days").locale("fr"));
  }

  return weekDates;
};

exports.getWeekDates = getWeekDates;

var isToday = function isToday(current_date) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment.default)();
  return (0, _moment.default)(now).isSame(current_date.format("YYYY-MM-DD"), "day");
};

exports.isToday = isToday;

var isPast = function isPast(current_date) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment.default)();
  return current_date.isBefore((0, _moment.default)(now), "day");
};

exports.isPast = isPast;