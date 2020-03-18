import React from "react";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dollars from "../Dollars";
import SpicyIndicator from "../SpicyIndicator";
import Tags from "../Tags";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const PlateContainer = ({
  item,
  total,
  locale,
  persona,
  hotTooltip,
  coldTooltip
}) => (
  <PlateContainerWrapper>
    <Picture image={item.image}>
      {total !== null && total > 0 && <Total total={total}>{total}</Total>}
    </Picture>
    <PlateMainContent>
      <Row>
        <Title>{locale == "fr" ? item.name_FR : item.name}</Title>
      </Row>
      <Tags
        restrictions={item && item.restrictions}
        display="all"
        size="small"
      />
      <Indicators>
        <SpicyIndicator spicyness={item && item.spicyness} />
      </Indicators>
      {item.description && (
        <Description>
          {locale == "fr" ? item.description_FR : item.description}
        </Description>
      )}
    </PlateMainContent>
    <PlateContent>
      <Row>
        <InfoBar>
          <MealTempIcon
            title={item.is_hot_meal ? hotTooltip : coldTooltip}
            className={cx(
              {
                [HotPlate]:
                  (item.category == "normal" && item.is_hot_meal) ||
                  item.category == "hot_plate"
              },
              {
                [Salad]:
                  (item.category == "normal" && !item.is_hot_meal) ||
                  item.category == "salad"
              },
              { [Sandwich]: item.category == "sandwich" }
            )}
          >
            <FontAwesomeIcon
              icon={
                item.category == "normal"
                  ? item.is_hot_meal
                    ? "soup"
                    : "salad"
                  : item.category == "hot_plate"
                  ? "soup"
                  : item.category == "salad"
                  ? "salad"
                  : item.category == "sandwich" && "sandwich"
              }
            />
          </MealTempIcon>
          {persona == "manager" &&
            item.restrictions &&
            item.restrictions.is_variant && <VariantTag>Variant</VariantTag>}
        </InfoBar>
        {persona == "manager" && (
          <Price>
            <Dollars cents={item.cost} />
          </Price>
        )}
      </Row>
    </PlateContent>
  </PlateContainerWrapper>
);

class PlateCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      item,
      onClick,
      to,
      width = "25%",
      persona,
      total,
      intl
    } = this.props;

    const hotTooltip = intl.formatMessage({ id: "plateCard.hot" });
    const coldTooltip = intl.formatMessage({ id: "plateCard.cold" });

    if (item) {
      if (to) {
        return (
          <LinkCard to={to} width={width}>
            <PlateContainer
              item={item}
              locale={intl.locale}
              total={total}
              hotTooltip={hotTooltip}
              coldTooltip={coldTooltip}
              persona={persona}
            />
          </LinkCard>
        );
      } else {
        return (
          <ClickableCard
            onClick={
              onClick
                ? () => onClick(item)
                : () => console.log("no click action")
            }
            width={width}
          >
            <PlateContainer
              item={item}
              locale={intl.locale}
              total={total}
              hotTooltip={hotTooltip}
              coldTooltip={coldTooltip}
              persona={persona}
            />
          </ClickableCard>
        );
      }
    } else {
      return <div />;
    }
  }
}

// Styles

const ClickableCard = styled("div")`
  flex: 1;
  max-width: calc(${props => props.width} - ${Spacing.lg});
  min-width: calc(${props => props.width} - ${Spacing.lg});
  margin: 0 12px ${Spacing.lg} 12px;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  @media (max-width: 480px) {
    min-width: calc(100% - ${Spacing.lg});
    max-width: calc(100% - ${Spacing.lg});
  }
`;

const LinkCard = styled(Link)`
  flex: 1;
  max-width: calc(${props => props.width} - ${Spacing.lg});
  min-width: calc(${props => props.width} - ${Spacing.lg});
  display: block;
  text-decoration: none;
  margin: 0 12px ${Spacing.lg} 12px;
  @media (max-width: 480px) {
    min-width: calc(100% - ${Spacing.lg});
    max-width: calc(100% - ${Spacing.lg});
  }
`;

const PlateContainerWrapper = styled("div")`
  background: ${Colors.utility.white.default};
  transition: ${Animation.defaultSpeed};
  box-shadow: ${Shadows.level1};
  border-radius: ${BorderRadius.sm};
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 274px;

  &:hover {
    box-shadow: ${Shadows.level3};
  }
`;

const PlateContent = styled("div")`
  padding: 12px ${Spacing.md};
`;

const PlateMainContent = styled("div")`
  padding: 12px ${Spacing.md};
  border-bottom: 2px solid ${Colors.secondary.eggshell.default};
`;

const InfoBar = styled("div")`
  flex: 2;
`;

const Indicators = styled("div")`
  display: flex;
  flex-direction: row;
  padding-top: ${Spacing.sm};
  .spicy-indicator {
    padding-left: 0;
  }
`;

const Price = styled("div")`
  flex: 1;
  text-align: right;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.utility.black.default};
  font-size: 20px;
`;

const Picture = styled("div")`
  background-color: ${Colors.primary.eggYolk.default};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  min-height: 170px;
  position: relative;
`;

const MealTempIcon = styled("div")`
  width: 25px;
  height: 25px;
  line-height: 27px;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  margin-right: ${Spacing.sm};

  svg {
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
`;
const HotPlate = css`
  background: ${Colors.primary.squash.default};
`;
const Salad = css`
  background: ${Colors.secondary.eatYourGreens.default};

  @media (max-width: 480px) {
    svg[date-icon="salad"] {
      left: ${Spacing.sm};
      bottom: 13px;
      font-size: 13px;
    }
  }
`;

const Sandwich = css`
  background: ${Colors.primary.eggYolk.default};

  @media (max-width: 480px) {
    svg[date-icon="sandwich"] {
      left: ${Spacing.sm};
      bottom: 13px;
      font-size: 13px;
    }
  }
`;

const VariantTag = styled("div")`
  border-radius: 12px;
  font-size: 14px;
  background: #fff;
  padding: 4px ${Spacing.sm};
  font-weight: bold;
  color: ${Colors.utility.black.default};
  background: ${Colors.secondary.eggshell.default};
  display: inline-block;
  vertical-align: top;
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Total = styled("div")`
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 17px;
  text-align: center;
  background: ${props => (props.total > 0 ? "#a3e5b1" : "#fff")};
  color: ${Colors.utility.black.default};
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  margin-right: ${Spacing.sm};
  padding: 0 12px 0 12px;
  box-sizing: border-box;
  position: absolute;
  left: 12px;
  top: 12px;
`;

const Title = styled("h3")`
  font-family: "Garamond";
  margin: 0;
  color: ${Colors.secondary.eggplant.default};
  line-height: 20px;
  position: relative;
  font-size: 20px;
  z-index: 10;
  display: inline-block;
  flex: 1;
  flex-grow: 3;
  min-height: 40px;
  margin-bottom: ${Spacing.md};
`;

const Description = styled("p")`
  color: ${Colors.secondary.eggplant.default};
  opacity: 0.5;
  margin: 0;
  font-size: 13px;
  padding: ${Spacing.sm} 0 0 0;
`;

export default injectIntl(PlateCard);
