import React from "react";
import styled from "react-emotion";
import { NavLink } from "react-router-dom";
import { Spacing, Colors, Shadows, BorderRadius, Typography } from "../rules";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import logo from "../img/lockup-dark.svg";
// Pages
import HomePage from "./pages/home-page.jsx";
import VisualIdentityPage from "./pages/identity-page.jsx";
import ContentPage from "./pages/content-page.jsx";

class Master extends React.Component {
  render() {
    const { match, auth, location } = this.props;
    return (
      <MainContainer>
        <Wrap>
          <TopBar>
            <NavLink to="/" className="main-link">
              <Logo>
                <img src={logo} /> <span>Design system</span>
              </Logo>
            </NavLink>
            <Menu>
              <NavLink to="/content/">Content</NavLink>
              <NavLink to="/identity/">Visual Identity</NavLink>
              <NavLink to="/components/">Components</NavLink>
            </Menu>
          </TopBar>
          <Switch>
            <Route path="/identity/" component={VisualIdentityPage} />
            <Route path="/content/" component={ContentPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Wrap>
      </MainContainer>
    );
  }
}

// Styles

const MainContainer = styled("div")`
  height: 100%;
  padding: ${Spacing.xl} 0;
  overflow: auto;
  background: ${Colors.secondary.eggshell.default};
  box-sizing: border-box;
`;

const Wrap = styled("div")`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 ${Spacing.lg};
`;

const TopBar = styled("div")`
  padding: 0 0 ${Spacing.lg} 0;
  font-weight: 600;

  font-family: ${Typography.body.fontFamily};
  display: flex;
  line-height: 40px;

  a.main-link {
    flex: 1;
    padding-right: ${Spacing.md};
    text-decoration: none;
    color: ${Colors.secondary.eggplant.default};
  }
`;

const Logo = styled("div")`
  span {
    vertical-align: top;
    font-size: 20px;
    padding-left: ${Spacing.md};
    margin-left: ${Spacing.md};
    display: inline-block;
    border-left: 2px solid;
  }

  img {
    display: inline-block;
    max-width: 160px;
    margin-top: -7px;
  }
`;

const Menu = styled("div")`
  flex: 3;

  a {
    text-decoration: none;
    margin-right: ${Spacing.lg};
    color: ${Colors.primary.eggYolk.default};
    padding-bottom: ${Spacing.sm};
  }

  a.active {
    border-bottom: 2px solid;
  }
`;

export default Master;
