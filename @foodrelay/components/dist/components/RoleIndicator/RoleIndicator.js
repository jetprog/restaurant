"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _utils = require("../../i18n/utils.js");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: bold;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: ", ";\n  overflow: hidden;\n  display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RoleIndicator = function RoleIndicator(_ref) {
  var role = _ref.role,
      intl = _ref.intl;
  var style = Employee;

  if (role) {
    if (role.role.value == "Admin") {
      style = Admin;
    } else if (role.role.value == "TeamLead") {
      style = TeamLead;
    } else if (role.role.value == "Guest") {
      style = Guest;
    } else if (role.role.value == "Archived") {
      style = Archived;
    }

    var translated_role = (0, _utils.getTranslation)(role.role, intl.locale);
    return _react.default.createElement(Indicator, {
      className: style
    }, translated_role && translated_role.name);
  } else {
    return _react.default.createElement("div", null);
  }
}; // Styles


var Indicator = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize, _rules.Typography.small.fontSize, _rules.BorderRadius.lg); // State Styles

var Admin = (0, _reactEmotion.css)(_templateObject2(), _rules.Colors.primary.lettuce.default, _rules.Colors.secondary.spinach.default);
var TeamLead = (0, _reactEmotion.css)(_templateObject3(), _rules.Colors.primary.eggYolk.default, _rules.Colors.secondary.eggplant.default);
var Employee = (0, _reactEmotion.css)(_templateObject4(), _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.default);
var Guest = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.secondary.eggshell.default, _rules.Colors.secondary.eggplant.default);
var Archived = (0, _reactEmotion.css)(_templateObject6(), _rules.Colors.utility.lightGrey.default, _rules.Colors.utility.black.default);

var _default = (0, _reactIntl.injectIntl)(RoleIndicator);

exports.default = _default;