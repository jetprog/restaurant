"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var frenchMessages = {
  "calendarNav.today": "Aujourd'hui",
  "calendarOrderCard.for": "pour",
  "rebateIndicator.free": "Gratuit",
  "rebateIndicator.off": "RABAIS",
  "rebateIndicator.full_price": "Plein prix",
  "orderType.breakfast": "Déjeuner",
  "orderType.lunch": "Lunch",
  "orderType.dinner": "Dîner",
  "orderType.5a7": "5à7",
  "orderType.meal": "Repas",
  "orderCard.choice_label": "Choix employés",
  "orderCard.no_menu_warning": "Aucun menu assigné",
  "orderCard.no_attendees_warning": "Aucun invité",
  "dietTag.vegan": "Végétalien",
  "dietTag.vegetarian": "Végétarien",
  "dietTag.gluten_free": "Sans Gluten",
  "allergyTag.has_dairy": "Produits Laitiers",
  "allergyTag.has_gluten": "Gluten",
  "allergyTag.has_soybeans": "Soya",
  "allergyTag.has_shellfish": "Fruits de Mer",
  "allergyTag.has_corn": "Maïs",
  "allergyTag.has_nuts": "Noix",
  "allergyTag.has_eggs": "Oeufs",
  "allergyTag.has_peanuts": "Arachides",
  "allergyTag.has_pork": "Porc",
  "allergyTag.has_fish": "Poisson",
  "allergyTag.has_alcohol": "Alcool",
  "philsophy.title": "Ce repas FoodRelay est",
  "philosophy.hand_made": "préparé le matin même à Montréal avec des ingrédients frais provenant de fournisseurs et producteurs locaux",
  "philosophy.personalized": "personnalisé selon vos goûts et préférences.",
  "title.allergens": "Allergènes",
  "title.diet": "Régimes",
  "title.ingredients": "Ingrédients",
  "title.weight": "Poids",
  "title.options_list": "Vos {optionsNumber} options",
  "title.view_all_options": "Voir toutes les options",
  "button.add_purchase": "Ajouter",
  "button.change_purchase": "Modifier",
  "button.cancel_purchase": "Annuler",
  "button.select_purchase": "Choisir",
  "status.confirmed_choice": "Confirmé",
  "status.in_cart": "Dans le Panier",
  "calendar.no_choice": "Aucun choix n'as été fait",
  "calendar.no_menu_employee": "Pas de menu assigné, vous pourrez bientôt commander votre repas personnalisé",
  "calendar.no_menu_admin": "Merci pour votre confiance, nous allons bientôt assigné un menu à votre commande.",
  "calendar.new": "Nouveau!",
  "calendar.new_recipe": "Nouvelle recette!",
  "calendarNav.day": "Jour",
  "calendarNav.week": "Semaine",
  "plateCard.hot": "Livré chaud",
  "plateCard.cold": "Livré froid",
  "additional_items.each_label": "ch.",
  "additional_items.not_active_label": "Non inclus",
  "additional_items.beverages": "Une sélection de breuvages parmi ceux-ci: eau de source, eau pétillante San Pellegrino, soda San Pellegrino, Coca-Cola, Coca-Cola diète.",
  "additional_items.desserts": "Le dessert de la journée sélectioné par nos chefs parmi ceux-ci: biscuits, mini-tartes, mini-cupcakes, mini-beignets.",
  "additional_items.vegan_desserts": "Biscuits au sésame de La Biscuitery",
  "greeting.hello": "Bonjour",
  "calendarDay.create_order_label": "Commander",
  "topBar.login": "Connexion",
  "spicy.not_spicy": "Pas épicé",
  "spicy.slightly_spicy": "Légèrement épicé",
  "spicy.moderately_spicy": "Moyennement épicé",
  "spicy.very_spicy": "Très épicé",
  "order_summary.title": "Sommaire de commande",
  "order_summary.estimate_title": "Estimé",
  "order_summary.attendees_subtitle": "Invités",
  "order_summary.choices_subtitle": "Choix",
  "order_summary.choices_label": "choix",
  "order_summary.no_choices_label": "Aucun choix",
  "order_summary.attendees_label": "invités attendus",
  "order_summary.no_attendees_label": "Aucun invité attendu",
  "order_summary.price_label": "Prix",
  "order_summary.unit_price_label": "Indiv.",
  "order_summary.total_price_label": "Total",
  "order_summary.delivery_label": "Frais de livraison",
  "order_summary.delivery_hint": "J'aime les frais de livraison!",
  "order_summary.service_fee_label": "Frais de service",
  "order_summary.service_fee_hint": "Un frais de 5% est chargé sur toutes les transactions pour la commande en ligne, la personnalisation des repas et le support.",
  "order_summary.recurring_price_message": "Cette commande est un lunch récurrent faisant partie du service de cafétéria virtuelle FoodRelay pour votre entreprise. Pour toutes questions concernant les termes de paiement, merci de vous référez vous à l’entente signée à cet effet.",
  "order_summary.subtotal_label": "Sous-total",
  "order_summary.gst_label": "TPS",
  "order_summary.qst_label": "TVQ",
  "order_summary.total_label": "Total",
  "order_summary.est_total_label": "Total estimé",
  "order_summary.payment_subtitle": "Méthode de paiement",
  "order_summary.accepted_terms_label": "J'accepte et je comprends les",
  "order_summary.terms_label": "termes de service",
  "order_summary.confirm_label": "Confirmer",
  "order_summary.meal_label": "Choix de repas",
  "order_summary.dessert_label": "avec dessert",
  "order_summary.drinks_label": "avec breuvage",
  "order_summary.utensils_label": "avec ustensiles compostables",
  "payment_method.card_ending": "carte se terminant par",
  "payment_method.change_payment_label": "Changer la méthode de paiement",
  "payment_method.no_card": "Aucune méthode de paiement",
  "payment_method.add_card": "Ajouter une méthode de paiement",
  "plateTypeIndicator.hot_plate_label": "Plat du chef",
  "plateTypeIndicator.salad_label": "Salade repas",
  "plateTypeIndicator.sandwich_label": "Sandwich gourmet",
  "roles.business": "Entreprise",
  "roles.edit_role": "Changer le role",
  "roles.create_role": "Créer un nouveau role",
  "userCard.joined": "Rejoint le",
  "invite_link.copied_confirmation": "Copié dans le presse-papiers"
};
var _default = frenchMessages;
exports.default = _default;