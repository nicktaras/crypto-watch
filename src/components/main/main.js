import React, { Component } from 'react';
import Coin from './../../components/coin/coin.js';
import { Route, Link } from "react-router-dom";
import './main.css';

var data = [
  {
    id: 'id',
    coin: 'LITE COIN',
    acr: 'LTC',
    price: '100.00',
    invested: '200',
    coins: 'coins',
    statusAsPercentage: 42,
    total: 'total'
  }
]

class Main extends Component {
  render() {
    return (
      <div>
        <div className="App-nav">
          <Link className="main-link" to="/currencies/Add">Add +</Link>
        </div>
        <div className="main-crypto-container">
          {data.map(function(coin, index){
            return <Coin
                      key={ index }
                      coin={ data[index].coin }
                      acr={ data[index].acr }
                      price={ data[index].price }
                      invested={ data[index].invested }
                      coins={ data[index].coins }
                      statusAsPercentage={ data[index].statusAsPercentage }
                      total={ data[index].total }
                  />
          })}
        </div>
      </div>
    );
  }
}

export default Main;
