import React from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import moment from "moment";
import business_logo from "../src/img/icon_beige_back.png";

// Functions
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateDate = (when = "now") => {
  let date = moment();
  let random = getRandomInt(1, 3);
  if (when == "past") {
    date = date.subtract(random, "d");
  } else if (when == "future") {
    date = date.add(random, "d");
  }
  return date.format("YYYY-MM-DD");
};

export const generateType = () => {};

let type = "lunch";

// Mock data

export const businesses = [
  {
    id: 176,
    name: "FoodRelay",
    picture: business_logo,
    address: "3535 Chemin Queen Mary suite 205"
  },
  {
    id: 200,
    name: "Pin Patch Mtl",
    picture: business_logo,
    address: "3535 Chemin Queen Mary suite 205"
  }
];

export const lunch = {
  id: 2,
  value: "Lunch",
  translation: [
    {
      id: 2,
      name: "Lunch",
      language: {
        id: 1,
        locale: "fr"
      }
    },
    {
      id: 8,
      name: "Lunch",
      language: {
        id: 2,
        locale: "en"
      }
    }
  ],
  color: "#f4af42",
  start_of_service: "12:00:00",
  end_of_service: "13:15:00",
  deadline: "10:00:00",
  active: true,
  order_hours: [
    "12:00:00",
    "12:15:00",
    "12:30:00",
    "12:45:00",
    "13:00:00",
    "13:15:00"
  ]
};

export const breakfast = {
  id: 1,
  value: "Breakfast",
  translation: [
    {
      id: 1,
      name: "Déjeuner",
      language: {
        id: 1,
        locale: "fr"
      }
    },
    {
      id: 7,
      name: "Breakfast",
      language: {
        id: 2,
        locale: "en"
      }
    }
  ],
  color: "#a3e5b1",
  start_of_service: "07:00:00",
  end_of_service: "09:00:00",
  deadline: "05:00:00",
  active: false,
  order_hours: [
    "07:00:00",
    "07:15:00",
    "07:30:00",
    "07:45:00",
    "08:00:00",
    "08:15:00",
    "08:30:00",
    "08:45:00",
    "09:00:00"
  ]
};

export const dinner = {
  id: 3,
  value: "Dinner",
  translation: [
    {
      id: 3,
      name: "Souper",
      language: {
        id: 1,
        locale: "fr"
      }
    },
    {
      id: 9,
      name: "Dinner",
      language: {
        id: 2,
        locale: "en"
      }
    }
  ],
  color: "#e4590e",
  start_of_service: "17:00:00",
  end_of_service: "19:00:00",
  deadline: "15:00:00",
  active: false,
  order_hours: [
    "17:00:00",
    "17:15:00",
    "17:30:00",
    "17:45:00",
    "18:00:00",
    "18:15:00",
    "18:30:00",
    "18:45:00",
    "19:00:00"
  ]
};

export const snack = {
  id: 4,
  value: "Snack",
  translation: [
    {
      id: 4,
      name: "Encas",
      language: {
        id: 1,
        locale: "fr"
      }
    },
    {
      id: 10,
      name: "Snack",
      language: {
        id: 2,
        locale: "en"
      }
    }
  ],
  color: "#f5daad",
  start_of_service: "12:00:00",
  end_of_service: "13:15:00",
  deadline: "10:00:00",
  active: false,
  order_hours: [
    "12:00:00",
    "12:15:00",
    "12:30:00",
    "12:45:00",
    "13:00:00",
    "13:15:00"
  ]
};

export const cocktail = {
  id: 5,
  value: "5@7",
  translation: [
    {
      id: 5,
      name: "5@7",
      language: {
        id: 1,
        locale: "fr"
      }
    },
    {
      id: 11,
      name: "5@7",
      language: {
        id: 2,
        locale: "en"
      }
    }
  ],
  color: "#9777ee",
  start_of_service: "16:00:00",
  end_of_service: "18:00:00",
  deadline: "15:00:00",
  active: false,
  order_hours: [
    "16:00:00",
    "16:15:00",
    "16:30:00",
    "16:45:00",
    "17:00:00",
    "17:15:00",
    "17:30:00",
    "17:45:00",
    "18:00:00"
  ]
};

export const business_roles = [
  {
    id: 1,
    value: "Admin",
    translation: [
      {
        id: 5,
        name: "Admin",
        description:
          "A admin can create and edit every orders of the business.",
        language: {
          id: 2,
          locale: "en"
        }
      },
      {
        id: 1,
        name: "Admin",
        description:
          "Un admin peut créer et modifier tous les repas de l'entreprise.",
        language: {
          id: 1,
          locale: "fr"
        }
      }
    ]
  },
  {
    id: 2,
    value: "TeamLead",
    translation: [
      {
        id: 6,
        name: "Team lead",
        description:
          "A team lead can create and edit every orders of his group but they did not have access to the other orders of the business.",
        language: {
          id: 2,
          locale: "en"
        }
      },
      {
        id: 2,
        name: "Chef d'équipe",
        description:
          "Un chef d'équipe peut créer et modifier tous les repas de son groupe mais n'a pas accès aux autres repas de l'entreprise.",
        language: {
          id: 1,
          locale: "fr"
        }
      }
    ]
  },
  {
    id: 3,
    value: "Employee",
    translation: [
      {
        id: 7,
        name: "Employee",
        description:
          "A employee can order in the business' cafeteria but can not create or edit the business' orders.",
        language: {
          id: 2,
          locale: "en"
        }
      },
      {
        id: 3,
        name: "Employé.e",
        description:
          "Un.e employé.e peut commander dans la caféteria de l'entreprise mais ne peut pas créer ni modifier les repas de l'entreprise.",
        language: {
          id: 1,
          locale: "fr"
        }
      }
    ]
  },
  {
    id: 4,
    value: "Guest",
    translation: [
      {
        id: 8,
        name: "Guest",
        description:
          "A guest can not order in the business' cafeteria but can not create or edit the business' orders.",
        language: {
          id: 2,
          locale: "en"
        }
      },
      {
        id: 4,
        name: "Invité.e",
        description:
          "Un.e invité.e n'a pas accès à la caféteria de l'entreprise et ne peut pas créer ni modifier les repas de l'entreprise.",
        language: {
          id: 1,
          locale: "fr"
        }
      }
    ]
  }
];

