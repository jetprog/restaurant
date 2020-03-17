import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// eslint-disable-next-line
import polyfill from "@babel/polyfill";
import store from "./store";
import Master from "./Master.jsx";

let language = navigator.language || navigator.userLanguage;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Master language={language} />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
