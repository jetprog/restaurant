import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Numbers from "../Numbers";
import Button from "../Button";
import RebateIndicator from "../RebateIndicator";
import OrderStateIndicator from "../OrderStateIndicator";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { composeOrderName } from "../../utils/text";
import { lightenColor, isTextColorLight } from "../../utils/color.js";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const removeAttendeesPlateChoice = (attendees, plate_choices) => {
  let extra_choices = [];
  if (attendees && plate_choices.results) {
    let attendees_ids = attendees.map(a => String(a.id));
    extra_choices = plate_choices.results.filter(
      pc => pc.user.id === null || attendees_ids.indexOf(pc.user.id) === -1
    );
  }
  return extra_choices;
};

class CalendarOrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasWarningMenu: false, hasWarningAttendee: false, index: 1 };
  }

  componentWillMount() {
    let newIndex = 1;
    if (this.props.order) {
      if (
        !this.props.order.assigned_menu_plates ||
        this.props.order.assigned_menu_plates.length == 0
      ) {
        this.setState({ hasWarningMenu: true });
        newIndex += 1;
      }
      if (
        (!this.props.purchases || this.props.purchases.length == 0) &&
        (!this.props.order.total_attendees ||
          this.props.order.total_attendees == 0) &&
        this.props.cardType === "manager"
      ) {
        this.setState({ hasWarningAttendee: true });
        newIndex += 2;
      }
    } else {
      newIndex += 10;
    }

    this.setState({ index: newIndex });
  }

  render() {
    const {
      order,
      purchases,
      isPast,
      showConfirmedTotal = true,
      showExtrasTotal = true,
      showInCartTotal = false,
      showSaladTotal = false,
      showHotPlateTotal = false,
      showSandwichTotal = false,
      showRebate = false,
      cardType,
      marginRight = 0,
      intl
    } = this.props;

    const { hasWarningMenu, hasWarningAttendee, index } = this.state;

    let plate_choices = [];
    let numbers = [];
    let state = {};
    let has_notes = false;
    let total_max_orders = 0;
    let is_recurring_link = false;
    let order_name = "";

    if (order) {
      order_name = composeOrderName(order, intl.locale, false, null, cardType);

      if (order.state.value === "Draft" && isPast) {
        state.value = "Cancelled";
        state.id = 0;
        state.translation = [];
        state.translation[0] = {
          id: 0,
          name: "Annulée",
          language: {
            id: 1,
            locale: "fr"
          }
        };
        state.translation[1] = {
          id: 0,
          name: "Cancelled",
          language: {
            id: 2,
            locale: "en"
          }
        };
      } else {
        state = order.state;
      }

      if (order.plate_choices && order.plate_choices.results.length > 0) {
        plate_choices = order.plate_choices.results;
      }
      if (order.notes || (cardType == "manager" && order.admin_notes)) {
        has_notes = true;
      }

      total_max_orders = order.total_attendees;
      is_recurring_link = order.is_recurring
        ? moment(order.delivery_date).format("YYYY-MM-DD") + "/"
        : "";
    }

    let total_confirmed = purchases.filter(
      p => p.status === "paid" && p.not_eating === false && p.user
    ).length;
    let total_extras = purchases.filter(
      p => p.status === "paid" && p.not_eating === false && !p.user
    ).length;
    let total_in_cart = purchases.filter(p => p.status === "cart").length;
    let total_not_eating = purchases.filter(p => p.not_eating === true).length;
    let percentage_chosen = 0;
    let total_hot_plate = purchases.filter(
      p =>
        ((p.plate &&
          ((p.plate.category == "normal" && p.plate.is_hot_meal) ||
            p.plate.category == "hot_plate")) ||
          p.extra_plate_name) &&
        p.status === "paid"
    ).length;
    let total_salad = purchases.filter(
      p =>
        p.plate &&
        ((p.plate.category == "normal" && !p.plate.is_hot_meal) ||
          p.plate.category == "salad") &&
        p.status === "paid"
    ).length;
    let total_sandwich = purchases.filter(
      p => p.plate && p.plate.category == "sandwich" && p.status === "paid"
    ).length;
    let choices_label = intl.formatMessage({
      id: "orderCard.choice_label"
    });
    let no_menu_warning = intl.formatMessage({
      id: "orderCard.no_menu_warning"
    });
    let no_attendees_warning = intl.formatMessage({
      id: "orderCard.no_attendees_warning"
    });

    const forLabel = intl.formatMessage({
      id: "calendarOrderCard.for"
    });

    if (total_max_orders > 0) {
      percentage_chosen = Math.round(
        (total_confirmed / total_max_orders) * 100
      );
    }

    // compile numbers and show only the ones we should
    if (showConfirmedTotal) {
      if (cardType == "manager") {
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
          display: "always",
          label: "choix employés"
        });
      }
    }
    if (showExtrasTotal) {
      if (cardType == "manager") {
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
        name: "salad",
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

    if (order) {
      return (
        <OrderCardContainer
          index={index}
          className="order-card"
          marginRight={marginRight}
        >
          <Link to={"/order/" + order.id + "/" + is_recurring_link}>
            <OrderCard
              isPast={isPast}
              className={cx(
                { [Draft]: order.state && order.state.value === "Draft" },
                {
                  [Confirmed]: order.state && order.state.value === "Confirmed"
                }
              )}
            >
              <TypeIndicator
                primary_color={order.prestation.color}
                secondary_color={lightenColor(order.prestation.color)}
                isTextColorLight={isTextColorLight(order.prestation.color)}
              >
                <Level
                  primary_color={order.prestation.color}
                  secondary_color={lightenColor(order.prestation.color)}
                  isTextColorLight={isTextColorLight(order.prestation.color)}
                />
              </TypeIndicator>

              <Header>
                <LunchInfo>
                  <Title isPast={isPast}>{order_name}</Title>
                  <Details isPast={isPast}>
                    <Time>
                      {intl.locale == "en"
                        ? moment(order.delivery_date).format("h:mm A")
                        : moment(order.delivery_date).format("H:mm")}
                    </Time>
                  </Details>
                  <Status>
                    <OrderStateIndicator
                      current_state={state}
                      is_recurring={order.is_recurring}
                    />
                    {showRebate && <RebateIndicator order={order} small />}
                    {has_notes && (
                      <NotesIcon>
                        <FontAwesomeIcon icon="sticky-note" />
                        Notes
                      </NotesIcon>
                    )}
                  </Status>
                </LunchInfo>
              </Header>

              {hasWarningMenu &&
                (cardType === "manager" ? (
                  <WarningMenu>
                    <FontAwesomeIcon icon="exclamation-triangle" />
                    &nbsp; {no_menu_warning}
                  </WarningMenu>
                ) : (
                  <MessageContainer>
                    <FormattedMessage
                      id="calendar.no_menu_admin"
                      defaultMessage={`No menu have been assigned to this order yet.`}
                    />
                  </MessageContainer>
                ))}

              {hasWarningAttendee && (
                <WarningAttendee>
                  <FontAwesomeIcon icon="user-slash" />
                  &nbsp; {no_attendees_warning}
                </WarningAttendee>
              )}

              {!hasWarningMenu &&
                !hasWarningAttendee &&
                (total_confirmed > 0 ||
                  total_extras > 0 ||
                  total_in_cart > 0 ||
                  cardType != "manager") && (
                  <NumberContainer className="NumberContainer">
                    <Numbers numbers={numbers} light />
                  </NumberContainer>
                )}
            </OrderCard>
          </Link>
        </OrderCardContainer>
      );
    } else {
      return (
        <OrderCardContainer index={index}>
          <OrderCard isPast={false} />
        </OrderCardContainer>
      );
    }
  }
}

