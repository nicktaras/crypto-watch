// A helper to provide the coins a user can add to their portfolio. 

import supportedCoins from './../mocks/supportedCoins';

const addCoinOptionsHelper = (coins) => {

  if (coins.length === 0) return supportedCoins;
  
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