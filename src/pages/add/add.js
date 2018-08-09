import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './add.css';
import { connect } from 'react-redux';
import { addCoin } from './../../actions/index';
import { bindActionCreators } from 'redux';
import supportedCoins from './../../mocks/supportedCoins';

class Add extends Component {
  constructor(){
    super();
    this.state = {
      coin: {
        id: 0,
        invested: [],
        amountRecieved: []
      }
    };
    this.disabled = true;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  validate = function(){
    return !(this.state.coin.id != undefined && this.state.coin.invested[0] && this.state.coin.amountRecieved[0]);
  };
  handleInputChange(evt){
    const _coin = this.state.coin;
    _coin[evt.currentTarget.dataset.key] = evt.currentTarget.value;
    this.setState({_coin});
    this.disabled = this.validate();
  }
  handleSubmit(event){
    mapDispatchToProps(addCoin(this.state.coin));
  }
  render() {
    return (
      <div className="add-cryptocurrency">

        <div className="App-nav">
          <Link className="add-link" to="/currencies/Main">Back</Link>
        </div>

        <div className="add">
          <form>
            <p className="title">Add Crypto Currency:</p>
            <p>Please Select the Currency type</p>
            <select onChange={this.handleInputChange} data-key="id">
              {supportedCoins.map(supportedCoin =>
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
          <button onClick={this.handleSubmit} className="App-button" disabled={this.disabled}>Add</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addCoin: addCoin}, dispatch);
}

export default connect(mapDispatchToProps)(Add);
