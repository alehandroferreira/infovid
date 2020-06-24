import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/index";
import Details from "../pages/Details/index";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/details" component={Details} />
    </Switch>
  );
};

export default Routes;
