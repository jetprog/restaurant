"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactSpinners = require("react-spinners");

var _rules = require("../../rules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 12px;\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  max-width: calc(25% - 24px);\n  min-width: calc(25% - 24px);\n\n  .profile-pic {\n    flex: 1;\n    max-width: 32px;\n    height: 32px;\n    min-width: 32px;\n    border-radius: 50%;\n    margin-right: 16px;\n    overflow: hidden;\n    background: #f0f0f0;\n    position: relative;\n  }\n\n  .name {\n    flex: 1;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fcf7f0;\n    position: relative;\n    max-height: 16px;\n    margin-top: 8px;\n  }\n\n  .profile-pic div,\n  .name div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: #fcf7f0;\n  }\n\n  .profile-pic div div,\n  .name div div {\n    background: #f5daad25;\n    filter: blur(20px);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 90px;\n  border-radius: 4px;\n  background: #f0f0f0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n  opacity: 0;\n  animation: ", " 0.3s ease normal forwards;\n\n  div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: #fcf7f0;\n  }\n\n  div div {\n    background: #f5daad25;\n    filter: blur(20px);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  min-width: calc(33.33333% - 24px);\n  max-width: calc(33.33333% - 24px);\n  margin: 12px;\n  min-height: 150px;\n  border-radius: 4px;\n  background: #fcf7f0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n\n  div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: #fcf7f0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  min-width: calc(50% - 24px);\n  max-width: calc(50% - 24px);\n  margin: 12px;\n  min-height: 300px;\n  border-radius: 4px;\n  background: #fcf7f0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n\n  div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: #fcf7f0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-width: 150px;\n  max-width: 250px;\n  min-height: ", ";\n  margin: ", " 0;\n  border-radius: 4px;\n  background: #fcf7f0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n\n  div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: #fcf7f0;\n  }\n\n  div div {\n    background: #f5daad;\n    filter: blur(20px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  min-width: 200px;\n  max-width: 300px;\n  min-height: 30px;\n  margin: 24px 0;\n  border-radius: 4px;\n  background: #fcf7f0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n\n  div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: #fcf7f0;\n  }\n\n  div div {\n    background: #f5daad;\n    filter: blur(20px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingItem = function LoadingItem(_ref) {
  var loading = _ref.loading,
      type = _ref.type;

  if (type) {
    switch (type) {
      case "title":
        return _react.default.createElement(LoadingTitle, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#f5daad",
          loading: loading
        }));
        break;

      case "text":
        return _react.default.createElement(LoadingText, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#f5daad",
          loading: loading
        }));
        break;

      case "order":
        return _react.default.createElement(LoadingOrder, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#f5daad",
          loading: loading
        }));
        break;

      case "menu":
        return _react.default.createElement(LoadingOrder, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#f5daad",
          loading: loading
        }));
        break;

      case "plate":
        return _react.default.createElement(LoadingPlate, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#f5daad",
          loading: loading
        }));
        break;

      case "food_option":
        return _react.default.createElement(LoadingFoodOption, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#123abc",
          loading: loading
        }));
        break;

      case "user":
        return _react.default.createElement(LoadingUser, null, _react.default.createElement("div", {
          className: "profile-pic"
        }, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#123abc",
          loading: loading
        })), _react.default.createElement("div", {
          className: "name"
        }, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#123abc",
          loading: loading
        })));

      default:
        return _react.default.createElement(LoadingText, null, _react.default.createElement(_reactSpinners.BarLoader, {
          color: "#123abc",
          loading: loading
        }));
        break;
    }
  }
};

var appear = (0, _reactEmotion.keyframes)(_templateObject());
var LoadingTitle = (0, _reactEmotion.default)("div")(_templateObject2());
var LoadingText = (0, _reactEmotion.default)("div")(_templateObject3(), _rules.Spacing.md, _rules.Spacing.md);
var LoadingOrder = (0, _reactEmotion.default)("div")(_templateObject4());
var LoadingPlate = (0, _reactEmotion.default)("div")(_templateObject5());
var LoadingFoodOption = (0, _reactEmotion.default)("div")(_templateObject6(), appear);
var LoadingUser = (0, _reactEmotion.default)("div")(_templateObject7());
var _default = LoadingItem;
exports.default = _default;