import React from "react";
import styled, { css, cx, keyframes } from "react-emotion";
import moment from "moment";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage } from "react-intl";
// Atoms
import LoadingItem from "../LoadingItem";
import Button from "../Button";
import ExtraMenu from "../ExtraMenu";
import Numbers from "../Numbers";
import CalendarPrestation from "../CalendarPrestation";
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

class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      current_date,
      userOrders = [],
      adminOrders = [],
      managerOrders = [],
      mode,
      purchases = [],
      confirmedPurchases,
      prestations = ["breakfast", "lunch", "dinner", "snack", "5@7"],
      buttonsDisplayed = false,
      numbersDisplayed = false,
      showConfirmedTotal = true,
      showExtrasTotal = true,
      showInCartTotal = false,
      showHotPlateTotal = false,
      showSaladTotal = false,
      showSandwichTotal = false,
      getStickers,
      exportCSV,
      addPurchase,
      baseUrl,
      user,
      deletePurchase,
      showCreateOrder,
      isGettingStickers,
      isLoading = false,
      isLoadingPurchases,
      numbersLabel,
      intl
    } = this.props;

    let today = moment();
    let class_name = Future;
    let class_name_container = FutureContainer;
    let numbers = [];
    let csvData = [];
    let kitchenCsvFilename = "";
    let root = "/";
    let twoWeeksDelay = moment().add(2, "d");
    let createOrderVisible = showCreateOrder;

    if (moment(current_date).isBefore(twoWeeksDelay, "d")) {
      createOrderVisible = false;
    }

    if (baseUrl) {
      root = "/" + baseUrl.split("/")[1] + "/";
    }

    if (buttonsDisplayed) {
      csvData = exportCSV(managerOrders, confirmedPurchases);
      kitchenCsvFilename =
        current_date.format("DD-MM-YYYY") + "-AllDay-kitchen";
    }

    if (current_date) {
      if (current_date.isSame(today, "day")) {
        class_name = Present;
        class_name_container = PresentContainer;
      } else if (current_date.isBefore(today, "day")) {
        class_name = Past;
        class_name_container = PastContainer;
      }
    }

    let create_order_label = intl.formatMessage({
      id: "calendarDay.create_order_label"
    });

    let total_confirmed = purchases.filter(
      p => p.status === "paid" && p.not_eating === false && p.user
    ).length;
    let total_extras = purchases.filter(
      p => p.status === "paid" && p.not_eating === false && !p.user
    ).length;
    let total_not_eating = purchases.filter(p => p.not_eating === true).length;
    let total_in_cart = purchases.filter(p => p.status === "cart").length;
    let total_max_orders = 0;
    if (managerOrders.length > 0) {
      total_max_orders = managerOrders.reduce(
        (a, i) => a + i.total_attendees,
        0
      );
    }
    let total_hot_plate = purchases.filter(
      p =>
        ((p.plate && p.plate.category == "hot_plate") || p.extra_plate_name) &&
        p.status === "paid"
    ).length;
    let total_salad = purchases.filter(
      p => p.plate && p.plate.category == "salad" && p.status === "paid"
    ).length;
    let total_sandwich = purchases.filter(
      p => p.plate && p.plate.category == "sandwich" && p.status === "paid"
    ).length;
    if (showConfirmedTotal) {
      if (managerOrders.length > 0) {
        numbers.push({
          name: "confirmed",
          total: total_confirmed + total_extras,
          icon: "check",
          color: Colors.primary.lettuce.default,
          display: "always"
        });
      } else {
        numbers.push({
          name: "confirmed",
          total: total_confirmed,
          icon: "check",
          color: Colors.primary.lettuce.default,
          display: "always"
        });
      }
    }
    if (showExtrasTotal) {
      if (managerOrders.length > 0) {
      } else {
        numbers.push({
          name: "extras",
          icon: "plus",
          color: Colors.secondary.mushrooms.default,
          total: total_extras,
          display: "always"
        });
      }
    }
    if (showInCartTotal) {
      numbers.push({
        name: "in-cart",
        icon: "shopping-cart",
        color: Colors.secondary.mushrooms.default,
        total: total_in_cart,
        display: "always"
      });
    }
    if (showHotPlateTotal) {
      numbers.push({
        name: "hot_plate",
        icon: "soup",
        color: Colors.primary.squash.default,
        total: total_hot_plate,
        display: "always"
      });
    }
    if (showSaladTotal) {
      numbers.push({
        name: "cold",
        icon: "salad",
        color: Colors.secondary.eatYourGreens.default,
        total: total_salad,
        display: "always"
      });
    }
    if (showSandwichTotal) {
      numbers.push({
        name: "sandwich",
        icon: "sandwich",
        color: Colors.primary.eggYolk.default,
        total: total_sandwich,
        display: "always"
      });
    }

    let numbersHotPlate = [];
    let numbersSalad = [];
    let numbersSandwich = [];
    let numbersOtherPlate = [];
    let purchasesPaid = purchases.filter(
      p => p.status === "paid" && p.not_eating === false
    );

    if (managerOrders.length > 0) {
      let all_menus = managerOrders.map(order => order.assigned_menu_plates);
      let distinct_menu = [];
      for (let i in all_menus) {
        if (!distinct_menu.includes(all_menus[i])) {
          distinct_menu.push(all_menus[i]);
        }
      }
      let distinct_plates = {};
      for (let i in distinct_menu) {
        if (distinct_menu && distinct_menu[i] && distinct_menu[i].plates) {
          distinct_menu[i].plates.map(plate => {
            let category = "";
            if (plate.category == "normal") {
              if (plate.is_hot_meal) {
                category = "hot_plate";
              } else {
                category = "salad";
              }
            } else {
              category = plate.category;
            }
            distinct_plates[plate.id] = {
              name: plate.name,
              category: category,
              count: 0
            };
          });
        }
      }
      for (let i in purchasesPaid) {
        if (purchasesPaid[i].plate) {
          if (distinct_plates[purchasesPaid[i].plate.id]) {
            distinct_plates[purchasesPaid[i].plate.id].count++;
          } else {
            let category = "";
            if (purchasesPaid[i].plate.category == "normal") {
              if (purchasesPaid[i].plate.is_hot_meal) {
                category = "hot_plate";
              } else {
                category = "salad";
              }
            } else {
              category = purchasesPaid[i].plate.category;
            }
            distinct_plates[purchasesPaid[i].plate.id] = {
              name: purchasesPaid[i].plate.name,
              category: category,
              is_hot_meal: purchasesPaid[i].plate.is_hot_meal,
              count: 1
            };
          }
        } else {
          if (distinct_plates[-1]) {
            distinct_plates[-1].count++;
          } else {
            distinct_plates[-1] = { name: "Other", count: 1 };
          }
        }
      }
      for (let i in distinct_plates) {
        let color = Colors.utility.black.default;
        if (distinct_plates[i].category == "hot_plate") {
          color = Colors.primary.squash.default;
          numbersHotPlate.push({
            name: distinct_plates[i].name,
            label: distinct_plates[i].name,
            color: color,
            total: distinct_plates[i].count,
            display: "always"
          });
        } else if (distinct_plates[i].category == "salad") {
          color = Colors.secondary.eatYourGreens.default;
          numbersSalad.push({
            name: distinct_plates[i].name,
            label: distinct_plates[i].name,
            color: color,
            total: distinct_plates[i].count,
            display: "always"
          });
        } else if (distinct_plates[i].category == "sandwich") {
          color = Colors.primary.eggYolk.default;
          numbersSandwich.push({
            name: distinct_plates[i].name,
            label: distinct_plates[i].name,
            color: color,
            total: distinct_plates[i].count,
            display: "always"
          });
        } else {
          numbersOtherPlate.push({
            name: distinct_plates[i].name,
            label: distinct_plates[i].name,
            color: color,
            total: distinct_plates[i].count,
            display: "always"
          });
        }
      }
    }

    if (isLoading) {
      return (
        <DayWrapper className="day" mode={mode}>
          <Date>
            <LoadingItem loading type="text" />
          </Date>
          <Numbers confirmed={0} total={0} />
          <Items>
            <LoadingItem loading type="food_option" />
          </Items>
        </DayWrapper>
      );
    } else {
      return (
        <DayWrapper className={cx(class_name_container, "day")} mode={mode}>
          <Date className={cx(class_name, { [Loading]: isLoading })}>
            {current_date && (
              <DateLabel>
                {mode == "week" ? (
                  <Link
                    to={root + "day/" + current_date.format("YYYY-MM-DD") + "/"}
                  >
                    <NumberDay>{current_date.format("D")}</NumberDay>
                    <Weekday>{current_date.format("dddd")}</Weekday>
                  </Link>
                ) : (
                  <React.Fragment>
                    <NumberDay>{current_date.format("D")}</NumberDay>
                    <Weekday>{current_date.format("dddd")}</Weekday>
                  </React.Fragment>
                )}
              </DateLabel>
            )}
            {buttonsDisplayed && (
              <ExtraMenu
                buttons={
                  <div>
                    {getStickers && current_date && (
                      <Button
                        onClick={() =>
                          getStickers(
                            current_date.format("YYYY-MM-DD"),
                            "salad"
                          )
                        }
                        color="eat-your-greens"
                        label="Labels"
                        icon={isGettingStickers ? "hourglass-half" : "salad"}
                        disabled={isGettingStickers}
                      />
                    )}
                    {getStickers && current_date && (
                      <Button
                        onClick={() =>
                          getStickers(
                            current_date.format("YYYY-MM-DD"),
                            "hot_plate"
                          )
                        }
                        color="squash"
                        label="Labels"
                        icon={isGettingStickers ? "hourglass-half" : "soup"}
                        disabled={isGettingStickers}
                      />
                    )}
                    {getStickers && current_date && (
                      <Button
                        onClick={() =>
                          getStickers(
                            current_date.format("YYYY-MM-DD"),
                            "sandwich"
                          )
                        }
                        color="egg-yolk"
                        label="Labels"
                        icon={isGettingStickers ? "hourglass-half" : "sandwich"}
                        disabled={isGettingStickers}
                      />
                    )}
                    <CsvButton
                      data={csvData}
                      filename={kitchenCsvFilename + ".csv"}
                      separator={","}
                      icon="download"
                      className="csv-button"
                    >
                      <FontAwesomeIcon icon="download" />
                      Kitchen CSV
                    </CsvButton>
                  </div>
                }
              />
            )}
          </Date>
          {numbersDisplayed &&
            (mode == "day" && managerOrders.length > 0 ? (
              <NumbersWrap>
                <Numbers numbers={numbers} label={numbersLabel} />
                <Numbers numbers={numbersHotPlate} label={numbersLabel} />
                <Numbers numbers={numbersSalad} label={numbersLabel} />
                <Numbers numbers={numbersSandwich} label={numbersLabel} />
                <Numbers numbers={numbersOtherPlate} label={numbersLabel} />
              </NumbersWrap>
            ) : (
              <NumbersWrap>
                <Numbers numbers={numbers} label={numbersLabel} />
              </NumbersWrap>
            ))}
          <Items>
            {prestations.map((prestation, k) => (
              <ErrorBoundary key={k}>
                <CalendarPrestation
                  key={k}
                  userOrders={userOrders}
                  adminOrders={adminOrders}
                  managerOrders={managerOrders}
                  prestation={prestation}
                  showConfirmedTotal={showConfirmedTotal}
                  showExtrasTotal={showExtrasTotal}
                  showInCartTotal={showInCartTotal}
                  showSaladTotal={showSaladTotal}
                  showHotPlateTotal={showHotPlateTotal}
                  showSandwichTotal={showSandwichTotal}
                  current_date={current_date}
                  purchases={purchases}
                  today={today}
                  addPurchase={addPurchase}
                  deletePurchase={deletePurchase}
                  baseUrl={baseUrl}
                  user={user}
                  isLoadingPurchases={isLoadingPurchases}
                  mode={mode}
                />
              </ErrorBoundary>
            ))}
            {(adminOrders.length > 0 || managerOrders.length > 0) &&
              createOrderVisible && (
                <CreateButton
                  className="create-button"
                  onClick={() => showCreateOrder("lunch", current_date)}
                >
                  {create_order_label}
                </CreateButton>
              )}
          </Items>
        </DayWrapper>
      );
    }
  }
}

