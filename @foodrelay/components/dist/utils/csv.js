"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrefsDataCSV = exports.formatClientOrderDataCSV = exports.formatOrderDataCSV = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Format order data for CSV
var isMasterPlate = function isMasterPlate(masterPlateName, variantName) {
  var numberSameWords = 0;
  variantName.map(function (n) {
    if (masterPlateName.find(function (m) {
      return m == n;
    })) {
      numberSameWords = numberSameWords + 1;
    }
  });

  if (numberSameWords == variantName.length) {
    return true;
  } else {
    return false;
  }
};

var getMasterPlate = function getMasterPlate(variant, menu) {
  var masterPlateInfo = {
    name: "-",
    is_gluten_free: false,
    is_vegetarian: false,
    is_vegan: false
  };

  if (variant && menu) {
    masterPlateInfo.name = variant.name;
    masterPlateInfo.is_gluten_free = !variant.restrictions.has_gluten;
    masterPlateInfo.is_vegetarian = variant.restrictions.is_vegetarian;
    masterPlateInfo.is_vegan = variant.restrictions.is_vegan;
    var unwantedWords = ["gluten", "vegan", "vegetarian", "veggie", "&", "free"];
    var cleanVariantName = variant.name.toLowerCase().split(" ").filter(function (n) {
      return unwantedWords.indexOf(n) <= -1;
    });
    var masterPlates = menu.filter(function (p) {
      return !p.restrictions.is_variant;
    });

    if (masterPlates.length > 0) {
      var masterPlatesList = [];
      masterPlates.map(function (p) {
        return p.cleanName = p.name.toLowerCase().split(" ").filter(function (n) {
          return unwantedWords.indexOf(n) <= -1;
        });
      });
      masterPlates.map(function (p) {
        if (isMasterPlate(p.cleanName, cleanVariantName)) {
          masterPlatesList = [].concat(_toConsumableArray(masterPlatesList), [p]);
        }
      });

      if (masterPlatesList.length > 1) {
        masterPlatesList.map(function (p) {
          if ((variant.restrictions.is_vegetarian || variant.restrictions.is_vegan) && p.restrictions.is_vegetarian || variant.restrictions.vegan && p.restrictions.is_vegan || !variant.restrictions.vegan && !variant.restrictions.is_vegetarian && !p.restrictions.is_vegetarian && !p.restrictions.is_vegan) {
            masterPlateInfo.name = p.name;
            masterPlateInfo.is_gluten_free = !p.restrictions.has_gluten;
            masterPlateInfo.is_vegetarian = p.restrictions.is_vegetarian;
            masterPlateInfo.is_vegan = p.restrictions.is_vegan;
          }
        });
      } else if (masterPlatesList.length == 1) {
        masterPlateInfo.name = masterPlatesList[0].name;
        masterPlateInfo.is_gluten_free = !masterPlatesList[0].restrictions.has_gluten;
        masterPlateInfo.is_vegetarian = masterPlatesList[0].restrictions.is_vegetarian;
        masterPlateInfo.is_vegan = masterPlatesList[0].restrictions.is_vegan;
      }

      return masterPlateInfo;
    } else {
      return masterPlateInfo;
    }
  } else {
    return masterPlateInfo;
  }
};

