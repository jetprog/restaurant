"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _placeholder = _interopRequireDefault(require("../../img/placeholder-1.svg"));

var _placeholder2 = _interopRequireDefault(require("../../img/placeholder-2.svg"));

var _placeholder3 = _interopRequireDefault(require("../../img/placeholder-3.svg"));

var _placeholder4 = _interopRequireDefault(require("../../img/placeholder-4.svg"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100px;\n  height: 100px;\n  min-width: 100px;\n\n  .icon {\n    top: ", ";\n    right: ", ";\n  }\n\n  @media (max-width: 1300px) {\n    max-width: 50px;\n    height: 50px;\n    min-width: 50px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 60px;\n  height: 60px;\n  min-width: 60px;\n\n  .icon {\n    top: 0;\n    right: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  max-width: 40px;\n  height: 40px;\n  min-width: 40px;\n\n  .icon {\n    top: -3px;\n    right: -3px;\n  }\n\n  @media (max-width: 1300px) {\n    max-width: 30px;\n    height: 30px;\n    min-width: 30px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  transition: ", ";\n  background: ", ";\n  color: ", ";\n  font-size: ", ";\n  line-height: 23px;\n  text-align: center;\n  border-radius: 50%;\n  overflow: hidden;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  z-index: 100;\n  margin: 0 !important;\n  opacity: 0;\n  cursor: pointer;\n\n  svg {\n    position: relative;\n    top: -3px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  cursor: ", ";\n  overflow: hidden;\n  position: relative;\n  margin: 0 !important;\n\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  flex-1;\n  margin-right:", ";\n\n  @media (max-width: 1300px) {\n    margin-right:", ";\n  }\n\n  &:hover {\n    .icon {\n      opacity:1;\n      background: ", ";\n      color: ", ";\n    }\n  }\n"]);

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

var placeholders = {
  1: _placeholder.default,
  2: _placeholder2.default,
  3: _placeholder3.default,
  4: _placeholder4.default
};

var Photo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Photo, _React$Component);

  function Photo(props) {
    var _this;

    _classCallCheck(this, Photo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Photo).call(this, props));
    _this.state = {
      randomNb: 0
    };
    return _this;
  }

  _createClass(Photo, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        randomNb: Math.floor(Math.random() * (5 - 1) + 1)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          picture = _this$props.picture,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? "small" : _this$props$size,
          _this$props$shape = _this$props.shape,
          shape = _this$props$shape === void 0 ? "circle" : _this$props$shape,
          onClick = _this$props.onClick;
      var randomNb = this.state.randomNb;
      return _react.default.createElement(Container, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, Small, size === "small"), _defineProperty({}, Medium, size === "medium"), _defineProperty({}, Large, size === "large"), "photo"),
        onClick: onClick,
        size: size
      }, onClick && _react.default.createElement(Icon, {
        className: "icon",
        onClick: onClick
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "pencil-alt"
      })), _react.default.createElement(PhotoElement, {
        onClick: onClick,
        className: (0, _reactEmotion.cx)(_defineProperty({}, Square, shape === "square"), _defineProperty({}, Circle, shape === "circle"))
      }, picture ? _react.default.createElement("img", {
        src: picture,
        alt: ""
      }) : _react.default.createElement("img", {
        className: "default",
        src: placeholders[randomNb],
        alt: ""
      })));
    }
  }]);

  return Photo;
}(_react.default.Component); // Styles


var Container = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.size == "small" ? _rules.Spacing.md : _rules.Spacing.lg;
}, _rules.Spacing.md, _rules.Colors.primary.eggYolk.default, _rules.Colors.secondary.eggplant.default);
var PhotoElement = (0, _reactEmotion.default)("div")(_templateObject2(), function (props) {
  return props.onClick ? "pointer" : "default";
});
var Icon = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.md, _rules.Spacing.md, _rules.Animation.fastSpeed, _rules.Colors.utility.lightGrey.default, _rules.Colors.utility.grey.default, _rules.Typography.extraSmall.fontSize); // Sizes

var Small = (0, _reactEmotion.css)(_templateObject4());
var Medium = (0, _reactEmotion.css)(_templateObject5());
var Large = (0, _reactEmotion.css)(_templateObject6(), _rules.Spacing.sm, _rules.Spacing.sm); // Shapes

var Circle = (0, _reactEmotion.css)(_templateObject7());
var Square = (0, _reactEmotion.css)(_templateObject8(), _rules.BorderRadius.sm);
var _default = Photo;
exports.default = _default;