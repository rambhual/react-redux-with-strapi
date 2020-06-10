import React from "react";
import HeaderComponent from "../Header/Header.component";
import { Switch, Route } from "react-router-dom";
import { ProductPage } from "../../container/Product.page";

const LayoutComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={ProductPage}></Route>
      </Switch>
    </div>
  );
};

export default LayoutComponent;
