import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoin } from './../../app/coins/coinActions';
import { bindActionCreators } from 'redux';
import supportedCoins from './../../mocks/supportedCoins';
import AppNav from './../../containers/AppNav/AppNav';
import './add.css';

class Add extends Component {
  constructor(){
    super();
    this.state = {
      coin: {
        type: 'BTC',
        invested: '',
        recieved: ''
      }
    };
    this.disabled = true;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  validate = function(){
    return !(this.state.coin.type !== undefined && this.state.coin.invested && this.state.coin.recieved);
  };
  handleInputChange(evt){
    const coin = this.state.coin;
    coin[evt.currentTarget.dataset.key] = evt.currentTarget.value;
    this.setState({ coin });
    this.disabled = this.validate();
  }
  handleSubmit(){
    this.props.addCoin(this.state.coin);
  }
  render() {
    let navElement = <AppNav links={[{ url: "/dashboard/Main", title: "Back" }]} />;
    return (
      <div className="add-cryptocurrency">
        { navElement }
        <div className="add">
          <form>
            <p className="title">Add Crypto Currency:</p>
            <p>Please Select the Currency type</p>
            <select onChange={this.handleInputChange} data-key="type">
              {supportedCoins.map(supportedCoin =>
                <option value={supportedCoin.value} key={supportedCoin.id}>
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
              name="recieved"
              type="number"
              onChange={this.handleInputChange}
              data-key="recieved"
              value={this.state.coin.recieved}
            />
          </form>
          <button onClick={this.handleSubmit} className="App-button" disabled={this.disabled}>Add</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addCoin
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    coins: state.CoinStore.coins
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