export const user_business_roles = [
  {
    id: 2153,
    user: 1516,
    business: businesses.find(b => b.id === 176),
    role: business_roles.find(r => r.id === 3)
  },
  {
    id: 1848,
    user: 1516,
    business: businesses.find(b => b.id === 200),
    role: business_roles.find(r => r.id === 1)
  }
];
export const plates = [
  {
    base: "Couscous, Olive Oil, Parsley",
    base_FR: "Couscous, Huile d'Olive, Persil",
    category: "normal",
    description: "",
    description_FR: "",
    food_type: 15,
    format: "Boite à lunch",
    garnish: "Lemon, Marinated Red Onions, Parsley",
    garnish_FR: "Citron, Oignons Rouges Marinées, Persil",
    id: 252,
    image: "https://bna-django.s3.amazonaws.com/static/media/eb8d8d80-d5b.png",
    is_hot_meal: true,
    name: "Lamb Kefta",
    name_FR: "Kefta d'Agneau",
    protein:
      "Lamb, Mint, Garlic, Onion, Parsley, Cilantro, Lemon, Coriander, Cumin, Paprika, Oregano",
    protein_FR:
      "Agneau, Menthe, Ail, Onion, Persil, Coriandre, Citron, Cumin, Paprika, Oregan",
    restrictions: {
      has_gluten: true,
      is_chefs_dish: true,
      has_wheat: true
    },
    sauce: "Tzatziki Sauce (Yogurt, Cucumber, Garlic, Lemon, Dill, Olive Oil)",
    sauce_FR:
      "Sauce Tzatziki (Yogourt, Concombre, Aïl, Citron, Aneth, Huile d'Olive)",
    seasoning: "",
    seasoning_FR: "",
    side: "",
    side_FR: "",
    supplier: 1,
    type: "lunch",
    vegetables: "Roasted Carrots",
    vegetables_FR: "Carottes Rôties",
    spicyness: 1,
    weight: 123
  }
];
export const menu = {
  category: "normal",
  date_created: "2018-07-20T18:18:58.956442Z",
  end_date: null,
  format: "Boite à lunch",
  id: 1,
  name: "March 22nd",
  plates: [
    {
      base: "Couscous, Olive Oil, Parsley",
      base_FR: "Couscous, Huile d'Olive, Persil",
      category: "normal",
      description: "",
      description_FR: "",
      food_type: 15,
      format: "Boite à lunch",
      garnish: "Lemon, Marinated Red Onions, Parsley",
      garnish_FR: "Citron, Oignons Rouges Marinées, Persil",
      id: 252,
      image:
        "https://bna-django.s3.amazonaws.com/static/media/eb8d8d80-d5b.png",
      is_hot_meal: true,
      name: "Lamb Kefta",
      name_FR: "Kefta d'Agneau",
      protein:
        "Lamb, Mint, Garlic, Onion, Parsley, Cilantro, Lemon, Coriander, Cumin, Paprika, Oregano",
      protein_FR:
        "Agneau, Menthe, Ail, Onion, Persil, Coriandre, Citron, Cumin, Paprika, Oregan",
      restrictions: {
        has_gluten: true,
        is_chefs_dish: true,
        has_wheat: true
      },
      sauce:
        "Tzatziki Sauce (Yogurt, Cucumber, Garlic, Lemon, Dill, Olive Oil)",
      sauce_FR:
        "Sauce Tzatziki (Yogourt, Concombre, Aïl, Citron, Aneth, Huile d'Olive)",
      seasoning: "",
      seasoning_FR: "",
      side: "",
      side_FR: "",
      supplier: 1,
      type: "lunch",
      vegetables: "Roasted Carrots",
      vegetables_FR: "Carottes Rôties",
      spicyness: 1,
      weight: 123
    }
  ],
  start_date: "2018-04-15",
  supplier: 1,
  type: "lunch"
};

export const menu2 = {
  category: "normal",
  date_created: "2018-07-20T18:18:58.956442Z",
  end_date: null,
  format: "Boite à lunch",
  id: 2,
  name: "March 22nd",
  plates: [
    {
      base: "Couscous, Olive Oil, Parsley",
      base_FR: "Couscous, Huile d'Olive, Persil",
      category: "normal",
      description: "",
      description_FR: "",
      food_type: 15,
      format: "Boite à lunch",
      garnish: "Lemon, Marinated Red Onions, Parsley",
      garnish_FR: "Citron, Oignons Rouges Marinées, Persil",
      id: 252,
      image:
        "https://bna-django.s3.amazonaws.com/static/media/eb8d8d80-d5b.png",
      is_hot_meal: true,
      name: "Lamb Kefta",
      name_FR: "Kefta d'Agneau",
      protein:
        "Lamb, Mint, Garlic, Onion, Parsley, Cilantro, Lemon, Coriander, Cumin, Paprika, Oregano",
      protein_FR:
        "Agneau, Menthe, Ail, Onion, Persil, Coriandre, Citron, Cumin, Paprika, Oregan",
      restrictions: {
        has_gluten: true,
        is_chefs_dish: true,
        has_wheat: true
      },
      sauce:
        "Tzatziki Sauce (Yogurt, Cucumber, Garlic, Lemon, Dill, Olive Oil)",
      sauce_FR:
        "Sauce Tzatziki (Yogourt, Concombre, Aïl, Citron, Aneth, Huile d'Olive)",
      seasoning: "",
      seasoning_FR: "",
      side: "",
      side_FR: "",
      supplier: 1,
      type: "lunch",
      vegetables: "Roasted Carrots",
      vegetables_FR: "Carottes Rôties",
      spicyness: 1,
      weight: 123
    }
  ],
  start_date: "2018-04-15",
  supplier: 1,
  type: "lunch"
};

