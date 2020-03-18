"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslation = void 0;

var getTranslation = function getTranslation(item, locale) {
  var translation = null;

  if (item && item.translation) {
    translation = item.translation.find(function (t) {
      return t.language.locale == locale;
    });
  }

  return translation;
};

exports.getTranslation = getTranslation;