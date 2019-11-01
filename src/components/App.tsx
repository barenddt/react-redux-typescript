import React from "react";
import { Switch, Route, Router } from "react-router";

import Counter from "./Counter";

import { history } from "../store";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Counter} />
      </Switch>
    </Router>
  );
};

export default App;
