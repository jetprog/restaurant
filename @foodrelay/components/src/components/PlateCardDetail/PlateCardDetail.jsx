import React from "react";
import styled, { css, cx } from "react-emotion";
import Tags from "../Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class PlateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ingredients_visible: false };
  }

  componentWillMount() {}

  showIngredients() {
    this.setState({ ingredients_visible: true });
  }

  hideIngredients() {
    this.setState({ ingredients_visible: false });
  }

  render() {
    const { item, onClick, locale, width = "25%" } = this.props;

    if (item) {
      let has_separate_ingredients = false;
      if (
        item.seasoning !== "" ||
        item.seasoning_FR !== "" ||
        item.base !== "" ||
        item.base_FR !== "" ||
        item.vegetables !== "" ||
        item.vegetables_FR !== "" ||
        item.protein !== "" ||
        item.protein_FR !== "" ||
        item.sauce !== "" ||
        item.sauce_FR !== "" ||
        item.side !== "" ||
        item.side_FR !== "" ||
        item.garnish !== "" ||
        item.garnish_FR !== ""
      ) {
        has_separate_ingredients = true;
      }

      return (
        <OuterWrap onClick={() => onClick(item)} width={width}>
          <PlateContainer image={item.image} />
          <Title>{locale == "fr" ? item.name_FR : item.name}</Title>
          {this.state.ingredients_visible ? (
            <InsideWrap>
              <Tags restrictions={item.restrictions} />
              {has_separate_ingredients ? (
                <Ingredients>
                  {(item.base !== "" || item.base_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.base_subtitle"
                          defaultMessage={`Base`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {locale == "fr" ? item.base_FR : item.base}
                      </IngredientContent>
                    </div>
                  )}
                  {(item.protein !== "" || item.protein_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.protein_subtitle"
                          defaultMessage={`Protein`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {locale == "fr" ? item.protein_FR : item.protein}
                      </IngredientContent>
                    </div>
                  )}
                  {(item.vegetables !== "" || item.vegetables_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.veggies_subtitle"
                          defaultMessage={`Vegetables`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {intl.locale == "fr"
                          ? item.vegetables_FR
                          : item.vegetables}
                      </IngredientContent>
                    </div>
                  )}
                  {(item.side !== "" || item.side_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.side_subtitle"
                          defaultMessage={`Side`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {locale == "fr" ? item.side_FR : item.side}
                      </IngredientContent>
                    </div>
                  )}
                  {(item.sauce !== "" || item.sauce_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.sauce_subtitle"
                          defaultMessage={`Sauce`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {locale == "fr" ? item.sauce_FR : item.sauce}
                      </IngredientContent>
                    </div>
                  )}
                  {(item.seasoning !== "" || item.seasoning_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.seasoning_subtitle"
                          defaultMessage={`Seasoning`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {locale == "fr" ? item.seasoning_FR : item.seasoning}
                      </IngredientContent>
                    </div>
                  )}
                  {(item.garnish !== "" || item.garnish_FR !== "") && (
                    <div>
                      <IngredientTitle>
                        <FormattedMessage
                          id="plate.garnish_subtitle"
                          defaultMessage={`Garnish`}
                        />
                      </IngredientTitle>
                      <IngredientContent>
                        {locale == "fr" ? item.garnish_FR : item.garnish}
                      </IngredientContent>
                    </div>
                  )}
                </Ingredients>
              ) : (
                <Ingredients>
                  <IngredientTitle>
                    <FormattedMessage
                      id="plate.ingredients_subtitle"
                      defaultMessage={`Ingredients`}
                    />
                  </IngredientTitle>
                  <IngredientContent>
                    {locale == "fr" ? item.description_FR : item.description}
                  </IngredientContent>
                </Ingredients>
              )}
              <IngredientToggle onClick={() => this.hideIngredients()}>
                Hide Ingredients
                <FontAwesomeIcon icon="chevron-up" />
              </IngredientToggle>
            </InsideWrap>
          ) : (
            <div className="plate-card-choice-show-ingredients">
              <IngredientToggle onClick={() => this.showIngredients()}>
                Show Ingredients
                <FontAwesomeIcon icon="chevron-down" />
              </IngredientToggle>
            </div>
          )}
        </OuterWrap>
      );
    } else {
      return <div />;
    }
  }
}

const InsideWrap = styled("div")``;

const OuterWrap = styled("div")`
  flex: 1;
  max-width: calc(${props => props.width} - 24px);
  min-width: calc(${props => props.width} - 24px);
  margin: 0 12px 24px 12px;
  @media (max-width: 480px) {
    min-width: calc(100% - 24px);
    max-width: calc(100% - 24px);
  }
`;

const IngredientToggle = styled("span")`
  display: inline-block;
  opacity: 0.8;
  font-weight: bold;
  margin: 8px 0;
  cursor: pointer;

  svg {
    margin-left: ${Spacing.sm};
    position: relative;
    top: 2px;
    transition: ${Animation.fastSpeed};
  }

  &:hover {
    text-decoration: underline;
  }
`;

const PlateContainer = styled("div")`
  background-color: #f0f0f0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  padding: ${Spacing.lg};
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  min-height: 170px;
  cursor: pointer;
`;

const Title = styled("h3")`
  margin: 16px 0 0 0;
  color: #333132;
  position: relative;
  z-index: 10;
`;

const IngredientTitle = styled("h4")`
  color: #868181;
  font-size: 14px;
  margin-bottom: 2px;
  margin-top: ${Spacing.lg};
  opacity: 0.7;
  font-weight: 200;
`;

const Ingredients = styled("div")`
  padding: 0;
`;

const IngredientContent = styled("h3")`
  font-weight: 400;
  margin-top: 0;
  margin-bottom: ${Spacing.md};
`;

export default PlateCard;