// Styles

const DayWrapper = styled("div")`
  flex: 1;
  border-right: 2px solid ${Colors.secondary.mushrooms.default}75;
  min-height: calc(100vh - 180px);
  flex-grow: 1;
  flex-shrink: 1;
  max-width: ${props => (props.mode == "day" ? "100%" : "20%")};
  box-sizing: border-box;

  .food-option-card,
  .purchase-card {
    margin-bottom: ${Spacing.md};
  }

  &:hover .create-button {
    opacity: 1;
    pointer-events: auto;
  }
`;

const appear = keyframes`
  0% {opacity: 0; left:${Spacing.md};}
  100% {opacity: 1; left:0;}
`;

const Date = styled("div")`
  padding: ${Spacing.md} ${Spacing.md} 0 ${Spacing.md};
  opacity: 0;
  animation: ${appear} 0.3s ease normal forwards;
  position: relative;
  z-index: 100;

  .extra-menu-wrap {
    float: right;
    margin-top: -${Spacing.lg};
    margin-right: -${Spacing.sm};
    margin-left: ${Spacing.sm};
  }

  @media (max-width: 480px) {
    padding-bottom: 0;
  }
`;

const DateLabel = styled("div")`
  a {
    color: inherit;
    transition: ${Animation.defaultSpeed};
  }

  a:hover {
    color: ${Colors.primary.eggYolk.default};
  }
`;

