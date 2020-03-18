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
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  overflow: hidden;\n  background: #fff;\n  position: absolute;\n  top: 34px;\n  left: 0;\n  z-index: 10;\n  max-width: 250px;\n  min-width: 250px;\n  box-shadow: ", ";\n  padding: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n\n  p {\n    margin: 0;\n  }\n\n  a {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  display: block;\n  background: ", ";\n  font-size: 14px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 24px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  transition: ", ";\n  font-family: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  margin: 0 ", ";\n  margin-top: -4px;\n"]);

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

var Hint =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hint, _React$Component);

  function Hint(props) {
    var _this;

    _classCallCheck(this, Hint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hint).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      _this.setState({
        hint_shown: false
      });
    });

    _this.state = {
      hint_shown: false
    };
    return _this;
  }

  _createClass(Hint, [{
    key: "toggleHint",
    value: function toggleHint() {
      this.setState({
        hint_shown: !this.state.hint_shown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hint = this.props.hint;
      var hint_shown = this.state.hint_shown;

      if (hint) {
        return _react.default.createElement(HintWrapper, {
          className: "extra-menu-wrap"
        }, _react.default.createElement(HintButton, {
          className: "hint",
          onClick: function onClick() {
            return _this2.toggleHint();
          }
        }, "?"), hint_shown && _react.default.createElement(HintContent, null, hint));
      } else {
        return _react.default.createElement("span", null);
      }
    }
  }]);

  return Hint;
}(_react.default.Component); // Styles


var HintWrapper = (0, _reactEmotion.default)("div")(_templateObject(), _rules.Spacing.sm);
var HintButton = (0, _reactEmotion.default)("a")(_templateObject2(), _rules.Colors.secondary.eggshell.default, _rules.Animation.defaultSpeed, _rules.Typography.body.fontFamily, _rules.Colors.secondary.mushrooms.default);
var HintContent = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.BorderRadius.sm, _rules.Shadows.level3, _rules.Spacing.md, _rules.Typography.small.fontFamily, _rules.Typography.small.fontSize, _rules.Colors.secondary.eggplant.default, _rules.Colors.primary.eggYolk.default);

var _default = (0, _reactOnclickoutside.default)(Hint);

exports.default = _default;