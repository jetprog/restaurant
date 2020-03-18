"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactIntl = require("react-intl");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _TextButton = _interopRequireDefault(require("../TextButton"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n  margin-bottom: ", ";\n  display: block;\n  width: auto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: inline-block;\n  border-radius: ", ";\n  background: ", ";\n  text-align: center;\n  padding: ", " ", ";\n  box-shadow: ", ";\n  font-size: ", ";\n  animation: ", " 0.3s ease normal forwards;\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: absolute;\n  top: -20px;\n  text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  padding: ", ";\n  line-height: 10px;\n  a {\n    right: ", ";\n    top: ", ";\n    font-size: ", ";\n  }\n\n  a:hover {\n    border-color: transparent;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  padding: ", ";\n  background: ", ";\n  overflow-y: hidden;\n  overflow-x: auto;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n\n  input {\n    border: 0;\n    font-size: ", ";\n    font-family: ", ";\n    color: ", ";\n    background: transparent;\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  input::selection {\n    background-color: transparent;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

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

var LinkField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LinkField, _React$Component);

  function LinkField(props) {
    var _this;

    _classCallCheck(this, LinkField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "copyToClipboard", function (e) {
      _this.textArea.select();

      document.execCommand("copy");

      _this.setState({
        successfully_copied: true
      });

      setTimeout(function () {
        _this.setState({
          successfully_copied: false
        });
      }, 1500);
    });

    _this.state = {
      successfully_copied: false
    };
    return _this;
  }

  _createClass(LinkField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          linkUrl = _this$props.linkUrl,
          label = _this$props.label,
          showCopyLink = _this$props.showCopyLink,
          small = _this$props.small,
          intl = _this$props.intl;
      var successfully_copied = this.state.successfully_copied;
      var copied_confirmation = intl.formatMessage({
        id: "invite_link.copied_confirmation"
      });
      return _react.default.createElement(OuterContainer, null, _react.default.createElement(Label, null, label), _react.default.createElement(Row, null, _react.default.createElement(LinkContainer, {
        small: small
      }, _react.default.createElement("input", {
        type: "text",
        onClick: this.copyToClipboard,
        ref: function ref(textarea) {
          return _this2.textArea = textarea;
        },
        value: linkUrl
      })), showCopyLink && document.queryCommandSupported("copy") && _react.default.createElement(CopyButton, {
        small: small
      }, _react.default.createElement(_TextButton.default, {
        label: _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: "copy"
        }),
        onClick: this.copyToClipboard
      }))), successfully_copied && _react.default.createElement(CopiedWrapper, null, _react.default.createElement(Copied, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "check"
      }), copied_confirmation)));
    }
  }]);

  return LinkField;
}(_react.default.Component); // Styles


var OuterContainer = (0, _reactEmotion.default)("div")(_templateObject());
var Row = (0, _reactEmotion.default)("div")(_templateObject2());
var LinkContainer = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.BorderRadius.sm, function (props) {
  return props.small ? _rules.Spacing.sm + " " + _rules.Spacing.md : _rules.Spacing.md;
}, _rules.Colors.secondary.eggshell.default, function (props) {
  return props.small ? _rules.Typography.body.fontSize : "20px";
}, _rules.Typography.body.fontFamily, _rules.Colors.secondary.eggplant.default);
var CopyButton = (0, _reactEmotion.default)("div")(_templateObject4(), _rules.Spacing.md, function (props) {
  return props.small ? "0" : _rules.Spacing.md + " 0";
}, _rules.Spacing.md, _rules.Spacing.sm, function (props) {
  return props.small ? _rules.Typography.body.fontSize : "20px";
});
var CopiedWrapper = (0, _reactEmotion.default)("div")(_templateObject5());
var Copied = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Colors.secondary.eggplant.default, _rules.BorderRadius.sm, _rules.Colors.secondary.mushrooms.default, _rules.Spacing.xs, _rules.Spacing.sm, _rules.Shadows.level2, _rules.Typography.small.fontSize, appear, _rules.Spacing.sm);
var Label = (0, _reactEmotion.default)("label")(_templateObject7(), _rules.Colors.secondary.eggplant.lighter, _rules.Spacing.sm);
var appear = (0, _reactEmotion.keyframes)(_templateObject8());

var _default = (0, _reactIntl.injectIntl)(LinkField);

exports.default = _default;