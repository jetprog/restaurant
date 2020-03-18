import moment from "moment";
import { getTranslation } from "../i18n/utils.js";

export const composeOrderName = (
  order,
  locale,
  date = false,
  recurring_date,
  persona
) => {
  let order_name = "Order";

  if (order) {
    if (order.name) {
      order_name = order.name;
    } else {
      if (order.prestation) {
        // if date included
        if (date) {
          if (order.is_recurring && recurring_date) {
            if (locale == "fr") {
              order_name =
                getTranslation(order.prestation, locale).name +
                " caféteria le " +
                moment(recurring_date).format("LL");
            } else {
              order_name =
                "Cafeteria " +
                getTranslation(order.prestation, locale).name +
                " on " +
                moment(recurring_date).format("LL");
            }
          } else {
            if (locale == "fr") {
              order_name =
                getTranslation(order.prestation, locale).name +
                " on the " +
                moment(order.delivery_date).format("LL");
            } else {
              order_name =
                getTranslation(order.prestation, locale).name +
                " le " +
                moment(order.delivery_date).format("LL");
            }
          }
          // if no date included
        } else {
          if (order.is_recurring) {
            if (locale == "fr") {
              order_name =
                getTranslation(order.prestation, locale).name + " caféteria";
            } else {
              order_name =
                "Cafeteria " + getTranslation(order.prestation, locale).name;
            }
          } else {
            if (locale == "fr") {
              order_name = getTranslation(order.prestation, locale).name;
            } else {
              order_name = getTranslation(order.prestation, locale).name;
            }
          }
        }
      }
    }
    if (persona == "manager" && order.business) {
      if (locale == "fr") {
        order_name += " pour " + order.business.name;
      } else {
        order_name += " for " + order.business.name;
      }
    }
  }
  return order_name;
};
