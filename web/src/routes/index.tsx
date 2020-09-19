import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// import Route from "./Route";
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