var formatOrderDataCSV = function formatOrderDataCSV(orders, purchases) {
  var csvData = [["business", "delivery_date", "delivery_time", "first_name", "last_name", "user_vegan", "user_note", "master_plate_name", "plate_is_hot", "variant_gluten_free", "variant_vegetarian", "variant_vegan", "variant_vegan_gluten_free", "base"]]; // let user_choices = undefined

  var businessRow = 0;
  var deliveryDateRow = 1;
  var deliveryTimeRow = 2;
  var firstNameRow = 3;
  var lastNameRow = 4;
  var userVeganRow = 5;
  var userNoteRow = 6;
  var masterPlateNameRow = 7;
  var plateHotRow = 8;
  var plateGlutenFreeRow = 9;
  var plateVegetarianRow = 10;
  var plateVeganRow = 11;
  var plateVeganGlutenFreeRow = 12;
  var baseRow = 13;

  if (orders) {
    orders.forEach(function (order) {
      var business = order.business.name;
      var orderPurchases = purchases.filter(function (p) {
        return p.order == order.id;
      });
      orderPurchases.forEach(function (purchase) {
        var row = []; // get business

        row[businessRow] = business.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // get date

        if (purchase.delivery_date) {
          row[deliveryDateRow] = (0, _moment.default)(purchase.delivery_date).format("DD-MMMM-YYYY");
          row[deliveryTimeRow] = (0, _moment.default)(order.delivery_date).format("HH:mm");
        } // get user name, phone and ID


        if (purchase.user) {
          if (purchase.user.first_name) {
            row[firstNameRow] = purchase.user.first_name.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          } else {
            row[firstNameRow] = "-";
          }

          if (purchase.user.last_name) {
            row[lastNameRow] = purchase.user.last_name.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          } else {
            row[lastNameRow] = "-";
          }

          if (purchase.user.restrictions && purchase.user.restrictions.find(function (r) {
            return r == 11;
          })) {
            row[userVeganRow] = "true";
          } else {
            row[userVeganRow] = "false";
          }

          if (purchase.user.note) {
            row[userNoteRow] = purchase.user.note;
          } else {
            row[userNoteRow] = "-";
          }
        } else if (purchase.name_on_plate) {
          row[firstNameRow] = purchase.name_on_plate.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          row[lastNameRow] = "-";
          row[userVeganRow] = "-";
          row[userNoteRow] = "-";
        } else {
          row[firstNameRow] = "-";
          row[lastNameRow] = "-";
          row[userVeganRow] = "-";
          row[userNoteRow] = "-";
        }

        if (purchase.plate && !purchase.not_eating) {
          var isHot = "false";

          if (purchase.plate.is_hot_meal) {
            isHot = "true";
          }

          row[plateHotRow] = isHot;
          var base = "-";

          if (purchase.plate.base) {
            base = purchase.plate.base.split(",")[0];
          }

          row[baseRow] = base;

          if (purchase.plate.restrictions && purchase.plate.restrictions.is_variant) {
            var menu = [];

            if (order.assigned_menu_plates) {
              menu = order.assigned_menu_platesplates;
            }

            var masterPlate = getMasterPlate(purchase.plate, menu);
            row[masterPlateNameRow] = masterPlate.name;
            var variantGlutenFree = !purchase.plate.restrictions.has_gluten && !masterPlate.is_gluten_free;
            var variantVegetarian = purchase.plate.restrictions.is_vegetarian && !masterPlate.is_vegetarian;
            var variantVegan = purchase.plate.restrictions.is_vegan && !masterPlate.is_vegan;

            if (variantGlutenFree && variantVegan) {
              row[plateVeganGlutenFreeRow] = "true";
              row[plateVeganRow] = "false";
              row[plateGlutenFreeRow] = "false";
            } else {
              row[plateVeganGlutenFreeRow] = "false";
              row[plateVeganRow] = "false";
              row[plateGlutenFreeRow] = "false";

              if (variantVegan) {
                row[plateVeganRow] = "true";
                row[plateGlutenFreeRow] = "false";
              }

              if (variantGlutenFree) {
                row[plateVeganRow] = "false";
                row[plateGlutenFreeRow] = "true";
              }
            }

            if (variantVegetarian && !variantVegan) {
              row[plateVegetarianRow] = "true";
            } else {
              row[plateVegetarianRow] = "false";
            }
          } else {
            row[masterPlateNameRow] = purchase.plate.name;
            row[plateGlutenFreeRow] = "false";
            row[plateVegetarianRow] = "false";
            row[plateVeganRow] = "false";
            row[plateVeganGlutenFreeRow] = "false";
          }
        } else if (!purchase.plate && purchase.not_eating) {
          row[masterPlateNameRow] = "Not ordering";
        } else if (!purchase.plate && !purchase.not_eating && purchase.extra_plate_name) {
          row[masterPlateNameRow] = purchase.extra_plate_name;
        } else if (!purchase.plate && !purchase.not_eating && !purchase.extra_plate_name) {
          row[masterPlateNameRow] = "No choice";
        } // add row to data


        csvData.push(row);
      });
    });
  }

  return csvData;
}; // format client CSV


exports.formatOrderDataCSV = formatOrderDataCSV;

