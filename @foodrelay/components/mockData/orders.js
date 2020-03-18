const order_1 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu: menu,
  user_menu: userMenu,
  delivery_date: generateDate("now") + "T04:00:19.348000Z",
  id: 1086,
  is_fully_paid: false,
  amount_paid_by_business: 2,
  is_recurring: true,
  name: "LONG LONG LONG Long llll lllllllllll ",
  recurrence_end: null,
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
  },
  recurrence_rule:
    "RRULE:FREQ=WEEKLY;BYDAY=TU↵RDATE:20181031T160019Z↵EXDATE:20181016T160019Z↵EXDATE:20181030T160019Z",
  type: type,
  state: order_states.find(state => state.value == "Confirmed")
};
const order_2 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu: menu,
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
  type: type
};
const order_3 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu: menu,
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
  type: type
};
const order_4 = {
  amount_paid_by_business: 0,
  utensils: true,
  desserts: true,
  drinks: true,
  attendees: attendees,
  business: { id: 146, name: "TrackTik", description: null },
  assigned_menu: menu2,
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
  type: type
};

export const orders = [order_1, order_2, order_3, order_4];
