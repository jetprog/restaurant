import React from "react";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { getWeekDates } from "../../utils/time";
import { isMobile } from "react-device-detect";
import { injectIntl, formatMessage } from "react-intl";
// Atoms
import CalendarNav from "../CalendarNav";
import CalendarDay from "../CalendarDay";
import ErrorBoundary from "../ErrorBoundary";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      view = "week",
      showToggle = false,
      userOrders,
      adminOrders,
      managerOrders,
      previousLink,
      nextLink,
      navFilters,
      navButtons,
      leftNavButtons,
      dayButtonsDisplayed,
      weeklyNavLock,
      date,
      purchases,
      confirmedPurchases,
      breakfastDisplayed,
      lunchDisplayed,
      dinnerDisplayed,
      numbersDisplayed,
      getStickers,
      showConfirmedTotal = true,
      showExtrasTotal = true,
      showInCartTotal = false,
      showHotPlateTotal = false,
      showSaladTotal = false,
      showSandwichTotal = false,
      intl,
      weekDates,
      exportCSV,
      addPurchase,
      baseUrl = "/",
      user,
      deletePurchase,
      isLoading,
      isGettingStickers = false,
      isLoadingPurchases,
      numbersLabel,
      showCreateOrder
    } = this.props;

    // default to day view on mobile
    let activeView = view;
    if (isMobile) {
      activeView = "day";
    }

    let navOrders = userOrders;
    if (!userOrders) {
      if (!adminOrders) {
        navOrders = managerOrders;
      } else {
        navOrders = adminOrders;
      }
    }

    return (
      <Wrap>
        <ErrorBoundary>
          <CalendarNav
            view={activeView}
            showToggle={showToggle}
            orders={navOrders}
            previousLink={previousLink}
            nextLink={nextLink}
            filters={navFilters}
            buttons={navButtons}
            leftButtons={leftNavButtons}
            weeklyNavLock={weeklyNavLock}
            isLoading={isLoading}
            date={date}
            weekDates={weekDates}
            baseUrl={baseUrl}
          />
        </ErrorBoundary>
        {activeView == "week" && (
          <WeekWrap>
            <Week>
              {weekDates.map((current_date, key) => (
                <ErrorBoundary key={key}>
                  <CalendarDay
                    purchases={
                      purchases &&
                      purchases.filter(
                        p =>
                          moment(p.delivery_date).format("YYYY-MM-DD") ===
                          current_date.format("YYYY-MM-DD")
                      )
                    }
                    confirmedPurchases={confirmedPurchases}
                    current_date={current_date}
                    userOrders={
                      userOrders &&
                      userOrders.filter(
                        o =>
                          moment(o.delivery_date).format("YYYY-MM-DD") ===
                          current_date.format("YYYY-MM-DD")
                      )
                    }
                    adminOrders={
                      adminOrders &&
                      adminOrders.filter(
                        o =>
                          moment(o.delivery_date).format("YYYY-MM-DD") ===
                          current_date.format("YYYY-MM-DD")
                      )
                    }
                    managerOrders={
                      managerOrders &&
                      managerOrders.filter(
                        o =>
                          moment(o.delivery_date).format("YYYY-MM-DD") ===
                          current_date.format("YYYY-MM-DD")
                      )
                    }
                    mode="week"
                    breakfastDisplayed={breakfastDisplayed}
                    lunchDisplayed={lunchDisplayed}
                    dinnerDisplayed={dinnerDisplayed}
                    numbersDisplayed={numbersDisplayed}
                    buttonsDisplayed={dayButtonsDisplayed}
                    getStickers={getStickers}
                    showConfirmedTotal={showConfirmedTotal}
                    showExtrasTotal={showExtrasTotal}
                    showInCartTotal={showInCartTotal}
                    showHotPlateTotal={showHotPlateTotal}
                    showSaladTotal={showSaladTotal}
                    showSandwichTotal={showSandwichTotal}
                    exportCSV={exportCSV}
                    addPurchase={addPurchase}
                    baseUrl={baseUrl}
                    user={user}
                    deletePurchase={deletePurchase}
                    isGettingStickers={isGettingStickers}
                    isLoading={isLoading}
                    isLoadingPurchases={isLoadingPurchases}
                    numbersLabel={numbersLabel}
                    showCreateOrder={showCreateOrder}
                  />
                </ErrorBoundary>
              ))}
            </Week>
          </WeekWrap>
        )}
        {activeView == "day" && (
          <ErrorBoundary>
            <CalendarDay
              purchases={
                purchases &&
                purchases.filter(
                  p =>
                    moment(p.delivery_date).format("YYYY-MM-DD") ===
                    date.format("YYYY-MM-DD")
                )
              }
              confirmedPurchases={confirmedPurchases}
              current_date={date}
              userOrders={
                userOrders &&
                userOrders.filter(
                  o =>
                    moment(o.delivery_date).format("YYYY-MM-DD") ===
                    date.format("YYYY-MM-DD")
                )
              }
              adminOrders={
                adminOrders &&
                adminOrders.filter(
                  o =>
                    moment(o.delivery_date).format("YYYY-MM-DD") ===
                    date.format("YYYY-MM-DD")
                )
              }
              managerOrders={
                managerOrders &&
                managerOrders.filter(
                  o =>
                    moment(o.delivery_date).format("YYYY-MM-DD") ===
                    date.format("YYYY-MM-DD")
                )
              }
              mode="day"
              breakfastDisplayed={breakfastDisplayed}
              lunchDisplayed={lunchDisplayed}
              dinnerDisplayed={dinnerDisplayed}
              numbersDisplayed={numbersDisplayed}
              showConfirmedTotal={showConfirmedTotal}
              showExtrasTotal={showExtrasTotal}
              showInCartTotal={showInCartTotal}
              showHotPlateTotal={showHotPlateTotal}
              showSaladTotal={showSaladTotal}
              showSandwichTotal={showSandwichTotal}
              addPurchase={addPurchase}
              baseUrl={baseUrl}
              user={user}
              deletePurchase={deletePurchase}
              isLoading={isLoading}
              isLoadingPurchases={isLoadingPurchases}
              buttonsDisplayed={dayButtonsDisplayed}
              exportCSV={exportCSV}
              getStickers={getStickers}
            />
          </ErrorBoundary>
        )}
      </Wrap>
    );
  }
}

const Wrap = styled("div")`
  position: relative;
  height: calc(100% - 62px);
`;

const WeekWrap = styled("div")`
  position: relative;
  height: calc(100% - 62px);
`;

const Week = styled("div")`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export default injectIntl(Calendar);
