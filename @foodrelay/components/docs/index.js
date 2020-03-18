import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Master from "./Master.jsx";

library.add(fas);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Master} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