var formatClientOrderDataCSV = function formatClientOrderDataCSV(orders, purchases) {
  console.log("PURCHASES");
  console.log(purchases);
  var csvData = [["business", "delivery_date", "first_name", "last_name", "phone_number", "plate_name"]];
  var businessRow = 0;
  var deliveryDateRow = 1;
  var firstNameRow = 2;
  var lastNameRow = 3;
  var phoneNumber = 4;
  var plateNameRow = 5; // let user_choices = undefined

  if (orders) {
    orders.forEach(function (order) {
      var business = order.business.name;
      var orderPurchases = purchases.filter(function (p) {
        return p.order == order.id;
      });

      if (order.invited_emails) {
        var split_emails = order.invited_emails.split(",");
        split_emails.forEach(function (email) {
          var row = []; // get business

          row[businessRow] = business.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // get date

          if (order.date) {
            row[deliveryDateRow] = (0, _moment.default)(order.date).format("DD-MMMM-YYYY");
          } // get invited email


          row[firstNameRow] = email;
          row[lastNameRow] = "-";
          row[phoneNumber] = "-"; // is invited but not joined

          row[plateNameRow] = "Invitation sent"; // add row

          csvData.push(row);
        });
      }

      orderPurchases.forEach(function (purchase) {
        var row = []; // get business

        row[businessRow] = business.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // get date

        if (purchase.delivery_date) {
          row[deliveryDateRow] = (0, _moment.default)(purchase.delivery_date).format("DD-MMMM-YYYY");
        } // get user name, phone and ID


        if (purchase.user) {
          if (purchase.user.first_name) {
            row[firstNameRow] = purchase.user.first_name.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          } else {
            row[firstNameRow] = "-";
          }

          if (purchase.user.last_name) {
            row[lastNameRow] = purchase.user.last_name.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          } else {
            row[lastNameRow] = "-";
          }

          if (purchase.user.mobile_phone) {
            row[phoneNumber] = purchase.user.mobile_phone;
          } else {
            row[phoneNumber] = "-";
          }
        } else if (purchase.name_on_plate) {
          row[firstNameRow] = purchase.name_on_plate.replace(/,/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          row[lastNameRow] = "-";
        } else {
          row[firstNameRow] = "-";
          row[lastNameRow] = "-";
        }

        if (purchase.plate && !purchase.not_eating) {
          row[plateNameRow] = purchase.plate.name;
        } else if (!purchase.plate && purchase.extra_plate_name && !purchase.not_eating) {
          row[plateNameRow] = purchase.extra_plate_name;
        } else if (!purchase.plate && !purchase.extra_plate_name && purchase.not_eating) {
          row[plateNameRow] = "Not ordering";
        } else if (!purchase.plate && !purchase.extra_plate_name && !purchase.not_eating) {
          row[plateNameRow] = "No choice";
        } // add row to data


        csvData.push(row);
      });
    });
  }

  return csvData;
}; // format user preferences


exports.formatClientOrderDataCSV = formatClientOrderDataCSV;

var formatPrefsDataCSV = function formatPrefsDataCSV(users) {
  var userPrefsData = [["ID", "first name", "last name", "email", "preferences", "allergies", "diets"]];

  if (users) {
    users.forEach(function (u) {
      var row = [];
      row[0] = u.id; // user name

      if (u.first_name) {
        row[1] = u.first_name;
      } else {
        row[1] = "-";
      }

      if (u.last_name) {
        row[2] = u.last_name;
      } else {
        row[2] = "-";
      }

      if (u.email) {
        row[3] = u.email;
      } else {
        row[3] = "-";
      }

      if (u.restrictions.length > 0) {
        var all_restrictions = u.restrictions; // user preferences

        var preferences = all_restrictions.filter(function (r) {
          return r.food_type;
        });
        var preference_list = [];

        if (preferences) {
          preferences.forEach(function (p) {
            preference_list.push(p.name);
          });
        }

        row[4] = preference_list.join(); // user allergies

        var allergies = all_restrictions.filter(function (r) {
          return r.allergy;
        });
        var allergy_list = [];

        if (allergies) {
          allergies.forEach(function (a) {
            allergy_list.push(a.name);
          });
        }

        row[5] = allergy_list.join(); // user diets

        var diets = all_restrictions.filter(function (r) {
          return !r.allergy && !r.food_type;
        });
        var diet_list = [];

        if (diets) {
          diets.forEach(function (d) {
            diet_list.push(d.name);
          });
        }

        row[6] = diet_list.join();
      } // add row to data


      userPrefsData.push(row);
    });
  }

  return userPrefsData;
};

exports.formatPrefsDataCSV = formatPrefsDataCSV;