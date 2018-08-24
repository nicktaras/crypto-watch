// A helper to provide the coins a user can add to their portfolio. 

import supportedCoins from './../mocks/supportedCoins';

// Needs to know about the whole coin store 
// e.g. list of all coins, so they can't add ones they already have.
const addCoinOptionsHelper = (coins) => {
  
  // Build arr of the coins stored 
  /*
    [
      'LTC', 
      'BTC
    ]
  */
  const mapCoinAcrs = coins.map(function (coin) {
    return coin.acr;
  });
  
  // Return array of the coins from the list already stored in the user data.
  /*
    [
      { id: 2, acr: 'LTC', icon: 'cf-ltc', name: 'Litecoin', label: 'Litecoin (LTC)', value: 'LTC' },
      { id: 3, acr: 'XRP', icon: 'cf-xrp', name: 'Ripple', label: 'Ripple (XRP)', value: 'XRP' }
    ]
  */
  const coinsFiltered = supportedCoins.filter(coin => {
    return (coin.acr.indexOf(mapCoinAcrs) === -1);
  });

  return coinsFiltered;
}

export default addCoinOptionsHelper;