import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Header from './../Header/Header.js';
import Sell from './../Sell/Sell.js';
import Buy from './../Buy/Buy.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="App-nav">
          <Link className="App-link" to="/main/buy">Buy</Link>
          <Link className="App-link" to="/main/sell">Sell</Link>
        </div>
        <div>
          <Route exact path="/main/buy" component={Buy} />
          <Route exact path="/main/sell" component={Sell} />
        </div>
      </div>
    );
  }
}

export default Main;