// Styles

const OrderCardContainer = styled("div")`
  position: relative;
  order: ${props => props.index};
  margin-bottom: ${Spacing.md};
  max-width: 400px;
  min-width: 200px;
  margin-right: ${props => props.marginRight};
  a {
    text-decoration: none;
  }
`;

const OrderCard = styled("div")`
  background-color: ${Colors.utility.white.default};
  box-shadow: ${Shadows.level1};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  position: relative;
  box-sizing: border-box;
  border-radius: ${BorderRadius.sm};
  overflow: hidden;
  transition: 0.5s;
  color: ${props =>
    props.isPast ? Colors.utility.grey.default : Colors.utility.black.default};

  a {
    color: ${props =>
      props.isPast
        ? Colors.utility.grey.default
        : Colors.utility.black.default};
    text-decoration: none;
  }

  &:hover {
    box-shadow: ${Shadows.level3};
  }
`;

const Header = styled("div")`
  padding: ${Spacing.md} ${Spacing.md} ${Spacing.sm} ${Spacing.md};
  display: flex;
  flex-direction: row;
  border-bottom 1px solid ${Colors.utility.lightGrey.default}
`;

const NumberContainer = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
`;

const MessageContainer = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
`;

const Title = styled("h4")`
  margin: 0;
  font-family: ${Typography.body.fontFamily};
  color: ${props =>
    props.isPast
      ? Colors.utility.grey.default
      : Colors.secondary.eggplant.default};
  font-weight: normal;
  transition: ${Animation.defaultSpeed};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BusinessName = styled("span")`
  font-weight: bold;
