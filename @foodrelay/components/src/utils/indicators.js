export const getPlateCategory = plate => {
  if (
    (plate.category == "normal" && plate.is_hot_meal) ||
    plate.category == "hot_plate"
  ) {
    return "hot_plate";
  } else if (
    (plate.category == "normal" && !plate.is_hot_meal) ||
    plate.category == "salad"
  ) {
    return "salad";
  } else if (plate.category == "sandwich") {
    return "sandwich";
  } else {
    return null;
  }
};

export const getPlateIcon = plate => {
  let category = getPlateCategory(plate);
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
