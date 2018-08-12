import pricePerUnit from './pricePerUnit';

// Adds new coin to store and prepares the data provided.
const addCoinHelper = (coin) => {
    const newPuchaseHistory = { 
        unitPriceUSD: pricePerUnit(coin.invested, coin.recieved),
        purchase: coin.invested,
        purchaseCurrency: 'USD', 
        amountRecieved: coin.recieved
    };
    coin.puchaseHistory.push(newPuchaseHistory);      
}
export default addCoinHelper;