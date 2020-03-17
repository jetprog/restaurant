import React from "react";
import { connectStore } from "redux-box";
import styled from "react-emotion";
// Components
import { Route, Switch, NavLink } from "react-router-dom";
import { TopBar, Footer, Page } from "@foodrelay/components";
// Pages
import Menus from "../../modules/menus/containers/MenuList";
import Plates from "../../modules/plates/containers/PlateList";

const user = {
  id: 1,
  first_name: "Jane",
  last_name: "Doe"
};

class PublicRoutes extends React.Component {
  render() {
    const { match, location } = this.props;

    return (
      <Page>
        <TopBar
          user={user}
          navButtons={
            <React.Fragment>
              <NavLink exact to={match.path + "menus/"}>
                Menus
              </NavLink>
              <NavLink exact to={match.path + "plates/"}>
                Plates
              </NavLink>
            </React.Fragment>
          }
        />
        <MainContainer>
          <Switch>
            <Route path={match.path + "menus/"} component={Menus} />
            <Route path={match.path + "plates"} component={Plates} />
          </Switch>
        </MainContainer>
        <Footer
          logoLink={"/"}
          buttons={
            <div>
              <NavLink to="/public/terms/">Terms & Conditions</NavLink>
              <NavLink to="/public/privacy/">Privacy Policy</NavLink>
              <NavLink to="/public/changelog/">Changelog</NavLink>
              <NavLink to="/public/help/">Help</NavLink>
            </div>
          }
        />
      </Page>
    );
  }
}

const MainContainer = styled("div")`
  /*height: 100%;*/
  overflow: auto;
  background: ${props =>
    props.has_background ? "url(" + props.back + ")" : props.backColor};
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background: ${props =>
      props.has_background ? "#cdd7d6;" : props.backColor};
  }
`;

export default PublicRoutes;
