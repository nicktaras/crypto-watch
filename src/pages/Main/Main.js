import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoins } from '../../app/coins/coinActions';
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
    this.setState({ coins: this.props.coins });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.coins !== this.props.coins) {
      this.setState({ coins: this.props.coins });
    }
  }
  render() {
    let navElement = <AppNav links={[{ url: "/dashboard/Add", title: "Add +" }]} />;
    if(!this.props.coins) return navElement;
    return (
      <div>
        { navElement }
        <div className="main-container">
          {this.state.coins.map(function(coin, index){
            return <Coin key={ index } data={ coin } />
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
  return bindActionCreators({
    getCoins: getCoins
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
