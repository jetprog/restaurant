"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _reactRouterDom = require("react-router-dom");

var _Dollars = _interopRequireDefault(require("../Dollars"));

var _SpicyIndicator = _interopRequireDefault(require("../SpicyIndicator"));

var _Tags = _interopRequireDefault(require("../Tags"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 0.5;\n  margin: 0;\n  font-size: 13px;\n  padding: ", " 0 0 0;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Garamond\";\n  margin: 0;\n  color: ", ";\n  line-height: 20px;\n  position: relative;\n  font-size: 20px;\n  z-index: 10;\n  display: inline-block;\n  flex: 1;\n  flex-grow: 3;\n  min-height: 40px;\n  margin-bottom: ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 17px;\n  text-align: center;\n  background: ", ";\n  color: ", ";\n  font-weight: bold;\n  font-size: 18px;\n  display: inline-block;\n  margin-right: ", ";\n  padding: 0 12px 0 12px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 12px;\n  top: 12px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 12px;\n  font-size: 14px;\n  background: #fff;\n  padding: 4px ", ";\n  font-weight: bold;\n  color: ", ";\n  background: ", ";\n  display: inline-block;\n  vertical-align: top;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n\n  @media (max-width: 480px) {\n    svg[date-icon=\"sandwich\"] {\n      left: ", ";\n      bottom: 13px;\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n\n  @media (max-width: 480px) {\n    svg[date-icon=\"salad\"] {\n      left: ", ";\n      bottom: 13px;\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  line-height: 27px;\n  border-radius: 50%;\n  text-align: center;\n  display: inline-block;\n  margin-right: ", ";\n\n  svg {\n    color: #fff;\n    text-align: center;\n    font-size: 16px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  min-height: 170px;\n  position: relative;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: right;\n  font-family: ", ";\n  color: ", ";\n  font-size: 20px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding-top: ", ";\n  .spicy-indicator {\n    padding-left: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 12px ", ";\n  border-bottom: 2px solid ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 12px ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  transition: ", ";\n  box-shadow: ", ";\n  border-radius: ", ";\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  min-height: 274px;\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: calc(", " - ", ");\n  min-width: calc(", " - ", ");\n  display: block;\n  text-decoration: none;\n  margin: 0 12px ", " 12px;\n  @media (max-width: 480px) {\n    min-width: calc(100% - ", ");\n    max-width: calc(100% - ", ");\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: calc(", " - ", ");\n  min-width: calc(", " - ", ");\n  margin: 0 12px ", " 12px;\n  cursor: ", ";\n  @media (max-width: 480px) {\n    min-width: calc(100% - ", ");\n    max-width: calc(100% - ", ");\n  }\n"]);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlateContainer = function PlateContainer(_ref) {
  var item = _ref.item,
      total = _ref.total,
      locale = _ref.locale,
      persona = _ref.persona,
      hotTooltip = _ref.hotTooltip,
      coldTooltip = _ref.coldTooltip;
  return _react.default.createElement(PlateContainerWrapper, null, _react.default.createElement(Picture, {
    image: item.image
  }, total !== null && total > 0 && _react.default.createElement(Total, {
    total: total
  }, total)), _react.default.createElement(PlateMainContent, null, _react.default.createElement(Row, null, _react.default.createElement(Title, null, locale == "fr" ? item.name_FR : item.name)), _react.default.createElement(_Tags.default, {
    restrictions: item && item.restrictions,
    display: "all",
    size: "small"
  }), _react.default.createElement(Indicators, null, _react.default.createElement(_SpicyIndicator.default, {
    spicyness: item && item.spicyness
  })), item.description && _react.default.createElement(Description, null, locale == "fr" ? item.description_FR : item.description)), _react.default.createElement(PlateContent, null, _react.default.createElement(Row, null, _react.default.createElement(InfoBar, null, _react.default.createElement(MealTempIcon, {
    title: item.is_hot_meal ? hotTooltip : coldTooltip,
    className: (0, _reactEmotion.cx)(_defineProperty({}, HotPlate, item.category == "normal" && item.is_hot_meal || item.category == "hot_plate"), _defineProperty({}, Salad, item.category == "normal" && !item.is_hot_meal || item.category == "salad"), _defineProperty({}, Sandwich, item.category == "sandwich"))
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: item.category == "normal" ? item.is_hot_meal ? "soup" : "salad" : item.category == "hot_plate" ? "soup" : item.category == "salad" ? "salad" : item.category == "sandwich" && "sandwich"
  })), persona == "manager" && item.restrictions && item.restrictions.is_variant && _react.default.createElement(VariantTag, null, "Variant")), persona == "manager" && _react.default.createElement(Price, null, _react.default.createElement(_Dollars.default, {
    cents: item.cost
  })))));
};

var PlateCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlateCard, _React$Component);

  function PlateCard(props) {
    _classCallCheck(this, PlateCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlateCard).call(this, props));
  }

  _createClass(PlateCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          onClick = _this$props.onClick,
          to = _this$props.to,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? "25%" : _this$props$width,
          persona = _this$props.persona,
          total = _this$props.total,
          intl = _this$props.intl;
      var hotTooltip = intl.formatMessage({
        id: "plateCard.hot"
      });
      var coldTooltip = intl.formatMessage({
        id: "plateCard.cold"
      });

      if (item) {
        if (to) {
          return _react.default.createElement(LinkCard, {
            to: to,
            width: width
          }, _react.default.createElement(PlateContainer, {
            item: item,
            locale: intl.locale,
            total: total,
            hotTooltip: hotTooltip,
            coldTooltip: coldTooltip,
            persona: persona
          }));
        } else {
          return _react.default.createElement(ClickableCard, {
            onClick: onClick ? function () {
              return onClick(item);
            } : function () {
              return console.log("no click action");
            },
            width: width
          }, _react.default.createElement(PlateContainer, {
            item: item,
            locale: intl.locale,
            total: total,
            hotTooltip: hotTooltip,
            coldTooltip: coldTooltip,
            persona: persona
          }));
        }
      } else {
        return _react.default.createElement("div", null);
      }
    }
  }]);

  return PlateCard;
}(_react.default.Component); // Styles


var ClickableCard = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.width;
}, _rules.Spacing.lg, function (props) {
  return props.width;
}, _rules.Spacing.lg, _rules.Spacing.lg, function (props) {
  return props.onClick ? "pointer" : "default";
}, _rules.Spacing.lg, _rules.Spacing.lg);
var LinkCard = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject2(), function (props) {
  return props.width;
}, _rules.Spacing.lg, function (props) {
  return props.width;
}, _rules.Spacing.lg, _rules.Spacing.lg, _rules.Spacing.lg, _rules.Spacing.lg);
var PlateContainerWrapper = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Colors.utility.white.default, _rules.Animation.defaultSpeed, _rules.Shadows.level1, _rules.BorderRadius.sm, _rules.Shadows.level3);
var PlateContent = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.md);
var PlateMainContent = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.md, _rules.Colors.secondary.eggshell.default);
var InfoBar = (0, _reactEmotion.default)("div")(_templateObject6());
var Indicators = (0, _reactEmotion.default)("div")(_templateObject7(), _rules.Spacing.sm);
var Price = (0, _reactEmotion.default)("div")(_templateObject8(), _rules.Typography.body.fontFamily, _rules.Colors.utility.black.default);
var Picture = (0, _reactEmotion.default)("div")(_templateObject9(), _rules.Colors.primary.eggYolk.default, function (props) {
  return props.image;
});
var MealTempIcon = (0, _reactEmotion.default)("div")(_templateObject10(), _rules.Spacing.sm);
var HotPlate = (0, _reactEmotion.css)(_templateObject11(), _rules.Colors.primary.squash.default);
var Salad = (0, _reactEmotion.css)(_templateObject12(), _rules.Colors.secondary.eatYourGreens.default, _rules.Spacing.sm);
var Sandwich = (0, _reactEmotion.css)(_templateObject13(), _rules.Colors.primary.eggYolk.default, _rules.Spacing.sm);
var VariantTag = (0, _reactEmotion.default)("div")(_templateObject14(), _rules.Spacing.sm, _rules.Colors.utility.black.default, _rules.Colors.secondary.eggshell.default);
var Row = (0, _reactEmotion.default)("div")(_templateObject15());
var Total = (0, _reactEmotion.default)("div")(_templateObject16(), function (props) {
  return props.total > 0 ? "#a3e5b1" : "#fff";
}, _rules.Colors.utility.black.default, _rules.Spacing.sm);
var Title = (0, _reactEmotion.default)("h3")(_templateObject17(), _rules.Colors.secondary.eggplant.default, _rules.Spacing.md);
var Description = (0, _reactEmotion.default)("p")(_templateObject18(), _rules.Colors.secondary.eggplant.default, _rules.Spacing.sm);

var _default = (0, _reactIntl.injectIntl)(PlateCard);

exports.default = _default;