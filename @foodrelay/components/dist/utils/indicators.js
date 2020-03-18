"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlateIcon = exports.getPlateCategory = void 0;

var getPlateCategory = function getPlateCategory(plate) {
  if (plate.category == "normal" && plate.is_hot_meal || plate.category == "hot_plate") {
    return "hot_plate";
  } else if (plate.category == "normal" && !plate.is_hot_meal || plate.category == "salad") {
    return "salad";
  } else if (plate.category == "sandwich") {
    return "sandwich";
  } else {
    return null;
  }
};

exports.getPlateCategory = getPlateCategory;

var getPlateIcon = function getPlateIcon(plate) {
  var category = getPlateCategory(plate);

  if (category == "hot_plate") {
    return "soup";
  } else if (category == "salad") {
    return "salad";
  } else if (category == "sandwich") {
    return "sandwich";
  } else {
    return null;
  }
};

exports.getPlateIcon = getPlateIcon;