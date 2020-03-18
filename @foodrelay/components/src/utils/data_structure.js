export const mapObj = (object, callback) => {
  return Object.keys(object).map(key => callback(key, object[key]));
};

export const formatPhone = (phone, locale = "en") => {
  if (phone) {
    phone = phone.substring(2).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    return phone;
  }
  if (locale == "fr") {
    return "Pas de téléphone";
  } else {
    return "No phone";
  }
};

// function for dynamic sorting
export const compareValues = (key, order = "asc") => (a, b) => {
  if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    // property doesn't exist on either object
    return 0;
  }

  const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
  const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

  let comparison = 0;
  if (varA > varB) {
    comparison = 1;
  } else if (varA < varB) {
    comparison = -1;
  }

  return order === "desc" ? comparison * -1 : comparison;
};
