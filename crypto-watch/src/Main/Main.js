import React, { Component } from 'react';
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency.js';
import { Route, Link } from "react-router-dom";
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>

        <div className="App-nav">
          <Link className="App-link" to="/currencies/Add">Add +</Link>
        </div>

        <div className="Main-crypto-container">

          <CryptoCurrency></CryptoCurrency>
          <CryptoCurrency></CryptoCurrency>

        </div>

      </div>
    );
  }
}

export default Main;

