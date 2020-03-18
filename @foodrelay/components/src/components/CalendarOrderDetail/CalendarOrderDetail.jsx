import React from "react";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withDeadline } from "../../hocs";
// Atoms
import TopPanel from "../TopPanel";
import ShortText from "../ShortText";
import Tags from "../Tags";
import PurchaseStateIndicator from "../PurchaseStateIndicator";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import IconButton from "../IconButton";
import Price from "../Price";
import CalendarPrestation from "../CalendarPrestation";
import SpicyIndicator from "../SpicyIndicator";
import PlateTypeIndicator from "../PlateTypeIndicator";
import { getTranslation } from "../../i18n/utils.js";
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

let placeHolderImage = "../img/placeholder-3.svg";

let isTagsExist = (restrictions, display) => {
  let tagsExist = false;
  if (
    display == "diets" &&
    (restrictions.is_vegan ||
      restrictions.is_vegetarian ||
      restrictions.is_gluten_free ||
      !restrictions.has_gluten)
  ) {
    tagsExist = true;
  }
  if (
    display == "allergens" &&
    (restrictions.has_milk ||
      restrictions.has_gluten ||
      restrictions.is_gluten_free == false ||
      restrictions.has_soy ||
      restrictions.has_shellfish ||
      restrictions.has_corn ||
      restrictions.has_nuts ||
      restrictions.has_eggs ||
      restrictions.has_peanuts ||
      restrictions.has_pork ||
      restrictions.has_fish ||
      restrictions.has_alcohol)
  ) {
    tagsExist = true;
  }
  return tagsExist;
};

class CalendarOrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plateIndex: 0,
      imageLoaded: false,
      userPurchase: null,
      allOptionsShownMobile: false
    };
  }

  componentWillMount() {
    this.setState({ imageLoaded: true });
    if (this.props.purchases) {
      let userPurchase = this.props.purchases.find(
        p => p.user && p.user.id == this.props.user.id
      );
      if (userPurchase) {
        this.setState({ userPurchase: userPurchase });
        this.setState({
          plateIndex: this.props.order.assigned_menu_plates.findIndex(
            plate => plate.id == userPurchase.plate.id
          )
        });
      } else if (
        this.props.plateIndexShown &&
        this.props.order &&
        this.props.order.user_menu &&
        this.props.order.user_menu.ordered_plates &&
        this.props.plateIndexShown <
          this.props.order.user_menu.ordered_plates.length
      ) {
        this.setState({ plateIndex: this.props.plateIndexShown });
      } else {
        this.setState({ plateIndex: 0 });
        this.setState({ allOptionsShownMobile: true });
      }
    }
    if (!this.props.purchases || this.props.purchases.length == 0) {
      if (
        this.props.plateIndexShown &&
        this.props.order &&
        this.props.order.user_menu &&
        this.props.order.user_menu.ordered_plates &&
        this.props.plateIndexShown <
          this.props.order.user_menu.ordered_plates.length
      ) {
        this.setState({ plateIndex: this.props.plateIndexShown });
      } else {
        this.setState({ plateIndex: 0 });
        this.setState({ allOptionsShownMobile: true });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
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

  showPlate = index => {
    if (
      this.props.order &&
      this.props.order.user_menu &&
      this.props.order.user_menu.ordered_plates
    ) {
      this.setState({ imageLoaded: false });
      let image = new Image();
      image.src = this.props.order.user_menu.ordered_plates[index].image;
      image.onload = () => {
        this.setState({ imageLoaded: true });
        this.setState({ plateIndex: index });
      };
    }
  };

  showAllOptions = () => {
    this.setState({ allOptionsShownMobile: true });
  };

  hideAllOptions = () => {
    this.setState({ allOptionsShownMobile: false });
  };

  render() {
    const {
      order,
      purchases,
      user,
      addPurchase,
      deletePurchase,
      changePurchase,
      open,
      intl,
      plateIndexShown,
      baseUrl,
      closeLink,
      deadlines,
      isLoading
    } = this.props;

    const {
      plateIndex,
      imageLoaded,
      userPurchase,
      allOptionsShownMobile
    } = this.state;

    let activePlate = null;
    let isPassed = deadlines.ordering.passed;

    if (order.assigned_menu_plates && order.user_menu.ordered_plates) {
      if (userPurchase) {
        activePlate = order.assigned_menu_plates[plateIndex];
      } else if (plateIndex >= order.user_menu.ordered_plates.length) {
        activePlate = order.user_menu.ordered_plates[0];
      } else {
        activePlate = order.user_menu.ordered_plates[plateIndex];
      }
    }

    const addPurchaseLabel = intl.formatMessage({
      id: "button.add_purchase"
    });
    const selectPurchaseLabel = intl.formatMessage({
      id: "button.select_purchase"
    });
    const changeLabel = intl.formatMessage({
      id: "button.change_purchase"
    });
    const confirmedLabel = intl.formatMessage({
      id: "status.confirmed_choice"
    });
    const inCartLabel = intl.formatMessage({
      id: "status.in_cart"
    });
    const cancelLabel = intl.formatMessage({
      id: "button.cancel_purchase"
    });
    let optionsListTitle = "";
    if (order && order.user_menu && order.user_menu.ordered_plates) {
      optionsListTitle = intl.formatMessage(
        { id: "title.options_list" },
        {
          optionsNumber: order.user_menu.ordered_plates.length
        }
      );
    }
    const viewAllOptionsLabel = intl.formatMessage({
      id: "title.view_all_options"
    });

    let plateDescription =
      intl.locale === "fr"
        ? activePlate.description_FR
        : activePlate.description;

    return (
      <TopPanel
        open={open}
        size="big"
        closeLink={closeLink}
        headerContent={
          <Header
            primary_color={order.prestation.color}
            secondary_color={lightenColor(order.prestation.color)}
            istextcolorlight={isTextColorLight(order.prestation.color)}
            ispassed={isPassed}
          >
            {order.name ? (
              <Title>{order.name + " " + order.business.name}</Title>
            ) : (
              <Title>
                {getTranslation(order.prestation, intl.locale).name +
                  " " +
                  order.business.name +
                  " "}
              </Title>
            )}
            <Time>
              {intl.locale == "en"
                ? moment(order.delivery_date).format("LL") +
                  " • " +
                  moment(order.delivery_date).format("h:mm A")
                : moment(order.delivery_date).format("LL") +
                  " • " +
                  moment(order.delivery_date).format("H:mm")}
            </Time>
            <CloseButton>
              <ButtonLink icon="times" to={closeLink} />
            </CloseButton>
          </Header>
        }
      >
        <Container>
          {!userPurchase && (
            <Choices className={allOptionsShownMobile && "open"}>
              <ChoicesScroll>
                <ListTitle>{optionsListTitle}</ListTitle>
                {order.user_menu.ordered_plates &&
                  order.user_menu.ordered_plates.map((plate, k) => (
                    <Plate
                      key={k}
                      onClick={() => {
                        this.showPlate(k);
                        this.hideAllOptions();
                      }}
                      active={k == plateIndex}
                    >
                      <Photo className="photo" img={plate.image} height="125px">
                        <Indicators spacing={Spacing.md}>
                          {plate.new && (
                            <SmallNewIndicator>
                              <FormattedMessage
                                id="calendar.new"
                                defaultMessage={`New!`}
                              />
                            </SmallNewIndicator>
                          )}
                          {plate.new_recipe && (
                            <SmallNewIndicator>
                              <FormattedMessage
                                id="calendar.new_recipe"
                                defaultMessage={`New recipe!`}
                              />
                            </SmallNewIndicator>
                          )}
                        </Indicators>
                      </Photo>
                      <ChoiceDetails>
                        <h4>
                          {intl.locale === "fr" ? plate.name_FR : plate.name}
                        </h4>
                      </ChoiceDetails>
                    </Plate>
                  ))}
              </ChoicesScroll>
            </Choices>
          )}
          <PlateInfo>
            {!userPurchase && (
              <ShowAllButton onClick={this.showAllOptions}>
                <FontAwesomeIcon icon="arrow-left" />
                {viewAllOptionsLabel}
              </ShowAllButton>
            )}
            <Photo
              img={activePlate.image}
              height={isMobile ? "200px" : "300px"}
            >
              <Indicators spacing={Spacing.lg}>
                {activePlate.new && (
                  <NewIndicator>
                    <FormattedMessage
                      id="calendar.new"
                      defaultMessage={`New!`}
                    />
                  </NewIndicator>
                )}
                {activePlate.new_recipe && (
                  <NewIndicator>
                    <FormattedMessage
                      id="calendar.new_recipe"
                      defaultMessage={`New recipe!`}
                    />
                  </NewIndicator>
                )}
                <PlateTypeIndicator plate={activePlate} />
              </Indicators>
            </Photo>
            <PlateDetails>
              <Row className="main-row">
                <LeftCol>
                  <MainDetails>
                    <PlateName>
                      {intl.locale === "fr"
                        ? activePlate.name_FR
                        : activePlate.name}
                    </PlateName>
                    <SpicyIndicator spicyness={activePlate.spicyness} />
                    <PlateDescription>{plateDescription}</PlateDescription>
                    {isTagsExist(activePlate.restrictions, "diets") && (
                      <Section>
                        <SmallSectionTitle>
                          <FormattedMessage
                            id="title.diet"
                            defaultMessage={`Diets`}
                          />
                        </SmallSectionTitle>
                        <Tags
                          restrictions={activePlate.restrictions}
                          display="diet"
                          size="small"
                        />
                      </Section>
                    )}
                    {isTagsExist(activePlate.restrictions, "allergens") && (
                      <Section>
                        <SmallSectionTitle>
                          <FormattedMessage
                            id="title.allergens"
                            defaultMessage={`Allergens`}
                          />
                        </SmallSectionTitle>
                        <Tags
                          restrictions={activePlate.restrictions}
                          display="allergy"
                          size="small"
                        />
                      </Section>
                    )}
                  </MainDetails>
                  <PlateSellInfo
                    className={cx(
                      {
                        [ConfirmedColor]:
                          userPurchase &&
                          userPurchase.status == "paid" &&
                          !isPassed
                      },
                      {
                        [PastConfirmedColor]:
                          userPurchase &&
                          userPurchase.status == "paid" &&
                          isPassed
                      },
                      {
                        [InCartColor]:
                          userPurchase && userPurchase.status == "cart"
                      }
                    )}
                  >
                    {userPurchase ? (
                      <StateContainer>
                        <PurchaseStateIndicator current_state="paid" />
                        <h3>
                          {userPurchase.status == "paid"
                            ? confirmedLabel
                            : inCartLabel}
                        </h3>
                      </StateContainer>
                    ) : (
                      <PriceContainer>
                        <Price
                          price={activePlate.cost}
                          paidByBusiness={order.amount_paid_by_business}
                          free={order.is_fully_paid}
                        />
                      </PriceContainer>
                    )}
                    {!isPassed &&
                      (userPurchase ? (
                        (userPurchase.status != "paid" ||
                          order.is_fully_paid) && (
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
                                plate: activePlate.id,
                                delivery_date: moment(
                                  order.delivery_date
                                ).format("YYYY-MM-DD")
                              })
                            }
                            icon="plus"
                            label={
                              order.is_fully_paid
                                ? selectPurchaseLabel
                                : addPurchaseLabel
                            }
                            disabled={isLoading || !activePlate}
                          />
                        </ButtonsContainer>
                      ))}
                  </PlateSellInfo>
                  <MainDetails>
                    <Section>
                      <SectionTitle>
                        <FormattedMessage
                          id="title.ingredients"
                          defaultMessage={`Ingredients`}
                        />
                      </SectionTitle>
                      {(activePlate.base !== "" ||
                        activePlate.base_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.base_subtitle"
                              defaultMessage={`Base`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.base_FR
                              : activePlate.base}
                          </IngredientContent>
                        </div>
                      )}
                      {(activePlate.protein !== "" ||
                        activePlate.protein_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.protein_subtitle"
                              defaultMessage={`Protein`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.protein_FR
                              : activePlate.protein}
                          </IngredientContent>
                        </div>
                      )}
                      {(activePlate.vegetables !== "" ||
                        activePlate.vegetables_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.veggies_subtitle"
                              defaultMessage={`Vegetables`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.vegetables_FR
                              : activePlate.vegetables}
                          </IngredientContent>
                        </div>
                      )}
                      {(activePlate.side !== "" ||
                        activePlate.side_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.side_subtitle"
                              defaultMessage={`Side`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.side_FR
                              : activePlate.side}
                          </IngredientContent>
                        </div>
                      )}
                      {(activePlate.sauce !== "" ||
                        activePlate.sauce_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.sauce_subtitle"
                              defaultMessage={`Sauce`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.sauce_FR
                              : activePlate.sauce}
                          </IngredientContent>
                        </div>
                      )}
                      {(activePlate.seasoning !== "" ||
                        activePlate.seasoning_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.seasoning_subtitle"
                              defaultMessage={`Seasoning`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.seasoning_FR
                              : activePlate.seasoning}
                          </IngredientContent>
                        </div>
                      )}
                      {(activePlate.garnish !== "" ||
                        activePlate.garnish_FR !== "") && (
                        <div>
                          <SmallSectionTitle>
                            <FormattedMessage
                              id="plate.garnish_subtitle"
                              defaultMessage={`Garnish`}
                            />
                          </SmallSectionTitle>
                          <IngredientContent>
                            {intl.locale == "fr"
                              ? activePlate.garnish_FR
                              : activePlate.garnish}
                          </IngredientContent>
                        </div>
                      )}
                    </Section>
                    {activePlate.weight > 0 && (
                      <Section>
                        <SectionTitle>
                          <FormattedMessage
                            id="title.weight"
                            defaultMessage={`Weight`}
                          />
                        </SectionTitle>
                        <IngredientContent>
                          {activePlate.weight} g
                        </IngredientContent>
                      </Section>
                    )}
                  </MainDetails>
                </LeftCol>
                <SecondaryDetails>
                  <h3>
                    <FormattedMessage
                      id="philsophy.title"
                      defaultMessage={`This FoodRealy meal is`}
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="philosophy.hand_made"
                      defaultMessage={`hand-made this morning in Montreal using fresh ingredients
                      from local suppliers and producers`}
                    />
                  </p>
                  <h3 className="and">&</h3>
                  <p>
                    <FormattedMessage
                      id="philosophy.personalized"
                      defaultMessage={`personalized to your taste and preferences.`}
                    />
                  </p>
                </SecondaryDetails>
              </Row>
            </PlateDetails>
          </PlateInfo>
        </Container>
      </TopPanel>
    );
  }
}

