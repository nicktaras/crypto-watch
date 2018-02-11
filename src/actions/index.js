import axios from 'axios';

export const FETCH_COINS = 'FETCH_COINS';
export const ADD_COIN = 'ADD_COIN';
export const GET_COIN_PRICE = 'GET_COIN_PRICE';

var coins = [
  {
    id: 2,
    name: 'Litecoin',
    acr: 'LTC',
    price: 100.00,
    invested: [200],
    amountRecieved: [10],
    coinsOwned: 10.4,
    statusAsPercentage: 42,
    totalUSD: 1
  },
  {
    id: 1,
    name: 'Ethereum',
    acr: 'ETH',
    price: 100.00,
    invested: [200],
    amountRecieved: [10],
    coinsOwned: 10.4,
    statusAsPercentage: 42,
    totalUSD: 1
  }
];

const supportedCoins = [
  { id: 0, acr: 'BTC', icon: 'cf-btc', name: 'Bitcoin', label: 'Bitcoin (BTC)' },
  { id: 1, acr: 'ETH', icon: 'cf-eth', name: 'Etherium', label: 'Etherium (ETH)' },
  { id: 2, acr: 'LTC', icon: 'cf-ltc', name: 'Litecoin', label: 'Litecoin (LTC)' },
  { id: 3, acr: 'XRP', icon: 'cf-xrp', name: 'Ripple', label: 'Ripple (XRP)' }
];

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

  // get coins
  // then update values
  let promiseArray = [];

  for(var i = 0; i < coins.length; i++){
    let url = 'https://v2.ethereumprice.org:8080/snapshot/'+ coins[i].acr.toLowerCase() +'/usd/waex/24h';
    promiseArray.push(url);
  }

  axios.all(promiseArray.map(l => axios.get(l)))
  .then(axios.spread(function (...res) {
    for(var i = 0; i < coins.length; i++){
      coins[i].price = res[i].data.data.price;
    }
    console.log(res);
  }));

  return {
    type: FETCH_COINS,
    payload: coins
  }

}

export function addCoin(coin) {

  let coinTransformed = {
    id: coins.length,
    name: supportedCoins[coin.id].name,
    acr: supportedCoins[coin.id].acr,
    invested: [coin.invested],
    amountRecieved: [coin.amountRecieved],
    coinsOwned: '',
    statusAsPercentage: '',
    totalUSD: ''
  }

  coins.push(coinTransformed);

  return {
    type: 'ADD_COIN',
    payload: coins
  }
}

export function editCoin(coin) {
  debugger;
}
