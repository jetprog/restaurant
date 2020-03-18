import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, FormattedMessage } from "react-intl";
// Atoms
import PurchaseStateIndicator from "../PurchaseStateIndicator";
import RebateIndicator from "../RebateIndicator";
import Price from "../Price";
import Button from "../Button";
import ShortText from "../ShortText";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const PurchaseCard = ({
  item,
  user,
  onShowMore,
  isDetailDisplayed,
  setActiveDay,
  clearActiveDay,
  setOrderLunching,
  active,
  day,
  intl,
  isOpen,
  isPast
}) => {
  const virtual_cafeteria_label = intl.formatMessage({
    id: "food_choice.calendar.virtual_cafeteria"
  });

  let title = virtual_cafeteria_label + " " + item.order.business.name;
  if (!item.order.is_recurring) {
    title = item.order.name ? item.order.name : item.order.business.name;
  }
  let notLunching = item.not_eating;

  return (
    <OptionCardContainer
      className={cx(
        { [DetailOpened]: isDetailDisplayed },
        { [Active]: isOpen },
        { [InCart]: item.status === "cart" && !notLunching },
        { [Paid]: item.status === "paid" && !notLunching },
        { [NotLunching]: notLunching },
        { [PaidPast]: item.status === "paid" && !notLunching && isPast },
        "purchase-card"
      )}
      onMouseEnter={notLunching ? console.log("not active") : setActiveDay}
      onMouseLeave={isDetailDisplayed ? null : clearActiveDay}
      isOpen={isOpen}
      isPast={isPast}
    >
      <Header
        className="header"
        onClick={notLunching ? console.log("not active") : onShowMore}
      >
        <Row>
          <div className="title-indicator">
            <PurchaseStateIndicator
              current_state={item.status}
              not_eating={item.not_eating}
            />
          </div>
          <div>
            <Title>
              <ShortText text={title} maxLength={18} />
            </Title>
            {!item.order.is_recurring && (
              <Location className="location">{item.order.address}</Location>
            )}
            {intl.locale === "fr" ? (
              <Time className="time">
                {moment(item.delivery_date).format("h:mm")}
              </Time>
            ) : (
              <Time className="time">
                {moment(item.delivery_date).format("h:mm A")}
              </Time>
            )}
          </div>
          {item.status === "cart" && !notLunching ? (
            <SecondaryPrice>{item.balance_due / 100}$</SecondaryPrice>
          ) : (
            <RebateIndicator item={item.order} />
          )}
        </Row>
        {!notLunching && (
          <h4 className="plate-name-secondary">
            {intl.locale === "fr" ? item.plate.name_FR : item.plate.name}
          </h4>
        )}
      </Header>
      {notLunching ? (
        <PresentSection className="present-section">
          <p>Will you be eating at this meeting?</p>
          <Buttons>
            <Button label="Yes" color="yellow" onClick={setOrderLunching} />
            <Button label="No" color="yellow" />
          </Buttons>
          {item.assigned_menu_plates && (
            <Row className="view-more">
              <View_more className="view-more" onClick={onShowMore}>
                <FontAwesomeIcon icon="chevron-down" />
                <FormattedMessage
                  id="food_choice.calendar.more_options"
                  defaultMessage={`More options`}
                />
              </View_more>
            </Row>
          )}
        </PresentSection>
      ) : (
        <MenuSection>
          <Photo
            className="photo"
            img={item.plate.image}
            onClick={onShowMore}
          />
          <Infos className="infos">
            <Row>
              <h4>
                {intl.locale === "fr" ? item.plate.name_FR : item.plate.name}
              </h4>
              <Price price={item.balance_due} />
            </Row>
            <Row>
              <View_more className="view-more" onClick={onShowMore}>
                <FontAwesomeIcon icon="chevron-down" />
                <FormattedMessage
                  id="food_choice.calendar.more_details"
                  defaultMessage={`More details`}
                />
              </View_more>
            </Row>
          </Infos>
        </MenuSection>
      )}
    </OptionCardContainer>
  );
};

const appear = keyframes`
  0% {opacity: 0; margin-left:${Spacing.md};}
  100% {opacity: 1; margin-left:0;}
`;

const OptionCardContainer = styled("div")`
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 5px 10px #00000021;
  z-index: 10;
  height: 180px;
  opacity: 0;
  margin-left: ${Spacing.md};
  animation: ${appear} ${Animation.fastSpeed} ease normal forwards;
  // min-width: 286px;
  font-size: 0.8em;

  // transition on mouse out
  transition: ${Animation.fastSpeed} ease-in-out;

  a {
    color: #333132;
    text-decoration: none;
  }

  .photo {
    opacity: ${props => (props.isOpen ? "1" : "inherit")};
  }

  &:hover {
    box-shadow: 0 0 32px #00000031;
    height: 300px;
    max-width: 100%;

    // transition on mouse enter
    transition: 0.2s ease-in-out ${Animation.defaultSpeed};

    .photo {
      height: 180px;
      // transition on mouse enter
      transition: 0.2s ease-in-out ${Animation.defaultSpeed};
    }

    .header {
      height: 55px;
      // transition on mouse enter
      transition: 0.2s ease-in-out ${Animation.defaultSpeed};
    }

    .header .plate-name-secondary {
      margin-top: 20px;
      opacity: 0;
      transition: 0.2s ease-in-out ${Animation.defaultSpeed};
    }

    .location,
    .time {
      opacity: 0.5;
    }

    .infos {
      margin-bottom: 0;
      opacity: 1;
      transition: 0.2s ease-in-out ${Animation.defaultSpeed};
    }
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    font-size: 1em;

    &:hover {
      max-width: 100%;
    }
  }
`;

