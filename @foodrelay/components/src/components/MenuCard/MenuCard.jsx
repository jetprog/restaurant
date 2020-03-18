import React from "react";
import moment from "moment";
import styled, { css, cx } from "react-emotion";
import { Link } from "react-router-dom";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

const MenuCard = ({ item }) => {
  let plates = [];
  let six_first_plates = [];

  if (item && item.plates) {
    plates = item.plates;
    six_first_plates = item.plates.slice(0, 6);
  }

  return (
    <MenuCardContainer>
      <Link to={"/menu/" + item.id + "/"}>
        <Header>
          <Row>
            <Title>{item.name}</Title>
            <NumPlates>{plates.length} plates</NumPlates>
          </Row>
          <DateItem>{moment(item.date).format("MMM Do YYYY")}</DateItem>
        </Header>
        <Choices>
          {plates &&
            six_first_plates.map((plate, k) => (
              <Choice key={k}>
                <PlateContainer image={plate.image} />
              </Choice>
            ))}
        </Choices>
      </Link>
    </MenuCardContainer>
  );
};

// Styles

const MenuCardContainer = styled("div")`
  transition: ${Animation.defaultSpeed};
  box-shadow: ${Shadows.level1};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  background-color: ${Colors.utility.white.default};
  padding: ${Spacing.md};
  position: relative;
  box-sizing: border-box;
  border-radius: ${BorderRadius.sm};
  overflow: hidden;
  flex: 1;
  min-width: calc(25% - 24px);
  max-width: calc(25% - 24px);
  margin: 12px;

  a {
    color: ${Colors.utility.black.default};
    text-decoration: none;
  }

  &:hover {
    box-shadow: ${Shadows.level3};
  }
`;
const PlateContainer = styled("div")`
  background-color: ${Colors.secondary.eggshell.default};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  padding: ${Spacing.md};
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  min-height: 50px;
`;
const Row = styled("div")`
  flex-direction: row;
  display: flex;
  width: 100%;
`;
const Header = styled("div")`
  padding-bottom: ${Spacing.sm};
`;
const Title = styled("h4")`
  margin: 0;
  font-weight: bold;
`;
const DateItem = styled("h4")`
  font-weight: 400;
  margin: 0;
`;
const NumPlates = styled("h4")`
  font-size: ${Typography.small.fontSize};
  margin: 0 0 0 ${Spacing.md};
  color: ${Colors.utility.grey.default};
  font-weight: 400;
  text-align: right;
  flex: 1;
`;
const Choices = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -${Spacing.xs};
`;
const Choice = styled("div")`
  flex: 1;
  margin: ${Spacing.xs};
  max-width: calc(33.33333% - ${Spacing.sm});
  min-width: calc(33.33333% - ${Spacing.sm});
`;

export default MenuCard;
