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
          path='/app/main'
          exact
          render={() => <Redirect to='/app/main/dashboard' />}
        />
        <Route path='/app/main/dashboard' exact component={ProductPage} />
      </Switch>
    </Fragment>
  );
};

export default LayoutComponent;
