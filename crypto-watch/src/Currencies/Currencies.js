import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Header from './../Header/Header.js';
import Main from './../Main/Main.js';
import Add from './../Add/Add.js';

class Currencies extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <Route exact path="/currencies/main" component={Main} />
          <Route exact path="/currencies/add" component={Add} />
        </div>
      </div>
    );
  }
}

export default Currencies;
