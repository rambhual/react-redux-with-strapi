import React, { Fragment } from 'react';
import HeaderComponent from '../Header/Header.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProductPage } from '../../container/Product.page';

const LayoutComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <Switch>
        <Route
          path='/app'
          exact
          render={() => <Redirect to='/app/dashboard' />}
        />
        <Route path='/app/products' exact component={ProductPage} />
      </Switch>
    </Fragment>
  );
};

export default LayoutComponent;
