import React, { Fragment } from "react";
import HeaderComponent from "../Header/Header.component";
import { Switch, Route } from "react-router-dom";
import Products from "../../container/Products";
import HomePage from "../../container/Home.page";

const Layout = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <Switch>
        <Route path="/app/dashboard" exact component={HomePage} />
        <Route path="/app/products" exact component={Products} />
      </Switch>
    </Fragment>
  );
};

export default Layout;