export const userMenu = {
  id: 262,
  name: "Menu January 14th to January 18th",
  start_date: "2019-01-14",
  end_date: "2019-01-18",
  date_created: "2018-12-17T15:36:54.390531Z",
  ordered_plates: [
    {
      id: 139,
      name: "Southwest Chicken Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/519246f6-c94.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_meal_salad: true,
        has_eggs: false,
        has_corn: true,
        has_milk: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables:
        "Black Beans, Corn, Cucumber, Tomato, Feta Cheese, Red Onion, Pumpkin Seeds",
      protein: "Quebec Grain Fed Chicken",
      sauce: "Lemon, Dijon Mustard, Balsamic Vinegar, Canola Oil",
      side: "",
      garnish: "",
      name_FR: "Salade Poulet Southwest",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Haricots Noires, Maïs, Concombre, Tomate, Fromage Feta, Oignon Rouge, Graines de Citrouille",
      protein_FR: "Poulet de Grain du Quebec",
      sauce_FR: "Citron, Moutarde Dijon, Vinaigre Balsamique, Huile de Canola",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "normal",
      spicyness: 1,
      weight: 123
    },
    {
      id: 492,
      name: "Vegan Nicoise Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/5aed2da2-ead.png",
      supplier: 1,
      description:
        "English Description is in english ! It's very very very long ! And it's not finished yet ! Maybe it's finished now ? No, not yet ! And it'll never end ! MWHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAH ! The end.",
      food_type: 13,
      restrictions: {
        is_meal_salad: true,
        is_vegan: true,
        has_eggs: false,
        is_variant: true,
        is_vegetarian: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables:
        "Chickpeas (Lemon & Parsley), Kalamata Olives, Green Beans, Tomatoes, Potatoes, Capers, Sunflower Seeds",
      protein: "",
      sauce: "Lemon, Balsamic Vinegar, Dijon Mustard, Canola Oil",
      side: "",
      garnish: "",
      name_FR: "Salade Nicoise Vegan",
      description_FR: "Et celle en française est en français !",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Chickpeas (Lemon & Parsley), Olives Kalamata, Haricots Verts, Tomates, Pomme de Terre, Capres, Graines de Tournesol",
      protein_FR: "",
      sauce_FR:
        "Citron, Vinaigre Balsamique, Moutarde de Dijon, Huile de Canola",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "salad",
      spicyness: 1,
      weight: 123
    },
    {
      id: 701,
      name: "Vegan Bourguignon",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/ec247b7e-228.png",
      supplier: 1,
      description: "",
      food_type: 16,
      restrictions: {
        is_chef_dishes: true,
        has_gluten: true,
        is_vegan: true,
        is_chefs_dish: true,
        has_alcohol: true,
        is_vegetarian: true
      },
      seasoning: "",
      base: "Rice, Thyme",
      vegetables: "Green Peas, Mint",
      protein: "",
      sauce: "Portobello Mushrooms, Carrot, Onion, Garlic, Red Wine, Flour",
      side: "",
      garnish: "Tomato Confit, Parsley",
      name_FR: "Bourguignon Vegan",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Riz, Thym",
      vegetables_FR: "Petit Pois, Menthe",
      protein_FR: "",
      sauce_FR: "Champignon Portobello, Carotte, Oignon, Aïl, Vin Rouge, Flour",
      side_FR: "",
      garnish_FR: "Tomate Confit, Persil",
      cost: 1349,
      is_hot_meal: true,
      category: "sandwich",
      spicyness: 1,
      weight: 123
    },
    {
      id: 677,
      name: "Vegan & Gluten Free Veggie Meatballs",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/94c7c864-adb.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_vegan: true,
        is_chefs_dish: true,
        has_corn: true,
        is_variant: true,
        is_vegetarian: true
      },
      seasoning: "",
      base: "Gluten Free Penne Pasta",
      vegetables: "Broccoli",
      protein:
        "Veggie Meatballs (Mushroom, Bell Pepper, Cauliflower, Onion, Garlic, Lemon, Parsley, Olive Oil, Chickpea Flour, Corn Flour)",
      sauce:
        "Tomato Sauce (Tomato, Onion, Garlic, Celery, Fine Herbs, Olive Oil)",
      side: "",
      garnish: "Parsley",
      name_FR: "Boulettes Végétariennes Vegane & Sans Gluten",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Pâtes Penne Sans Gluten",
      vegetables_FR: "Brocoli",
      protein_FR:
        "Boulettes Végétarienne (Champignon, Poivron, Chou-fleur, Oignon, Ail, Citron, Persil, Huile d'Olive, Chickpea Flour, Farine de Maïs)",
      sauce_FR:
        "Sauce Tomate (Tomate, Oignon, Aïl, Céleri, Fines Herbes, Huile d'Olive)",
      side_FR: "",
      garnish_FR: "Persil",
      cost: 1349,
      is_hot_meal: true,
      category: "hot_plate",
      spicyness: 1,
      weight: 0
    },
    {
      id: 652,
      name: "Veggie Meatballs",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/6dfb2bca-30f.png",
      supplier: 1,
      description: "",
      food_type: 20,
      restrictions: {
        has_corn: true,
        has_gluten: true,
        is_chefs_dish: true,
        is_vegetarian: true,
        is_variant: false,
        has_milk: true
      },
      seasoning: "",
      base: "Farfalle Pasta",
      vegetables: "Broccoli",
      protein:
        "Veggie Meatballs (Mushroom, Bell Pepper, Cauliflower, Onion, Garlic, Lemon, Parsley, Olive Oil, Chickpea Flour, Corn Flour)",
      sauce:
        "Tomato Sauce (Tomato, Onion, Garlic, Celery, Fine Herbs, Olive Oil)",
      side: "",
      garnish: "Parmesan, Parsley",
      name_FR: "Boulettes Végétariennes",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Farfalle Pasta",
      vegetables_FR: "Brocoli",
      protein_FR:
        "Boulettes Végétarienne (Champignon, Poivron, Chou-fleur, Oignon, Ail, Citron, Persil, Huile d'Olive, Farine de Pois-chiches, Farine de Maïs)",
      sauce_FR:
        "Sauce Tomate (Tomate, Oignon, Aïl, Céleri, Fines Herbes, Huile d'Olive)",
      side_FR: "",
      garnish_FR: "Parmesan, Persil",
      cost: 1349,
      is_hot_meal: true,
      category: "normal",
      spicyness: 1,
      weight: 123
    },
    {
      id: 456,
      name: "Vegetarian Southwest Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/d64e5ecc-d8c.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_meal_salad: true,
        has_corn: true,
        is_vegetarian: true,
        is_kosher: true,
        has_milk: true,
        is_variant: true,
        is_halal: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables:
        "Clementines, Black Beans, Corn, Cucumber, Tomato, Feta Cheese, Marinated Red Onion, Pumpkin Seeds",
      protein: "",
      sauce: "Lemon, Dijon Mustard, Shallot, Balsamic Vinegar, Canola Oil",
      side: "",
      garnish: "",
      name_FR: "Salade Southwest Végétarienne",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Clementines, Haricots Noires, Maïs, Concombre, Tomate, Fromage Feta, Oignon Rouge Marinés, Graines de Citrouille",
      protein_FR: "",
      sauce_FR:
        "Citron, Moutarde Dijon, Échalote, Vinaigre Balsamique, Huile de Canola",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "normal",
      spicyness: 1,
      weight: 123
    },
    {
      id: 457,
      name: "Vegan Southwest Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/c6bf5978-bee.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_meal_salad: true,
        has_corn: true,
        is_kosher: true,
        is_vegan: true,
        is_vegetarian: true,
        is_halal: true,
        is_variant: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables:
        "Clemetine, Black Beans, Corn, Cucumber, Tomato, Marinated Red Onion, Pumpkin Seeds",
      protein: "",
      sauce: "Lemon, Dijon Mustard, Shallot, Balsamic Vinegar, Canola Oil",
      side: "",
      garnish: "",
      name_FR: "Salade Southwest Vegane",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Clementine, Haricots Noires, Maïs, Concombre, Tomate, Oignon Rouges Marinés, Graines de Citrouille",
      protein_FR: "",
      sauce_FR:
        "Citron, Moutarde Dijon, Échalote, Vinaigre Balsamique, Huile de Canola",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "normal",
      spicyness: 1,
      weight: 123
    },
    {
      id: 64,
      name: "Beef Bourguignon",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/8e629e6b-270.png",
      supplier: 1,
      description: "",
      food_type: 16,
      restrictions: {
        has_alcohol: true,
        has_gluten: false,
        is_kosher: false,
        has_dairy: true,
        is_chefs_dish: true,
        is_halal: false,
        has_milk: false
      },
      seasoning: "",
      base: "Rice, Thyme",
      vegetables: "Green Peas, Mint",
      protein: "AAA Canadian Beef Chuck Roast",
      sauce: "Carrot, Mushroom, Onion, Garlic, Red Wine",
      side: "",
      garnish: "Tomato Confit, Parsley",
      name_FR: "Boeuf Bourguignon",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Riz, Thym",
      vegetables_FR: "Petit Pois, Menthe",
      protein_FR: "Rôti de Boeuf Canadien AAA",
      sauce_FR: "Carotte, Champignon, Oignon, Aïl, Vin Rouge",
      side_FR: "",
      garnish_FR: "Tomate Confit, Persil",
      cost: 1349,
      is_hot_meal: true,
      category: "normal",
      spicyness: 1,
      weight: 123
    },
    {
      id: 104,
      name: "Tuna Nicoise Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/58159c9d-638.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_kosher: true,
        has_fish: true,
        has_eggs: true,
        is_meal_salad: true,
        is_halal: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables:
        "Kalamata Olives, Green Beans, Tomatoes, Potatoes, Egg, Capers, Sunflower Seeds",
      protein: "Tuna",
      sauce:
        "Lemon, Balsamic Vinegar, Dijon Mustard, Capres, Parsley, Dill, Shallot, Canola Oil",
      side: "",
      garnish: "",
      name_FR: "Salade Nicoise",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Olives Kalamata, Haricots Verts, Tomates, Pomme de Terre, Oeuf, Capres, Graines de Tournesol",
      protein_FR: "Thon",
      sauce_FR:
        "Citron, Vinaigre Balsamique, Moutarde de Dijon, Câpres, Persil, Aneth, Échalote, Huile de Canola",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "normal",
      spicyness: 1,
      weight: 123
    },
    {
      id: 695,
      name: "Butternut Squash & Farro Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/d82368e2-47f.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_meal_salad: true,
        has_nuts: true,
        is_vegetarian: true,
        is_kosher: true,
        has_gluten: true,
        is_halal: true,
        has_milk: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables: "Lemon, Dijon Mustard, Balsamic Vinegar, Canola Oil",
      protein:
        "Roasted Butternut Squash, Farro, Feta, Cranberry, Pecans, Beets",
      sauce: "",
      side: "",
      garnish: "",
      name_FR: "Salade de Courge Beurre & Farro",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Citron, Moutarde de Dijon, Vinaigre Balsamique, Huile de Canola",
      protein_FR:
        "Courge Beurre Rôtie, Farro, Feta, Canneberge, Pacane, Betterave",
      sauce_FR: "",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "normal",
      spicyness: 1,
      weight: 123,
      new: true,
      new_recipe: false
    },
    {
      id: 703,
      name: "Turkey Meatballs",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/ef4c0889-da4.png",
      supplier: 1,
      description: "",
      food_type: 20,
      restrictions: {
        has_gluten: true,
        is_chefs_dish: true,
        is_kosher: true,
        is_vegan: false,
        has_eggs: true,
        is_halal: true,
        is_vegetarian: false
      },
      seasoning: "",
      base: "Farfalle Pasta",
      vegetables: "Green Peas",
      protein:
        "Ground Turkey, Garlic, Onion, Parsley, Egg, Breadcrumbs, Oregano, Red Pepper Flakes",
      sauce:
        "Tomato Sauce (Tomato, Onion, Garlic, Celery, Fine Herbs, Olive Oil)",
      side: "",
      garnish: "Parmesan, Parsley",
      name_FR: "Boulettes de Dinde",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Pâtes Farfalle",
      vegetables_FR: "Petit Pois",
      protein_FR:
        "Dinde Haché, Aïl, Oignon, Persil, Oeufs, Chapelure de Pain, Oregano, Flocons de Piments Rouges",
      sauce_FR:
        "Sauce Tomate (Tomate, Oignon, Aïl, Céleri, Fines Herbes, Huile d'Olive)",
      side_FR: "",
      garnish_FR: "Parmesan, Persil",
      cost: 1349,
      is_hot_meal: true,
      category: "normal",
      spicyness: 1,
      weight: 123,
      new: false,
      new_recipe: true
    },
    {
      id: 712,
      name: "Vegan Butternut Squash & Farro Salad",
      image:
        "https://bna-django.s3.amazonaws.com/static/media/1067bcf3-1f1.png",
      supplier: 1,
      description: "",
      food_type: 13,
      restrictions: {
        is_meal_salad: true,
        has_nuts: true,
        is_vegetarian: true,
        is_kosher: true,
        is_vegan: true,
        has_gluten: true,
        is_halal: true,
        is_variant: true
      },
      seasoning: "",
      base: "Mixed Greens",
      vegetables: "Lemon, Dijon Mustard, Balsamic Vinegar, Canola Oil",
      protein: "Roasted Butternut Squash, Farro, Cranberry, Pecans, Beets",
      sauce: "",
      side: "",
      garnish: "",
      name_FR: "Salade de Courge Beurre & Farro Vegane",
      description_FR: "",
      seasoning_FR: "",
      base_FR: "Laitue Mesclun",
      vegetables_FR:
        "Citron, Moutarde de Dijon, Vinaigre Balsamique, Huile de Canola",
      protein_FR: "Courge Beurre Rôtie, Farro, Canneberge, Pacane, Betterave",
      sauce_FR: "",
      side_FR: "",
      garnish_FR: "",
      cost: 1349,
      is_hot_meal: false,
      category: "normal",
      spicyness: 1,
      weight: 123
    }
  ],
  supplier: 1
};

