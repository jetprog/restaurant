"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRouterDom = require("react-router-dom");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _PurchaseStateIndicator = _interopRequireDefault(require("../PurchaseStateIndicator"));

var _RebateIndicator = _interopRequireDefault(require("../RebateIndicator"));

var _Price = _interopRequireDefault(require("../Price"));

var _Button = _interopRequireDefault(require("../Button"));

var _ShortText = _interopRequireDefault(require("../ShortText"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject23() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  a {\n    margin-right: ", ";\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", " ", " ", ";\n  background: #fff;\n  min-height: calc(100% - 60px);\n  transition: ", ";\n  transition: padding-top ", " ease-in-out\n    ", ";\n\n  .view-more {\n    padding-top: 32px;\n  }\n\n  p {\n    margin-top: 0;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #fff685;\n  text-align: center;\n  line-height: 32px;\n  cursor: pointer;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  opacity: 0.5;\n  flex: 3;\n  margin-top: ", ";\n  transition: 0.2s ease-in-out;\n\n  svg {\n    margin-right: ", ";\n    font-size: 12px;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  display: flex;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  padding: 6px 12px 12px 12px;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  opacity: 0;\n  margin-bottom: -100px;\n  transition: 0.2s ease-in-out;\n\n  h4,\n  .price {\n    margin: 8px 0 0 0;\n  }\n\n  .price {\n    margin-left: auto;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  height: 125px;\n  width: 100%;\n  background-color: #f5daad50;\n  position: relative;\n  cursor: pointer;\n\n  // transition on mouse out\n  transition: ", " ease-in-out;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  padding: 4px 10px;\n  border-radius: 12px;\n  display: block;\n  background: #ffffff50;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: bold;\n  min-width: 25px;\n  max-height: 15px;\n  margin-left: auto;\n  text-align: center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  padding: 4px 10px;\n  border-radius: 12px;\n  float: right;\n  display: block;\n  background: #a3e5b1;\n  overflow: hidden;\n  position: absolute;\n  right: ", ";\n  top: ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  font-size: 1em;\n  display: inline-block;\n\n  transition: ", ";\n  transition-delay: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  font-size: 1em;\n  display: inline-block;\n  margin-right: ", ";\n\n  transition: ", ";\n  transition-delay: ", ";\n\n  svg {\n    font-size: 12px;\n    padding-right: 4px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-weight: bold;\n  padding-right: ", ";\n  font-size: 1em;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 12px;\n  background: #fff;\n  position: relative;\n  height: 60px;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  .title-indicator div {\n    position: static;\n    margin-right: ", ";\n  }\n\n  .plate-name-secondary {\n    margin: 8px 0 0 0;\n    transition: 0.2s;\n    font-size: 1em;\n    opacity: 0.5;\n  }\n\n  // transition on mouse out\n  transition: ", " ease-in-out;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  height: 90px;\n  border-top: 0;\n  background: #f0f0f0;\n  cursor: default;\n\n  .header {\n    background: #f0f0f0;\n    height: 90px;\n    cursor: default;\n  }\n\n  .rebate-indicator {\n    display: none;\n  }\n\n  &:hover {\n    background: #f0f0f0;\n    height: 90px;\n    box-shadow: 0 5px 10px #00000021;\n\n    .header {\n      background: #f0f0f0;\n      height: 90px;\n    }\n\n    .time,\n    .location {\n      opacity: 0;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  background: #000;\n  border-radius: 4px;\n  transform: rotate(90deg);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid #333132;\n  .photo {\n    opacity: 1;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  .photo {\n    opacity: 0.7;\n  }\n\n  &:hover {\n    opacity: 1;\n    height: 180px;\n\n    .photo {\n      height: 125px;\n      opacity: 1;\n    }\n\n    .header {\n      height: 55px;\n    }\n\n    .infos {\n      opacity: 0;\n      margin-bottom: -100px;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 90px;\n  background: #cbecd2;\n\n  .infos {\n    background: #cbecd2;\n  }\n  .rebate-indicator {\n    display: none;\n  }\n\n  .header {\n    height: 90px;\n    background: #cbecd2;\n  }\n\n  .location,\n  .time {\n    opacity: 0.5;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 90px;\n  background: #a3e5b1;\n\n  .infos {\n    background: #a3e5b1;\n  }\n  .rebate-indicator {\n    display: none;\n  }\n\n  .header {\n    height: 90px;\n    background: #a3e5b1;\n  }\n\n  .location,\n  .time {\n    opacity: 0.5;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 90px;\n  background: #f4af42;\n\n  .header {\n    height: 90px;\n    background: #f4af42;\n  }\n\n  .infos {\n    background: #f4af42;\n  }\n\n  .location,\n  .time {\n    opacity: 0.5;\n  }\n\n  .rebate-indicator {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  border-radius: 4px;\n  overflow: hidden;\n  width: 100%;\n  box-shadow: 0 5px 10px #00000021;\n  z-index: 10;\n  height: 180px;\n  opacity: 0;\n  margin-left: ", ";\n  animation: ", " ", " ease normal forwards;\n  // min-width: 286px;\n  font-size: 0.8em;\n\n  // transition on mouse out\n  transition: ", " ease-in-out;\n\n  a {\n    color: #333132;\n    text-decoration: none;\n  }\n\n  .photo {\n    opacity: ", ";\n  }\n\n  &:hover {\n    box-shadow: 0 0 32px #00000031;\n    height: 300px;\n    max-width: 100%;\n\n    // transition on mouse enter\n    transition: 0.2s ease-in-out ", ";\n\n    .photo {\n      height: 180px;\n      // transition on mouse enter\n      transition: 0.2s ease-in-out ", ";\n    }\n\n    .header {\n      height: 55px;\n      // transition on mouse enter\n      transition: 0.2s ease-in-out ", ";\n    }\n\n    .header .plate-name-secondary {\n      margin-top: 20px;\n      opacity: 0;\n      transition: 0.2s ease-in-out ", ";\n    }\n\n    .location,\n    .time {\n      opacity: 0.5;\n    }\n\n    .infos {\n      margin-bottom: 0;\n      opacity: 1;\n      transition: 0.2s ease-in-out ", ";\n    }\n  }\n\n  @media (max-width: 1300px) {\n    min-width: 220px;\n    font-size: 1em;\n\n    &:hover {\n      max-width: 100%;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0; margin-left:", ";}\n  100% {opacity: 1; margin-left:0;}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PurchaseCard = function PurchaseCard(_ref) {
  var item = _ref.item,
      user = _ref.user,
      onShowMore = _ref.onShowMore,
      isDetailDisplayed = _ref.isDetailDisplayed,
      setActiveDay = _ref.setActiveDay,
      clearActiveDay = _ref.clearActiveDay,
      setOrderLunching = _ref.setOrderLunching,
      active = _ref.active,
      day = _ref.day,
      intl = _ref.intl,
      isOpen = _ref.isOpen,
      isPast = _ref.isPast;
  var virtual_cafeteria_label = intl.formatMessage({
    id: "food_choice.calendar.virtual_cafeteria"
  });
  var title = virtual_cafeteria_label + " " + item.order.business.name;

  if (!item.order.is_recurring) {
    title = item.order.name ? item.order.name : item.order.business.name;
  }

  var notLunching = item.not_eating;
  return _react.default.createElement(OptionCardContainer, {
    className: (0, _reactEmotion.cx)(_defineProperty({}, DetailOpened, isDetailDisplayed), _defineProperty({}, Active, isOpen), _defineProperty({}, InCart, item.status === "cart" && !notLunching), _defineProperty({}, Paid, item.status === "paid" && !notLunching), _defineProperty({}, NotLunching, notLunching), _defineProperty({}, PaidPast, item.status === "paid" && !notLunching && isPast), "purchase-card"),
    onMouseEnter: notLunching ? console.log("not active") : setActiveDay,
    onMouseLeave: isDetailDisplayed ? null : clearActiveDay,
    isOpen: isOpen,
    isPast: isPast
  }, _react.default.createElement(Header, {
    className: "header",
    onClick: notLunching ? console.log("not active") : onShowMore
  }, _react.default.createElement(Row, null, _react.default.createElement("div", {
    className: "title-indicator"
  }, _react.default.createElement(_PurchaseStateIndicator.default, {
    current_state: item.status,
    not_eating: item.not_eating
  })), _react.default.createElement("div", null, _react.default.createElement(Title, null, _react.default.createElement(_ShortText.default, {
    text: title,
    maxLength: 18
  })), !item.order.is_recurring && _react.default.createElement(Location, {
    className: "location"
  }, item.order.address), intl.locale === "fr" ? _react.default.createElement(Time, {
    className: "time"
  }, (0, _moment.default)(item.delivery_date).format("h:mm")) : _react.default.createElement(Time, {
    className: "time"
  }, (0, _moment.default)(item.delivery_date).format("h:mm A"))), item.status === "cart" && !notLunching ? _react.default.createElement(SecondaryPrice, null, item.balance_due / 100, "$") : _react.default.createElement(_RebateIndicator.default, {
    item: item.order
  })), !notLunching && _react.default.createElement("h4", {
    className: "plate-name-secondary"
  }, intl.locale === "fr" ? item.plate.name_FR : item.plate.name)), notLunching ? _react.default.createElement(PresentSection, {
    className: "present-section"
  }, _react.default.createElement("p", null, "Will you be eating at this meeting?"), _react.default.createElement(Buttons, null, _react.default.createElement(_Button.default, {
    label: "Yes",
    color: "yellow",
    onClick: setOrderLunching
  }), _react.default.createElement(_Button.default, {
    label: "No",
    color: "yellow"
  })), item.assigned_menu_plates && _react.default.createElement(Row, {
    className: "view-more"
  }, _react.default.createElement(View_more, {
    className: "view-more",
    onClick: onShowMore
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "chevron-down"
  }), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "food_choice.calendar.more_options",
    defaultMessage: "More options"
  })))) : _react.default.createElement(MenuSection, null, _react.default.createElement(Photo, {
    className: "photo",
    img: item.plate.image,
    onClick: onShowMore
  }), _react.default.createElement(Infos, {
    className: "infos"
  }, _react.default.createElement(Row, null, _react.default.createElement("h4", null, intl.locale === "fr" ? item.plate.name_FR : item.plate.name), _react.default.createElement(_Price.default, {
    price: item.balance_due
  })), _react.default.createElement(Row, null, _react.default.createElement(View_more, {
    className: "view-more",
    onClick: onShowMore
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "chevron-down"
  }), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "food_choice.calendar.more_details",
    defaultMessage: "More details"
  }))))));
};

