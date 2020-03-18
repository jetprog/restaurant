import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
// Addons
import { text, boolean, number, select, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import AdditionalItems, {
  additional_items_checklist
} from "../src/components/AdditionalItems";
import OrderSummary, {
  order_summary_checklist
} from "../src/components/OrderSummary";
import PaymentMethod, {
  payment_method_checklist
} from "../src/components/PaymentMethod";
// mock data
import {
  order,
  purchases,
  additional_items,
  user,
  stripe_customer
} from "./mockData";

////////////////////
// ORDER STORIES
///////////////////

storiesOf("Order", module)
  .add(
    generateTitleWithProgress(additional_items_checklist, "Additional items"),
    () => (
      <AdditionalItems
        items={additional_items}
        order={object("order", order)}
        purchases={purchases}
      />
    )
  )
  .add(
    generateTitleWithProgress(order_summary_checklist, "Order Summary"),
    () => (
      <OrderSummary
        persona={text("persona", "admin")}
        purchases={purchases}
        gst={number("gst", 0.05)}
        qst={number("qst", 0.0975)}
        service_fee={number("service fee", 0.05)}
        delivery_fee={3000}
        base_plate_price={number("base plate price", 1200)}
        free_plate_price={number("free plate price", 1100)}
        stripe_customer={object("stripe customer", stripe_customer)}
        order={object("order", order)}
      />
    )
  )
  .add(
    generateTitleWithProgress(payment_method_checklist, "Payment method"),
    () => (
      <PaymentMethod
        stripe_customer={object("stripe customer", stripe_customer)}
      />
    )
  );
