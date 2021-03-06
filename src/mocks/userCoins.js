const userCoins = [
  {
    id: 0,
    name: 'Litecoin',
    acr: 'LTC',
    invested: 250,
    coinTotal: 10.4,
    pl: {
      usd: 100,
      perc: 100
    },
    currentPrice: 100,
    puchaseHistory: [
      { unitPriceUSD: 100, purchase: 10, purchaseCurrency: 'USD', amountRecieved: 0.1 },
      { unitPriceUSD: 50, purchase: 10, purchaseCurrency: 'USD', amountRecieved: 0.5 },
      { unitPriceUSD: 100, purchase: 200, purchaseCurrency: 'USD', amountRecieved: 2 }
    ],
    currentValue: {
      USD: { currency: "USD", value: 250 },
      BTC: { currency: "BTC", value: 0.05 }
    }
  },
  {
    id: 1,
    name: 'Ethereum',
    acr: 'ETH',
    invested: 250,
    coinTotal: 10.4,
    pl: {
      usd: 100,
      perc: 100
    }, 
    currentPrice: 100,
    puchaseHistory: [
      { unitPriceUSD: 100, purchase: 10, purchaseCurrency: 'USD', amountRecieved: 0.1 },
      { unitPriceUSD: 50, purchase: 10, purchaseCurrency: 'USD', amountRecieved: 0.5 },
      { unitPriceUSD: 100, purchase: 200, purchaseCurrency: 'USD', amountRecieved: 2 }
    ],
    currentValue: {
      USD: { currency: "USD", value: 250 },
      BTC: { currency: "BTC", value: 0.05 }
    }
  }
];

export default userCoins;