const NumbersWrap = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
`;

const NumberDay = styled("h2")`
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  font-family: ${Typography.body.fontFamily};
  display: inline-block;
  line-height: 27px;

  @media (max-width: 480px) {
    line-height: 27px;
    font-size: 21px;
  }
`;

const NumberLinkDay = styled(Link)`
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  font-family: ${Typography.body.fontFamily};
  display: inline-block;
  line-height: 27px;
  color: inherit;
  text-decoration: none;
  transition: ${Animation.fastSpeed};

  &:hover {
    color: ${Colors.primary.eggYolk.default};
  }

  @media (max-width: 480px) {
    line-height: 27px;
    font-size: 21px;
  }
`;

const Weekday = styled("span")`
  display: inline-block;
  padding-left: ${Spacing.sm};
  vertical-align: top;
  line-height: 28px;
  text-transform: capitalize;
  font-family: ${Typography.body.fontFamily};
`;

const WeekdayLink = styled(Link)`
  display: inline-block;
  padding-left: ${Spacing.sm};
  vertical-align: top;
  line-height: 28px;
  text-transform: capitalize;
  font-family: ${Typography.body.fontFamily};
  color: inherit;
  transition: ${Animation.fastSpeed};
  text-decoration: none;

  &:hover {
    color: ${Colors.primary.eggYolk.default};
    text-decoration: none;
  }
