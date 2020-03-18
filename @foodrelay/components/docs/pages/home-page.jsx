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

class HomePage extends React.Component {
  render() {
    const { match, auth, location } = this.props;
    return (
      <Content>
        <Section>
          <BigText>FoodRelay Design System</BigText>
        </Section>
      </Content>
    );
  }
}

// Styles
const Content = styled("div")`
  flex: 3;
  background: #fff;
  border-radius: ${BorderRadius.md};
  box-shadow: ${Shadows.level3};
  overflow: hidden;
`;

const Section = styled("div")`
  padding: ${Spacing.xl};
  background-color: ${props => (props.color ? props.color : "#fff")};
`;

const BigText = styled("h1")`
  font-size: 50px;
  color: ${Colors.secondary.eggplant.default};
  margin: 0;
`;

export default HomePage;
