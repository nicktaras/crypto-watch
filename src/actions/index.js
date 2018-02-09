import axios from 'axios';

export const FETCH_COINS = 'FETCH_COINS';
export const ADD_COIN = 'ADD_COIN';
export const GET_COIN_PRICE = 'GET_COIN_PRICE';

var coins = [
  {
    id: 0,
    name: 'Litecoin',
    acr: 'LTC',
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
  { id: 1, acr: 'ETH', icon: 'cf-eth', name: 'Etherium', label: 'Litecoin (LTC)' },
  { id: 2, acr: 'LTC', icon: 'cf-ltc', name: 'Litecoin', label: 'Etherium (ETH)' },
  { id: 3, acr: 'XRP', icon: 'cf-xrp', name: 'Ripple', label: 'Ripple (XRP)' }
];

function updateCoinPricing () {
  // $.get("https://v2.ethereumprice.org:8080/snapshot/xrp/usd/waex/24h?_=1516101017976", function(data) {
  //   var price = data.data.price;
  //   var invested = 120;
  //   var coinsOwned = 598;
  //   var feePerecentage = 0;
  //   var minProfitPercentageNotification = 1;
  //   sellCheck('Ripple (RP)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);
  // });
}

export function getCoinValues(coin) {
  const request = axios.get('https://v2.ethereumprice.org:8080/snapshot/xrp/usd/waex/24h').then(function(results){
    coin.price = results.data.data.price;
    console.log('...', coin);
    return {
      type: GET_COIN_PRICE,
      payload: coin
    }
  });
}

// fetch all coins and update the values.
export function fetchCoins() {
  for(var i = 0; i < coins.length; i++){
    getCoinValues(coins[i]);
  }
  // TOOD only return once the coins have been updated.
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
    coinsOwned: 'tbc',
    statusAsPercentage: 'tbc',
    totalUSD: 'tbc'
  }
  coins.push(coinTransformed);
  return {
    type: 'ADD_COIN',
    payload: coins
  }
}

export function editCoin(coin) {

  debugger;

  // let coinTransformed = {
  //   id: coin.id,
  //   name: supportedCoins[coin.id].name,
  //   acr: supportedCoins[coin.id].acr,
  //   invested: [coin.invested],
  //   amountRecieved: [coin.amountRecieved],
  //   coinsOwned: 'tbc',
  //   statusAsPercentage: 'tbc',
  //   totalUSD: 'tbc'
  // }
  //
  // console.log('reducer was called', coin, coins);
  //
  // // get coins + add new.
  // coins.push(coinTransformed);
  //
  // return {
  //   type: 'ADD_COIN',
  //   payload: coins
  // }
}


// axios.get(...)
// .then((response) => {
//   return axios.get(...); // using response.data
// })
// .then((response) => {
//   console.log('Response', response);
// });
