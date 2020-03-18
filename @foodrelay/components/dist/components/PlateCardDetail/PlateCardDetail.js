"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Tags = _interopRequireDefault(require("../Tags"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: #868181;\n  font-size: 14px;\n  margin-bottom: 2px;\n  margin-top: ", ";\n  opacity: 0.7;\n  font-weight: 200;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 16px 0 0 0;\n  color: #333132;\n  position: relative;\n  z-index: 10;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: #f0f0f0;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  padding: ", ";\n  position: relative;\n  box-sizing: border-box;\n  border-radius: 4px;\n  overflow: hidden;\n  min-height: 170px;\n  cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  opacity: 0.8;\n  font-weight: bold;\n  margin: 8px 0;\n  cursor: pointer;\n\n  svg {\n    margin-left: ", ";\n    position: relative;\n    top: 2px;\n    transition: ", ";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: calc(", " - 24px);\n  min-width: calc(", " - 24px);\n  margin: 0 12px 24px 12px;\n  @media (max-width: 480px) {\n    min-width: calc(100% - 24px);\n    max-width: calc(100% - 24px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

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

var PlateCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlateCard, _React$Component);

  function PlateCard(props) {
    var _this;

    _classCallCheck(this, PlateCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlateCard).call(this, props));
    _this.state = {
      ingredients_visible: false
    };
    return _this;
  }

  _createClass(PlateCard, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "showIngredients",
    value: function showIngredients() {
      this.setState({
        ingredients_visible: true
      });
    }
  }, {
    key: "hideIngredients",
    value: function hideIngredients() {
      this.setState({
        ingredients_visible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          item = _this$props.item,
          _onClick = _this$props.onClick,
          locale = _this$props.locale,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? "25%" : _this$props$width;

      if (item) {
        var has_separate_ingredients = false;

        if (item.seasoning !== "" || item.seasoning_FR !== "" || item.base !== "" || item.base_FR !== "" || item.vegetables !== "" || item.vegetables_FR !== "" || item.protein !== "" || item.protein_FR !== "" || item.sauce !== "" || item.sauce_FR !== "" || item.side !== "" || item.side_FR !== "" || item.garnish !== "" || item.garnish_FR !== "") {
          has_separate_ingredients = true;
        }

        return _react.default.createElement(OuterWrap, {
          onClick: function onClick() {
            return _onClick(item);
          },
          width: width
        }, _react.default.createElement(PlateContainer, {
          image: item.image
        }), _react.default.createElement(Title, null, locale == "fr" ? item.name_FR : item.name), this.state.ingredients_visible ? _react.default.createElement(InsideWrap, null, _react.default.createElement(_Tags.default, {
          restrictions: item.restrictions
        }), has_separate_ingredients ? _react.default.createElement(Ingredients, null, (item.base !== "" || item.base_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.base_subtitle",
          defaultMessage: "Base"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.base_FR : item.base)), (item.protein !== "" || item.protein_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.protein_subtitle",
          defaultMessage: "Protein"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.protein_FR : item.protein)), (item.vegetables !== "" || item.vegetables_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.veggies_subtitle",
          defaultMessage: "Vegetables"
        })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? item.vegetables_FR : item.vegetables)), (item.side !== "" || item.side_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.side_subtitle",
          defaultMessage: "Side"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.side_FR : item.side)), (item.sauce !== "" || item.sauce_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.sauce_subtitle",
          defaultMessage: "Sauce"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.sauce_FR : item.sauce)), (item.seasoning !== "" || item.seasoning_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.seasoning_subtitle",
          defaultMessage: "Seasoning"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.seasoning_FR : item.seasoning)), (item.garnish !== "" || item.garnish_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.garnish_subtitle",
          defaultMessage: "Garnish"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.garnish_FR : item.garnish))) : _react.default.createElement(Ingredients, null, _react.default.createElement(IngredientTitle, null, _react.default.createElement(FormattedMessage, {
          id: "plate.ingredients_subtitle",
          defaultMessage: "Ingredients"
        })), _react.default.createElement(IngredientContent, null, locale == "fr" ? item.description_FR : item.description)), _react.default.createElement(IngredientToggle, {
          onClick: function onClick() {
            return _this2.hideIngredients();
          }
        }, "Hide Ingredients", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "chevron-up"
        }))) : _react.default.createElement("div", {
          className: "plate-card-choice-show-ingredients"
        }, _react.default.createElement(IngredientToggle, {
          onClick: function onClick() {
            return _this2.showIngredients();
          }
        }, "Show Ingredients", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "chevron-down"
        }))));
      } else {
        return _react.default.createElement("div", null);
      }
    }
  }]);

  return PlateCard;
}(_react.default.Component);

var InsideWrap = (0, _reactEmotion.default)("div")(_templateObject());
var OuterWrap = (0, _reactEmotion.default)("div")(_templateObject2(), function (props) {
  return props.width;
}, function (props) {
  return props.width;
});
var IngredientToggle = (0, _reactEmotion.default)("span")(_templateObject3(), _rules.Spacing.sm, _rules.Animation.fastSpeed);
var PlateContainer = (0, _reactEmotion.default)("div")(_templateObject4(), function (props) {
  return props.image;
}, _rules.Spacing.lg);
var Title = (0, _reactEmotion.default)("h3")(_templateObject5());
var IngredientTitle = (0, _reactEmotion.default)("h4")(_templateObject6(), _rules.Spacing.lg);
var Ingredients = (0, _reactEmotion.default)("div")(_templateObject7());
var IngredientContent = (0, _reactEmotion.default)("h3")(_templateObject8(), _rules.Spacing.md);
var _default = PlateCard;
exports.default = _default;