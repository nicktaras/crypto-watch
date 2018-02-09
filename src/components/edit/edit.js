import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './edit.css';

import { connect } from 'react-redux'; // glue between redux and react
import { editCoin } from './../../actions/index';
import { bindActionCreators } from 'redux';

// TODO's
// - The form has a bug where the page refreshes when actions are dispatched, even when e.preventDefault is applied.

class Edit extends Component {
  constructor(props){
    super(props);
    // Move to reducer object to load from Redux.
    this.supportedCoins = [
      { id: 0, acr: 'BTC', icon: 'cf-btc', name: 'Bitcoin', label: 'Bitcoin (BTC)' },
      { id: 1, acr: 'ETH', icon: 'cf-eth', name: 'Etherium', label: 'Litecoin (LTC)' },
      { id: 2, acr: 'LTC', icon: 'cf-ltc', name: 'Litecoin', label: 'Etherium (ETH)' },
      { id: 3, acr: 'XRP', icon: 'cf-xrp', name: 'Ripple', label: 'Ripple (XRP)' }
    ];
    this.state = {
      coin: {
        id: this.props.location.state.coinData.id,
        invested: this.props.location.state.coinData.invested[0],
        amountRecieved: this.props.location.state.coinData.amountRecieved[0]
      }
    };
    this.disabled = true;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.disabled = this.validate();
  }
  validate = function(){
    return !(this.state.coin.id != undefined && this.state.coin.invested && this.state.coin.amountRecieved);
  };
  handleInputChange(evt){
    const _coin = this.state.coin;
    _coin[evt.currentTarget.dataset.key] = evt.currentTarget.value;
    this.setState({_coin});
    this.disabled = this.validate();
  }
  handleSubmit(event){
    mapDispatchToProps(editCoin(this.state.coin));
  }
  render(props) {
    return (
      <div className="edit-cryptocurrency">

        <div className="App-nav">
          <Link className="edit-link" to="/currencies/Main">Back</Link>
        </div>

        <div className="edit">
          <form>
            <p className="title">Edit Crypto Currency:</p>
            <p>Please Select the Currency type</p>
            <select onChange={this.handleInputChange} data-key="id">
              {this.supportedCoins.map(supportedCoin =>
                <option value={supportedCoin.id} key={supportedCoin.id}>
                  {supportedCoin.label}
                </option>
              )}
            </select>
            <p>Amount invested (USD)</p>
            <input
              name="invested"
              type="number"
              onChange={this.handleInputChange}
              data-key="invested"
              value={this.state.coin.invested}
            />
            <p>Coins recieved</p>
            <input
              name="amountRecieved"
              type="number"
              onChange={this.handleInputChange}
              data-key="amountRecieved"
              value={this.state.coin.amountRecieved}
            />
          </form>
          <button onClick={this.handleSubmit} className="App-button" disabled={this.disabled}>Update</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editCoin: editCoin}, dispatch);
}

export default connect(mapDispatchToProps)(Edit);
