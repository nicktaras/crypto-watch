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
        invested: '',
        recieved: '',
        puchaseHistory: []
      }
    };
    this.disabled = true;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  validate = function(){
    return !(this.state.coin.type != undefined && this.state.coin.invested && this.state.coin.recieved);
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
    return (
      <div className="add-cryptocurrency">

        <Link className="add-link" to="/dashboard/Main">Back</Link>

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

export default connect(mapDispatchToProps)(Add);
