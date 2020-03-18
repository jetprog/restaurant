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

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _hocs = require("../../hocs");

var _TopPanel = _interopRequireDefault(require("../TopPanel"));

var _ShortText = _interopRequireDefault(require("../ShortText"));

var _Tags = _interopRequireDefault(require("../Tags"));

var _PurchaseStateIndicator = _interopRequireDefault(require("../PurchaseStateIndicator"));

var _Button = _interopRequireDefault(require("../Button"));

var _ButtonLink = _interopRequireDefault(require("../ButtonLink"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Price = _interopRequireDefault(require("../Price"));

var _CalendarPrestation = _interopRequireDefault(require("../CalendarPrestation"));

var _SpicyIndicator = _interopRequireDefault(require("../SpicyIndicator"));

var _PlateTypeIndicator = _interopRequireDefault(require("../PlateTypeIndicator"));

var _utils = require("../../i18n/utils.js");

var _color = require("../../utils/color.js");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: absolute;\n  bottom: ", ";\n  left: ", ";\n  div {\n    vertical-align: top;\n    margin-right: ", ";\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  opacity: 0.9;\n  color: ", ";\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  opacity: 0.7;\n  color: ", ";\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(151, 119, 238, 0.5) 0%,\n    rgba(166, 66, 217, 0.5) 100%\n  );\n  color: ", "80;\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(228, 89, 14, 0.5) 0%,\n    rgba(239, 126, 65, 0.5) 100%\n  );\n  color: ", ";\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(244, 175, 66, 0.5) 0%,\n    rgba(255, 206, 127, 0.5) 100%\n  );\n  color: ", ";\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    135deg,\n    rgba(163, 229, 177, 0.5) 0%,\n    rgba(219, 235, 176, 0.5) 100%\n  );\n  color: ", ";\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #9777ee 0%, #a642d9 100%);\n  color: ", ";\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #e4590e 0%, #ef7e41 100%);\n  color: ", ";\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #f4af42 0%, #ffce7f 100%);\n  color: ", ";\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(135deg, #a3e5b1 0%, #dbebb0 100%);\n  color: ", ";\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  display: inline-block;\n  border-radius: 12px;\n  text-align: center;\n  line-height: 24px;\n  font-family: ", ";\n  color: ", ";\n  padding: 0 ", ";\n  background: ", ";\n  font-size: 14px;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  height: 35px;\n  display: inline-block;\n  border-radius: 16px;\n  text-align: center;\n  line-height: 35px;\n  font-family: ", ";\n  color: ", ";\n  padding: 0 ", ";\n  background: ", ";\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " 0 ", " ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  h3 {\n    margin: 0 0 0 ", ";\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: ", ";\n  margin-top: ", ";\n  opacity: 0.7;\n  font-weight: 400;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 2px solid ", ";\n  padding-bottom: ", ";\n  color: ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: ", ";\n  border-left: 2px solid ", ";\n  color: ", ";\n  box-sizing: border-box;\n\n  h3 {\n    font-size: 20px;\n    font-size: 26px;\n    line-height: 24px;\n    margin-top: 0;\n    font-family: ", ";\n    font-weight: bold;\n  }\n\n  p {\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n  }\n\n  .and {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n"]);

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", " ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  padding-top: ", ";\n  word-break: break-all;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  transition: ", ";\n  font-weight: bold;\n  line-height: 1em;\n  color: ", ";\n  font-size: 40px;\n  margin: 0 0 ", " 0;\n  display: block;\n  text-decoration: none;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover;\n  height: ", ";\n  width: 100%;\n  background-color: rgba(245, 218, 173, 0.5);\n  background-position: center;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: ", ";\n  box-shadow: ", ";\n  margin-bottom: ", ";\n  position: relative;\n  transition: ", ";\n\n  .photo {\n    opacity: ", ";\n    transition: ", ";\n  }\n\n  &:hover {\n    box-shadow: ", ";\n\n    h4 {\n      text-decoration: underline;\n    }\n\n    .photo {\n      opacity: 1;\n    }\n  }\n\n  h4 {\n    margin: 0;\n    font-family: ", ";\n    color: ", ";\n    font-size: 20px;\n  }\n\n  @media (max-width: 480px) {\n    max-width: calc(50% - 16px);\n    min-width: calc(50% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-size: 26px;\n  font-family: ", ";\n  font-weight: bold;\n  color: ", ";\n  margin: ", " 0;\n  @media (max-width: 480px) {\n    margin-left: ", ";\n    width: 100%;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", " ", " ", ";\n  box-sizing: border-box;\n  margin-right: 8px;\n  height: 100%;\n  overflow-x: visible;\n  overflow-y: scroll;\n  @media (max-width: 480px) {\n    padding: 0 ", " ", " ", ";\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    margin-right: 0;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  box-sizing: border-box;\n  max-width: 300px;\n  background: ", ";\n  overflow-x: hidden;\n  transition: ", ";\n  @media (max-width: 480px) {\n    margin-left: -600px;\n    z-index: 1000;\n\n    &.open {\n      margin-left: 0;\n      display: block;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      max-width: 100%;\n      z-index: 100;\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  .main-row {\n    @media (max-width: 480px) {\n      flex-direction: column;\n      width: 100%;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n  background: #fff;\n  position: relative;\n  z-index: 10;\n  overflow-y: scroll;\n  @media (max-width: 480px) {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    height: 100%;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  font-weight: bold;\n  background: ", ";\n  color: ", ";\n  display: none;\n\n  svg {\n    margin-right: 8px;\n  }\n\n  @media (max-width: 480px) {\n    display: block;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-right: ", ";\n  font-family: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-family: ", ";\n  font-weight: bold;\n  border-bottom: 2px solid;\n  border-color: transparent;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n\n  .button-link {\n    border-radius: 20px;\n    padding: ", " 12px;\n    svg {\n      margin-right: 0;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  transition: ", ";\n  text-decoration: none;\n  color: ", ";\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 100%;\n"]);

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

var isTagsExist = function isTagsExist(restrictions, display) {
  var tagsExist = false;

  if (display == "diets" && (restrictions.is_vegan || restrictions.is_vegetarian || restrictions.is_gluten_free || !restrictions.has_gluten)) {
    tagsExist = true;
  }

  if (display == "allergens" && (restrictions.has_milk || restrictions.has_gluten || restrictions.is_gluten_free == false || restrictions.has_soy || restrictions.has_shellfish || restrictions.has_corn || restrictions.has_nuts || restrictions.has_eggs || restrictions.has_peanuts || restrictions.has_pork || restrictions.has_fish || restrictions.has_alcohol)) {
    tagsExist = true;
  }

  return tagsExist;
};

var CalendarOrderDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarOrderDetail, _React$Component);

  function CalendarOrderDetail(props) {
    var _this;

    _classCallCheck(this, CalendarOrderDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarOrderDetail).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "showPlate", function (index) {
      if (_this.props.order && _this.props.order.user_menu && _this.props.order.user_menu.ordered_plates) {
        _this.setState({
          imageLoaded: false
        });

        var image = new Image();
        image.src = _this.props.order.user_menu.ordered_plates[index].image;

        image.onload = function () {
          _this.setState({
            imageLoaded: true
          });

          _this.setState({
            plateIndex: index
          });
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showAllOptions", function () {
      _this.setState({
        allOptionsShownMobile: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideAllOptions", function () {
      _this.setState({
        allOptionsShownMobile: false
      });
    });

    _this.state = {
      plateIndex: 0,
      imageLoaded: false,
      userPurchase: null,
      allOptionsShownMobile: false
    };
    return _this;
  }

  _createClass(CalendarOrderDetail, [{
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

        if (userPurchase) {
          this.setState({
            userPurchase: userPurchase
          });
          this.setState({
            plateIndex: this.props.order.assigned_menu_plates.findIndex(function (plate) {
              return plate.id == userPurchase.plate.id;
            })
          });
        } else if (this.props.plateIndexShown && this.props.order && this.props.order.user_menu && this.props.order.user_menu.ordered_plates && this.props.plateIndexShown < this.props.order.user_menu.ordered_plates.length) {
          this.setState({
            plateIndex: this.props.plateIndexShown
          });
        } else {
          this.setState({
            plateIndex: 0
          });
          this.setState({
            allOptionsShownMobile: true
          });
        }
      }

      if (!this.props.purchases || this.props.purchases.length == 0) {
        if (this.props.plateIndexShown && this.props.order && this.props.order.user_menu && this.props.order.user_menu.ordered_plates && this.props.plateIndexShown < this.props.order.user_menu.ordered_plates.length) {
          this.setState({
            plateIndex: this.props.plateIndexShown
          });
        } else {
          this.setState({
            plateIndex: 0
          });
          this.setState({
            allOptionsShownMobile: true
          });
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
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
      var _this3 = this;

      var _this$props = this.props,
          order = _this$props.order,
          purchases = _this$props.purchases,
          user = _this$props.user,
          addPurchase = _this$props.addPurchase,
          deletePurchase = _this$props.deletePurchase,
          changePurchase = _this$props.changePurchase,
          open = _this$props.open,
          intl = _this$props.intl,
          plateIndexShown = _this$props.plateIndexShown,
          baseUrl = _this$props.baseUrl,
          closeLink = _this$props.closeLink,
          deadlines = _this$props.deadlines,
          isLoading = _this$props.isLoading;
      var _this$state = this.state,
          plateIndex = _this$state.plateIndex,
          imageLoaded = _this$state.imageLoaded,
          userPurchase = _this$state.userPurchase,
          allOptionsShownMobile = _this$state.allOptionsShownMobile;
      var activePlate = null;
      var isPassed = deadlines.ordering.passed;

      if (order.assigned_menu_plates && order.user_menu.ordered_plates) {
        if (userPurchase) {
          activePlate = order.assigned_menu_plates[plateIndex];
        } else if (plateIndex >= order.user_menu.ordered_plates.length) {
          activePlate = order.user_menu.ordered_plates[0];
        } else {
          activePlate = order.user_menu.ordered_plates[plateIndex];
        }
      }

      var addPurchaseLabel = intl.formatMessage({
        id: "button.add_purchase"
      });
      var selectPurchaseLabel = intl.formatMessage({
        id: "button.select_purchase"
      });
      var changeLabel = intl.formatMessage({
        id: "button.change_purchase"
      });
      var confirmedLabel = intl.formatMessage({
        id: "status.confirmed_choice"
      });
      var inCartLabel = intl.formatMessage({
        id: "status.in_cart"
      });
      var cancelLabel = intl.formatMessage({
        id: "button.cancel_purchase"
      });
      var optionsListTitle = "";

      if (order && order.user_menu && order.user_menu.ordered_plates) {
        optionsListTitle = intl.formatMessage({
          id: "title.options_list"
        }, {
          optionsNumber: order.user_menu.ordered_plates.length
        });
      }

      var viewAllOptionsLabel = intl.formatMessage({
        id: "title.view_all_options"
      });
      var plateDescription = intl.locale === "fr" ? activePlate.description_FR : activePlate.description;
      return _react.default.createElement(_TopPanel.default, {
        open: open,
        size: "big",
        closeLink: closeLink,
        headerContent: _react.default.createElement(Header, {
          primary_color: order.prestation.color,
          secondary_color: (0, _color.lightenColor)(order.prestation.color),
          istextcolorlight: (0, _color.isTextColorLight)(order.prestation.color),
          ispassed: isPassed
        }, order.name ? _react.default.createElement(Title, null, order.name + " " + order.business.name) : _react.default.createElement(Title, null, (0, _utils.getTranslation)(order.prestation, intl.locale).name + " " + order.business.name + " "), _react.default.createElement(Time, null, intl.locale == "en" ? (0, _moment.default)(order.delivery_date).format("LL") + " • " + (0, _moment.default)(order.delivery_date).format("h:mm A") : (0, _moment.default)(order.delivery_date).format("LL") + " • " + (0, _moment.default)(order.delivery_date).format("H:mm")), _react.default.createElement(CloseButton, null, _react.default.createElement(_ButtonLink.default, {
          icon: "times",
          to: closeLink
        })))
      }, _react.default.createElement(Container, null, !userPurchase && _react.default.createElement(Choices, {
        className: allOptionsShownMobile && "open"
      }, _react.default.createElement(ChoicesScroll, null, _react.default.createElement(ListTitle, null, optionsListTitle), order.user_menu.ordered_plates && order.user_menu.ordered_plates.map(function (plate, k) {
        return _react.default.createElement(Plate, {
          key: k,
          onClick: function onClick() {
            _this3.showPlate(k);

            _this3.hideAllOptions();
          },
          active: k == plateIndex
        }, _react.default.createElement(Photo, {
          className: "photo",
          img: plate.image,
          height: "125px"
        }, _react.default.createElement(Indicators, {
          spacing: _rules.Spacing.md
        }, plate.new && _react.default.createElement(SmallNewIndicator, null, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "calendar.new",
          defaultMessage: "New!"
        })), plate.new_recipe && _react.default.createElement(SmallNewIndicator, null, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "calendar.new_recipe",
          defaultMessage: "New recipe!"
        })))), _react.default.createElement(ChoiceDetails, null, _react.default.createElement("h4", null, intl.locale === "fr" ? plate.name_FR : plate.name)));
      }))), _react.default.createElement(PlateInfo, null, !userPurchase && _react.default.createElement(ShowAllButton, {
        onClick: this.showAllOptions
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "arrow-left"
      }), viewAllOptionsLabel), _react.default.createElement(Photo, {
        img: activePlate.image,
        height: _reactDeviceDetect.isMobile ? "200px" : "300px"
      }, _react.default.createElement(Indicators, {
        spacing: _rules.Spacing.lg
      }, activePlate.new && _react.default.createElement(NewIndicator, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "calendar.new",
        defaultMessage: "New!"
      })), activePlate.new_recipe && _react.default.createElement(NewIndicator, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "calendar.new_recipe",
        defaultMessage: "New recipe!"
      })), _react.default.createElement(_PlateTypeIndicator.default, {
        plate: activePlate
      }))), _react.default.createElement(PlateDetails, null, _react.default.createElement(Row, {
        className: "main-row"
      }, _react.default.createElement(LeftCol, null, _react.default.createElement(MainDetails, null, _react.default.createElement(PlateName, null, intl.locale === "fr" ? activePlate.name_FR : activePlate.name), _react.default.createElement(_SpicyIndicator.default, {
        spicyness: activePlate.spicyness
      }), _react.default.createElement(PlateDescription, null, plateDescription), isTagsExist(activePlate.restrictions, "diets") && _react.default.createElement(Section, null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "title.diet",
        defaultMessage: "Diets"
      })), _react.default.createElement(_Tags.default, {
        restrictions: activePlate.restrictions,
        display: "diet",
        size: "small"
      })), isTagsExist(activePlate.restrictions, "allergens") && _react.default.createElement(Section, null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "title.allergens",
        defaultMessage: "Allergens"
      })), _react.default.createElement(_Tags.default, {
        restrictions: activePlate.restrictions,
        display: "allergy",
        size: "small"
      }))), _react.default.createElement(PlateSellInfo, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, ConfirmedColor, userPurchase && userPurchase.status == "paid" && !isPassed), _defineProperty({}, PastConfirmedColor, userPurchase && userPurchase.status == "paid" && isPassed), _defineProperty({}, InCartColor, userPurchase && userPurchase.status == "cart"))
      }, userPurchase ? _react.default.createElement(StateContainer, null, _react.default.createElement(_PurchaseStateIndicator.default, {
        current_state: "paid"
      }), _react.default.createElement("h3", null, userPurchase.status == "paid" ? confirmedLabel : inCartLabel)) : _react.default.createElement(PriceContainer, null, _react.default.createElement(_Price.default, {
        price: activePlate.cost,
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
            plate: activePlate.id,
            delivery_date: (0, _moment.default)(order.delivery_date).format("YYYY-MM-DD")
          });
        },
        icon: "plus",
        label: order.is_fully_paid ? selectPurchaseLabel : addPurchaseLabel,
        disabled: isLoading || !activePlate
      })))), _react.default.createElement(MainDetails, null, _react.default.createElement(Section, null, _react.default.createElement(SectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "title.ingredients",
        defaultMessage: "Ingredients"
      })), (activePlate.base !== "" || activePlate.base_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.base_subtitle",
        defaultMessage: "Base"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.base_FR : activePlate.base)), (activePlate.protein !== "" || activePlate.protein_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.protein_subtitle",
        defaultMessage: "Protein"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.protein_FR : activePlate.protein)), (activePlate.vegetables !== "" || activePlate.vegetables_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.veggies_subtitle",
        defaultMessage: "Vegetables"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.vegetables_FR : activePlate.vegetables)), (activePlate.side !== "" || activePlate.side_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.side_subtitle",
        defaultMessage: "Side"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.side_FR : activePlate.side)), (activePlate.sauce !== "" || activePlate.sauce_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.sauce_subtitle",
        defaultMessage: "Sauce"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.sauce_FR : activePlate.sauce)), (activePlate.seasoning !== "" || activePlate.seasoning_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.seasoning_subtitle",
        defaultMessage: "Seasoning"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.seasoning_FR : activePlate.seasoning)), (activePlate.garnish !== "" || activePlate.garnish_FR !== "") && _react.default.createElement("div", null, _react.default.createElement(SmallSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "plate.garnish_subtitle",
        defaultMessage: "Garnish"
      })), _react.default.createElement(IngredientContent, null, intl.locale == "fr" ? activePlate.garnish_FR : activePlate.garnish))), activePlate.weight > 0 && _react.default.createElement(Section, null, _react.default.createElement(SectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "title.weight",
        defaultMessage: "Weight"
      })), _react.default.createElement(IngredientContent, null, activePlate.weight, " g")))), _react.default.createElement(SecondaryDetails, null, _react.default.createElement("h3", null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "philsophy.title",
        defaultMessage: "This FoodRealy meal is"
      })), _react.default.createElement("p", null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "philosophy.hand_made",
        defaultMessage: "hand-made this morning in Montreal using fresh ingredients\n                      from local suppliers and producers"
      })), _react.default.createElement("h3", {
        className: "and"
      }, "&"), _react.default.createElement("p", null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "philosophy.personalized",
        defaultMessage: "personalized to your taste and preferences."
      }))))))));
    }
  }]);

  return CalendarOrderDetail;
}(_react.default.Component); // styles


