import React from 'react'
import Home from './../../pages/home/home.js';
import Dashboard from './../dashboardRouter/dashboardRouter.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default AppRouter;
