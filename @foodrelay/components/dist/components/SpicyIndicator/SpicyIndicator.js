"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-right: ", ";\n  display: inline-block;\n\n  svg {\n    font-size: 18px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  display: inline-block;\n  height: 20px;\n  min-height: 20px;\n  min-width: 40px;\n  line-height: 20px;\n  border-radius: 16px;\n  overflow: hidden;\n  text-align: center;\n  cursor: default;\n  transition: 0.3s;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  padding: 0 ", ";\n  margin-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpicyIndicator = function SpicyIndicator(_ref) {
  var spicyness = _ref.spicyness;
  var tooltip = "";

  var levelText = _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "spicy.not_spicy",
    defaultMessage: "Not spicy"
  });

  var icons = "";

  if (spicyness) {
    if (spicyness == 1) {
      levelText = _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "spicy.slightly_spicy",
        defaultMessage: "Slightly spicy"
      });
      icons = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pepper-hot"
      });
    } else if (spicyness == 2) {
      levelText = _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "spicy.moderately_spicy",
        defaultMessage: "Moderately spicy"
      });
      icons = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pepper-hot"
      }), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pepper-hot"
      }));
    } else if (spicyness == 3) {
      levelText = _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "spicy.very_spicy",
        defaultMessage: "Very spicy"
      });
      icons = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pepper-hot"
      }), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pepper-hot"
      }), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pepper-hot"
      }));
    }

    return _react.default.createElement(Indicator, {
      className: "spicy-indicator",
      title: levelText
    }, spicyness > 0 && _react.default.createElement(Icons, null, icons), levelText);
  } else {
    return _react.default.createElement(Indicator, null);
  }
}; // Styles


var Indicator = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Typography.body.fontFamily, _rules.Typography.small.fontSize, _rules.Colors.primary.squash.default, _rules.Spacing.sm, _rules.Spacing.sm);
var Icons = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.sm);

var _default = (0, _reactIntl.injectIntl)(SpicyIndicator);

exports.default = _default;