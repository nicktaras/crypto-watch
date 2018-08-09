import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './coin.css';

class Coin extends Component {
  render() {
    return (
      <div className="CryptoCurrency">
        <p className="title">
          <span>{ this.props.data.name }</span>
          <span>({ this.props.data.acr })
            <Link to={{pathname: '/dashboard/Edit', state: { coinData: this.props }}}>
              <i className="icon fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </span>
        </p>
        <p>Current Price: { this.props.data.currentPrice } USD</p>
        <p>Coins Owned: { this.props.data.coinTotal }</p>
        <p>Profit / Loss: { this.props.data.pl } %</p>
        <p>Invested: { this.props.data.invested } USD</p>
        <p>Total: ${ this.props.data.currentValue.USD.value } USD</p>
      </div>
    );
  }
}

export default Coin;
