import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoins } from './../../actions/index';

import Coin from './../../components/coin/coin.js';
import { Route, Link } from "react-router-dom";
import './main.css';

class Main extends Component {
  constructor(props){
    super(props);
    let coinsFeed = this.props.fetchCoins();
    this.state = {
      coins: coinsFeed.payload
    }
  }
  render() {
    if(!this.state.coins){
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="App-nav">
          <Link className="main-link" to="/currencies/Add">Add +</Link>
        </div>
        <div className="main-container">
          {this.state.coins.map(function(coin, index){
            return <Coin
                      key={ index }
                      id={ coin.id }
                      name={ coin.name }
                      acr={ coin.acr }
                      price={ coin.price }
                      invested={ coin.invested }
                      coinsOwned={ coin.coinsOwned }
                      amountRecieved={ coin.amountRecieved }
                      statusAsPercentage={ coin.statusAsPercentage }
                      totalUSD={ coin.totalUSD }
                  />
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCoins: fetchCoins}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
