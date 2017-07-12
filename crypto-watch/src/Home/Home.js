import React, { Component } from 'react';
import Header from './../Header/Header.js';
import './../App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="App-body">
          <div className="App-intro">
            <p>This is an experimental application created to provide the status and statistics of your crypto currencies.</p>
          </div>
          <a type="button" href="main" className="App-anchor">Get Started</a>
          <div className="App-coins">
            <div className="App-coin">
              <i className="cf cf-btc"></i>
            </div>
            <div className="App-coin">
              <i className="cf cf-eth"></i>
            </div>
            <div className="App-coin">
              <i className="cf cf-ltc"></i>
            </div>
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

