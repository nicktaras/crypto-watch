import axios from 'axios';
import coins from '../mocks/userCoins';
import supportedCoins from '../mocks/supportedCoins';
import getInvestedAmount from './../helpers/getTotalInvestedValueHelper';
import pricePerUnit from './../helpers/pricePerUnit';

export const FETCH_COINS = 'FETCH_COINS';
export const ADD_COIN = 'ADD_COIN';
export const GET_COIN_PRICE = 'GET_COIN_PRICE';

// function updateCoinPricing (coin) {
  // $.get("https://v2.ethereumprice.org:8080/snapshot/xrp/usd/waex/24h?_=1516101017976", function(data) {
  //   var price = data.data.price;
  //   var invested = 120;
  //   var coinsOwned = 598;
  //   var feePerecentage = 0;
  //   var minProfitPercentageNotification = 1;
  //   sellCheck('Ripple (RP)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);
  // });
// }

// function to collect each coin and return it
export function getCoinValue(coins) {
  // let url = 'https://v2.ethereumprice.org:8080/snapshot/' + coin.acr.toLowerCase(); + '/usd/waex/24h';
  // const request = axios.get('url').then(function(results){
  //   coin.price = results.data.data.price;
  //   return {
  //     type: GET_COIN_PRICE,
  //     payload: coin
  //   }
  // });
}

// fetch all coins and update the values.
export function fetchCoins() {

  // getInvestedAmount([{ unitPriceUSD: 100, purchase: 10, purchaseCurrency: 'USD', amountRecieved: 0.1 },
  // { unitPriceUSD: 50, purchase: 10, purchaseCurrency: 'USD', amountRecieved: 0.5 },
  // { unitPriceUSD: 100, purchase: 200, purchaseCurrency: 'USD', amountRecieved: 2 }])

  // ASYNC: USE REDUX EPIC
  // let promiseArray = [];

  // for(var i = 0; i < coins.length; i++){
  //   let url = 'https://v2.ethereumprice.org:8080/snapshot/'+ coins[i].acr.toLowerCase() +'/usd/waex/24h';
  //   promiseArray.push(url);
  // }

  // axios.all(promiseArray.map(l => axios.get(l)))
  // .then(axios.spread(function (...res) {
  //   for(var i = 0; i < coins.length; i++){
  //     coins[i].price = res[i].data.data.price;
  //   }
  //   console.log(res);
  // }));

  // for now we send back the coins from stub.
  // coinsEnriched should happen here.

  return {
    type: FETCH_COINS,
    payload: []
  }

}

export function editCoin(coin) {
  // TODO.
}

export function addCoin(coin) {

  const newPuchaseHistory = { 
    unitPriceUSD: pricePerUnit(coin.invested, coin.recieved),
    purchase: coin.invested,
    purchaseCurrency: 'USD', 
    amountRecieved: coin.recieved
  };

  coin.puchaseHistory.push(newPuchaseHistory);
  
  return {
    type: ADD_COIN,
    payload: coin
  }
}
