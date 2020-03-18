"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTitleWithProgress = void 0;

var generateTitleWithProgress = function generateTitleWithProgress(checklist, name) {
  if (checklist) {
    var progress = 0;
    var icon = "🛠";
    var totalListItems = Object.keys(checklist).length;
    var completedItems = 0;

    for (var i in checklist) {
      if (checklist[i] === true) {
        completedItems++;
      }
    }

    progress = Math.round(completedItems / totalListItems * 100);

    if (progress == 100) {
      icon = "✅";
    }

    return icon + " (" + progress + "%) - " + name;
  } else {
    return name;
  }
};

exports.generateTitleWithProgress = generateTitleWithProgress;