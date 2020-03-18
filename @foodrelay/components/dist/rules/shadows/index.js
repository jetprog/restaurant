"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Different shadows to represent different depths
var level1 = "0 1px 3px " + _colors.default.secondary.eggplant.default + "12, 0 1px 2px " + _colors.default.utility.black.default + "24";
var level2 = "0 3px 6px " + _colors.default.secondary.eggplant.default + "15, 0 2px 4px " + _colors.default.utility.black.default + "12";
var level3 = "0 10px 20px " + _colors.default.secondary.eggplant.default + "15, 0 3px 6px " + _colors.default.utility.black.default + "10";
var level4 = "0 15px 25px " + _colors.default.secondary.eggplant.default + "15, 0 5px 10px " + _colors.default.utility.black.default + "05";
var level5 = "0 20px 40px " + _colors.default.utility.black.default + "02";
var Shadows = {
  level1: level1,
  level2: level2,
  level3: level3,
  level4: level4,
  level5: level5
};
var _default = Shadows;
exports.default = _default;