var Container = (0, _reactEmotion.default)("div")(_templateObject());
var Header = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.md, _rules.Animation.defaultSpeed, _rules.Colors.secondary.eggplant.default, function (props) {
  return props.ispassed == true ? "linear-gradient(135deg,  " + props.primary_color + "50 0%, " + props.secondary_color + "50 100%)" : "linear-gradient(135deg,  " + props.primary_color + " 0%, " + props.secondary_color + " 100%)";
}, function (props) {
  return props.istextcolorlight && !props.ispassed ? _rules.Colors.utility.white.default : _rules.Colors.secondary.eggplant.default;
});
var CloseButton = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.md, _rules.Spacing.md, _rules.Spacing.sm);
var Title = (0, _reactEmotion.default)("h4")(_templateObject4(), _rules.Typography.body.fontFamily);
var Time = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.Spacing.sm, _rules.Typography.body.fontFamily);
var ShowAllButton = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Spacing.sm, _rules.Spacing.md, _rules.Colors.secondary.eggshell.default, _rules.Colors.secondary.eggplant.default);
var Row = (0, _reactEmotion.default)("div")(_templateObject7());
var PlateInfo = (0, _reactEmotion.default)("div")(_templateObject8());
var ChoiceDetails = (0, _reactEmotion.default)("div")(_templateObject9(), _rules.Spacing.sm, _rules.Spacing.md);
var PlateDetails = (0, _reactEmotion.default)("div")(_templateObject10());
var Choices = (0, _reactEmotion.default)("div")(_templateObject11(), _rules.Colors.secondary.eggshell.default, _rules.Animation.defaultSpeed);
var ChoicesScroll = (0, _reactEmotion.default)("div")(_templateObject12(), _rules.Spacing.sm, _rules.Spacing.md, _rules.Spacing.md, _rules.Spacing.sm, _rules.Spacing.md, _rules.Spacing.sm);
var ListTitle = (0, _reactEmotion.default)("h3")(_templateObject13(), _rules.Typography.title.fontFamily, _rules.Colors.secondary.eggplant.default, _rules.Spacing.md, _rules.Spacing.sm);
var Plate = (0, _reactEmotion.default)("div")(_templateObject14(), _rules.Colors.utility.white.default, function (props) {
  return props.active ? _rules.Shadows.level3 : _rules.Shadows.level1;
}, _rules.Spacing.md, _rules.Animation.defaultSpeed, function (props) {
  return props.active ? "1" : "0.7";
}, _rules.Animation.defaultSpeed, _rules.Shadows.level3, _rules.Typography.title.fontFamily, _rules.Colors.secondary.eggplant.default);
var Photo = (0, _reactEmotion.default)("div")(_templateObject15(), function (props) {
  return props.img;
}, function (props) {
  return props.height;
});
var PlateName = (0, _reactEmotion.default)("div")(_templateObject16(), _rules.Typography.title.fontFamily, _rules.Animation.defaultSpeed, _rules.Colors.secondary.eggplant.default, _rules.Spacing.sm);
var PlateDescription = (0, _reactEmotion.default)("div")(_templateObject17(), _rules.Colors.secondary.eggplant.lighter, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Spacing.sm);
var PlateSellInfo = (0, _reactEmotion.default)("div")(_templateObject18(), _rules.Spacing.sm, _rules.Spacing.lg);
var PriceContainer = (0, _reactEmotion.default)("div")(_templateObject19());
var ButtonsContainer = (0, _reactEmotion.default)("div")(_templateObject20());
var MainDetails = (0, _reactEmotion.default)("div")(_templateObject21(), _rules.Spacing.lg);
var LeftCol = (0, _reactEmotion.default)("div")(_templateObject22());
var SecondaryDetails = (0, _reactEmotion.default)("div")(_templateObject23(), _rules.Spacing.lg, _rules.Colors.secondary.mushrooms.default, _rules.Colors.secondary.eggplant.default, _rules.Typography.title.fontFamily, _rules.Colors.secondary.eggplant.lighter, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize);
var SectionTitle = (0, _reactEmotion.default)("h3")(_templateObject24(), _rules.Colors.secondary.mushrooms.default, _rules.Spacing.sm, _rules.Colors.secondary.eggplant.default);
var SmallSectionTitle = (0, _reactEmotion.default)("h4")(_templateObject25(), _rules.Colors.primary.eggYolk.darker, _rules.Spacing.sm, _rules.Spacing.md);
var Section = (0, _reactEmotion.default)("div")(_templateObject26());
var IngredientContent = (0, _reactEmotion.default)("h3")(_templateObject27(), _rules.Spacing.md, _rules.Colors.secondary.eggplant.lighter, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize);
var StateContainer = (0, _reactEmotion.default)("div")(_templateObject28(), _rules.Spacing.sm, _rules.Spacing.xs, _rules.Spacing.xs, _rules.Spacing.md);
var NewIndicator = (0, _reactEmotion.default)("div")(_templateObject29(), _rules.Typography.body.fontFamily, _rules.Colors.secondary.spinach.default, _rules.Spacing.md, _rules.Colors.primary.lettuce.default);
var SmallNewIndicator = (0, _reactEmotion.default)("div")(_templateObject30(), _rules.Typography.body.fontFamily, _rules.Colors.secondary.spinach.default, _rules.Spacing.sm, _rules.Colors.primary.lettuce.default);
var BreakfastColor = (0, _reactEmotion.css)(_templateObject31(), _rules.Colors.secondary.spinach.default);
var LunchColor = (0, _reactEmotion.css)(_templateObject32(), _rules.Colors.secondary.eggplant.default);
var DinnerColor = (0, _reactEmotion.css)(_templateObject33(), _rules.Colors.utility.white.default);
var CocktailColor = (0, _reactEmotion.css)(_templateObject34(), _rules.Colors.utility.white.default);
var BreakfastColorFaded = (0, _reactEmotion.css)(_templateObject35(), _rules.Colors.secondary.spinach.lighter);
var LunchColorFaded = (0, _reactEmotion.css)(_templateObject36(), _rules.Colors.secondary.eggplant.lighter);
var DinnerColorFaded = (0, _reactEmotion.css)(_templateObject37(), _rules.Colors.secondary.eggplant.lighter);
var CocktailColorFaded = (0, _reactEmotion.css)(_templateObject38(), _rules.Colors.utility.white.default);
var ConfirmedColor = (0, _reactEmotion.css)(_templateObject39(), _rules.Colors.primary.lettuce.lighter, _rules.Colors.secondary.spinach.default);
var PastConfirmedColor = (0, _reactEmotion.css)(_templateObject40(), _rules.Colors.primary.lettuce.lighter, _rules.Colors.secondary.spinach.default);
var InCartColor = (0, _reactEmotion.css)(_templateObject41(), _rules.Colors.primary.eggYolk.lighter, _rules.Colors.secondary.eggplant.default);
var Indicators = (0, _reactEmotion.default)("div")(_templateObject42(), function (props) {
  return props.spacing;
}, function (props) {
  return props.spacing;
}, _rules.Spacing.sm);

var _default = (0, _reactIntl.injectIntl)((0, _hocs.withDeadline)(CalendarOrderDetail));

exports.default = _default;