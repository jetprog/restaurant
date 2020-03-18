"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: absolute;\n  top: 45px;\n  right: 0;\n  z-index: 10;\n  width: 150px;\n  box-shadow: 0 0 32px #00000021;\n\n  a.button,\n  a.csv-button {\n    margin: 0;\n    border-radius: 0 !important;\n    display: block !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 36px;\n  height: 36px;\n  display: block;\n  background: transparent;\n  font-size: 14px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 36px;\n  box-sizing: border-box;\n  border-radius: 4px;\n\n  &:hover {\n    background: #f5daad;\n  }\n\n  @media (max-width: 1300px) {\n    width: 30px;\n    height: 28px;\n    line-height: 28px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n"]);

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

var ExtraMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExtraMenu, _React$Component);

  function ExtraMenu(props) {
    var _this;

    _classCallCheck(this, ExtraMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtraMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      _this.setState({
        extra_menu_shown: false
      });
    });

    _this.state = {
      extra_menu_shown: false
    };
    return _this;
  }

  _createClass(ExtraMenu, [{
    key: "toggleExtraMenu",
    value: function toggleExtraMenu() {
      this.setState({
        extra_menu_shown: !this.state.extra_menu_shown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          buttons = _this$props.buttons,
          _this$props$direction = _this$props.direction,
          direction = _this$props$direction === void 0 ? "vertical" : _this$props$direction,
          _this$props$buttonCol = _this$props.buttonColor,
          buttonColor = _this$props$buttonCol === void 0 ? "transparent" : _this$props$buttonCol;
      var extra_menu_shown = this.state.extra_menu_shown;
      return _react.default.createElement(ExtraMenuWrapper, {
        className: "extra-menu-wrap"
      }, _react.default.createElement(ExtraMenuButton, {
        className: "extra-menu",
        onClick: function onClick() {
          return _this2.toggleExtraMenu();
        }
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: direction === "horizontal" ? "ellipsis-h" : "ellipsis-v"
      })), extra_menu_shown && _react.default.createElement(ExtraMenuContent, null, buttons));
    }
  }]);

  return ExtraMenu;
}(_react.default.Component); // Styles


var ExtraMenuWrapper = (0, _reactEmotion.default)("div")(_templateObject());
var ExtraMenuButton = (0, _reactEmotion.default)("a")(_templateObject2());
var ExtraMenuContent = (0, _reactEmotion.default)("div")(_templateObject3());

var _default = (0, _reactOnclickoutside.default)(ExtraMenu);

exports.default = _default;