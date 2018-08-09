import React, { Component } from 'react';
import Header from './../../components/header/header.js';
import { Route, Link } from "react-router-dom";
import supportedCoins from './../../mocks/supportedCoins';

import './home.css';

class Home extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="home-body">
          <div className="home-intro">
            <p>This is an experimental application created to provide the status and statistics of your crypto currencies.</p>
          </div>
          <Link className="home-link" to="/dashboard/main">Get Started</Link>
          <div className="home-coins">
            {supportedCoins.map(supportedCoin =>
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
