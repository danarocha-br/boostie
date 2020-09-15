import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from "./Route";
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
