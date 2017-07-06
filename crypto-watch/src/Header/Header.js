import React, { Component } from 'react';
import './Header.css';
import './../App.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="CW-header">
        <img src={logo} className="CW-logo" alt="logo" />
        <h2>Crypto-Watcher</h2>
      </div>
    );
  }
}

export default Header;
