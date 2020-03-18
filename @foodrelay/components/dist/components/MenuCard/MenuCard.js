"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactRouterDom = require("react-router-dom");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  margin: ", ";\n  max-width: calc(33.33333% - ", ");\n  min-width: calc(33.33333% - ", ");\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0 -", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin: 0 0 0 ", ";\n  color: ", ";\n  font-weight: 400;\n  text-align: right;\n  flex: 1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-weight: bold;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  padding: ", ";\n  position: relative;\n  box-sizing: border-box;\n  border-radius: 4px;\n  overflow: hidden;\n  min-height: 50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: ", ";\n  box-shadow: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  padding: ", ";\n  position: relative;\n  box-sizing: border-box;\n  border-radius: ", ";\n  overflow: hidden;\n  flex: 1;\n  min-width: calc(25% - 24px);\n  max-width: calc(25% - 24px);\n  margin: 12px;\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuCard = function MenuCard(_ref) {
  var item = _ref.item;
  var plates = [];
  var six_first_plates = [];

  if (item && item.plates) {
    plates = item.plates;
    six_first_plates = item.plates.slice(0, 6);
  }

  return _react.default.createElement(MenuCardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
    to: "/menu/" + item.id + "/"
  }, _react.default.createElement(Header, null, _react.default.createElement(Row, null, _react.default.createElement(Title, null, item.name), _react.default.createElement(NumPlates, null, plates.length, " plates")), _react.default.createElement(DateItem, null, (0, _moment.default)(item.date).format("MMM Do YYYY"))), _react.default.createElement(Choices, null, plates && six_first_plates.map(function (plate, k) {
    return _react.default.createElement(Choice, {
      key: k
    }, _react.default.createElement(PlateContainer, {
      image: plate.image
    }));
  }))));
}; // Styles


var MenuCardContainer = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Animation.defaultSpeed, _rules.Shadows.level1, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Colors.utility.white.default, _rules.Spacing.md, _rules.BorderRadius.sm, _rules.Colors.utility.black.default, _rules.Shadows.level3);
var PlateContainer = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Colors.secondary.eggshell.default, function (props) {
  return props.image;
}, _rules.Spacing.md);
var Row = (0, _reactEmotion.default)("div")(_templateObject3());
var Header = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.sm);
var Title = (0, _reactEmotion.default)("h4")(_templateObject5());
var DateItem = (0, _reactEmotion.default)("h4")(_templateObject6());
var NumPlates = (0, _reactEmotion.default)("h4")(_templateObject7(), _rules.Typography.small.fontSize, _rules.Spacing.md, _rules.Colors.utility.grey.default);
var Choices = (0, _reactEmotion.default)("div")(_templateObject8(), _rules.Spacing.xs);
var Choice = (0, _reactEmotion.default)("div")(_templateObject9(), _rules.Spacing.xs, _rules.Spacing.sm, _rules.Spacing.sm);
var _default = MenuCard;
exports.default = _default;