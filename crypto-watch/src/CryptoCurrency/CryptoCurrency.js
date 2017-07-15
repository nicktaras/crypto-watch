import React, { Component } from 'react';
import './CryptoCurrency.css';

class CryptoCurrency extends Component {
  render() {
    return (
      <div className="CryptoCurrency">

        <p className="title">
          <span>LITE COIN</span>
          <span>(LTC)</span>
        </p>

        <p>Current Lite Coin (LTC) price: 44 USD</p>
        <p>You have currently invested: 205.0187148 USD</p>
        <p>Lite Coin (LTC) current Percentage of -10.076501952591494 %</p>
        <p>Lite Coin (LTC) current -20.658714799999984 USD</p>
        <p>Lite Coin (LTC) current -16.050788463859988 GBP</p>
        <p>Third return: -5.3502628212866625 GBP</p>
        <p>Third return: -6.886238266666662 USD</p>
        <p>Asset total: 184.36 USD</p>
        <p>Asset total: 143.238502 GBP</p>

      </div>
    );
  }
}

export default CryptoCurrency;
