"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _moment = _interopRequireDefault(require("moment"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _reactRouterDom = require("react-router-dom");

var _hocs = require("../../hocs");

var _reactDeviceDetect = require("react-device-detect");

var _ShortText = _interopRequireDefault(require("../ShortText"));

var _Tags = _interopRequireDefault(require("../Tags"));

var _Button = _interopRequireDefault(require("../Button"));

var _Price = _interopRequireDefault(require("../Price"));

var _PurchaseStateIndicator = _interopRequireDefault(require("../PurchaseStateIndicator"));

var _ButtonLink = _interopRequireDefault(require("../ButtonLink"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _SpicyIndicator = _interopRequireDefault(require("../SpicyIndicator"));

var _color = require("../../utils/color.js");

var _utils = require("../../i18n/utils.js");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  opacity: 0.9;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  opacity: 0.7;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(151, 119, 238, 0.5) 0%,\n    rgba(166, 66, 217, 0.5) 100%\n  );\n  color: ", "80;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(228, 89, 14, 0.5) 0%,\n    rgba(239, 126, 65, 0.5) 100%\n  );\n  color: ", ";\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(244, 175, 66, 0.5) 0%,\n    rgba(255, 206, 127, 0.5) 100%\n  );\n  color: ", ";\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(163, 229, 177, 0.5) 0%,\n    rgba(219, 235, 176, 0.5) 100%\n  );\n  color: ", ";\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #9777ee 0%, #a642d9 100%);\n  color: ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #e4590e 0%, #ef7e41 100%);\n  color: ", ";\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #f4af42 0%, #ffce7f 100%);\n  color: ", ";\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #a3e5b1 0%, #dbebb0 100%);\n  color: ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  display: inline-block;\n  position: absolute;\n  bottom: ", ";\n  left: ", ";\n  border-radius: 12px;\n  text-align: center;\n  line-height: 24px;\n  font-family: ", ";\n  color: ", ";\n  padding: 0 ", ";\n  background: ", ";\n  font-size: 14px;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " 0 ", " ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  span {\n    margin-left: ", ";\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", " ", " ", " ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  transition: ", ";\n  color: ", ";\n  font-size: 20px;\n  margin: ", " 0 ", " 0;\n  display: block;\n  text-decoration: none;\n  font-weight: bold;\n\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", " ", " ", ";\n  .spicy-indicator {\n    padding-left: 0;\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: inherit;\n  cursor: pointer;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  height: 100%;\n  width: 15%;\n  opacity: 0;\n  transition: ", ";\n  line-height: 125px;\n  padding-left: ", ";\n  padding-right: ", ";\n  text-align: ", ";\n  font-size: 20px;\n  cursor: pointer;\n  z-index: 5;\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    opacity: 1;\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 2px ", ";\n  border-radius: 12px;\n  font-weight: bold;\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  margin: 0 ", " 0 0;\n  position: absolute;\n  right: 0px;\n  z-index: 10;\n  pointer-events: none;\n  background: ", ";\n  border-radius: 10px;\n  opacity: 1;\n  flex-grow: 1;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover;\n  height: 125px;\n  width: 100%;\n  background-color: rgba(245, 218, 173, 0.5);\n  background-position: center;\n  position: relative;\n  // transition on mouse out\n  transition: ", " ease-in-out;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: ", ";\n  text-align: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: normal;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-family: ", ";\n  font-weight: bold;\n  max-width: 90%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: row;\n  text-decoration: none;\n  flex-wrap: wrap;\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: row;\n  transition: ", ";\n  text-decoration: none;\n  flex-wrap: wrap;\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n  &:hover h4 {\n    text-decoration: underline;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  position: relative;\n  box-sizing: border-box;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: 0.5s;\n  margin-bottom: ", ";\n  min-width: 200px;\n  max-width: 400px;\n  color: ", ";\n  margin-right: ", ";\n  &:hover {\n    .PhotoSlider {\n      opacity: 1;\n    }\n    box-shadow: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0; margin-left:", ";};\n  100% {opacity: 1; margin-left:0;}\n"]);

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

var placeHolderImage = "../img/placeholder-3.svg";

var FoodOptionCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FoodOptionCard, _React$Component);

  function FoodOptionCard(props) {
    var _this;

    _classCallCheck(this, FoodOptionCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FoodOptionCard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "previousIndex", function () {
      _this.setState({
        imageLoaded: false
      });

      var oldPlateIndex = _this.state.plateIndex;
      var newPlateIndex = null;
      var image = new Image();

      if (oldPlateIndex == 0) {
        newPlateIndex = _this.props.order.user_menu.ordered_plates.length - 1;
      } else {
        newPlateIndex = oldPlateIndex - 1;
      }

      image.src = _this.props.order.user_menu.ordered_plates[newPlateIndex].image;

      image.onload = function () {
        _this.setState({
          imageLoaded: true
        });
      };

      _this.setState({
        plateIndex: newPlateIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextIndex", function () {
      _this.setState({
        imageLoaded: false
      });

      var oldPlateIndex = _this.state.plateIndex;
      var newPlateIndex = null;
      var image = new Image();

      if (oldPlateIndex == _this.props.order.user_menu.ordered_plates.length - 1) {
        newPlateIndex = 0;
      } else {
        newPlateIndex = oldPlateIndex + 1;
      }

      image.src = _this.props.order.user_menu.ordered_plates[newPlateIndex].image;

      image.onload = function () {
        _this.setState({
          imageLoaded: true
        });
      };

      _this.setState({
        plateIndex: newPlateIndex
      });
    });

    _this.state = {
      plateIndex: 0,
      imageLoaded: false,
      userPurchase: null
    };
    return _this;
  }

  _createClass(FoodOptionCard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        imageLoaded: true
      });

      if (this.props.purchases) {
        var userPurchase = this.props.purchases.find(function (p) {
          return p.user && p.user.id == _this2.props.user.id;
        });
        this.props.purchases.map(function (purchase) {
          if (userPurchase) {
            _this2.setState({
              userPurchase: userPurchase
            });

            _this2.setState({
              plateIndex: _this2.props.order.assigned_menu_plates.findIndex(function (plate) {
                return plate.id == userPurchase.plate.id;
              })
            });
          }
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.plateIndex >= nextProps.order.user_menu.ordered_plates.length) {
        this.setState({
          plateIndex: 0
        });
      }

      if (nextProps.purchases) {
        var userPurchase = nextProps.purchases.find(function (p) {
          return p.user && p.user.id == nextProps.user.id;
        });

        if (userPurchase) {
          this.setState({
            userPurchase: userPurchase
          });
          this.setState({
            plateIndex: nextProps.order.assigned_menu_plates.findIndex(function (plate) {
              return plate.id == userPurchase.plate.id;
            })
          });
        } else {
          this.setState({
            userPurchase: userPurchase
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          order = _this$props.order,
          addPurchase = _this$props.addPurchase,
          _this$props$baseUrl = _this$props.baseUrl,
          baseUrl = _this$props$baseUrl === void 0 ? "/" : _this$props$baseUrl,
          user = _this$props.user,
          deletePurchase = _this$props.deletePurchase,
          _this$props$purchases = _this$props.purchases,
          purchases = _this$props$purchases === void 0 ? [] : _this$props$purchases,
          deadlines = _this$props.deadlines,
          isLoading = _this$props.isLoading,
          _this$props$marginRig = _this$props.marginRight,
          marginRight = _this$props$marginRig === void 0 ? 0 : _this$props$marginRig,
          intl = _this$props.intl;
      var _this$state = this.state,
          plateIndex = _this$state.plateIndex,
          imageLoaded = _this$state.imageLoaded,
          userPurchase = _this$state.userPurchase;
      var plateDescription = "";
      var activePlate = null;
      var isPassed = deadlines.ordering.passed;

      if (order && order.user_menu && order.user_menu.ordered_plates) {
        if (userPurchase) {
          activePlate = order.assigned_menu_plates[plateIndex];
        } else if (plateIndex >= order.user_menu.ordered_plates.length) {
          activePlate = order.user_menu.ordered_plates[0];
        } else {
          activePlate = order.user_menu.ordered_plates[plateIndex];
        }
      }

      if (activePlate) {
        plateDescription = intl.locale === "fr" ? activePlate.description_FR : activePlate.description;
      }

      var addLabel = intl.formatMessage({
        id: "button.add_purchase"
      });
      var selectLabel = intl.formatMessage({
        id: "button.select_purchase"
      });
      var changeLabel = intl.formatMessage({
        id: "button.change_purchase"
      });
      var cancelLabel = intl.formatMessage({
        id: "button.cancel_purchase"
      });
      var confirmedLabel = intl.formatMessage({
        id: "status.confirmed_choice"
      });
      var inCartLabel = intl.formatMessage({
        id: "status.in_cart"
      });
      return _react.default.createElement(OptionCardContainer, {
        className: "food-option-card",
        marginRight: marginRight
      }, isPassed && !userPurchase || isPassed && userPurchase && userPurchase.status == "cart" || !order.assigned_menu_plates || order.assigned_menu_plates.length == 0 ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(HeaderNoChoicePast, {
        primary_color: order.prestation.color,
        secondary_color: (0, _color.lightenColor)(order.prestation.color),
        istextcolorlight: (0, _color.isTextColorLight)(order.prestation.color),
        ispassed: isPassed
      }, order.name ? _react.default.createElement(Title, null, order.name + " " + order.business.name + " ", _react.default.createElement(Time, null, intl.locale == "en" ? (0, _moment.default)(order.delivery_date).format("h:mm A") : (0, _moment.default)(order.delivery_date).format("H:mm"))) : _react.default.createElement(Title, null, (0, _utils.getTranslation)(order.prestation, intl.locale).name + " " + order.business.name + " ", _react.default.createElement(Time, null, intl.locale == "en" ? (0, _moment.default)(order.delivery_date).format("h:mm A") : (0, _moment.default)(order.delivery_date).format("H:mm")))), _react.default.createElement(NoChoiceMadeWarp, null, (!order.assigned_menu_plates || order.assigned_menu_plates.length == 0) && !isPassed ? _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "calendar.no_menu_employee",
        defaultMessage: "No menu have been assigned to this order yet."
      }) : _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "calendar.no_choice",
        defaultMessage: "No choice has been made."
      }))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Header, {
        to: baseUrl + "order/" + order.id + "/" + (0, _moment.default)(order.delivery_date).format("YYYY-MM-DD") + "/",
        primary_color: order.prestation.color,
        secondary_color: (0, _color.lightenColor)(order.prestation.color),
        istextcolorlight: (0, _color.isTextColorLight)(order.prestation.color),
        ispassed: isPassed
      }, order.name ? _react.default.createElement(Title, null, order.name + " " + order.business.name + " ", _react.default.createElement(Time, null, intl.locale == "en" ? (0, _moment.default)(order.delivery_date).format("h:mm A") : (0, _moment.default)(order.delivery_date).format("H:mm"))) : _react.default.createElement(Title, null, (0, _utils.getTranslation)(order.prestation, intl.locale).name + " " + order.business.name + " ", _react.default.createElement(Time, null, intl.locale == "en" ? (0, _moment.default)(order.delivery_date).format("h:mm A") : (0, _moment.default)(order.delivery_date).format("H:mm"))), !userPurchase && _react.default.createElement(OptionTag, null, plateIndex >= order.user_menu.ordered_plates.length ? 1 : plateIndex + 1, "/", order.user_menu.ordered_plates.length)), _react.default.createElement(PonctualContent, null, _react.default.createElement(Photo, {
        img: activePlate && activePlate.image,
        loaded: imageLoaded
      }, !userPurchase && _react.default.createElement(PhotoSlider, {
        position: "left",
        className: "PhotoSlider",
        onClick: this.previousIndex
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "chevron-left"
      })), _react.default.createElement(PhotoLink, {
        to: baseUrl + "order/" + order.id + "/" + (0, _moment.default)(order.delivery_date).format("YYYY-MM-DD") + "/" + plateIndex + "/"
      }), !userPurchase && _react.default.createElement(PhotoSlider, {
        position: "right",
        className: "PhotoSlider",
        onClick: this.nextIndex
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "chevron-right"
      })), activePlate.new && _react.default.createElement(SmallNewIndicator, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "calendar.new",
        defaultMessage: "New!"
      })), activePlate.new_recipe && _react.default.createElement(SmallNewIndicator, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "calendar.new_recipe",
        defaultMessage: "New recipe!"
      }))), _react.default.createElement(PlateInfo, null, _react.default.createElement(PlateName, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, fontColorPast, isPassed)),
        to: baseUrl + "order/" + order.id + "/" + (0, _moment.default)(order.delivery_date).format("YYYY-MM-DD") + "/" + plateIndex + "/"
      }, intl.locale === "fr" ? activePlate && activePlate.name_FR : activePlate && activePlate.name), _react.default.createElement(_Tags.default, {
        restrictions: activePlate && activePlate.restrictions,
        display: "all",
        size: "small",
        isPassed: isPassed
      }), _react.default.createElement(_SpicyIndicator.default, {
        spicyness: activePlate && activePlate.spicyness
      }), _react.default.createElement(PlateDescription, null, _react.default.createElement(_ShortText.default, {
        text: plateDescription,
        maxLength: 100
      }))), _react.default.createElement(PlateSellInfo, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, choiceMadeColor, userPurchase && userPurchase.status == "paid" && !isPassed), _defineProperty({}, choiceMadeColorFaded, userPurchase && userPurchase.status == "paid" && isPassed), _defineProperty({}, inCartColor, userPurchase && userPurchase.status == "cart"))
      }, userPurchase ? _react.default.createElement(StateContainer, null, _react.default.createElement(_PurchaseStateIndicator.default, {
        current_state: userPurchase.status
      }), _react.default.createElement("span", null, userPurchase.status == "paid" ? confirmedLabel : inCartLabel)) : _react.default.createElement(PriceContainer, null, _react.default.createElement(_Price.default, {
        price: activePlate && activePlate.cost,
        paidByBusiness: order.amount_paid_by_business,
        free: order.is_fully_paid
      })), !isPassed && (userPurchase ? (userPurchase.status != "paid" || order.is_fully_paid) && _react.default.createElement(ButtonsContainer, null, _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return deletePurchase(userPurchase.id);
        },
        color: "squash",
        label: cancelLabel,
        disabled: isLoading
      })) : _react.default.createElement(ButtonsContainer, null, _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return addPurchase({
            user: user.id,
            order: order.id,
            plate: activePlate && activePlate.id,
            delivery_date: (0, _moment.default)(order.delivery_date).format("YYYY-MM-DD")
          });
        },
        icon: "plus",
        label: order.is_fully_paid ? selectLabel : addLabel,
        disabled: isLoading || !activePlate
      })))))));
    }
  }]);

  return FoodOptionCard;
}(_react.default.Component);