`;

const Status = styled("div")`
  margin-top: ${Spacing.sm};
  div {
    margin-right: ${Spacing.sm};
  }
`;

const WarningMenu = styled("div")`
  font-size: 14px;
  color: ${Colors.primary.cherry.darker};
  padding: ${Spacing.sm} ${Spacing.md};
  background: rgba(178, 57, 69, 0.3);
`;

const WarningAttendee = styled("div")`
  font-size: 14px;
  color: ${Colors.primary.squash.darker};
  padding: ${Spacing.sm} ${Spacing.md};
  background: rgba(228, 89, 14, 0.3);
`;

const LunchInfo = styled("div")``;

const NotesIcon = styled("span")`
  width: auto;
  display: inline-block;
  height: 32px;
  min-height: 32px;
  border-radius: 16px;
  overflow: hidden;
  background: ${Colors.utility.lightGrey.default};
  text-align: center;
  line-height: 32px;
  cursor: default;
  transition: 0.3s;
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.small.fontSize};
  padding: 0 ${Spacing.sm};
  margin-right: ${Spacing.sm};

  @media (max-width: 1300px) {
    height: 20px;
    min-height: 20px;
    line-height: 20px;
  }

  svg {
    margin-right: ${Spacing.sm};
  }
`;

const TypeIndicator = styled("div")`
  height: 6px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: ${props =>
    "linear-gradient(135deg, " +
    props.primary_color +
    "50 0%, " +
    props.secondary_color +
    "50 100%)"};
`;

const Details = styled("div")`
  display: flex;
  flex-direction: row;
  color: ${props =>
    props.isPast
      ? Colors.utility.grey.default
      : Colors.secondary.eggplant.default};
  opacity: 0.5;
`;

const Time = styled("div")`
  margin-right: ${Spacing.sm};
`;

const Level = styled("div")`
  height: 6px;
  width: ${props => props.level}%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: ${props =>
    "linear-gradient(135deg, " +
    props.primary_color +
    " 0%, " +
    props.secondary_color +
    " 100%)"};
`;

// Order states Styles

const Draft = css`
  .type-indicator,
  .NumberContainer {
    display: none;
  }
`;

const Confirmed = css``;

export default injectIntl(CalendarOrderCard);
