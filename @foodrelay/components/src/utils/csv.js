import moment from "moment";

// Format order data for CSV
const isMasterPlate = (masterPlateName, variantName) => {
  let numberSameWords = 0;
  variantName.map(n => {
    if (masterPlateName.find(m => m == n)) {
      numberSameWords = numberSameWords + 1;
    }
  });
  if (numberSameWords == variantName.length) {
    return true;
  } else {
    return false;
  }
};

const getMasterPlate = (variant, menu) => {
  let masterPlateInfo = {
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
    const unwantedWords = [
      "gluten",
      "vegan",
      "vegetarian",
      "veggie",
      "&",
      "free"
    ];
    let cleanVariantName = variant.name
      .toLowerCase()
      .split(" ")
      .filter(n => unwantedWords.indexOf(n) <= -1);
    let masterPlates = menu.filter(p => !p.restrictions.is_variant);
    if (masterPlates.length > 0) {
      let masterPlatesList = [];
      masterPlates.map(
        p =>
          (p.cleanName = p.name
            .toLowerCase()
            .split(" ")
            .filter(n => unwantedWords.indexOf(n) <= -1))
      );
      masterPlates.map(p => {
        if (isMasterPlate(p.cleanName, cleanVariantName)) {
          masterPlatesList = [...masterPlatesList, p];
        }
      });
      if (masterPlatesList.length > 1) {
        masterPlatesList.map(p => {
          if (
            ((variant.restrictions.is_vegetarian ||
              variant.restrictions.is_vegan) &&
              p.restrictions.is_vegetarian) ||
            (variant.restrictions.vegan && p.restrictions.is_vegan) ||
            (!variant.restrictions.vegan &&
              !variant.restrictions.is_vegetarian &&
              !p.restrictions.is_vegetarian &&
              !p.restrictions.is_vegan)
          ) {
            masterPlateInfo.name = p.name;
            masterPlateInfo.is_gluten_free = !p.restrictions.has_gluten;
            masterPlateInfo.is_vegetarian = p.restrictions.is_vegetarian;
            masterPlateInfo.is_vegan = p.restrictions.is_vegan;
          }
        });
      } else if (masterPlatesList.length == 1) {
        masterPlateInfo.name = masterPlatesList[0].name;
        masterPlateInfo.is_gluten_free = !masterPlatesList[0].restrictions
          .has_gluten;
        masterPlateInfo.is_vegetarian =
          masterPlatesList[0].restrictions.is_vegetarian;
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

export const formatOrderDataCSV = (orders, purchases) => {
  let csvData = [
    [
      "business",
      "delivery_date",
      "delivery_time",
      "first_name",
      "last_name",
      "user_vegan",
      "user_note",
      "master_plate_name",
      "plate_is_hot",
      "variant_gluten_free",
      "variant_vegetarian",
      "variant_vegan",
      "variant_vegan_gluten_free",
      "base"
    ]
  ];
  // let user_choices = undefined
  let businessRow = 0;
  let deliveryDateRow = 1;
  let deliveryTimeRow = 2;
  let firstNameRow = 3;
  let lastNameRow = 4;
  let userVeganRow = 5;
  let userNoteRow = 6;
  let masterPlateNameRow = 7;
  let plateHotRow = 8;
  let plateGlutenFreeRow = 9;
  let plateVegetarianRow = 10;
  let plateVeganRow = 11;
  let plateVeganGlutenFreeRow = 12;
  let baseRow = 13;

  if (orders) {
    orders.forEach(order => {
      let business = order.business.name;
      let orderPurchases = purchases.filter(p => p.order == order.id);
      orderPurchases.forEach(purchase => {
        let row = [];
        // get business
        row[businessRow] = business
          .replace(/,/g, " ")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        // get date
        if (purchase.delivery_date) {
          row[deliveryDateRow] = moment(purchase.delivery_date).format(
            "DD-MMMM-YYYY"
          );
          row[deliveryTimeRow] = moment(order.delivery_date).format("HH:mm");
        }
        // get user name, phone and ID
        if (purchase.user) {
          if (purchase.user.first_name) {
            row[firstNameRow] = purchase.user.first_name
              .replace(/,/g, " ")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
          } else {
            row[firstNameRow] = "-";
          }
          if (purchase.user.last_name) {
            row[lastNameRow] = purchase.user.last_name
              .replace(/,/g, " ")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
          } else {
            row[lastNameRow] = "-";
          }
          if (
            purchase.user.restrictions &&
            purchase.user.restrictions.find(r => r == 11)
          ) {
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
          row[firstNameRow] = purchase.name_on_plate
            .replace(/,/g, " ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
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
          let isHot = "false";
          if (purchase.plate.is_hot_meal) {
            isHot = "true";
          }
          row[plateHotRow] = isHot;
          let base = "-";
          if (purchase.plate.base) {
            base = purchase.plate.base.split(",")[0];
          }
          row[baseRow] = base;
          if (
            purchase.plate.restrictions &&
            purchase.plate.restrictions.is_variant
          ) {
            let menu = [];
            if (order.assigned_menu_plates) {
              menu = order.assigned_menu_platesplates;
            }
            let masterPlate = getMasterPlate(purchase.plate, menu);
            row[masterPlateNameRow] = masterPlate.name;
            let variantGlutenFree =
              !purchase.plate.restrictions.has_gluten &&
              !masterPlate.is_gluten_free;
            let variantVegetarian =
              purchase.plate.restrictions.is_vegetarian &&
              !masterPlate.is_vegetarian;
            let variantVegan =
              purchase.plate.restrictions.is_vegan && !masterPlate.is_vegan;
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
        } else if (
          !purchase.plate &&
          !purchase.not_eating &&
          purchase.extra_plate_name
        ) {
          row[masterPlateNameRow] = purchase.extra_plate_name;
        } else if (
          !purchase.plate &&
          !purchase.not_eating &&
          !purchase.extra_plate_name
        ) {
          row[masterPlateNameRow] = "No choice";
        }
        // add row to data
        csvData.push(row);
      });
    });
  }
  return csvData;
};

// format client CSV

export const formatClientOrderDataCSV = (orders, purchases) => {
  console.log("PURCHASES");
  console.log(purchases);
  let csvData = [
    [
      "business",
      "delivery_date",
      "first_name",
      "last_name",
      "phone_number",
      "plate_name"
    ]
  ];
  let businessRow = 0;
  let deliveryDateRow = 1;
  let firstNameRow = 2;
  let lastNameRow = 3;
  let phoneNumber = 4;
  let plateNameRow = 5;
  // let user_choices = undefined
  if (orders) {
    orders.forEach(order => {
      let business = order.business.name;
      let orderPurchases = purchases.filter(p => p.order == order.id);
      if (order.invited_emails) {
        let split_emails = order.invited_emails.split(",");
        split_emails.forEach(email => {
          let row = [];
          // get business
          row[businessRow] = business.replace(/,/g, " ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          // get date
          if (order.date) {
            row[deliveryDateRow] = moment(order.date).format("DD-MMMM-YYYY");
          }
          // get invited email
          row[firstNameRow] = email;
          row[lastNameRow] = "-";
          row[phoneNumber] = "-";
          // is invited but not joined
          row[plateNameRow] = "Invitation sent";
          // add row
          csvData.push(row);
        });
      }
      orderPurchases.forEach(purchase => {
        let row = [];
        // get business
        row[businessRow] = business.replace(/,/g, " ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        // get date
        if (purchase.delivery_date) {
          row[deliveryDateRow] = moment(purchase.delivery_date).format(
            "DD-MMMM-YYYY"
          );
        }
        // get user name, phone and ID
        if (purchase.user) {
          if (purchase.user.first_name) {
            row[firstNameRow] = purchase.user.first_name.replace(/,/g, " ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          } else {
            row[firstNameRow] = "-";
          }
          if (purchase.user.last_name) {
            row[lastNameRow] = purchase.user.last_name.replace(/,/g, " ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          } else {
            row[lastNameRow] = "-";
          }
          if (purchase.user.mobile_phone) {
            row[phoneNumber] = purchase.user.mobile_phone;
          } else {
            row[phoneNumber] = "-";
          }
        } else if (purchase.name_on_plate) {
          row[firstNameRow] = purchase.name_on_plate.replace(/,/g, " ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          row[lastNameRow] = "-";
        } else {
          row[firstNameRow] = "-";
          row[lastNameRow] = "-";
        }

        if (purchase.plate && !purchase.not_eating) {
          row[plateNameRow] = purchase.plate.name;
        } else if (
          !purchase.plate &&
          purchase.extra_plate_name &&
          !purchase.not_eating
        ) {
          row[plateNameRow] = purchase.extra_plate_name;
        } else if (
          !purchase.plate &&
          !purchase.extra_plate_name &&
          purchase.not_eating
        ) {
          row[plateNameRow] = "Not ordering";
        } else if (
          !purchase.plate &&
          !purchase.extra_plate_name &&
          !purchase.not_eating
        ) {
          row[plateNameRow] = "No choice";
        }
        // add row to data
        csvData.push(row);
      });
    });
  }
  return csvData;
};

// format user preferences

export const formatPrefsDataCSV = users => {
  let userPrefsData = [
    [
      "ID",
      "first name",
      "last name",
      "email",
      "preferences",
      "allergies",
      "diets"
    ]
  ];
  if (users) {
    users.forEach(u => {
      let row = [];
      row[0] = u.id;
      // user name
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
        let all_restrictions = u.restrictions;
        // user preferences
        let preferences = all_restrictions.filter(r => r.food_type);
        let preference_list = [];
        if (preferences) {
          preferences.forEach(p => {
            preference_list.push(p.name);
          });
        }
        row[4] = preference_list.join();
        // user allergies
        let allergies = all_restrictions.filter(r => r.allergy);
        let allergy_list = [];
        if (allergies) {
          allergies.forEach(a => {
            allergy_list.push(a.name);
          });
        }
        row[5] = allergy_list.join();
        // user diets
        let diets = all_restrictions.filter(r => !r.allergy && !r.food_type);
        let diet_list = [];
        if (diets) {
          diets.forEach(d => {
            diet_list.push(d.name);
          });
        }
        row[6] = diet_list.join();
      }
      // add row to data
      userPrefsData.push(row);
    });
  }
  return userPrefsData;
};
