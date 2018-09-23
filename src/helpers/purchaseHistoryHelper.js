import pricePerUnitHelper from './pricePerUnitHelper';

// create purchase history object
const puchaseHistoryHelper = (coin) => {
    
    /*

        in

        coin: { 
            type: 'BTC', 
            invested: number, 
            recieved: number 
        }

        out

        puchaseHistory: [{ 
            unitPriceUSD: Number
            purchase: Number,
            purchaseCurrency: 'USD', 
            amountRecieved: Number
        }]

    */

    const puchaseHistory = { 
        unitPriceUSD: pricePerUnitHelper(coin.invested, coin.recieved),
        purchase: coin.invested,
        purchaseCurrency: 'USD', 
        amountRecieved: coin.recieved
    };

    return [puchaseHistory];
    
}

export default puchaseHistoryHelper;