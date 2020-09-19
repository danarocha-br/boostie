import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PrivateRoute from './PrivateRoute';
import Dashboard from '~/pages/Dashboard';

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={pathname}>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
