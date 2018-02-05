import React, { Component } from 'react';
import Header from './../../components/header/header.js';
import { Route, Link } from "react-router-dom";

import './home.css';
import './../../app/app.css';

class Home extends Component {
  constructor(){
    super();
    this.supportedCoins = [
      { id: 1, ref: 'btc', icon: 'cf-btc', name: 'Bitcoin', label: 'Bitcoin (BTC)' },
      { id: 2, ref: 'eth', icon: 'cf-eth', name: 'Etherium', label: 'Litecoin (LTC)' },
      { id: 3, ref: 'ltc', icon: 'cf-ltc', name: 'Litecoin', lable: 'Etherium (ETH)' },
      { id: 4, ref: 'xrp', icon: 'cf-xrp', name: 'Ripple', label: 'Ripple (XRP)' }
    ]
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="home-body">
          <div className="home-intro">
            <p>This is an experimental application created to provide the status and statistics of your crypto currencies.</p>
          </div>
          <Link className="home-link" to="/currencies/main">Get Started</Link>
          <div className="home-coins">
            {this.supportedCoins.map(supportedCoin =>
              <div className="home-coin" key={supportedCoin.id}>
                <i className={'cf ' + supportedCoin.icon.toString()}></i>
              </div>
            )}
          </div>
          <div>
            <small><b>Please note:</b> The information provided may not be 100% accurate. So please check the currency rates before making a purchase or sale.<br/>We do not take any responsibility of any financial loss incurred from using this site.</small>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
