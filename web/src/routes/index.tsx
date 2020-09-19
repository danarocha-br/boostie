import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PrivateRoute from './PrivateRoute';
import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    // <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={pathname}>
      {/* <Route exact path="/" component={Login} /> */}
      <Route path="/dashboard" component={Dashboard} />

      {/* <Route render={() => <Redirect to="/" />} /> */}
    </Switch>
    // </AnimatePresence>
  );
};

export default Routes;