var appear = (0, _reactEmotion.keyframes)(_templateObject(), _rules.Spacing.md);
var OptionCardContainer = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Colors.utility.white.default, _rules.Shadows.level1, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Spacing.md, function (props) {
  return props.isPast ? _rules.Colors.utility.grey.default : _rules.Colors.utility.black.default;
}, function (props) {
  return props.marginRight;
}, _rules.Shadows.level3);
var Header = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject3(), _rules.Spacing.sm, _rules.Spacing.md, _rules.Animation.defaultSpeed, function (props) {
  return props.ispassed == true ? "linear-gradient(135deg,  " + props.primary_color + "50 0%, " + props.secondary_color + "50 100%)" : "linear-gradient(135deg,  " + props.primary_color + " 0%, " + props.secondary_color + " 100%)";
}, function (props) {
  return props.istextcolorlight && !props.ispassed ? _rules.Colors.utility.white.default : _rules.Colors.secondary.eggplant.default;
});
var HeaderNoChoicePast = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.sm, _rules.Spacing.md, function (props) {
  return props.ispassed == true ? "linear-gradient(135deg,  " + props.primary_color + "50 0%, " + props.secondary_color + "50 100%)" : "linear-gradient(135deg,  " + props.primary_color + " 0%, " + props.secondary_color + " 100%)";
}, function (props) {
  return props.istextcolorlight && !props.ispassed ? _rules.Colors.utility.white.default : _rules.Colors.secondary.eggplant.default;
});
var Title = (0, _reactEmotion.default)("h4")(_templateObject5(), _rules.Typography.body.fontFamily);
var Time = (0, _reactEmotion.default)("span")(_templateObject6());
var NoChoiceMadeWarp = (0, _reactEmotion.default)("div")(_templateObject7(), _rules.Colors.utility.grey.default, _rules.Spacing.md);
var PonctualContent = (0, _reactEmotion.default)("div")(_templateObject8());
var Photo = (0, _reactEmotion.default)("div")(_templateObject9(), function (props) {
  return props.loaded ? props.img : placeHolderImage;
}, _rules.Animation.fastSpeed);
var OptionTag = (0, _reactEmotion.default)("div")(_templateObject10(), _rules.Spacing.sm, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize, _rules.Colors.secondary.eggplant.darker, _rules.Spacing.sm, _rules.Colors.secondary.eggshell.default);
var PhotoSlider = (0, _reactEmotion.default)("div")(_templateObject11(), function (props) {
  return props.position === "left" ? "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0) 100%)" : "linear-gradient(270deg,rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0) 100%)";
}, _rules.Colors.utility.grey.default, _rules.Animation.defaultSpeed, function (props) {
  return props.position === "left" ? "17px" : "Opx";
}, function (props) {
  return props.position === "right" ? "16px" : "Opx";
}, function (props) {
  return props.position;
}, function (props) {
  return props.position === "left" ? "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)" : "linear-gradient(270deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";
}, _rules.Colors.utility.black.default, function (props) {
  return props.position === "left" ? "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%,rgba(255, 255, 255, 0)100%)" : "linear-gradient(270deg,rgba(255, 255, 255, 0.9) 0%,rgba(255, 255, 255, 0) 100%)";
}, _rules.Colors.utility.black.default);
var PhotoLink = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject12());
var PlateInfo = (0, _reactEmotion.default)("div")(_templateObject13(), _rules.Spacing.md, _rules.Spacing.sm, _rules.Spacing.md, _rules.Spacing.sm);
var PlateName = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject14(), _rules.Typography.title.fontFamily, _rules.Animation.defaultSpeed, _rules.Colors.secondary.eggplant.default, _rules.Spacing.md, _rules.Spacing.sm);
var PlateDescription = (0, _reactEmotion.default)("div")(_templateObject15(), _rules.Colors.secondary.eggplant.lighter);
var PlateSellInfo = (0, _reactEmotion.default)("div")(_templateObject16(), _rules.Spacing.xs, _rules.Spacing.md, _rules.Spacing.xs, _rules.Spacing.md);
var PriceContainer = (0, _reactEmotion.default)("div")(_templateObject17());
var StateContainer = (0, _reactEmotion.default)("div")(_templateObject18(), _rules.Spacing.sm, _rules.Spacing.xs, _rules.Spacing.xs, _rules.Spacing.sm);
var SmallNewIndicator = (0, _reactEmotion.default)("div")(_templateObject19(), _rules.Spacing.md, _rules.Spacing.md, _rules.Typography.body.fontFamily, _rules.Colors.secondary.spinach.default, _rules.Spacing.sm, _rules.Colors.primary.lettuce.default);
var ButtonsContainer = (0, _reactEmotion.default)("div")(_templateObject20());
var BreakfastColor = (0, _reactEmotion.css)(_templateObject21(), _rules.Colors.secondary.spinach.default);
var LunchColor = (0, _reactEmotion.css)(_templateObject22(), _rules.Colors.secondary.eggplant.default);
var DinnerColor = (0, _reactEmotion.css)(_templateObject23(), _rules.Colors.utility.white.default);
var CocktailColor = (0, _reactEmotion.css)(_templateObject24(), _rules.Colors.utility.white.default);
var BreakfastColorFaded = (0, _reactEmotion.css)(_templateObject25(), _rules.Colors.secondary.spinach.lighter);
var LunchColorFaded = (0, _reactEmotion.css)(_templateObject26(), _rules.Colors.secondary.eggplant.lighter);
var DinnerColorFaded = (0, _reactEmotion.css)(_templateObject27(), _rules.Colors.secondary.eggplant.lighter);
var CocktailColorFaded = (0, _reactEmotion.css)(_templateObject28(), _rules.Colors.utility.white.default);
var choiceMadeColor = (0, _reactEmotion.css)(_templateObject29(), _rules.Colors.primary.lettuce.lighter);
var choiceMadeColorFaded = (0, _reactEmotion.css)(_templateObject30(), _rules.Colors.primary.lettuce.lighter);
var inCartColor = (0, _reactEmotion.css)(_templateObject31(), _rules.Colors.primary.eggYolk.lighter);
var fontColorPast = (0, _reactEmotion.css)(_templateObject32(), _rules.Colors.secondary.eggplant.lighter);

var _default = (0, _reactIntl.injectIntl)((0, _hocs.withDeadline)(FoodOptionCard));

exports.default = _default;