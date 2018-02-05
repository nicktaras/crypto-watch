//import axios from 'axios';
//const API_KEY = '0568df9eb81d9a701ef8da2bd3b80246';
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

// A convention to hold a variable type and reduce room
// for typos.
export const FETCH_COINS = 'FETCH_COINS';

export function fetchCoins(userId) {

  //const url = `${ROOT_URL}&q=${city},us`; // us is hardcoded etc.
  //const request = axios.get(url);

  // Should come from FireBase etc !!
  let request = [
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
  ];

  // the request is a promise - It's stopped until its resolved.
  // Once data has arrived, the middleware creates a new
  // FETCH_WEATHER request to return to the reducers.
  return {
    type: FETCH_COINS,
    payload: request
  }
}
