import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './Add.css';

class Add extends Component {
  constructor(){
    super();

    this.supportedCoins = [
      { id: 1, ref: 'btc', icon: 'cf-btc', name: 'Bitcoin', label: 'Bitcoin (BTC)' },
      { id: 2, ref: 'eth', icon: 'cf-eth', name: 'Etherium', label: 'Litecoin (LTC)' },
      { id: 3, ref: 'ltc', icon: 'cf-ltc', name: 'Litecoin', label: 'Etherium (ETH)' },
      { id: 4, ref: 'xrp', icon: 'cf-xrp', name: 'Ripple', label: 'Ripple (XRP)' }
    ];

    this.state = {
      item: {
        currency: 'btc',
        investment: '',
        coins: ''
      }
    };

    this.disabled = true;

    this.handleInputChange = this.handleInputChange.bind(this);

  }
  validate = function(){

    return !(this.state.item.currency && this.state.item.investment && this.state.item.coins);

  };
  handleInputChange(evt){

    const _item = this.state.item;
    _item[evt.currentTarget.dataset.key] = evt.currentTarget.value;
    this.setState({_item});
    this.disabled = this.validate();

  }
  render() {
    return (
      <div className="Add-cryptocurrency">

        <div className="App-nav">
          <Link className="App-link" to="/currencies/Main">Back</Link>
        </div>

        <form className="Add">

          <p className="title">Add Crypto Currency:</p>

          <p>Please Select the Currency type</p>

          <select onChange={this.handleInputChange} data-key="currency">

            {this.supportedCoins.map(supportedCoin =>
              <option value={supportedCoin.ref} key={supportedCoin.id}>
                {supportedCoin.label}
              </option>
            )}

          </select>

          <p>Please enter how much you have invested USD</p>

          <input type="number" onChange={this.handleInputChange} data-key="investment" value={this.state.item.investment} />

          <p>Please enter how many coins you own</p>

          <input type="number" onChange={this.handleInputChange} data-key="coins" value={this.state.item.coins} />

          <div>
            <button className="App-button" disabled={this.disabled}>Add</button>
          </div>

        </form>

      </div>
    );
  }
}

export default Add;

