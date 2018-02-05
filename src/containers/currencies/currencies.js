import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Header from './../../components/header/header.js';
import Main from './../../components/main/main.js';
import Add from './../../components/add/add.js';
import Edit from './../../components/edit/edit.js';

class Currencies extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/currencies/main" component={Main} />
        <Route exact path="/currencies/add" component={Add} />
        <Route exact path="/currencies/edit" component={Edit} />
      </div>
    );
  }
}

export default Currencies;
