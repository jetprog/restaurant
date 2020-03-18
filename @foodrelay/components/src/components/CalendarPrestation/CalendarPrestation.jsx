import React from "react";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { isMobile } from "react-device-detect";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
// Atoms
import CalendarOrderCard from "../CalendarOrderCard";
import FoodOptionCard from "../FoodOptionCard";
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

class CalendarPrestation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    const {
      userOrders,
      adminOrders,
      managerOrders,
      prestation,
      showConfirmedTotal,
      showExtrasTotal,
      showInCartTotal,
      showSaladTotal,
      showHotPlateTotal,
      showSandwichTotal,
      current_date,
      purchases,
      today,
      addPurchase,
      deletePurchase,
      baseUrl,
      user,
      isLoadingPurchases,
      mode = { mode }
    } = this.props;
    return (
      <Prestation mode={mode} isMobile={isMobile}>
        {managerOrders.length > 0 ? (
          <React.Fragment>
            {console.log("manager")}
            {/* ---- MANAGER ---- */}
            {managerOrders.map(
              (order, k) =>
                order.prestation.value.toLowerCase() === prestation && (
                  <CalendarOrderCard
                    order={order}
                    key={k}
                    smallSize={mode === "week"}
                    purchases={purchases.filter(p => p.order === order.id)}
                    isPast={
                      current_date &&
                      moment(current_date).isBefore(today, "day")
                    }
                    showConfirmedTotal={showConfirmedTotal}
                    showExtrasTotal={showExtrasTotal}
                    showInCartTotal={showInCartTotal}
                    showSaladTotal={showSaladTotal}
                    showHotPlateTotal={showHotPlateTotal}
                    showSandwichTotal={showSandwichTotal}
                    marginRight={mode == "day" ? Spacing.md : "0px"}
                    showRebate
                    cardType={"manager"}
                  />
                )
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* ---- USER ---- */}
            {userOrders
              .filter(o => o.prestation.value.toLowerCase() === prestation)
              .map(
                (order, k) =>
                  order.prestation.value.toLowerCase() === prestation && (
                    <ErrorBoundary>
                      <FoodOptionCard
                        order={order}
                        key={k}
                        addPurchase={addPurchase}
                        baseUrl={baseUrl}
                        user={user}
                        deletePurchase={deletePurchase}
                        purchases={purchases.filter(
                          p => p.order.id === order.id
                        )}
                        isLoading={isLoadingPurchases}
                        marginRight={mode == "day" ? Spacing.md : "0px"}
                      />
                    </ErrorBoundary>
                  )
              )}
            {/* ---- ADMIN ---- */}
            {adminOrders.map(
              (order, k) =>
                order.prestation.value.toLowerCase() === prestation && (
                  <ErrorBoundary key={k}>
                    <CalendarOrderCard
                      order={order}
                      key={k}
                      smallSize={mode === "week"}
                      purchases={purchases.filter(p => p.order === order.id)}
                      isPast={
                        current_date &&
                        moment(current_date).isBefore(today, "day")
                      }
                      showConfirmedTotal={showConfirmedTotal}
                      showExtrasTotal={showExtrasTotal}
                      showInCartTotal={showInCartTotal}
                      showSaladTotal={showSaladTotal}
                      showHotPlateTotal={showHotPlateTotal}
                      showSandwichTotal={showSandwichTotal}
                      cardType={"admin"}
                      marginRight={mode == "day" ? Spacing.md : "0px"}
                    />
                  </ErrorBoundary>
                )
            )}
          </React.Fragment>
        )}
      </Prestation>
    );
  }
}

// styles

const Prestation = styled("div")`
  display: flex;
  flex-direction: ${props => (props.mode === "day" ? "row" : "column")};
  flex-wrap: wrap;

  .food-option-card {
    min-width: ${props =>
      props.mode == "day" && !isMobile ? "calc(25% - 16px)" : "100%"};
  }

  .order-card {
    min-width: ${props =>
      props.mode == "day" && !isMobile ? "calc(25% - 16px)" : "100%"};
  }
`;

export default CalendarPrestation;
