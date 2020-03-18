import React from "react";
import styled from "react-emotion";
import { NavLink } from "react-router-dom";
import {
  Spacing,
  Colors,
  Shadows,
  BorderRadius,
  Typography
} from "../../rules";
import Title from "../../components/Title";
import Color from "../components/Color";
import logo from "../../img/lockup-dark.svg";

class VisualIdentityPage extends React.Component {
  render() {
    const { match, auth, location } = this.props;
    return (
      <Row>
        <Nav>
          <NavLink to="/identity/">Visual Identity</NavLink>
          <ul>
            <li>
              <NavLink to="/identity/#slogan">Slogan</NavLink>
            </li>
            <li>
              <NavLink to="/identity/#logotype">Logotype</NavLink>
            </li>
            <li>
              <NavLink to="/identity/#typography">Typography</NavLink>
            </li>
            <li>
              <NavLink to="/identity/#color">Color</NavLink>
            </li>
          </ul>
        </Nav>
        <Content>
          <Section color={Colors.secondary.mushrooms.default}>
            <Title text="Visual Identity" />
          </Section>
          <Section color={Colors.secondary.mushrooms.default}>
            <Title text="Slogan" level="2" />
            <Row>
              <Column flex="1">
                <BigText>
                  Feeding <br />
                  Company <br />
                  Culture
                </BigText>
              </Column>
              <Column flex="1">
                <BigText>
                  Nourrir <br />
                  la culture <br />
                  d'entreprise
                </BigText>
              </Column>
            </Row>
            <Hint>
              The FoodRelay slogan, presented here in english & french is used
              to present our mission and vision in a single sentence, in
              marketing applications mostly.
            </Hint>
          </Section>
          <Section>
            <Title text="Logotype" level="2" />
            <img src={logo} />
            <Hint>
              The three circles of the FoodRelay logo represents the three
              stakeholders in the process of serving personalized food for
              groups. The connecting line is the FoodRelay team and products
              making the link between all these in order to create a better
              experience for all.
            </Hint>
          </Section>
          <Section color={Colors.secondary.eggshell.default}>
            <Title text="Typography" level="2" />
            <Desc>
              The FoodRelay design system includes two typefaces and a
              typographic scale with a clear hierarchy to easily structure text
              content.
            </Desc>
            <FontSize size={Typography.largeTitle}>
              Perfectly ripe avocados don't exist
            </FontSize>
            <FontSize size={Typography.title}>
              Perfectly ripe avocados don't exist
            </FontSize>
            <FontSize size={Typography.body}>
              Perfectly ripe avocados don't exist
            </FontSize>
            <FontSize size={Typography.small}>
              Perfectly ripe avocados don't exist
            </FontSize>
            <FontSize size={Typography.extraSmall}>
              Perfectly ripe avocados don't exist
            </FontSize>
            <Hint>
              In terms of type, the FoodRelay identity uses two font families:
              Garamond and Montserrat. Garamond is the title font and is mostly
              used in bold. Montserrat is used in a variety of weights depending
              on the situation, it can be used in bold for subtitles or in
              regular for body copy or small print.
            </Hint>
            <Title text="Typographic scale" level="2" />
          </Section>
          <Section>
            <Title text="Color Palette" level="2" />
            <Desc>The color palette of FoodRelay is warm and rich.</Desc>
            <SubTitle>Primary Colors</SubTitle>
            <Row>
              <Color color={Colors.primary.cherry} colorName="Cherry" />
              <Color color={Colors.primary.squash} colorName="Squash" />
              <Color color={Colors.primary.eggYolk} colorName="Egg Yolk" />
              <Color color={Colors.primary.lettuce} colorName="Lettuce" />
            </Row>
            <SubTitle>Secondary Colors</SubTitle>
            <Row>
              <Color color={Colors.secondary.eggplant} colorName="Eggplant" />
              <Color color={Colors.secondary.spinach} colorName="Spinach" />
              <Color
                color={Colors.secondary.eatYourGreens}
                colorName="Eat Your Greens"
              />
              <Color color={Colors.secondary.mushrooms} colorName="Mushrooms" />
              <Color color={Colors.secondary.eggshell} colorName="Eggshell" />
            </Row>
            <SubTitle>Utility Colors</SubTitle>
            <Row>
              <Color color={Colors.utility.black} colorName="Black" />
              <Color color={Colors.utility.charcoal} colorName="Charcoal" />
              <Color color={Colors.utility.grey} colorName="Grey" />
              <Color color={Colors.utility.lightGrey} colorName="Light grey" />
            </Row>
          </Section>
        </Content>
      </Row>
    );
  }
}

// Styles

const Content = styled("div")`
  flex: 4;
  background: #fff;
  border-radius: ${BorderRadius.md};
  box-shadow: ${Shadows.level3};
  overflow: hidden;
`;

const Nav = styled("div")`
  flex: 1;
  padding-right: ${Spacing.lg};

  ul {
    list-style: none;
    margin: 0;
    padding-left: ${Spacing.md};
  }

  a {
    display: block;
    text-transform: uppercase;
    font-weight: 800;
    padding: ${Spacing.sm} 0;
    letter-spacing: 1px;
    cursor: pointer;
    color: ${Colors.secondary.eggplant.lighter};
    text-decoration: none;
    font-family: ${Typography.body.fontFamily};
  }

  li a {
    text-transform: none;
    font-weight: 400;
  }

  a:hover {
    color: ${Colors.secondary.eggplant.default};
  }
`;

const Section = styled("div")`
  padding: ${Spacing.xl};
  background-color: ${props => (props.color ? props.color : "#fff")};
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Column = styled("div")`
  flex: ${props => props.flex};
`;

const BigText = styled("h1")`
  font-size: 50px;
  line-height: 40px;
  color: ${Colors.secondary.eggplant.default};
  margin: 0;
`;

const SubTitle = styled("h3")`
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};
  opacity: 0.5;
`;

const FontSize = styled("div")`
  padding: ${Spacing.md} 0;
  border-top: 2px solid ${Colors.secondary.mushrooms.default};
  font-size: ${props => props.size.fontSize};
  font-family: ${props => props.size.fontFamily};
  font-weight: ${props => props.size.fontWeight};
  line-height: ${props => props.size.lineHeight};
`;

const Hint = styled("div")`
  opacity: 0.5;
  font-size: 16px;
  max-width: 500px;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};
  padding-top: ${Spacing.md};
  padding-bottom: ${Spacing.md};
`;

const Desc = styled("div")`
  font-size: 24px;
  max-width: 500px;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};
  padding-bottom: ${Spacing.md};
`;

export default VisualIdentityPage;