// styles

const Container = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

const Header = styled("div")`
  padding: ${Spacing.md};
  transition: ${Animation.defaultSpeed};
  text-decoration: none;
  color: ${Colors.secondary.eggplant.default};
  width: 100%;
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

const CloseButton = styled("div")`
  position: absolute;
  top: ${Spacing.md};
  right: ${Spacing.md};

  .button-link {
    border-radius: 20px;
    padding: ${Spacing.sm} 12px;
    svg {
      margin-right: 0;
    }
  }
`;

const Title = styled("h4")`
  margin: 0;
  font-family: ${Typography.body.fontFamily};
  font-weight: bold;
  border-bottom: 2px solid;
  border-color: transparent;
`;

const Time = styled("div")`
  margin-right: ${Spacing.sm};
  font-family: ${Typography.body.fontFamily};
`;

const ShowAllButton = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
  font-weight: bold;
  background: ${Colors.secondary.eggshell.default};
  color: ${Colors.secondary.eggplant.default};
  display: none;

  svg {
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

const PlateInfo = styled("div")`
  flex: 2;
  background: #fff;
  position: relative;
  z-index: 10;
  overflow-y: scroll;
  @media (max-width: 480px) {
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
  }
`;

const ChoiceDetails = styled("div")`
  padding: ${Spacing.sm} ${Spacing.md};
