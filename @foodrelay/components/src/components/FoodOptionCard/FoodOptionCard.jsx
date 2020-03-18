import React from "react";
import styled, { css, cx, keyframes } from "react-emotion";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { withDeadline } from "../../hocs";
import { isMobile } from "react-device-detect";
// Atoms
import ShortText from "../ShortText";
import Tags from "../Tags";
import Button from "../Button";
import Price from "../Price";
import PurchaseStateIndicator from "../PurchaseStateIndicator";
import ButtonLink from "../ButtonLink";
import IconButton from "../IconButton";
import SpicyIndicator from "../SpicyIndicator";
import { lightenColor, isTextColorLight } from "../../utils/color.js";
import { getTranslation } from "../../i18n/utils.js";
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

let placeHolderImage = "../img/placeholder-3.svg";

class FoodOptionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { plateIndex: 0, imageLoaded: false, userPurchase: null };
  }

  componentWillMount() {
    this.setState({ imageLoaded: true });
    if (this.props.purchases) {
      let userPurchase = this.props.purchases.find(
        p => p.user && p.user.id == this.props.user.id
      );
      this.props.purchases.map(purchase => {
        if (userPurchase) {
          this.setState({ userPurchase: userPurchase });
          this.setState({
            plateIndex: this.props.order.assigned_menu_plates.findIndex(
              plate => plate.id == userPurchase.plate.id
            )
          });
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.plateIndex >= nextProps.order.user_menu.ordered_plates.length
    ) {
      this.setState({ plateIndex: 0 });
    }
    if (nextProps.purchases) {
      let userPurchase = nextProps.purchases.find(
        p => p.user && p.user.id == nextProps.user.id
      );
      if (userPurchase) {
        this.setState({ userPurchase: userPurchase });
        this.setState({
          plateIndex: nextProps.order.assigned_menu_plates.findIndex(
            plate => plate.id == userPurchase.plate.id
          )
        });
      } else {
        this.setState({ userPurchase: userPurchase });
      }
    }
  }

  previousIndex = () => {
    this.setState({ imageLoaded: false });
    let oldPlateIndex = this.state.plateIndex;
    let newPlateIndex = null;
    let image = new Image();
    if (oldPlateIndex == 0) {
      newPlateIndex = this.props.order.user_menu.ordered_plates.length - 1;
    } else {
      newPlateIndex = oldPlateIndex - 1;
    }
    image.src = this.props.order.user_menu.ordered_plates[newPlateIndex].image;
    image.onload = () => {
      this.setState({ imageLoaded: true });
    };
    this.setState({ plateIndex: newPlateIndex });
  };

  nextIndex = () => {
    this.setState({ imageLoaded: false });
    let oldPlateIndex = this.state.plateIndex;
    let newPlateIndex = null;
    let image = new Image();
    if (oldPlateIndex == this.props.order.user_menu.ordered_plates.length - 1) {
      newPlateIndex = 0;
    } else {
      newPlateIndex = oldPlateIndex + 1;
    }
    image.src = this.props.order.user_menu.ordered_plates[newPlateIndex].image;
    image.onload = () => {
      this.setState({ imageLoaded: true });
    };
    this.setState({ plateIndex: newPlateIndex });
  };

  render() {
    const {
      order,
      addPurchase,
      baseUrl = "/",
      user,
      deletePurchase,
      purchases = [],
      deadlines,
      isLoading,
      marginRight = 0,
      intl
    } = this.props;

    const { plateIndex, imageLoaded, userPurchase } = this.state;
    let plateDescription = "";
    let activePlate = null;
    let isPassed = deadlines.ordering.passed;
    if (order && order.user_menu && order.user_menu.ordered_plates) {
      if (userPurchase) {
        activePlate = order.assigned_menu_plates[plateIndex];
      } else if (plateIndex >= order.user_menu.ordered_plates.length) {
        activePlate = order.user_menu.ordered_plates[0];
      } else {
        activePlate = order.user_menu.ordered_plates[plateIndex];
      }
    }
    if (activePlate) {
      plateDescription =
        intl.locale === "fr"
          ? activePlate.description_FR
          : activePlate.description;
    }

    const addLabel = intl.formatMessage({
      id: "button.add_purchase"
    });
    const selectLabel = intl.formatMessage({
      id: "button.select_purchase"
    });
    const changeLabel = intl.formatMessage({
      id: "button.change_purchase"
    });
    const cancelLabel = intl.formatMessage({
      id: "button.cancel_purchase"
    });
    const confirmedLabel = intl.formatMessage({
      id: "status.confirmed_choice"
    });
    const inCartLabel = intl.formatMessage({
      id: "status.in_cart"
    });
    return (
      <OptionCardContainer
        className="food-option-card"
        marginRight={marginRight}
      >
        {(isPassed && !userPurchase) ||
        (isPassed && userPurchase && userPurchase.status == "cart") ||
        !order.assigned_menu_plates ||
        order.assigned_menu_plates.length == 0 ? (
          <React.Fragment>
            <HeaderNoChoicePast
              primary_color={order.prestation.color}
              secondary_color={lightenColor(order.prestation.color)}
              istextcolorlight={isTextColorLight(order.prestation.color)}
              ispassed={isPassed}
            >
              {order.name ? (
                <Title>
                  {order.name + " " + order.business.name + " "}
                  <Time>
                    {intl.locale == "en"
                      ? moment(order.delivery_date).format("h:mm A")
                      : moment(order.delivery_date).format("H:mm")}
                  </Time>
                </Title>
              ) : (
                <Title>
                  {getTranslation(order.prestation, intl.locale).name +
                    " " +
                    order.business.name +
                    " "}
                  <Time>
                    {intl.locale == "en"
                      ? moment(order.delivery_date).format("h:mm A")
                      : moment(order.delivery_date).format("H:mm")}
                  </Time>
                </Title>
              )}
            </HeaderNoChoicePast>
            <NoChoiceMadeWarp>
              {(!order.assigned_menu_plates ||
                order.assigned_menu_plates.length == 0) &&
              !isPassed ? (
                <FormattedMessage
                  id="calendar.no_menu_employee"
                  defaultMessage={`No menu have been assigned to this order yet.`}
                />
              ) : (
                <FormattedMessage
                  id="calendar.no_choice"
                  defaultMessage={`No choice has been made.`}
                />
              )}
            </NoChoiceMadeWarp>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Header
              to={
                baseUrl +
                "order/" +
                order.id +
                "/" +
                moment(order.delivery_date).format("YYYY-MM-DD") +
                "/"
              }
              primary_color={order.prestation.color}
              secondary_color={lightenColor(order.prestation.color)}
              istextcolorlight={isTextColorLight(order.prestation.color)}
              ispassed={isPassed}
            >
              {order.name ? (
                <Title>
                  {order.name + " " + order.business.name + " "}
                  <Time>
                    {intl.locale == "en"
                      ? moment(order.delivery_date).format("h:mm A")
                      : moment(order.delivery_date).format("H:mm")}
                  </Time>
                </Title>
              ) : (
                <Title>
                  {getTranslation(order.prestation, intl.locale).name +
                    " " +
                    order.business.name +
                    " "}
                  <Time>
                    {intl.locale == "en"
                      ? moment(order.delivery_date).format("h:mm A")
                      : moment(order.delivery_date).format("H:mm")}
                  </Time>
                </Title>
              )}
              {!userPurchase && (
                <OptionTag>
                  {plateIndex >= order.user_menu.ordered_plates.length
                    ? 1
                    : plateIndex + 1}
                  /{order.user_menu.ordered_plates.length}
                </OptionTag>
              )}
            </Header>
            <PonctualContent>
              <Photo
                img={activePlate && activePlate.image}
                loaded={imageLoaded}
              >
                {!userPurchase && (
                  <PhotoSlider
                    position="left"
                    className="PhotoSlider"
                    onClick={this.previousIndex}
                  >
                    <FontAwesomeIcon icon="chevron-left" />
                  </PhotoSlider>
                )}
                <PhotoLink
                  to={
                    baseUrl +
                    "order/" +
                    order.id +
                    "/" +
                    moment(order.delivery_date).format("YYYY-MM-DD") +
                    "/" +
                    plateIndex +
                    "/"
                  }
                />
                {!userPurchase && (
                  <PhotoSlider
                    position="right"
                    className="PhotoSlider"
                    onClick={this.nextIndex}
                  >
                    <FontAwesomeIcon icon="chevron-right" />
                  </PhotoSlider>
                )}
                {activePlate.new && (
                  <SmallNewIndicator>
                    <FormattedMessage
                      id="calendar.new"
                      defaultMessage={`New!`}
                    />
                  </SmallNewIndicator>
                )}
                {activePlate.new_recipe && (
                  <SmallNewIndicator>
                    <FormattedMessage
                      id="calendar.new_recipe"
                      defaultMessage={`New recipe!`}
                    />
                  </SmallNewIndicator>
                )}
              </Photo>
              <PlateInfo>
                <PlateName
                  className={cx({
                    [fontColorPast]: isPassed
                  })}
                  to={
                    baseUrl +
                    "order/" +
                    order.id +
                    "/" +
                    moment(order.delivery_date).format("YYYY-MM-DD") +
                    "/" +
                    plateIndex +
                    "/"
                  }
                >
                  {intl.locale === "fr"
                    ? activePlate && activePlate.name_FR
                    : activePlate && activePlate.name}
                </PlateName>

                <Tags
                  restrictions={activePlate && activePlate.restrictions}
                  display="all"
                  size="small"
                  isPassed={isPassed}
                />
                <SpicyIndicator
                  spicyness={activePlate && activePlate.spicyness}
                />
                <PlateDescription>
                  <ShortText text={plateDescription} maxLength={100} />
                </PlateDescription>
              </PlateInfo>
              <PlateSellInfo
                className={cx(
                  {
                    [choiceMadeColor]:
                      userPurchase && userPurchase.status == "paid" && !isPassed
                  },
                  {
                    [choiceMadeColorFaded]:
                      userPurchase && userPurchase.status == "paid" && isPassed
                  },
                  {
                    [inCartColor]: userPurchase && userPurchase.status == "cart"
                  }
                )}
              >
                {userPurchase ? (
                  <StateContainer>
                    <PurchaseStateIndicator
                      current_state={userPurchase.status}
                    />
                    <span>
                      {userPurchase.status == "paid"
                        ? confirmedLabel
                        : inCartLabel}
                    </span>
                  </StateContainer>
                ) : (
                  <PriceContainer>
                    <Price
                      price={activePlate && activePlate.cost}
                      paidByBusiness={order.amount_paid_by_business}
                      free={order.is_fully_paid}
                    />
                  </PriceContainer>
                )}
                {!isPassed &&
                  (userPurchase ? (
                    (userPurchase.status != "paid" || order.is_fully_paid) && (
                      <ButtonsContainer>
                        <Button
                          onClick={() => deletePurchase(userPurchase.id)}
                          color="squash"
                          label={cancelLabel}
                          disabled={isLoading}
                        />
                      </ButtonsContainer>
                    )
                  ) : (
                    <ButtonsContainer>
                      <Button
                        onClick={() =>
                          addPurchase({
                            user: user.id,
                            order: order.id,
                            plate: activePlate && activePlate.id,
                            delivery_date: moment(order.delivery_date).format(
                              "YYYY-MM-DD"
                            )
                          })
                        }
                        icon="plus"
                        label={order.is_fully_paid ? selectLabel : addLabel}
                        disabled={isLoading || !activePlate}
                      />
                    </ButtonsContainer>
                  ))}
              </PlateSellInfo>
            </PonctualContent>
          </React.Fragment>
        )}
      </OptionCardContainer>
    );
  }
}

const appear = keyframes`
  0% {opacity: 0; margin-left:${Spacing.md};};
  100% {opacity: 1; margin-left:0;}
`;

const OptionCardContainer = styled("div")`
  background-color: ${Colors.utility.white.default};
  box-shadow: ${Shadows.level1};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.5s;
  margin-bottom: ${Spacing.md};
  min-width: 200px;
  max-width: 400px;
  color: ${props =>
    props.isPast ? Colors.utility.grey.default : Colors.utility.black.default};
  margin-right: ${props => props.marginRight};
  &:hover {
    .PhotoSlider {
      opacity: 1;
    }
    box-shadow: ${Shadows.level3};
  }
`;

const Header = styled(Link)`
  padding: ${Spacing.sm} ${Spacing.md};
  display: flex;
  flex-direction: row;
  transition: ${Animation.defaultSpeed};
  text-decoration: none;
  flex-wrap: wrap;
  background: ${props =>
    props.ispassed == true
      ? "linear-gradient(135deg,  " +
        props.primary_color +
        "50 0%, " +
        props.secondary_color +
        "50 100%)"
      : "linear-gradient(135deg,  " +
        props.primary_color +
        " 0%, " +
        props.secondary_color +
        " 100%)"};
  color: ${props =>
    props.istextcolorlight && !props.ispassed
      ? Colors.utility.white.default
      : Colors.secondary.eggplant.default};

  &:hover {
    cursor: pointer;
  }
  &:hover h4 {
    text-decoration: underline;
  }
`;

const HeaderNoChoicePast = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
  display: flex;
  flex-direction: row;
  text-decoration: none;
  flex-wrap: wrap;
  background: ${props =>
    props.ispassed == true
      ? "linear-gradient(135deg,  " +
        props.primary_color +
        "50 0%, " +
        props.secondary_color +
        "50 100%)"
      : "linear-gradient(135deg,  " +
        props.primary_color +
        " 0%, " +
        props.secondary_color +
        " 100%)"};
  color: ${props =>
    props.istextcolorlight && !props.ispassed
      ? Colors.utility.white.default
      : Colors.secondary.eggplant.default};
`;

const Title = styled("h4")`
  margin: 0;
  font-family: ${Typography.body.fontFamily};
  font-weight: bold;
  max-width: 90%;
`;

const Time = styled("span")`
  font-weight: normal;
`;

const NoChoiceMadeWarp = styled("div")`
  color: ${Colors.utility.grey.default};
  padding: ${Spacing.md};
  text-align: center;
`;

const PonctualContent = styled("div")`
  background: #fff;
`;

const Photo = styled("div")`
  background-image: url(${props =>
    props.loaded ? props.img : placeHolderImage});
  background-size: cover;
  height: 125px;
  width: 100%;
  background-color: rgba(245, 218, 173, 0.5);
  background-position: center;
  position: relative;
  // transition on mouse out
  transition: ${Animation.fastSpeed} ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const OptionTag = styled("div")`
  padding: 2px ${Spacing.sm};
  border-radius: 12px;
  font-weight: bold;
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  color: ${Colors.secondary.eggplant.darker};
  margin: 0 ${Spacing.sm} 0 0;
  position: absolute;
  right: 0px;
  z-index: 10;
  pointer-events: none;
  background: ${Colors.secondary.eggshell.default};
  border-radius: 10px;
  opacity: 1;
  flex-grow: 1;
`;

const PhotoSlider = styled("div")`
  background: ${props =>
    props.position === "left"
      ? "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0) 100%)"
      : "linear-gradient(270deg,rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0) 100%)"};
  color: ${Colors.utility.grey.default};
  height: 100%;
  width: 15%;
  opacity: 0;
  transition: ${Animation.defaultSpeed};
  line-height: 125px;
  padding-left: ${props => (props.position === "left" ? "17px" : "Opx")};
  padding-right: ${props => (props.position === "right" ? "16px" : "Opx")};
  text-align: ${props => props.position};
  font-size: 20px;
  cursor: pointer;
  z-index: 5;

  &:hover {
    background: ${props =>
      props.position === "left"
        ? "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"
        : "linear-gradient(270deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"};
    color: ${Colors.utility.black.default};
  }

  @media (max-width: 480px) {
    opacity: 1;
    background: ${props =>
      props.position === "left"
        ? "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%,rgba(255, 255, 255, 0)100%)"
        : "linear-gradient(270deg,rgba(255, 255, 255, 0.9) 0%,rgba(255, 255, 255, 0) 100%)"};
    color: ${Colors.utility.black.default};
  }
`;

const PhotoLink = styled(Link)`
  width: inherit;
  cursor: pointer;
`;

const PlateInfo = styled("div")`
  padding: 0 ${Spacing.md} ${Spacing.sm} ${Spacing.md};
  .spicy-indicator {
    padding-left: 0;
    margin-bottom: ${Spacing.sm};
  }
`;

const PlateName = styled(Link)`
  font-family: ${Typography.title.fontFamily};
  transition: ${Animation.defaultSpeed};
  color: ${Colors.secondary.eggplant.default};
  font-size: 20px;
  margin: ${Spacing.md} 0 ${Spacing.sm} 0;
  display: block;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PlateDescription = styled("div")`
  color: ${Colors.secondary.eggplant.lighter};
`;

const PlateSellInfo = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${Spacing.xs} ${Spacing.md} ${Spacing.xs} ${Spacing.md};
`;

const PriceContainer = styled("div")``;

const StateContainer = styled("div")`
  padding: ${Spacing.sm} 0 ${Spacing.xs} ${Spacing.xs};
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: ${Spacing.sm};
  }
`;

const SmallNewIndicator = styled("div")`
  height: 24px;
  display: inline-block;
  position: absolute;
  bottom: ${Spacing.md};
  left: ${Spacing.md};
  border-radius: 12px;
  text-align: center;
  line-height: 24px;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.spinach.default};
  padding: 0 ${Spacing.sm};
  background: ${Colors.primary.lettuce.default};
  font-size: 14px;
`;

const ButtonsContainer = styled("div")``;

const BreakfastColor = css`
  background: linear-gradient(135deg, #a3e5b1 0%, #dbebb0 100%);
  color: ${Colors.secondary.spinach.default};
`;
const LunchColor = css`
  background: linear-gradient(135deg, #f4af42 0%, #ffce7f 100%);
  color: ${Colors.secondary.eggplant.default};
`;
const DinnerColor = css`
  background: linear-gradient(135deg, #e4590e 0%, #ef7e41 100%);
  color: ${Colors.utility.white.default};
`;
const CocktailColor = css`
  background: linear-gradient(135deg, #9777ee 0%, #a642d9 100%);
  color: ${Colors.utility.white.default};
`;

const BreakfastColorFaded = css`
  background: linear-gradient(
    135deg,
    rgba(163, 229, 177, 0.5) 0%,
    rgba(219, 235, 176, 0.5) 100%
  );
  color: ${Colors.secondary.spinach.lighter};
`;
const LunchColorFaded = css`
  background: linear-gradient(
    135deg,
    rgba(244, 175, 66, 0.5) 0%,
    rgba(255, 206, 127, 0.5) 100%
  );
  color: ${Colors.secondary.eggplant.lighter};
`;
const DinnerColorFaded = css`
  background: linear-gradient(
    135deg,
    rgba(228, 89, 14, 0.5) 0%,
    rgba(239, 126, 65, 0.5) 100%
  );
  color: ${Colors.secondary.eggplant.lighter};
`;
const CocktailColorFaded = css`
  background: linear-gradient(
    135deg,
    rgba(151, 119, 238, 0.5) 0%,
    rgba(166, 66, 217, 0.5) 100%
  );
  color: ${Colors.utility.white.default}80;
`;

const choiceMadeColor = css`
  background: ${Colors.primary.lettuce.lighter};
`;
const choiceMadeColorFaded = css`
  background: ${Colors.primary.lettuce.lighter};
  opacity: 0.7;
`;
const inCartColor = css`
  background: ${Colors.primary.eggYolk.lighter};
  opacity: 0.9;
`;

const fontColorPast = css`
  color: ${Colors.secondary.eggplant.lighter};
`;
export default injectIntl(withDeadline(FoodOptionCard));
