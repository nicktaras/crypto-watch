import React, { Component } from 'react';
import './header.css';
import './../../app/app.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="CW-header">
        <img src={logo} className="CW-logo" alt="logo" />
        <h2>Crypto-Watch</h2>
      </div>
    );
  }
}

export default Header;
