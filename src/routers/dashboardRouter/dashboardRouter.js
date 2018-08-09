import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from './../../components/header/header.js';
import DashboardMain from './../../pages/dashboardMain/dashboardMain.js';
import Add from './../../pages/add/add.js';
import Edit from './../../pages/edit/edit.js';

class DashboardRouter extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/dashboard/main" component={DashboardMain} />
        <Route exact path="/dashboard/add" component={Add} />
        <Route exact path="/dashboard/edit" component={Edit} />
      </div>
    );
  }
}

export default DashboardRouter;