export const plate = {
  base: "Couscous, Olive Oil, Parsley",
  base_FR: "Couscous, Huile d'Olive, Persil",
  category: "sandwich",
  description: "Miam miam",
  description_FR: "",
  food_type: 15,
  format: "Boite à lunch",
  garnish: "Lemon, Marinated Red Onions, Parsley",
  garnish_FR: "Citron, Oignons Rouges Marinées, Persil",
  id: 252,
  image: "https://bna-django.s3.amazonaws.com/static/media/eb8d8d80-d5b.png",
  is_hot_meal: false,
  name: "Vegan & Gluten Free Grilled Eggplant Involtini",
  name_FR: "Kefta d'Agneau",
  protein:
    "Lamb, Mint, Garlic, Onion, Parsley, Cilantro, Lemon, Coriander, Cumin, Paprika, Oregano",
  protein_FR:
    "Agneau, Menthe, Ail, Onion, Persil, Coriandre, Citron, Cumin, Paprika, Oregan",
  restrictions: {
    has_gluten: true,
    is_variant: true
  },
  sauce: "Tzatziki Sauce (Yogurt, Cucumber, Garlic, Lemon, Dill, Olive Oil)",
  sauce_FR:
    "Sauce Tzatziki (Yogourt, Concombre, Aïl, Citron, Aneth, Huile d'Olive)",
  seasoning: "",
  seasoning_FR: "",
  side: "",
  side_FR: "",
  supplier: 1,
  type: "lunch",
  vegetables: "Roasted Carrots",
  vegetables_FR: "Carottes Rôties",
  cost: 1200,
  spicyness: 1,
  weight: 123
};

