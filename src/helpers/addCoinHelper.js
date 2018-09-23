import createPurchaseHistory from './../helpers/purchaseHistoryHelper';
import getTotalInvestedValueHelper from './../helpers/getTotalInvestedValueHelper';
import getTotalOwnedValueHelper from './../helpers/getTotalOwnedValueHelper';
import profitAndLossHelper from './../helpers/profitAndLossHelper';
// import pricePerUnitHelper from './../helpers/pricePerUnitHelper';

// Adds new coin to store and prepares the data provided
const addCoinHelper = (coin) => {

  /*
      (in)
      {
        invested: "1"
        recieved: "1"
        type: "BTC"
      }

      (out)
      {
        "id": 100,
        "name": "Litecoin",
        "acr": "LTC",
        "invested": 250,
        "coinTotal": 10.4,
        "pl": {
          "usd": 100,
          "perc": 100
        },
        "currentPrice": 100,
        "puchaseHistory": [{
            "unitPriceUSD": 100,
            "purchase": 10,
            "purchaseCurrency": "USD",
            "amountRecieved": 0.1
          },
          {
            "unitPriceUSD": 50,
            "purchase": 10,
            "purchaseCurrency": "USD",
            "amountRecieved": 0.5
          },
          {
            "unitPriceUSD": 100,
            "purchase": 200,
            "purchaseCurrency": "USD",
            "amountRecieved": 2
          }
        ],
        "currentValue": {
          "USD": {
            "currency": "USD",
            "value": 250
          },
          "BTC": {
            "currency": "BTC",
            "value": 0.05
          }
        }
      };

  */

  let out = coin;
  coin.puchaseHistory = createPurchaseHistory(coin);
  coin.invested = getTotalInvestedValueHelper(coin.puchaseHistory);
  coin.coinTotal = getTotalOwnedValueHelper(coin.puchaseHistory);
  coin.name = "BTC";
  coin.acr = coin.type;
  
  // Get from data
  coin.pl = profitAndLossHelper(coin.invested, 1);
  coin.pricePerUnitHelper = 250; 
  coin.currentValue = {
    "USD": {
      "currency": "USD",
      "value": 250
    },
    "BTC": {
      "currency": "BTC",
      "value": 0.05
    }
  }

  return out;

}
export default addCoinHelper;