import './coin.css';
import { Link } from "react-router-dom";
import React, { Component } from 'react';

// TODO use the exchange data to update the status

class Coin extends Component {
  render() {
    debugger; 
    return (
      <div className="CryptoCurrency">
        <p className="title">
          <span>{ this.props.data.name } ({ this.props.data.acr })</span>
          <span>
            <Link to={{pathname: '/dashboard/Edit', state: { coinData: this.props }}}>
              <i className="icon fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </span>
        </p>
        <p>Current Price: { this.props.data.currentPrice } USD</p>
        <p>Coins Owned: { this.props.data.coinTotal }</p>
        <p>Profit & Loss: { this.props.data.pl.perc } % / { this.props.data.pl.usd } USD </p>
        <p>Invested: { this.props.data.invested } USD</p>
        <p>Total: ${ this.props.data.currentValue.USD.value } USD</p>
      </div>
    )
  }
}

export default Coin;

