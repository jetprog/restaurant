import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage } from "react-intl";
// Atoms
import Dollars from "../Dollars";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const LineItemsBlock = ({
  lineItems,
  locale,
  totalSpecials,
  totalConfirmed,
  eachLabel,
  notActiveLabel,
  active,
  drinksList,
  dessertsList,
  veganDessertsList,
  type
}) => {
  if (active) {
    return (
      <LineItems>
        {lineItems.length > 0 &&
          lineItems.map((lineItem, key) => (
            <LineItem key={key}>
              <Row>
                <Quantity>
                  {type == "Dessert of the day"
                    ? lineItem.for_vegans
                      ? totalSpecials
                      : totalConfirmed - totalSpecials
                    : totalConfirmed}{" "}
                  {locale == "fr" ? lineItem.name_fr : lineItem.name}
                  {" (" + lineItem.unit_price / 100 + "$ " + eachLabel + ")"}
                </Quantity>
                <Price>
                  <Dollars
                    cents={
                      type == "Dessert of the day"
                        ? lineItem.for_vegans
                          ? totalSpecials * lineItem.unit_price
                          : (totalConfirmed - totalSpecials) *
                            lineItem.unit_price
                        : totalConfirmed * lineItem.unit_price
                    }
                  />
                </Price>
              </Row>
              {type == "Drink assortment" && <Desc>{drinksList}</Desc>}
              {type == "Dessert of the day" && !lineItem.for_vegans && (
                <Desc>{dessertsList}</Desc>
              )}
              {type == "Dessert of the day" && lineItem.for_vegans && (
                <Desc>{veganDessertsList}</Desc>
              )}
            </LineItem>
          ))}
      </LineItems>
    );
  } else {
    return (
      <LineItems>
        <LineItem>
          <Quantity>{notActiveLabel}</Quantity>
        </LineItem>
      </LineItems>
    );
  }
};

class AdditionalItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, order, purchases, intl } = this.props;

    let totalConfirmed = purchases.filter(
      p => p.status === "paid" && p.not_eating === false
    ).length;
    let specialOrders = purchases.filter(
      p =>
        p.status === "paid" &&
        p.user &&
        p.user.restrictions &&
        p.user.restrictions.find(r => (r == 6) | (r == 7) | (r == 11))
    );
    console.log(specialOrders);
    let totalSpecials = specialOrders.length;
    const eachLabel = intl.formatMessage({
      id: "additional_items.each_label"
    });
    const notActiveLabel = intl.formatMessage({
      id: "additional_items.not_active_label"
    });
    const beverages = intl.formatMessage({
      id: "additional_items.beverages"
    });
    const desserts = intl.formatMessage({
      id: "additional_items.desserts"
    });
    const veganDesserts = intl.formatMessage({
      id: "additional_items.vegan_desserts"
    });

    return (
      <AdditionalItemsWrapper className="additional-items">
        {items &&
          items.map((item, key) => (
            <Item
              key={key}
              active={
                (item.type == "Drink assortment" && order.drinks) ||
                (item.type == "Compostable utensils & napkins" &&
                  order.utensils) ||
                (item.type == "Dessert of the day" && order.desserts)
              }
            >
              <Icon>
                <FontAwesomeIcon icon={item.icon} />
              </Icon>
              <Content>
                <Label>{intl.locale == "fr" ? item.type_fr : item.type}</Label>
                <LineItemsBlock
                  locale={intl.locale}
                  totalSpecials={totalSpecials}
                  totalConfirmed={totalConfirmed}
                  lineItems={item.lineItems}
                  type={item.type}
                  eachLabel={eachLabel}
                  notActiveLabel={notActiveLabel}
                  drinksList={beverages}
                  dessertsList={desserts}
                  veganDessertsList={veganDesserts}
                  active={
                    (item.type == "Drink assortment" && order.drinks) ||
                    (item.type == "Compostable utensils & napkins" &&
                      order.utensils) ||
                    (item.type == "Dessert of the day" && order.desserts)
                  }
                />
              </Content>
            </Item>
          ))}
      </AdditionalItemsWrapper>
    );
  }
}

// Styles

const AdditionalItemsWrapper = styled("div")`
  flex-direction: row;
  display: flex;
  margin-bottom: 24px;
  margin: 0 -${Spacing.sm} ${Spacing.xl} -${Spacing.sm};
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Item = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: row;
  border-radius: ${BorderRadius.sm};
  background: ${props =>
    props.active
      ? Colors.secondary.eggshell.default
      : Colors.utility.lightGrey.default};
  padding: ${Spacing.md};
  margin: 0 ${Spacing.sm};
  box-shadow: ${Shadows.level1};
  font-family: ${Typography.body.fontFamily};
  color: ${props =>
    props.active
      ? Colors.secondary.eggplant.default
      : Colors.utility.grey.default};

  @media (max-width: 480px) {
    margin-bottom: ${Spacing.md};
  }
`;

const Icon = styled("div")`
  flex: 1;
  max-width: 30px;
  padding: ${Spacing.sm} ${Spacing.md} ${Spacing.sm} 0;
  text-align: center;
  font-size: 23px;
`;

const Content = styled("div")`
  flex: 1;
`;

const Label = styled("h4")`
  margin: 0 0 ${Spacing.sm} 0;
  opacity: 0.5;
`;

const LineItems = styled("div")``;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

const LineItem = styled("div")`
  margin-bottom: ${Spacing.sm};
`;

const Quantity = styled("div")`
  font-size: 18px;
  flex: 3;
`;

const Price = styled("div")`
  font-size: 18px;
  text-align: right;
  flex: 1;
`;

const Desc = styled("div")`
  margin-top: ${Spacing.sm};
  margin-bottom: ${Spacing.md};
  opacity: 0.5;
`;

export default injectIntl(AdditionalItems);