`;

const PlateDetails = styled("div")`
  .main-row {
    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

const Choices = styled("div")`
  flex: 1;
  box-sizing: border-box;
  max-width: 300px;
  background: ${Colors.secondary.eggshell.default};
  overflow-x: hidden;
  transition: ${Animation.defaultSpeed};
  @media (max-width: 480px) {
    margin-left: -600px;
    z-index: 1000;

    &.open {
      margin-left: 0;
      display: block;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100%;
      z-index: 100;
    }
  }
`;

const ChoicesScroll = styled("div")`
  padding: 0 ${Spacing.sm} ${Spacing.md} ${Spacing.md};
  box-sizing: border-box;
  margin-right: 8px;
  height: 100%;
  overflow-x: visible;
  overflow-y: scroll;
  @media (max-width: 480px) {
    padding: 0 ${Spacing.sm} ${Spacing.md} ${Spacing.sm};
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-right: 0;
  }
`;

const ListTitle = styled("h3")`
  font-size: 26px;
  font-family: ${Typography.title.fontFamily};
  font-weight: bold;
  color: ${Colors.secondary.eggplant.default};
  margin: ${Spacing.md} 0;
  @media (max-width: 480px) {
    margin-left: ${Spacing.sm};
    width: 100%;
  }
`;

const Plate = styled("div")`
  cursor: pointer;
  border-radius: 4px;
  background-color: ${Colors.utility.white.default};
  box-shadow: ${props => (props.active ? Shadows.level3 : Shadows.level1)};
  margin-bottom: ${Spacing.md};
  position: relative;
  transition: ${Animation.defaultSpeed};

  .photo {
    opacity: ${props => (props.active ? "1" : "0.7")};
    transition: ${Animation.defaultSpeed};
  }

  &:hover {
    box-shadow: ${Shadows.level3};

    h4 {
      text-decoration: underline;
    }

    .photo {
      opacity: 1;
    }
  }

  h4 {
    margin: 0;
    font-family: ${Typography.title.fontFamily};
    color: ${Colors.secondary.eggplant.default};
    font-size: 20px;
  }

  @media (max-width: 480px) {
    max-width: calc(50% - 16px);
    min-width: calc(50% - 16px);
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const Photo = styled("div")`
  background-image: url(${props => props.img});
  background-size: cover;
  height: ${props => props.height};
  width: 100%;
  background-color: rgba(245, 218, 173, 0.5);
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PlateName = styled("div")`
  font-family: ${Typography.title.fontFamily};
  transition: ${Animation.defaultSpeed};
  font-weight: bold;
  line-height: 1em;
  color: ${Colors.secondary.eggplant.default};
  font-size: 40px;
  margin: 0 0 ${Spacing.sm} 0;
  display: block;
  text-decoration: none;
`;

const PlateDescription = styled("div")`
  color: ${Colors.secondary.eggplant.lighter};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  padding-top: ${Spacing.sm};
  word-break: break-all;
`;

const PlateSellInfo = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${Spacing.sm} ${Spacing.lg};
`;

const PriceContainer = styled("div")``;

const ButtonsContainer = styled("div")``;

const MainDetails = styled("div")`
  padding: ${Spacing.lg};
`;

const LeftCol = styled("div")`
  flex: 2;
`;

const SecondaryDetails = styled("div")`
  flex: 1;
  padding: ${Spacing.lg};
  border-left: 2px solid ${Colors.secondary.mushrooms.default};
  color: ${Colors.secondary.eggplant.default};
  box-sizing: border-box;

  h3 {
    font-size: 20px;
    font-size: 26px;
    line-height: 24px;
    margin-top: 0;
    font-family: ${Typography.title.fontFamily};
    font-weight: bold;
  }

  p {
    color: ${Colors.secondary.eggplant.lighter};
    font-family: ${Typography.body.fontFamily};
    font-size: ${Typography.body.fontSize};
  }

  .and {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled("h3")`
  border-bottom: 2px solid ${Colors.secondary.mushrooms.default};
  padding-bottom: ${Spacing.sm};
  color: ${Colors.secondary.eggplant.default};
`;

const SmallSectionTitle = styled("h4")`
  color: ${Colors.primary.eggYolk.darker};
  font-size: 14px;
  margin-bottom: ${Spacing.sm};
  margin-top: ${Spacing.md};
  opacity: 0.7;
  font-weight: 400;
`;

const Section = styled("div")`
  padding: 0;
`;

const IngredientContent = styled("h3")`
  font-weight: 400;
  margin-top: 0;
  margin-bottom: ${Spacing.md};
  color: ${Colors.secondary.eggplant.lighter};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
`;

const StateContainer = styled("div")`
  padding: ${Spacing.sm} 0 ${Spacing.xs} ${Spacing.xs};
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    margin: 0 0 0 ${Spacing.md};
  }
`;

const NewIndicator = styled("div")`
  height: 35px;
  display: inline-block;
  border-radius: 16px;
  text-align: center;
  line-height: 35px;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.spinach.default};
  padding: 0 ${Spacing.md};
  background: ${Colors.primary.lettuce.default};
`;
const SmallNewIndicator = styled("div")`
  height: 24px;
  display: inline-block;
  border-radius: 12px;
  text-align: center;
  line-height: 24px;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.spinach.default};
  padding: 0 ${Spacing.sm};
  background: ${Colors.primary.lettuce.default};
  font-size: 14px;
`;

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

const ConfirmedColor = css`
  background: ${Colors.primary.lettuce.lighter};
  color: ${Colors.secondary.spinach.default};
`;
const PastConfirmedColor = css`
  background: ${Colors.primary.lettuce.lighter};
  opacity: 0.7;
  color: ${Colors.secondary.spinach.default};
`;
const InCartColor = css`
  background: ${Colors.primary.eggYolk.lighter};
  opacity: 0.9;
  color: ${Colors.secondary.eggplant.default};
`;

const Indicators = styled("div")`
  width: 100%;
  position: absolute;
  bottom: ${props => props.spacing};
  left: ${props => props.spacing};
  div {
    vertical-align: top;
    margin-right: ${Spacing.sm};
  }
`;

export default injectIntl(withDeadline(CalendarOrderDetail));