`;

const DayButtons = styled("div")`
  float: right;
  margin-right: -2px;
  margin-top: -2px;
`;

const ItemsWrap = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Items = styled("div")`
  display: flex;
  flex-direction: ${props => (props.mode === "day" ? "row" : "column")};
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${Spacing.md};
  box-sizing: border-box;
`;

const CsvButton = styled(CSVLink)`
  padding: ${Spacing.sm} ${Spacing.md};
  display: inline-block;
  border-radius: ${BorderRadius.sm};
  text-decoration: none;
  transition: ${Animation.defaultSpeed};
  margin-right: ${Spacing.md};
  background: ${Colors.secondary.eggshell.default};
  color: ${Colors.secondary.eggplant.default};
  font-family: Montserrat;
  font-size: 14px;

  &:hover {
    background: ${Colors.secondary.mushrooms.default};
    color: ${Colors.secondary.eggplant.default};
  }

  svg {
    margin-right: ${Spacing.sm};
  }
`;

const CreateButton = styled("div")`
  padding: ${Spacing.md};
  margin-top: ${Spacing.sm};
  border-radius: ${BorderRadius.sm};
  opacity: 0;
  pointer-events: none;
  background: ${Colors.primary.eggYolk.default}50;
  transition: ${Animation.defaultSpeed};
  cursor: pointer;
  text-align: center;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};
  order: 100;

  &:hover {
    background-color: ${Colors.primary.eggYolk.default};
  }
`;

const Past = css`
  color: ${Colors.utility.grey.default};
  opacity: 1;
`;
const Present = css`
  color: ${Colors.secondary.eggplant.default};
  opacity: 1;
`;
const Future = css`
  opacity: 1;
`;
const Loading = css`
  display: none;
`;
const PresentContainer = css`
  background: ${Colors.secondary.eggshell.default};
`;
const FutureContainer = css``;
const PastContainer = css``;

export default injectIntl(Day);
