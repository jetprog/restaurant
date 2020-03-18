import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { formatPhone } from "../../utils/data_structure";
import Button from "../Button";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

import mastercard from "../../img/mastercard.svg";
import no_card from "../../img/no-card.svg";
import visa from "../../img/visa.svg";

const PaymentMethod = ({
  stripe_customer,
  onChangePaymentMethod,
  state,
  deadlines,
  intl
}) => {
  const add_card_label = intl.formatMessage({ id: "payment_method.add_card" });

  if (stripe_customer) {
    return (
      <PaymentMethodWrap>
        <Card>
          <Icon>
            {stripe_customer.stripe.sources.data[0].brand.toLowerCase() ===
              "mastercard" && <img src={mastercard} />}
            {stripe_customer.stripe.sources.data[0].brand.toLowerCase() ===
              "visa" && <img src={visa} />}
          </Icon>
          <CardInfos>
            <h3>
              <FormattedMessage
                id="payment_method.card_ending"
                defaultMessage={`card ending in`}
              />{" "}
              {stripe_customer.stripe.sources.data[0].last4}
            </h3>
            {state == "Draft" && !deadlines.editing.passed && (
              <LinkText
                className="change-payment-method"
                onClick={onChangePaymentMethod}
              >
                <FormattedMessage
                  id="payment_method.change_payment_label"
                  defaultMessage={`Change payment method`}
                />
              </LinkText>
            )}
          </CardInfos>
        </Card>
      </PaymentMethodWrap>
    );
  } else {
    return (
      <NoCard>
        <Card>
          <Icon>
            <img src={no_card} />
          </Icon>
          <CardInfos>
            <h3>
              <FormattedMessage
                id="payment_method.no_card"
                defaultMessage={`No card on file`}
              />
            </h3>
          </CardInfos>
        </Card>
        <Button
          className="add-payment-method"
          onClick={onChangePaymentMethod}
          label={add_card_label}
        />
      </NoCard>
    );
  }
};

// Styles

const PaymentMethodWrap = styled("div")``;

const Card = styled("div")`
  font-family: ${Typography.body.fontFamily};
  display: flex;
  flex-direction: row;
`;

const NoCard = styled("div")`
  color: ${Colors.primary.squash.default};
  font-family: ${Typography.body.fontFamily};

  p {
    margin-top: ${Spacing.sm};
  }
`;

const LinkText = styled("span")`
  color: ${Colors.primary.eggYolk.default};
  transition: 0.3s;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  margin-top: ${Spacing.sm};
  font-size: 0.8em;

  &:hover {
    border-color: ${Colors.primary.eggYolk.default};
  }
`;

const Icon = styled("div")`
  flex: 1;
  padding-right: ${Spacing.md};
  max-width: 60px;
  line-height: ${Spacing.lg};
`;

const CardInfos = styled("div")`
  flex: 4;

  h3 {
    margin: 0;
    font-size: ${Typography.body.fontSize};
  }
`;

export default injectIntl(PaymentMethod);
