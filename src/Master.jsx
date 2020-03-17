import React from "react";
import moment from "moment";
import store from "./store";
import { Provider } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoutes from "./application/routes/PublicRoutes";
import { IntlProvider } from "react-intl";

let locale = "en";

class Master extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider key={locale} locale={locale}>
          <Router>
            <Switch>
              <Route path="/" component={PublicRoutes} />
            </Switch>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default Master;
