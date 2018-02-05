import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Coin from './../../components/coin/coin.js';
import { Route, Link } from "react-router-dom";
import './main.css';
import { fetchCoins } from './../../actions/index.js';

class Main extends Component {
  constructor(props){
    super(props);
    var coinsFeed = this.props.fetchCoins();
    this.state = {
      coins: coinsFeed.payload
    }
  }
  render() {
    const coins = this.state.coins;
    return (
      <div>
        <div className="App-nav">
          <Link className="main-link" to="/currencies/Add">Add +</Link>
        </div>
        <div className="main-crypto-container">
          {coins.map(function(coin, index){
            return <Coin
                      key={ index }
                      coin={ coins[index].coin }
                      acr={ coins[index].acr }
                      price={ coins[index].price }
                      invested={ coins[index].invested }
                      coins={ coins[index].coins }
                      statusAsPercentage={ coins[index].statusAsPercentage }
                      total={ coins[index].total }
                  />
          })}
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ coins }) {
//   return { coins };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoins }, dispatch);
}

// null allows us to not pass state if not required.
export default connect(null, mapDispatchToProps)(Main);
