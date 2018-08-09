import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { fetchCoins } from '../../actions';
import Coin from '../../components/coin/coin.js';
import './dashboardMain.css';

class DashboardMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      coins: []
    }
  }
  componentDidMount() {
    this.props.fetchCoins();
    this.setState({ coins: this.props.coins });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.coins !== this.props.coins) {
      this.setState({ coins: this.props.coins });
    }
  }
  render() {
    if(!this.state.coins.length){
      return <div>Loading...</div>;
    } 
    return (
      <div>
        <div className="App-nav">
          <Link className="main-link" to="/dashboard/Add">Add +</Link>
        </div>
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
    fetchCoins: fetchCoins
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);