export const attendees = [
  {
    id: 1402,
    username: "manu@edokiacademy.com",
    first_name: "Manu",
    last_name: "Guyot",
    email: "manu@edokiacademy.com",
    mobile_phone: "+15142162253",
    role_in_businesses: [176, 200],
    businessrole_set: [
      { business: 166, role: business_roles.find(r => r.id === 3) },
      { business: 176, role: business_roles.find(r => r.id === 1) }
    ],
    mms: false,
    note: null,
    is_staff: false,
    is_active: true,
    archived: false,
    archived_businesses: [],
    date_joined: "2018-06-13T15:27:12.177481Z",
    is_manager: false,
    chatbot_is_active: true,
    preferred_locale: "fr",
    picture:
      "https://bna-django.s3.amazonaws.com/static/media/a2db4fe7-528.png",
    has_payment_active: true,
    is_supplier: false,
    supplier_of: null,
    usersetting_set: [
      {
        id: 2105,
        setting: {
          id: 1,
          name: "same_day_reminder",
          display_name_FR: "Rappel",
          display_name: "Reminder",
          note:
            "Receive an SMS notification 2h before your lunch if you didn’t already select your meal.",
          note_FR:
            "Recevez une notification SMS 2h avant votre repas si vous n'avez pas encore fait votre choix.",
          type: "notification_sms"
        },
        active: true
      }
    ],
    uuid: "4413b057-8e21-4c9e-adcf-5627b26a12c6",
    restrictions: [],
    can_see_business_create_cta: false
  },
  {
    id: 1431,
    username: "felix@edokiacademy.com",
    first_name: "Félix",
    last_name: "Paradis",
    email: "felix@edokiacademy.com",
    mobile_phone: "+14387888921",
    role_in_businesses: [166],
    businessrole_set: [
      { business: 166, role: business_roles.find(r => r.id === 1) }
    ],
    mms: false,
    note: null,
    is_staff: false,
    is_active: true,
    archived: false,
    archived_businesses: [],
    date_joined: "2018-06-27T22:00:36.364413Z",
    is_manager: false,
    chatbot_is_active: true,
    preferred_locale: "fr",
    picture: null,
    has_payment_active: true,
    is_supplier: false,
    supplier_of: null,
    usersetting_set: [
      {
        id: 1240,
        setting: {
          id: 1,
          name: "same_day_reminder",
          display_name_FR: "Rappel",
          display_name: "Reminder",
          note:
            "Receive an SMS notification 2h before your lunch if you didn’t already select your meal.",
          note_FR:
            "Recevez une notification SMS 2h avant votre repas si vous n'avez pas encore fait votre choix.",
          type: "notification_sms"
        },
        active: true
      }
    ],
    uuid: "4f29551b-adb9-4434-9222-bab59ed44159",
    restrictions: [11],
    can_see_business_create_cta: false
  },
  {
    id: 1432,
    username: "daniel@edokiacademy.com",
    first_name: "Daniel",
    last_name: "Lamoureux",
    email: "daniel@edokiacademy.com",
    mobile_phone: "+15147134023",
    role_in_businesses: [166],
    businessrole_set: [
      { business: 166, role: business_roles.find(r => r.id === 1) }
    ],
    mms: false,
    note: null,
    is_staff: false,
    is_active: true,
    archived: false,
    archived_businesses: [],
    date_joined: "2018-06-28T11:41:04.611480Z",
    is_manager: false,
    chatbot_is_active: true,
    preferred_locale: "fr",
    picture:
      "https://bna-django.s3.amazonaws.com/static/media/5e8e7693-793.png",
    has_payment_active: true,
    is_supplier: false,
    supplier_of: null,
    usersetting_set: [
      {
        id: 1252,
        setting: {
          id: 1,
          name: "same_day_reminder",
          display_name_FR: "Rappel",
          display_name: "Reminder",
          note:
            "Receive an SMS notification 2h before your lunch if you didn’t already select your meal.",
          note_FR:
            "Recevez une notification SMS 2h avant votre repas si vous n'avez pas encore fait votre choix.",
          type: "notification_sms"
        },
        active: true
      }
    ],
    uuid: "27562ea1-9c85-4045-aa18-3455defada19",
    restrictions: [],
    can_see_business_create_cta: false
  }
];

