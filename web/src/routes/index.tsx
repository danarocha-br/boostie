import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname === '/dashboard'}>
      <Switch location={location} key={pathname}>
        <Route path="/login" exact component={Login} />

        <PrivateRoute path="/dashboard" exact component={Dashboard} />

        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
