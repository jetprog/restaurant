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

class ContentPage extends React.Component {
  render() {
    const { match, auth, location } = this.props;
    return (
      <Row>
        <Nav>
          <NavLink to="/content/">Content</NavLink>
          <ul>
            <li>
              <NavLink to="/content/#personas">Personas</NavLink>
            </li>
          </ul>
        </Nav>
        <Content>
          <Section color={Colors.secondary.mushrooms.default}>
            <Title text="Content" />
          </Section>
          <Section color={Colors.secondary.mushrooms.default}>
            <Title text="Personas" level="2" />
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

export default ContentPage;
