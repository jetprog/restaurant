import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { calculateOrderSummary } from "../../utils/payment";
import moment from "moment";
// Atoms
import Title from "../Title";
import Hint from "../Hint";
import Button from "../Button";
import Dollars from "../Dollars";
import OrderStateIndicator from "../OrderStateIndicator";
import PaymentMethod from "../PaymentMethod";
import Tag from "../Tag";
import withDeadline from "../../hocs/withDeadline";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const PaymentMethodWithDeadlines = withDeadline(PaymentMethod);

const calculatePlatePrice = (
  is_recurring,
  base_plate_price,
  free_plate_price,
  free
) => {
  let price = 0;
  if (is_recurring) {
    if (free) {
      price = free_plate_price;
    } else {
      price = base_plate_price;
    }
  } else {
    price = base_plate_price;
  }
  return price;
};

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { terms_accepted: false };
  }

  changeTerms = e => {
    var selected = !this.state.terms_accepted;
    this.setState({ terms_accepted: selected });
  };

  render() {
    const {
      order,
      purchases,
      stripe_customer,
      onChangePaymentMethod,
      onConfirm,
      termsLink = "/",
      gst,
      qst,
      service_fee = 0.05,
      delivery_fee,
      base_plate_price = 1200,
      free_plate_price = 1100,
      persona = "admin",
      intl
    } = this.props;
    const { terms_accepted } = this.state;

    const estimate_title = intl.formatMessage({
      id: "order_summary.estimate_title"
    });
    const title = intl.formatMessage({
      id: "order_summary.title"
    });
    const attendees_subtitle = intl.formatMessage({
      id: "order_summary.attendees_subtitle"
    });
    const choices_subtitle = intl.formatMessage({
      id: "order_summary.choices_subtitle"
    });
    const attendees_label = intl.formatMessage({
      id: "order_summary.attendees_label"
    });
    const no_attendees_label = intl.formatMessage({
      id: "order_summary.no_attendees_label"
    });
    const choices_label = intl.formatMessage({
      id: "order_summary.choices_label"
    });
    const no_choices_label = intl.formatMessage({
      id: "order_summary.no_choices_label"
    });
    const price_label = intl.formatMessage({
      id: "order_summary.price_label"
    });
    const unit_price_label = intl.formatMessage({
      id: "order_summary.unit_price_label"
    });
    const total_price_label = intl.formatMessage({
      id: "order_summary.total_price_label"
    });
    const delivery_label = intl.formatMessage({
      id: "order_summary.delivery_label"
    });
    const delivery_hint = intl.formatMessage({
      id: "order_summary.delivery_hint"
    });
    const service_fee_label = intl.formatMessage({
      id: "order_summary.service_fee_label"
    });
    const service_fee_hint = intl.formatMessage({
      id: "order_summary.service_fee_hint"
    });
    const subtotal_label = intl.formatMessage({
      id: "order_summary.subtotal_label"
    });
    const gst_label = intl.formatMessage({
      id: "order_summary.gst_label"
    });
    const qst_label = intl.formatMessage({
      id: "order_summary.qst_label"
    });
    const total_label = intl.formatMessage({
      id: "order_summary.total_label"
    });
    const est_total_label = intl.formatMessage({
      id: "order_summary.est_total_label"
    });
    const payment_subtitle = intl.formatMessage({
      id: "order_summary.payment_subtitle"
    });
    const accepted_terms_label = intl.formatMessage({
      id: "order_summary.accepted_terms_label"
    });
    const terms_label = intl.formatMessage({
      id: "order_summary.terms_label"
    });
    const confirm_label = intl.formatMessage({
      id: "order_summary.confirm_label"
    });
    const meal_label = intl.formatMessage({
      id: "order_summary.meal_label"
    });
    const dessert_label = intl.formatMessage({
      id: "order_summary.dessert_label"
    });
    const drinks_label = intl.formatMessage({
      id: "order_summary.drinks_label"
    });
    const utensils_label = intl.formatMessage({
      id: "order_summary.utensils_label"
    });
    const recurring_price_message = intl.formatMessage({
      id: "order_summary.recurring_price_message"
    });

    if (order) {
      let now = moment();
      let is_past = false;
      let is_cancelled = false;
      if (order.delivery_date) {
        is_past = moment(order.delivery_date).isBefore(moment(now), "day");
      }
      let cancelled_state = {
        id: 2,
        value: "Cancelled",
        translation: [
          {
            id: 2,
            name: "Annulé",
            language: {
              id: 1,
              locale: "fr"
            }
          },
          {
            id: 10,
            name: "Cancelled",
            language: {
              id: 2,
              locale: "en"
            }
          }
        ]
      };
      let attendees_for_calculation = order.is_recurring
        ? order.attendees.length
        : order.number_of_expected_people;
      let choices = purchases.filter(p => p.status == "paid").length;
      let state = "Draft";
      if (order.state) {
        state = order.state.value;
        if (is_past && state == "Draft") {
          state = "Cancelled";
          is_cancelled = true;
        }
      }
      let cssClass = Draft;
      let lineItems = [
        {
          name: meal_label,
          unit_price: calculatePlatePrice(
            order.is_recurring,
            base_plate_price,
            free_plate_price,
            order.is_fully_paid
          ),
          total_price: 0,
          rebate: 0,
          add_ons: []
        }
      ];
      if (order.desserts) {
        lineItems[0].add_ons.push({
          name: dessert_label,
          unit_price: 200
        });
      }
      if (order.drinks) {
        lineItems[0].add_ons.push({
          name: drinks_label,
          unit_price: 200
        });
      }
      if (order.utensils) {
        lineItems[0].add_ons.push({
          name: utensils_label,
          unit_price: 100
        });
      }
      // apply rebate if drinks and utensils
      if (order.desserts && order.drinks) {
        lineItems[0].rebate = 100;
      }

      let estimate = calculateOrderSummary(
        "estimate",
        lineItems,
        order,
        purchases,
        delivery_fee,
        gst,
        qst,
        service_fee
      );

      let summary = calculateOrderSummary(
        "summary",
        lineItems,
        order,
        purchases,
        delivery_fee,
        gst,
        qst,
        service_fee
      );

      return (
        <Summary
          className={cx(
            { [Draft]: state == "Draft" },
            { [Confirmed]: state == "Confirmed" },
            { [Locked]: state == "Locked" },
            { [Cancelled]: state == "Cancelled" },
            "order-summary"
          )}
        >
          <Section>
            <Title
              text={state == "Draft" ? estimate_title : title}
              level={3}
              marginBottom={Spacing.md}
            />
            <Row>
              <Column>
                <Label marginBottom={Spacing.sm}>{attendees_subtitle}</Label>
                <span>
                  {attendees_for_calculation > 0
                    ? attendees_for_calculation + " " + attendees_label
                    : no_attendees_label}
                </span>
              </Column>
              {state !== "Draft" && (
                <Column>
                  <Label marginBottom={Spacing.sm}>{choices_subtitle}</Label>
                  <span>
                    {choices > 0
                      ? choices + " " + choices_label
                      : no_choices_label}
                  </span>
                </Column>
              )}
            </Row>
          </Section>
          {order.is_recurring ? (
            <Section>
              <Message>{recurring_price_message}</Message>
            </Section>
          ) : (
            <Section>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeadItem>
                      <Label>{price_label}</Label>
                    </TableHeadItem>
                    <TableHeadItem money>
                      <Label>{unit_price_label}</Label>
                    </TableHeadItem>
                    <TableHeadItem money>
                      <Label>{total_price_label}</Label>
                    </TableHeadItem>
                  </TableRow>
                </thead>
                <tbody>
                  {state == "Draft"
                    ? estimate.line_items.map((item, k) => (
                        <React.Fragment key={k}>
                          <TableRow>
                            <TableItem>{item.name}</TableItem>
                            <TableItem money>
                              <Dollars cents={item.unit_price} />
                              {item.rebate > 0 && (
                                <Tag
                                  label={item.rebate / 100 + "$ off"}
                                  color="lettuce"
                                  style="small"
                                />
                              )}
                            </TableItem>
                            <TableItem money>
                              <Dollars cents={item.total_price} />
                            </TableItem>
                          </TableRow>
                          {item.add_ons.map((add_on, k) => (
                            <TableRow key={k}>
                              <TableItem smaller colSpan="3">
                                {add_on.name}
                              </TableItem>
                            </TableRow>
                          ))}
                        </React.Fragment>
                      ))
                    : summary.line_items.map((item, k) => (
                        <React.Fragment key={k}>
                          <TableRow>
                            <TableItem>{item.name}</TableItem>
                            <TableItem money>
                              <Dollars cents={item.unit_price} />
                              {item.rebate > 0 && (
                                <Tag
                                  label={item.rebate / 100 + "$ off"}
                                  color="lettuce"
                                  style="small"
                                />
                              )}
                            </TableItem>
                            <TableItem money>
                              <Dollars cents={item.total_price} />
                            </TableItem>
                          </TableRow>
                          {item.add_ons.map((add_on, k) => (
                            <TableRow key={k}>
                              <TableItem smaller colSpan="3">
                                {add_on.name}
                              </TableItem>
                            </TableRow>
                          ))}
                        </React.Fragment>
                      ))}
                  <TableRow />
                  <TableRow>
                    <TableItem>{delivery_label}</TableItem>
                    <TableItem />
                    <TableItem money>
                      {summary.delivery_fee ? (
                        <Dollars cents={summary.delivery_fee} />
                      ) : (
                        "TBD"
                      )}
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>
                      {service_fee_label}
                      <Hint hint={service_fee_hint} />
                    </TableItem>
                    <TableItem />
                    <TableItem money>
                      <Dollars
                        cents={
                          state == "Draft"
                            ? estimate.service_fee
                            : summary.service_fee
                        }
                      />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem colSpan={3}>
                      <Separator />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>{subtotal_label}</TableItem>
                    <TableItem />
                    <TableItem money>
                      <Dollars
                        cents={
                          state == "Draft"
                            ? estimate.subtotal
                            : summary.subtotal
                        }
                      />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem smaller>{gst_label}</TableItem>
                    <TableItem />
                    <TableItem smaller money>
                      <Dollars
                        cents={state == "Draft" ? estimate.gst : summary.gst}
                      />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem smaller>{qst_label}</TableItem>
                    <TableItem />
                    <TableItem smaller money>
                      <Dollars
                        cents={state == "Draft" ? estimate.qst : summary.qst}
                      />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem colSpan={3}>
                      <Separator />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem
                      smaller={state !== "Draft"}
                      bigger={state == "Draft"}
                    >
                      {est_total_label}
                    </TableItem>
                    <TableItem />
                    <TableItem
                      money
                      smaller={state !== "Draft"}
                      bigger={state == "Draft"}
                    >
                      <Dollars cents={estimate.total} />
                    </TableItem>
                  </TableRow>
                  {state !== "Draft" && (
                    <TableRow>
                      <TableItem bigger>{total_label}</TableItem>
                      <TableItem />
                      <TableItem money bigger>
                        <Dollars cents={summary.total} />
                      </TableItem>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </Section>
          )}
          <Section>
            <Label marginBottom={Spacing.sm}>{payment_subtitle}</Label>
            {persona == "manager" ? (
              <div>
                {stripe_customer ? (
                  <PaymentMessage background={Colors.primary.lettuce.default}>
                    Payment method added
                  </PaymentMessage>
                ) : (
                  <PaymentMessage background={Colors.primary.squash.lighter}>
                    No payment method
                  </PaymentMessage>
                )}
              </div>
            ) : (
              <PaymentMethodWithDeadlines
                order={order}
                state={state}
                stripe_customer={stripe_customer}
                onChangePaymentMethod={onChangePaymentMethod}
              />
            )}
          </Section>
          {persona !== "manager" && stripe_customer && (
            <Section
              background={
                state == "Draft" &&
                !terms_accepted &&
                Colors.primary.squash.lighter + "50"
              }
            >
              {state !== "Draft" ? (
                <Terms>
                  <Row>
                    <FakeCheckBox>
                      <FontAwesomeIcon icon="check" />
                    </FakeCheckBox>
                    <label>
                      {accepted_terms_label + " "}
                      <Link to={termsLink}>{terms_label}</Link>
                    </label>
                  </Row>
                </Terms>
              ) : (
                <Terms>
                  <input
                    type="checkbox"
                    name="accept-terms"
                    id="accept-terms"
                    onChange={this.changeTerms}
                    checked={terms_accepted}
                  />
                  <label htmlFor="accept-terms">
                    {accepted_terms_label + " "}
                    <Link to={termsLink}>{terms_label}</Link>
                  </label>
                </Terms>
              )}
            </Section>
          )}
          {state == "Draft" && (
            <Section>
              <Row>
                <Button
                  label={confirm_label}
                  onClick={onConfirm}
                  disabled={!stripe_customer || !terms_accepted}
                />
              </Row>
            </Section>
          )}
          {state == "Locked" && (
            <Section>
              <ExtraInfo>
                You saved 300$ , 100kg de food and reduce carbon emissions by …
              </ExtraInfo>
            </Section>
          )}
          {state == "Delivered" && (
            <Section>
              <ExtraInfo onClick={console.log}>
                <FontAwesomeIcon icon="download" />
                Download invoice
              </ExtraInfo>
            </Section>
          )}
          {state !== "Draft" && (
            <Section className="status">
              <OrderStateIndicator
                current_state={is_cancelled ? cancelled_state : order.state}
                showColor={false}
                small={false}
              />
            </Section>
          )}
        </Summary>
      );
    } else {
      return <Summary />;
    }
  }
}

// Styles

const Summary = styled("div")`
  border-radius: ${BorderRadius.sm};
  box-shadow: ${Shadows.level2};
  overflow: hidden;
  max-width: 400px;
  background: #fff;
  font-family: ${Typography.body.fontFamily};
`;

const Section = styled("div")`
  padding: ${Spacing.md};
  background: ${props => props.background};
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Column = styled("div")`
  flex: 1;
  padding-right: ${Spacing.md};
`;

const Right = styled("div")`
  text-align: right;
  flex: 1;
  margin-left: auto;
`;

const PaymentMessage = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
  border-radius: ${BorderRadius.sm};
  color: ${Colors.secondary.eggplant.default};
  background: ${props => props.background};
`;

const ExtraInfo = styled("div")`
  padding: ${Spacing.md};
  background: ${Colors.secondary.eggshell.default};
  color: ${Colors.secondary.eggplant.default};
  border-radius: ${BorderRadius.sm};
  transition: ${Animation.defaultSpeed};
  cursor: ${props => (props.onClick ? "pointer" : "default")};

  svg {
    margin-right: ${Spacing.md};
  }

  &:hover {
    background: ${props =>
      props.onClick
        ? Colors.secondary.mushrooms.default
        : Colors.secondary.eggshell.default};
  }
`;

const Label = styled("label")`
  color: ${Colors.secondary.eggplant.default};
  opacity: 0.5;
  font-size: ${Typography.small.fontSize};
  display: block;
  margin-bottom: ${props => props.marginBottom};
`;

const Terms = styled("div")`
  font-size: ${Typography.small.fontSize};
  line-height: ${Typography.small.fontSize};

  label {
    cursor: pointer;
    padding-left: ${Spacing.sm};
  }

  a {
    color: ${Colors.utility.black.default};
    text-decoration: none;
    border-bottom: 1px solid ${Colors.utility.black.default};
    transition: ${Animation.defaultSpeed};
  }
  a:hover {
    border-color: ${Colors.primary.eggYolk.default};
  }
`;

const FakeCheckBox = styled("div")`
  background: ${Colors.primary.lettuce.default};
  color: ${Colors.secondary.spinach.default};
  border-radius: 3px;
  display: inline-block;
  max-width: 22px;
  max-height: 22px;
  min-width: 22px;
  min-height: 22px;
  box-sizing: border-box;
  margin-right: ${Spacing.md};
  line-height: 22px;
  text-align: center;
`;

const Separator = styled("hr")`
  border: 0;
  height: 2px;
  width: 100%;
  background: ${Colors.secondary.mushrooms.default};
  margin: ${Spacing.sm} 0;
`;
const Message = styled("div")`
  color: ${Colors.secondary.eggplant.lighter};
  font-size: ${Typography.small.fontSize};
`;
const Table = styled("table")`
  width: 100%;
`;
const TableRow = styled("tr")`
  height: 1em;
`;
const TableHeadItem = styled("td")`
  text-align: ${props => (props.money ? "right" : "left")};
  width: ${props => props.money && "60px"};
`;
const TableItem = styled("td")`
  color: ${props =>
    props.smaller ? Colors.utility.grey.default : Colors.utility.black.default};
  font-size: ${props => {
    if (props.bigger) {
      return Typography.subTitle.fontSize;
    } else if (props.smaller) {
      return Typography.small.fontSize;
    } else {
      return Typography.body.fontSize;
    }
  }};
  vertical-align: top;
  text-align: ${props => (props.money ? "right" : "left")};
  padding-left: ${props => (props.money ? Spacing.md : "")};
`;

// State styles
const Draft = css`
  .status {
    display: none;
  }
`;
const Confirmed = css`
  .status {
    background: ${Colors.secondary.eatYourGreens.default};
  }
`;
const Locked = css`
  .status {
    background: ${Colors.secondary.eatYourGreens.default};
  }
`;
const InPrep = css`
  .status {
    background: ${Colors.secondary.eatYourGreens.default};
  }
`;
const Delivered = css`
  .status {
    background: ${Colors.secondary.eatYourGreens.default};
  }
`;
const Cancelled = css`
  .status {
    background: ${Colors.primary.squash.default};
  }
`;

export default injectIntl(OrderSummary);
