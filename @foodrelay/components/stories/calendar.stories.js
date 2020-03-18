import React from "react";
import { storiesOf } from "@storybook/react";
import { generateTitleWithProgress } from "../src/utils/storybook.js";
import moment from "moment";
import tz from "moment-timezone";
import {
  formatOrderDataCSV,
  formatClientOrderDataCSV
} from "../src/utils/csv.js";
import { getWeekDates } from "../src/utils/time";
// Addons
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// Components
import Calendar, { calendar_checklist } from "../src/components/Calendar";
import CalendarNav, {
  calendar_nav_checklist
} from "../src/components/CalendarNav";
import CalendarOrderCard, {
  calendar_order_card_checklist
} from "../src/components/CalendarOrderCard";
import CalendarDay, {
  calendar_day_checklist
} from "../src/components/CalendarDay";
import CalendarOrderDetail, {
  calendar_order_detail_checklist
} from "../src/components/CalendarOrderDetail";
import FoodOptionCard, {
  food_option_card_checklist
} from "../src/components/FoodOptionCard";
import Button from "../src/components/Button";
// mock data
import {
  menu,
  plate,
  order,
  user,
  business,
  purchases,
  orderList,
  additional_items,
  attendees,
  generateDate
} from "./mockData";

////////////////////
// CALENDAR STORIES
///////////////////
moment.tz.setDefault("America/Montreal");
storiesOf("Calendar", module)
  .add(
    generateTitleWithProgress(calendar_checklist, "Calendar Employee"),
    () => (
      <Calendar
        todayLink="/"
        nextLink="/"
        previousLink="/"
        userOrders={orderList}
        date={moment(generateDate("now")).locale("fr")}
        purchases={purchases}
        confirmedPurchases={purchases}
        purchases={purchases}
        confirmedPurchases={purchases}
        user={user}
        weekDates={getWeekDates({
          start_day: moment(generateDate("now")),
          week_size: 5
        })}
        weeklyNavLock={number("weekly nav lock", 3)}
        showToggle={boolean("showToggle", true)}
        dayButtonsDisplayed={false}
      />
    )
  )
  .add(
    generateTitleWithProgress(calendar_checklist, "Calendar Office Manager"),
    () => (
      <Calendar
        todayLink="/"
        nextLink="/"
        previousLink="/"
        userOrders={orderList}
        adminOrders={orderList}
        date={moment(generateDate("now")).locale("fr")}
        purchases={purchases}
        confirmedPurchases={purchases}
        purchases={purchases}
        confirmedPurchases={purchases}
        user={user}
        weekDates={getWeekDates({
          start_day: moment(generateDate("now")),
          week_size: 5
        })}
        leftNavButtons={
          <div>
            <Button label="Create" icon="plus" highlighted />
            <Button label="Invite" color="lettuce" icon="user" highlighted />
          </div>
        }
        navButtons={
          <Button label="Got questions?" color="egg-shell" icon="plus" />
        }
        weeklyNavLock={number("weekly nav lock", 3)}
        numbersDisplayed={boolean("numbersDisplayed", false)}
        showToggle={boolean("showToggle", true)}
        dayButtonsDisplayed={false}
        showConfirmedTotal={boolean("showConfirmedTotal", true)}
        showExtrasTotal={boolean("showExtrasTotal", false)}
        showInCartTotal={boolean("showInCartTotal", false)}
        showColdTotal={false}
        showHotTotal={false}
        showCreateOrder={console.log}
      />
    )
  )
  .add(
    generateTitleWithProgress(calendar_checklist, "Calendar Manager"),
    () => (
      <Calendar
        todayLink="/"
        nextLink="/"
        previousLink="/"
        managerOrders={orderList}
        date={moment(generateDate("now")).locale("fr")}
        purchases={purchases}
        confirmedPurchases={purchases}
        exportCSV={formatOrderDataCSV}
        user={user}
        getStickers={console.log}
        getColdStickers={console.log}
        getHotStickers={console.log}
        weekDates={getWeekDates({
          start_day: moment(generateDate("now")),
          week_size: 5
        })}
        navFilters={<Button label="some button" />}
        navButtons={<Button label="Create order" />}
        dayButtons={
          <div>
            <Button label="some button" />
            <Button label="some buttons" />
          </div>
        }
        numbersDisplayed={boolean("numbersDisplayed", true)}
        dayButtonsDisplayed={boolean("dayButtonsDisplayed", true)}
        showToggle={boolean("showToggle", false)}
        weeklyNavLock={number("weekly nav lock", 3)}
        showConfirmedTotal={boolean("showConfirmedTotal", true)}
        showExtrasTotal={boolean("showExtrasTotal", true)}
        showInCartTotal={boolean("showInCartTotal", true)}
        showSaladTotal={boolean("showSaladTotal", true)}
        showHotPlateTotal={boolean("showHotPlateTotal", true)}
        showSandwichTotal={boolean("showSandwichTotal", true)}
      />
    )
  )
  .add(
    generateTitleWithProgress(calendar_day_checklist, "Calendar Day"),
    () => (
      <CalendarDay
        adminOrders={orderList}
        current_date={moment("2019-01-17")}
        buttons={
          <div>
            <Button label="some button" />
            <Button label="some buttons" />
          </div>
        }
        numbersDisplayed
        getStickers={console.log}
        getColdStickers={console.log}
        getHotStickers={console.log}
        purchases={purchases}
        confirmedPurchases={purchases}
        exportCSV={formatOrderDataCSV}
        buttonsDisplayed={boolean("dayButtonsDisplayed", true)}
        user={user}
        deletePurchase={console.log}
        cardType="admin"
        showInCartTotal
        showHotTotal
        showColdTotal
        showSandwichTotal
        mode="day"
      />
    )
  )
  .add(
    generateTitleWithProgress(calendar_nav_checklist, "Calendar Nav"),
    () => (
      <CalendarNav
        todayLink="/"
        nextLink="/"
        previousLink="/"
        orders={{ start_of_week: moment("2019-01-22") }}
        showToggle={boolean("showToggle", false)}
        filters={<Button label="some button" />}
        buttons={<Button label="some button" />}
        weeklyNavLock={number("weekly nav lock", 3)}
        date={moment("2019-01-17")}
        weekDates={getWeekDates({
          start_day: moment("2019-01-31"),
          week_size: 5
        })}
        baseUrl="http://localhost:3000/get_food/week/2019-02-04/"
        forceMobile={boolean("forceMobile", false)}
        view="day"
      />
    )
  )
  .add(
    generateTitleWithProgress(
      calendar_order_card_checklist,
      "Calendar Order Card"
    ),
    () => (
      <CalendarOrderCard
        order={order}
        isPast={boolean("isPast", false)}
        showConfirmedTotal={boolean("showConfirmedTotal", true)}
        showExtrasTotal={boolean("showExtrasTotal", true)}
        showInCartTotal={boolean("showInCartTotal", true)}
        showSaladTotal={boolean("showSaladTotal", true)}
        showHotPlateTotal={boolean("showHotPlateTotal", true)}
        showSandwichTotal={boolean("showSandwichTotal", true)}
        showRebate={boolean("ShowRebate", true)}
        purchases={purchases}
        deletePurchase={console.log}
        cardType={text("card type", "manager")}
      />
    )
  )
  .add(
    generateTitleWithProgress(food_option_card_checklist, "Food Option Card"),
    () => (
      <FoodOptionCard
        order={order}
        addPurchase={console.log}
        user={user}
        purchases={purchases}
        deletePurchase={console.log}
      />
    )
  )
  .add(
    generateTitleWithProgress(
      calendar_order_detail_checklist,
      "Calendar Order Detail"
    ),
    () => (
      <CalendarOrderDetail
        order={order}
        addPurchase={console.log}
        deletePurchase={console.log}
        purchases={purchases}
        user={user}
        closeLink="/"
        open
      />
    )
  );
