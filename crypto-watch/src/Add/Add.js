import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './Add.css';

class Add extends Component {
  render() {
    return (
      <div className="Add-cryptocurrency">

        <div className="App-nav">
          <Link className="App-link" to="/currencies/Main">Back</Link>
        </div>

        <form className="Add">

          <p className="title">Add Crypto Currency:</p>

          <p>Please Select the Currency type</p>

          <select>
            <option value="btc">Bitcoin (BTC)</option>
            <option value="ltc">Litecoin (LTC)</option>
            <option value="eth">Etherium (ETH)</option>
            <option value="rpl">Ripple (RPL)</option>
          </select>

          <p>Please enter how much you have invested USD</p>

          <input type="number" />

          <p>Please enter how many coins you own</p>

          <input type="number" />

          <div>
            <Link className="App-link" to="/currencies/Add">Save</Link>
          </div>

        </form>

      </div>
    );
  }
}

export default Add;

