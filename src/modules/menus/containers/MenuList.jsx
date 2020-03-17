import React from "react";
import { connectStore } from "redux-box";
import { injectIntl } from "react-intl";
import styled from "react-emotion";
// Modules
import { module as menusModule } from "../index";
// Components
import {
  MenuCard,
  PageContent,
  Spacing,
  Title,
  LoadingItem
} from "@foodrelay/components";

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.menus.getMenus();
    console.log("Menus console ", this.props);
  }

  componentDidMount() {}

  render() {
    const { menus, intl } = this.props;

    if (menus.isLoading) {
      return (
        <PageContent>
          <Wrap>
            <Title text="Menus" />
            <MenuGrid>
              <LoadingItem loading={true} type="menu" />
              <LoadingItem loading={true} type="menu" />
              <LoadingItem loading={true} type="menu" />
              <LoadingItem loading={true} type="menu" />
            </MenuGrid>
          </Wrap>
        </PageContent>
      );
    } else {
      return (
        <PageContent>
          <Wrap>
            <Title text="Menus" />
            <MenuGrid>
              {menus.menus.map((menu, k) => (
                <MenuCard key={k} item={menu} />
              ))}
            </MenuGrid>
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

const MenuGrid = styled("div")`
  display: flex;
  flex-direciton: row;
  flex-wrap: wrap;
  margin: 0 -${Spacing.sm};
`;

export default injectIntl(
  connectStore({
    menus: menusModule
  })(MenuList)
);
