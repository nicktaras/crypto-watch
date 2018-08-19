import pricePerUnit from './pricePerUnit';

// create purchase history object
export const createPurchaseHistory = (coin) => {
    
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
        unitPriceUSD: pricePerUnit(coin.invested, coin.recieved),
        purchase: coin.invested,
        purchaseCurrency: 'USD', 
        amountRecieved: coin.recieved
    };

    return [puchaseHistory];
    
}

export default addHelper;