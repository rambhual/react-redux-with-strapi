import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { isAuthenticated } from "./utils/auth";
import LayoutComponent from "./components/Layout/Layout.component";
import RegisterPage from "./container/Register.page";
import LoginPage from "./container/Login.page";
import ErrorPage from "./container/Error.page";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated(localStorage.getItem("token"))) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => React.createElement(component, props)}
      />
    );
  }
};

const App = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/app" />} />
        <PrivateRoute
          path="/app"
          dispatch={props.dispatch}
          component={LayoutComponent}
        />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/error" exact component={ErrorPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default withRouter(App);
