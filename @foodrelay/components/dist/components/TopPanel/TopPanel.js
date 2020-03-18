"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.5;\n  pointer-events: auto;\n  cursor: pointer;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 0 !important;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100vh - 152px);\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  margin-top: -", "px;\n  padding-top: ", "px;\n  @media (max-width: 480px) {\n    height: calc(100vh - ", "px);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", " ", " 0 0;\n  overflow: hidden;\n  display: flex;\n  position: relative;\n  z-index: 100;\n  @media (max-width: 480px) {\n    border-radius: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  z-index: 100000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  display: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  max-height: calc(100% - 80px);\n  left: 50%;\n  top: 50px;\n  width: ", ";\n  margin-top: -1500px;\n  margin-bottom: 60px;\n  overflow-x: hidden;\n  transition: ", ";\n  z-index: 100000;\n  border-radius: ", ";\n  margin-left: ", ";\n  background: #fff;\n  box-shadow: 0px 10px 32px -9px rgba(0, 0, 0, 0.38);\n  pointer-events: auto;\n  @media (max-width: 480px) {\n    width: 100%;\n    left: 0;\n    margin-left: 0;\n    top: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    bottom: 0;\n    max-height: 100%;\n  }\n"]);

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

var TopPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopPanel, _React$Component);

  function TopPanel(props) {
    var _this;

    _classCallCheck(this, TopPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopPanel).call(this, props));
    _this.state = {
      headerHeight: 0
    };
    return _this;
  }

  _createClass(TopPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = document.getElementById("top-panel-header").clientHeight;
      this.setState({
        headerHeight: height
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          children = _this$props.children,
          close = _this$props.close,
          closeLink = _this$props.closeLink,
          size = _this$props.size,
          headerContent = _this$props.headerContent;
      var headerHeight = this.state.headerHeight;
      return _react.default.createElement(Wrap, null, _react.default.createElement(Popup, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, SlideOut, open)),
        size: size
      }, _react.default.createElement(Header, {
        id: "top-panel-header"
      }, headerContent), _react.default.createElement(Content, {
        headerHeight: headerHeight
      }, children)), closeLink ? _react.default.createElement(OverlayLink, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, Shown, open)),
        to: closeLink
      }) : _react.default.createElement(Overlay, {
        className: (0, _reactEmotion.cx)(_defineProperty({}, Shown, open)),
        onClick: close
      }));
    }
  }]);

  return TopPanel;
}(_react.default.Component); // Styles


var Popup = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.size === "big" ? "1000px" : "500px";
}, _rules.Animation.defaultSpeed, _rules.BorderRadius.md, function (props) {
  return props.size === "big" ? "-500px" : "-250px";
});
var Overlay = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Colors.utility.lightGrey.default);
var OverlayLink = (0, _reactEmotion.default)(_reactRouterDom.Link)(_templateObject3(), _rules.Colors.utility.lightGrey.default);
var Wrap = (0, _reactEmotion.default)("div")(_templateObject4());
var Header = (0, _reactEmotion.default)("div")(_templateObject5(), _rules.BorderRadius.md, _rules.BorderRadius.md);
var Content = (0, _reactEmotion.default)("div")(_templateObject6(), function (props) {
  return props.headerHeight;
}, function (props) {
  return props.headerHeight;
}, function (props) {
  return props.headerHeight;
}); // State style

var SlideOut = (0, _reactEmotion.css)(_templateObject7());
var Shown = (0, _reactEmotion.css)(_templateObject8());
TopPanel.propTypes = {
  open: _propTypes.default.bool,
  children: _propTypes.default.any,
  close: _propTypes.default.func
};
var _default = TopPanel;
exports.default = _default;