const InCart = css`
  height: 90px;
  background: #f4af42;

  .header {
    height: 90px;
    background: #f4af42;
  }

  .infos {
    background: #f4af42;
  }

  .location,
  .time {
    opacity: 0.5;
  }

  .rebate-indicator {
    display: none;
  }
`;

const Paid = css`
  height: 90px;
  background: #a3e5b1;

  .infos {
    background: #a3e5b1;
  }
  .rebate-indicator {
    display: none;
  }

  .header {
    height: 90px;
    background: #a3e5b1;
  }

  .location,
  .time {
    opacity: 0.5;
  }
`;

const PaidPast = css`
  height: 90px;
  background: #cbecd2;

  .infos {
    background: #cbecd2;
  }
  .rebate-indicator {
    display: none;
  }

  .header {
    height: 90px;
    background: #cbecd2;
  }

  .location,
  .time {
    opacity: 0.5;
  }
`;

const DetailOpened = css`
  .photo {
    opacity: 0.7;
  }

  &:hover {
    opacity: 1;
    height: 180px;

    .photo {
      height: 125px;
      opacity: 1;
    }

    .header {
      height: 55px;
    }

    .infos {
      opacity: 0;
      margin-bottom: -100px;
    }
  }
`;

const Active = css`
  border: 2px solid #333132;
  .photo {
    opacity: 1;
  }
`;

const Arrow = styled("div")`
  width: 25px;
  height: 25px;
  background: #000;
  border-radius: 4px;
  transform: rotate(90deg);
`;

const NotLunching = css`
  height: 90px;
  border-top: 0;
  background: #f0f0f0;
  cursor: default;

  .header {
    background: #f0f0f0;
    height: 90px;
    cursor: default;
  }

  .rebate-indicator {
    display: none;
  }

  &:hover {
    background: #f0f0f0;
    height: 90px;
    box-shadow: 0 5px 10px #00000021;

    .header {
      background: #f0f0f0;
      height: 90px;
    }

    .time,
    .location {
      opacity: 0;
    }
  }
`;

const Header = styled("div")`
  padding: 12px;
  background: #fff;
  position: relative;
  height: 60px;
  box-sizing: border-box;
  cursor: pointer;

  .title-indicator div {
    position: static;
    margin-right: ${Spacing.md};
  }

  .plate-name-secondary {
    margin: 8px 0 0 0;
    transition: 0.2s;
    font-size: 1em;
    opacity: 0.5;
  }

  // transition on mouse out
  transition: ${Animation.fastSpeed} ease-in-out;
`;

const Title = styled("h4")`
  margin: 0;
  font-weight: bold;
  padding-right: ${Spacing.sm};
  font-size: 1em;
`;

const Location = styled("div")`
  opacity: 0;
  font-size: 1em;
  display: inline-block;
  margin-right: ${Spacing.sm};

  transition: ${Animation.fastSpeed};
  transition-delay: ${Animation.defaultSpeed};

  svg {
    font-size: 12px;
    padding-right: 4px;
  }
`;

const Time = styled("div")`
  opacity: 0;
  font-size: 1em;
  display: inline-block;

  transition: ${Animation.fastSpeed};
  transition-delay: ${Animation.defaultSpeed};
`;

const Tag = styled("div")`
  padding: 4px 10px;
  border-radius: 12px;
  float: right;
  display: block;
  background: #a3e5b1;
  overflow: hidden;
  position: absolute;
  right: ${Spacing.sm};
  top: ${Spacing.sm};
`;

const SecondaryPrice = styled("div")`
  padding: 4px 10px;
  border-radius: 12px;
  display: block;
  background: #ffffff50;
  overflow: hidden;
  font-size: 12px;
  font-weight: bold;
  min-width: 25px;
  max-height: 15px;
  margin-left: auto;
  text-align: center;
`;

const Photo = styled("div")`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  height: 125px;
  width: 100%;
  background-color: #f5daad50;
  position: relative;
  cursor: pointer;

  // transition on mouse out
  transition: ${Animation.fastSpeed} ease-in-out;
`;

const Infos = styled("div")`
  padding: 6px 12px 12px 12px;
  background: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  margin-bottom: -100px;
  transition: 0.2s ease-in-out;

  h4,
  .price {
    margin: 8px 0 0 0;
  }

  .price {
    margin-left: auto;
  }
`;

const Row = styled("div")`
  flex-direction: row;
  display: flex;
`;

const View_more = styled("div")`
  cursor: pointer;
  opacity: 0.5;
  flex: 3;
  margin-top: ${Spacing.sm};
  transition: 0.2s ease-in-out;

  svg {
    margin-right: ${Spacing.sm};
    font-size: 12px;
  }

  &:hover {
    opacity: 1;
  }
`;

const AddToCart = styled("a")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background: #fff685;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

const PresentSection = styled("div")`
  padding: 0 ${Spacing.md} ${Spacing.md} ${Spacing.md};
  background: #fff;
  min-height: calc(100% - 60px);
  transition: ${Animation.fastSpeed};
  transition: padding-top ${Animation.fastSpeed} ease-in-out
    ${Animation.defaultSpeed};

  .view-more {
    padding-top: 32px;
  }

  p {
    margin-top: 0;
  }
`;

const Buttons = styled("div")`
  a {
    margin-right: ${Spacing.md};
  }
`;

const MenuSection = styled("span")``;

export default injectIntl(PurchaseCard);
