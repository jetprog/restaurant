"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  opacity: 0.5;\n  font-size: 27px;\n  margin-top: -7px;\n  vertical-align: top;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  opacity: 0.5;\n  padding-left: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  transition: ", ";\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  pointer-events: auto;\n  padding-left: ", ";\n\n  @media (max-width: 480px) {\n    display: block;\n    padding-top: ", ";\n    padding-left: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LocaleSwitch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocaleSwitch, _React$Component);

  function LocaleSwitch() {
    _classCallCheck(this, LocaleSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(LocaleSwitch).apply(this, arguments));
  }

  _createClass(LocaleSwitch, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          onChange = _this$props.onChange,
          onChangeLoggedIn = _this$props.onChangeLoggedIn,
          _this$props$currentLo = _this$props.currentLocale,
          currentLocale = _this$props$currentLo === void 0 ? "en" : _this$props$currentLo,
          _this$props$darkBack = _this$props.darkBack,
          darkBack = _this$props$darkBack === void 0 ? false : _this$props$darkBack,
          _this$props$languages = _this$props.languages,
          languages = _this$props$languages === void 0 ? [{
        id: "en",
        label: "EN"
      }, {
        id: "fr",
        label: "FR"
      }] : _this$props$languages;
      return _react.default.createElement(LocaleSwitchContainer, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, DarkBackground, darkBack), "locale-switch")
      }, languages && languages.map(function (lang, key) {
        return _react.default.createElement(Language, {
          key: key,
          onClick: onChangeLoggedIn ? function () {
            return onChangeLoggedIn({
              id: user.id,
              preferred_locale: lang.id
            });
          } : function () {
            return onChange(lang.id);
          },
          className: (0, _reactEmotion.cx)(_defineProperty({}, Active, currentLocale === lang.id))
        }, lang.label);
      }));
    }
  }]);

  return LocaleSwitch;
}(_react.default.Component);

var LocaleSwitchContainer = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.lg, _rules.Spacing.md);
var Language = (0, _reactEmotion.default)("span")(_templateObject2(), _rules.Spacing.md, _rules.Typography.body.fontFamily, _rules.Typography.body.fontSize, _rules.Animation.defaultSpeed);
var Separator = (0, _reactEmotion.default)("div")(_templateObject3());
var Active = (0, _reactEmotion.css)(_templateObject4());
var DarkBackground = (0, _reactEmotion.css)(_templateObject5(), _rules.Colors.utility.white.default);
var _default = LocaleSwitch;
exports.default = _default;