var appear = keyframes(_templateObject(), _rules.Spacing.md);
var OptionCardContainer = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Spacing.md, appear, _rules.Animation.fastSpeed, _rules.Animation.fastSpeed, function (props) {
  return props.isOpen ? "1" : "inherit";
}, _rules.Animation.defaultSpeed, _rules.Animation.defaultSpeed, _rules.Animation.defaultSpeed, _rules.Animation.defaultSpeed, _rules.Animation.defaultSpeed);
var InCart = (0, _reactEmotion.css)(_templateObject3());
var Paid = (0, _reactEmotion.css)(_templateObject4());
var PaidPast = (0, _reactEmotion.css)(_templateObject5());
var DetailOpened = (0, _reactEmotion.css)(_templateObject6());
var Active = (0, _reactEmotion.css)(_templateObject7());
var Arrow = (0, _reactEmotion.default)("div")(_templateObject8());
var NotLunching = (0, _reactEmotion.css)(_templateObject9());
var Header = (0, _reactEmotion.default)("div")(_templateObject10(), _rules.Spacing.md, _rules.Animation.fastSpeed);
var Title = (0, _reactEmotion.default)("h4")(_templateObject11(), _rules.Spacing.sm);
var Location = (0, _reactEmotion.default)("div")(_templateObject12(), _rules.Spacing.sm, _rules.Animation.fastSpeed, _rules.Animation.defaultSpeed);
var Time = (0, _reactEmotion.default)("div")(_templateObject13(), _rules.Animation.fastSpeed, _rules.Animation.defaultSpeed);
var Tag = (0, _reactEmotion.default)("div")(_templateObject14(), _rules.Spacing.sm, _rules.Spacing.sm);
var SecondaryPrice = (0, _reactEmotion.default)("div")(_templateObject15());
var Photo = (0, _reactEmotion.default)("div")(_templateObject16(), function (props) {
  return props.img;
}, _rules.Animation.fastSpeed);
var Infos = (0, _reactEmotion.default)("div")(_templateObject17());
var Row = (0, _reactEmotion.default)("div")(_templateObject18());
var View_more = (0, _reactEmotion.default)("div")(_templateObject19(), _rules.Spacing.sm, _rules.Spacing.sm);
var AddToCart = (0, _reactEmotion.default)("a")(_templateObject20());
var PresentSection = (0, _reactEmotion.default)("div")(_templateObject21(), _rules.Spacing.md, _rules.Spacing.md, _rules.Spacing.md, _rules.Animation.fastSpeed, _rules.Animation.fastSpeed, _rules.Animation.defaultSpeed);
var Buttons = (0, _reactEmotion.default)("div")(_templateObject22(), _rules.Spacing.md);
var MenuSection = (0, _reactEmotion.default)("span")(_templateObject23());

var _default = (0, _reactIntl.injectIntl)(PurchaseCard);

exports.default = _default;