import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './coin.css';

class Coin extends Component {
  render(props) {
    return (
      <div className="CryptoCurrency">

        <p className="title">
          <span>{ this.props.coin }</span>
          <span>({ this.props.acr })
            <Link to="/currencies/Edit">
              <i className="icon fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </span>
        </p>

        <p>Current Price: { this.props.price } USD</p>
        <p>Investment: { this.props.invested } USD</p>
        <p>Status: { this.props.statusAsPercentage } %</p>
        <p>Total: { this.props.total } USD</p>

      </div>
    );
  }
}

export default Coin;
