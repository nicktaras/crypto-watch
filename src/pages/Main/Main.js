import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoins } from '../../app/coins/coinActions';
import { getExchangeData } from '../../app/exchange/exchangeActions';
import Coin from '../../components/coin/coin.js';
import AppNav from './../../containers/AppNav/AppNav';
import './main.css';

class Main extends Component {
  componentDidMount() {
    this.props.getCoins();
    this.props.getExchangeData();
  }
  render() {
    let navElement = <AppNav links={[{ url: "/dashboard/Add", title: "Add +" }]} />;
    if(this.props.coins.length === 0 && this.props.exchangeData) return (
      <div>
        {navElement}
        <p> Loading... </p> 
      </div>
    );
    let exchangeData = this.props.exchangeData;
    return (
      <div>
        { navElement }
        <div className="main-container">
          {this.props.coins.map(function(coin, index){
            return (
              <Coin 
                key={ index } 
                exchangeData={ exchangeData[coin.name] }
                data={ coin } 
              />
            )
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCoins,
    getExchangeData
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    coins: state.CoinStore.coins,
    exchangeData: state.ExchangeStore.data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
