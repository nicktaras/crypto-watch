import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoins } from '../../app/coins/coinActions'; // TODO move upto Router!
import Coin from '../../components/coin/coin.js';
import AppNav from './../../containers/AppNav/AppNav';
import './main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      coins: []
    }
  }
  componentDidMount() {
    this.props.getCoins();
  }
  render() {
    let navElement = <AppNav links={[{ url: "/dashboard/Add", title: "Add +" }]} />;
    if(this.props.coins.length === 0) return navElement;
    return (
      <div>
        { navElement }
        <div className="main-container">
          {this.props.coins.map(function(coin, index){
            return <Coin key={ index } data={ coin } />
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCoins
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    coins: state.CoinStore.coins
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
