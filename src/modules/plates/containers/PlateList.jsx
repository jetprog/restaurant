import React from "react";
import { connectStore } from "redux-box";
import { injectIntl } from "react-intl";
import styled from "react-emotion";
// Modules
import { module as platesModule } from "../index";
// Components
import {
  PlateCard,
  PageContent,
  Spacing,
  Title,
  LoadingItem
} from "@foodrelay/components";

class PlateList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.plates.getPlates();
  }

  componentDidMount() {}

  render() {

    const { plates, intl } = this.props;

    if (plates.isLoading) {
      return (
        <PageContent>
          <Wrap>
            <Title text="Plates" />
            <PlateGrid>
              <LoadingItem loading={true} type="plate" />
              <LoadingItem loading={true} type="plate" />
              <LoadingItem loading={true} type="plate" />
              <LoadingItem loading={true} type="plate" />
            </PlateGrid>
          </Wrap>
        </PageContent>
      );
    } else {
      return (
        <PageContent>
          <Wrap>
            <Title text="Plates" />
            <PlateGrid>
              {plates.plates.map((plate, k) => (
                <PlateCard key={k} item={plate} />
              ))}
            </PlateGrid>
          </Wrap>
        </PageContent>
      );
    }
  }
}

const Wrap = styled("div")`
  margin: 0 auto;
  padding: ${Spacing.lg} ${Spacing.lg};
  max-width: 1200px;
  min-height: 80%;
`;

const PlateGrid = styled("div")`
  display: flex;
  flex-direciton: row;
  flex-wrap: wrap;
  margin: 0 -${Spacing.sm};
`;

export default injectIntl(
  connectStore({
    plates: platesModule
  })(PlateList)
);
