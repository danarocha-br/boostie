import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={pathname}>
        <Route path="/" exact component={Login} />

        <PrivateRoute path="/dashboard" component={Dashboard} />

        {/* <Route render={() => <Redirect to="/" />} /> */}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
