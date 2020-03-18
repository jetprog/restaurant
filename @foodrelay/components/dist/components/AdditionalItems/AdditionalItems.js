"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _Dollars = _interopRequireDefault(require("../Dollars"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n  opacity: 0.5;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  text-align: right;\n  flex: 1;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  flex: 3;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 ", " 0;\n  opacity: 0.5;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: 30px;\n  padding: ", " ", " ", " 0;\n  text-align: center;\n  font-size: 23px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  border-radius: ", ";\n  background: ", ";\n  padding: ", ";\n  margin: 0 ", ";\n  box-shadow: ", ";\n  font-family: ", ";\n  color: ", ";\n\n  @media (max-width: 480px) {\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n  margin-bottom: 24px;\n  margin: 0 -", " ", " -", ";\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]);

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

var LineItemsBlock = function LineItemsBlock(_ref) {
  var lineItems = _ref.lineItems,
      locale = _ref.locale,
      totalSpecials = _ref.totalSpecials,
      totalConfirmed = _ref.totalConfirmed,
      eachLabel = _ref.eachLabel,
      notActiveLabel = _ref.notActiveLabel,
      active = _ref.active,
      drinksList = _ref.drinksList,
      dessertsList = _ref.dessertsList,
      veganDessertsList = _ref.veganDessertsList,
      type = _ref.type;

  if (active) {
    return _react.default.createElement(LineItems, null, lineItems.length > 0 && lineItems.map(function (lineItem, key) {
      return _react.default.createElement(LineItem, {
        key: key
      }, _react.default.createElement(Row, null, _react.default.createElement(Quantity, null, type == "Dessert of the day" ? lineItem.for_vegans ? totalSpecials : totalConfirmed - totalSpecials : totalConfirmed, " ", locale == "fr" ? lineItem.name_fr : lineItem.name, " (" + lineItem.unit_price / 100 + "$ " + eachLabel + ")"), _react.default.createElement(Price, null, _react.default.createElement(_Dollars.default, {
        cents: type == "Dessert of the day" ? lineItem.for_vegans ? totalSpecials * lineItem.unit_price : (totalConfirmed - totalSpecials) * lineItem.unit_price : totalConfirmed * lineItem.unit_price
      }))), type == "Drink assortment" && _react.default.createElement(Desc, null, drinksList), type == "Dessert of the day" && !lineItem.for_vegans && _react.default.createElement(Desc, null, dessertsList), type == "Dessert of the day" && lineItem.for_vegans && _react.default.createElement(Desc, null, veganDessertsList));
    }));
  } else {
    return _react.default.createElement(LineItems, null, _react.default.createElement(LineItem, null, _react.default.createElement(Quantity, null, notActiveLabel)));
  }
};

var AdditionalItems =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdditionalItems, _React$Component);

  function AdditionalItems(props) {
    _classCallCheck(this, AdditionalItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdditionalItems).call(this, props));
  }

  _createClass(AdditionalItems, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          order = _this$props.order,
          purchases = _this$props.purchases,
          intl = _this$props.intl;
      var totalConfirmed = purchases.filter(function (p) {
        return p.status === "paid" && p.not_eating === false;
      }).length;
      var specialOrders = purchases.filter(function (p) {
        return p.status === "paid" && p.user && p.user.restrictions && p.user.restrictions.find(function (r) {
          return r == 6 | r == 7 | r == 11;
        });
      });
      console.log(specialOrders);
      var totalSpecials = specialOrders.length;
      var eachLabel = intl.formatMessage({
        id: "additional_items.each_label"
      });
      var notActiveLabel = intl.formatMessage({
        id: "additional_items.not_active_label"
      });
      var beverages = intl.formatMessage({
        id: "additional_items.beverages"
      });
      var desserts = intl.formatMessage({
        id: "additional_items.desserts"
      });
      var veganDesserts = intl.formatMessage({
        id: "additional_items.vegan_desserts"
      });
      return _react.default.createElement(AdditionalItemsWrapper, {
        className: "additional-items"
      }, items && items.map(function (item, key) {
        return _react.default.createElement(Item, {
          key: key,
          active: item.type == "Drink assortment" && order.drinks || item.type == "Compostable utensils & napkins" && order.utensils || item.type == "Dessert of the day" && order.desserts
        }, _react.default.createElement(Icon, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: item.icon
        })), _react.default.createElement(Content, null, _react.default.createElement(Label, null, intl.locale == "fr" ? item.type_fr : item.type), _react.default.createElement(LineItemsBlock, {
          locale: intl.locale,
          totalSpecials: totalSpecials,
          totalConfirmed: totalConfirmed,
          lineItems: item.lineItems,
          type: item.type,
          eachLabel: eachLabel,
          notActiveLabel: notActiveLabel,
          drinksList: beverages,
          dessertsList: desserts,
          veganDessertsList: veganDesserts,
          active: item.type == "Drink assortment" && order.drinks || item.type == "Compostable utensils & napkins" && order.utensils || item.type == "Dessert of the day" && order.desserts
        })));
      }));
    }
  }]);

  return AdditionalItems;
}(_react.default.Component); // Styles


var AdditionalItemsWrapper = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.sm, _rules.Spacing.xl, _rules.Spacing.sm);
var Item = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.BorderRadius.sm, function (props) {
  return props.active ? _rules.Colors.secondary.eggshell.default : _rules.Colors.utility.lightGrey.default;
}, _rules.Spacing.md, _rules.Spacing.sm, _rules.Shadows.level1, _rules.Typography.body.fontFamily, function (props) {
  return props.active ? _rules.Colors.secondary.eggplant.default : _rules.Colors.utility.grey.default;
}, _rules.Spacing.md);
var Icon = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.sm, _rules.Spacing.md, _rules.Spacing.sm);
var Content = (0, _reactEmotion.default)("div")(_templateObject4());
var Label = (0, _reactEmotion.default)("h4")(_templateObject5(), _rules.Spacing.sm);
var LineItems = (0, _reactEmotion.default)("div")(_templateObject6());
var Row = (0, _reactEmotion.default)("div")(_templateObject7());
var LineItem = (0, _reactEmotion.default)("div")(_templateObject8(), _rules.Spacing.sm);
var Quantity = (0, _reactEmotion.default)("div")(_templateObject9());
var Price = (0, _reactEmotion.default)("div")(_templateObject10());
var Desc = (0, _reactEmotion.default)("div")(_templateObject11(), _rules.Spacing.sm, _rules.Spacing.md);

var _default = (0, _reactIntl.injectIntl)(AdditionalItems);

exports.default = _default;