export const order_states = [
  {
    id: 1,
    value: "Draft",
    translation: [
      {
        id: 1,
        name: "En planification",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 9,
        name: "Draft",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 2,
    value: "Confirmed",
    translation: [
      {
        id: 2,
        name: "Confirmé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 10,
        name: "Confirmed",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 3,
    value: "Locked",
    translation: [
      {
        id: 3,
        name: "Vérouillé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 11,
        name: "Locked",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 4,
    value: "InPreparation",
    translation: [
      {
        id: 4,
        name: "En préparation",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 12,
        name: "In preparation",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 5,
    value: "Delivered",
    translation: [
      {
        id: 5,
        name: "Livré",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 13,
        name: "Delivered",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 6,
    value: "Paid",
    translation: [
      {
        id: 6,
        name: "Payé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 14,
        name: "Paid",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 7,
    value: "LastPayment",
    translation: [
      {
        id: 7,
        name: "Paiement en retard",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 15,
        name: "Late payment",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  },
  {
    id: 8,
    value: "Cancelled",
    translation: [
      {
        id: 8,
        name: "Annullé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 16,
        name: "Cancelled",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  }
];

export const order = {
  amount_paid_by_business: 0,
  number_of_expected_people: 120,
  utensils: true,
  desserts: false,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu_plates: plates,
  user_menu: userMenu,
  delivery_date: generateDate("future") + "T04:00:19.348000Z",
  id: 1086,
  is_fully_paid: false,
  amount_paid_by_business: 2,
  is_recurring: false,
  name: null,
  recurrence_end: null,
  recurrence_rule:
    "RRULE:FREQ=WEEKLY;BYDAY=TU↵RDATE:20181031T160019Z↵EXDATE:20181016T160019Z↵EXDATE:20181030T160019Z",
  prestation: lunch,
  state: order_states.find(state => state.value == "Confirmed")
};
export const order2 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu_plates: plates,
  user_menu: userMenu,
  delivery_date: generateDate("past") + "T16:00:19.348000Z",
  id: 1086,
  is_fully_paid: false,
  amount_paid_by_business: 100,
  is_recurring: true,
  name: null,
  recurrence_end: null,
  recurrence_rule:
    "RRULE:FREQ=WEEKLY;BYDAY=TU↵RDATE:20181031T160019Z↵EXDATE:20181016T160019Z↵EXDATE:20181030T160019Z",
  prestation: cocktail,
  state: {
    id: 1,
    value: "Draft",
    translation: [
      {
        id: 2,
        name: "Confirmé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 10,
        name: "Confirmed",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  }
};
export const order3 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu_plates: plates,
  user_menu: userMenu,
  delivery_date: generateDate("future") + "T16:00:19.348000Z",
  id: 1086,
  is_fully_paid: false,
  amount_paid_by_business: 100,
  is_recurring: true,
  name: null,
  recurrence_end: null,
  recurrence_rule:
    "RRULE:FREQ=WEEKLY;BYDAY=TU↵RDATE:20181031T160019Z↵EXDATE:20181016T160019Z↵EXDATE:20181030T160019Z",
  prestation: breakfast,
  state: {
    id: 1,
    value: "Draft",
    translation: [
      {
        id: 2,
        name: "Confirmé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 10,
        name: "Confirmed",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  }
};
export const order4 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu_plates: plates,
  user_menu: userMenu,
  delivery_date: generateDate("now") + "T16:00:19.348000Z",
  id: 1086,
  is_fully_paid: false,
  amount_paid_by_business: 100,
  is_recurring: true,
  name: null,
  recurrence_end: null,
  recurrence_rule:
    "RRULE:FREQ=WEEKLY;BYDAY=TU↵RDATE:20181031T160019Z↵EXDATE:20181016T160019Z↵EXDATE:20181030T160019Z",
  prestation: snack,
  state: {
    id: 1,
    value: "Draft",
    translation: [
      {
        id: 2,
        name: "Confirmé",
        language: {
          id: 1,
          locale: "fr"
        }
      },
      {
        id: 10,
        name: "Confirmed",
        language: {
          id: 2,
          locale: "en"
        }
      }
    ]
  }
};

export const orderList = [order, order, order, order, order, order, order, order,order2, order3, order4];

export const user = {
  id: 1402,
  username: "manu@edokiacademy.com",
  first_name: "Benjamin",
  last_name: "Chalier",
  email: "manu@edokiacademy.com",
  mobile_phone: "+15142162253",
  role_in_businesses: [176, 166],
  businessrole_set: [
    { business: 200, role: business_roles.find(r => r.id === 4) },
    { business: 176, role: business_roles.find(r => r.id === 1) }
  ],
  mms: false,
  note: null,
  is_staff: false,
  is_active: true,
  archived: false,
  archived_businesses: [],
  date_joined: "2018-06-13T15:27:12.177481Z",
  is_manager: false,
  chatbot_is_active: true,
  preferred_locale: "fr",
  picture: "https://bna-django.s3.amazonaws.com/static/media/a2db4fe7-528.png",
  has_payment_active: true,
  is_supplier: false,
  supplier_of: null,
  get_business_admin_of: {
    id: 176,
    name: "FoodRelay",
    description: null
  },
  usersetting_set: [
    {
      id: 2105,
      setting: {
        id: 1,
        name: "same_day_reminder",
        display_name_FR: "Rappel",
        display_name: "Reminder",
        note:
          "Receive an SMS notification 2h before your lunch if you didn’t already select your meal.",
        note_FR:
          "Recevez une notification SMS 2h avant votre repas si vous n'avez pas encore fait votre choix.",
        type: "notification_sms"
      },
      active: true
    }
  ],
  uuid: "4413b057-8e21-4c9e-adcf-5627b26a12c6",
  restrictions: [],
  can_see_business_create_cta: false
};

export const business = {
  id: 176,
  name: "FoodRelay",
  picture: business_logo,
  address: "3535 Chemin Queen Mary suite 205"
};

export const purchases = [
  {
    id: 37806,
    cart: 12557,
    user: {
      id: 118,
      first_name: "Mathieu",
      last_name: "Johnson",
      picture: "https://apidev.foodrelay.ca/static/media/2c9ea3a2-ff3.png",
      mobile_phone: "+14388870845"
    },
    name_on_plate: "",
    plate: {
      id: 712,
      name: "Gluten Free Spicy Eggplant & Cauliflower",
      format: "Boite à lunch",
      category: "salad",
      type: "lunch",
      is_hot_meal: true
    },
    not_eating: false,
    delivery_date: generateDate("now"),
    notes: null,
    admin_notes: null,
    order: 1086,
    item_cost: 1239,
    balance_due: 0,
    amount_paid: 0,
    business_balance_due: 1239,
    business_purchase: null,
    status: "paid",
    business_id: 176
  },
  {
    id: 37804,
    cart: 12556,
    user: {
      id: 1,
      first_name: "Mathieu",
      last_name: "Johnson",
      picture: "https://apidev.foodrelay.ca/static/media/2c9ea3a2-ff3.png",
      mobile_phone: "+14388870845"
    },
    name_on_plate: "",
    plate: {
      id: 449,
      name: "Gluten Free Spicy Eggplant & Cauliflower",
      format: "Boite à lunch",
      category: "sandwich",
      type: "lunch",
      is_hot_meal: true
    },
    not_eating: false,
    delivery_date: generateDate("now"),
    notes: null,
    admin_notes: null,
    order: 1086,
    item_cost: 1239,
    balance_due: 0,
    amount_paid: 0,
    business_balance_due: 1239,
    business_purchase: null,
    status: "paid",
    business_id: 176
  },
  {
    id: 37802,
    cart: 12554,
    user: {
      id: 1,
      first_name: "Mathieu",
      last_name: "Johnson",
      picture: "https://apidev.foodrelay.ca/static/media/2c9ea3a2-ff3.png",
      mobile_phone: "+14388870845"
    },
    name_on_plate: "",
    plate: {
      id: 449,
      name: "Gluten Free Spicy Eggplant & Cauliflower",
      format: "Boite à lunch",
      category: "hot_plate",
      type: "lunch",
      is_hot_meal: false,
      restrictions: { is_vegan: true }
    },
    not_eating: false,
    delivery_date: generateDate("now"),
    notes: null,
    admin_notes: null,
    order: 1086,
    item_cost: 1239,
    balance_due: 0,
    amount_paid: 0,
    business_balance_due: 1239,
    business_purchase: null,
    status: "paid",
    business_id: 176
  },
  {
    id: 37802,
    cart: 12554,
    user: {
      id: 1,
      first_name: "Mathieu",
      last_name: "Johnson",
      picture: "https://apidev.foodrelay.ca/static/media/2c9ea3a2-ff3.png",
      mobile_phone: "+14388870845"
    },
    name_on_plate: "",
    plate: {
      id: 449,
      name: "Gluten Free Spicy Eggplant & Cauliflower",
      format: "Boite à lunch",
      category: "hot_plate",
      type: "lunch",
      is_hot_meal: false,
      restrictions: { is_vegan: true }
    },
    not_eating: false,
    delivery_date: generateDate("now"),
    notes: null,
    admin_notes: null,
    order: 1086,
    item_cost: 1239,
    balance_due: 0,
    amount_paid: 0,
    business_balance_due: 1239,
    business_purchase: null,
    status: "paid",
    business_id: 176
  },
  {
    id: 37802,
    cart: 12554,
    user: {
      id: 1,
      first_name: "Mathieu",
      last_name: "Johnson",
      picture: "https://apidev.foodrelay.ca/static/media/2c9ea3a2-ff3.png",
      mobile_phone: "+14388870845"
    },
    name_on_plate: "",
    plate: {
      id: 449,
      name: "Gluten Free Spicy Eggplant & Cauliflower",
      format: "Boite à lunch",
      category: "hot_plate",
      type: "lunch",
      is_hot_meal: false,
      restrictions: { is_vegan: true }
    },
    not_eating: false,
    delivery_date: generateDate("now"),
    notes: null,
    admin_notes: null,
    order: 1086,
    item_cost: 1239,
    balance_due: 0,
    amount_paid: 0,
    business_balance_due: 1239,
    business_purchase: null,
    status: "paid",
    business_id: 176
  }
];

export const adminNavButtons = (
  <React.Fragment>
    <NavLink exact to="/calendar/">
      Calendar
    </NavLink>
    <NavLink exact to="/network/">
      Employees
    </NavLink>
  </React.Fragment>
);

export const additional_items = [
  {
    type: "Compostable utensils & napkins",
    type_fr: "Ustensiles et napkins compostables",
    icon: "utensils",
    lineItems: [
      {
        name: "sets",
        name_fr: "items",
        unit_price: 100
      }
    ]
  },
  {
    type: "Dessert of the day",
    type_fr: "Dessert de la journée",
    icon: "cookie",
    lineItems: [
      {
        name: "desserts",
        name_fr: "desserts",
        unit_price: 200
      },
      {
        name: "vegan desserts",
        name_fr: "dessert végétaliens",
        unit_price: 200,
        for_vegans: true
      }
    ]
  },
  {
    type: "Drink assortment",
    type_fr: "Assortiment de breuvages",
    icon: "glass",
    lineItems: [
      {
        name: "drinks",
        name_fr: "breuvages",
        unit_price: 200
      }
    ]
  }
];

export const stripe_customer = {
  id: 1,
  business: 157,
  stripe: {
    description: null,
    subscriptions: {
      object: "list",
      has_more: false,
      url: "/v1/customers/cus_Cvd8uLBDfj0Rjk/subscriptions",
      data: [],
      total_count: 0
    },
    object: "customer",
    default_source: "card_1CVlrrFlqv5cN9RBkTngsZ6d",
    discount: null,
    sources: {
      object: "list",
      has_more: false,
      url: "/v1/customers/cus_Cvd8uLBDfj0Rjk/sources",
      data: [
        {
          exp_year: 2021,
          country: "CA",
          object: "card",
          customer: "cus_Cvd8uLBDfj0Rjk",
          name: "Tommy Poirier-Morissette",
          brand: "MasterCard",
          exp_month: 4,
          tokenization_method: null,
          address_line2: null,
          metadata: {},
          dynamic_last4: null,
          last4: "8710",
          funding: "credit",
          address_line1: null,
          address_line1_check: null,
          address_state: null,
          address_zip_check: "pass",
          cvc_check: "pass",
          address_zip: "H4G 2X1",
          address_country: null,
          id: "card_1CVlrrFlqv5cN9RBkTngsZ6d",
          address_city: null,
          fingerprint: "7ljlKUCY69SNmx6q"
        }
      ],
      total_count: 1
    },
    email: "tpmorissette@tangea.co",
    account_balance: 0,
    shipping: null,
    id: "cus_Cvd8uLBDfj0Rjk",
    invoice_prefix: "DFFAB41",
    delinquent: false,
    currency: null,
    metadata: {},
    livemode: true,
    created: 1527277588
  },
  user: null
};
