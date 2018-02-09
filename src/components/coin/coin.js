import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './coin.css';

class Coin extends Component {
  render(props) {
    return (
      <div className="CryptoCurrency">
        <p className="title">
          <span>{ this.props.name }</span>
          <span>({ this.props.acr })
            <Link to={{pathname: '/currencies/Edit', state: { coinData: this.props }}}>
              <i className="icon fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </span>
        </p>
        <p>Current Price: { this.props.price } USD</p>
        <p>Investment: { this.props.invested[0] } USD</p>
        <p>Profit / Loss: { this.props.statusAsPercentage } %</p>
        <p>Coins Owned: { this.props.coinsOwned }</p>
        <p>Total: ${ this.props.totalUSD } USD</p>
      </div>
    );
  }
}

export default Coin;
