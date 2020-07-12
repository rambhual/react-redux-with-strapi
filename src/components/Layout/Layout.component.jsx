import React, { Fragment } from "react";
import HeaderComponent from "../Header/Header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "../../container/Products/Products";

const LayoutComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <Switch>
        <Route
          path="/app"
          exact
          render={() => <Redirect to="/app/dashboard" />}
        />
        <Route path="/app/products" exact component={Products} />
      </Switch>
    </Fragment>
  );
};

export default LayoutComponent;
