// Returns invested ammount from array of purchases.
import addHelper from './addHelper';

export const getInvestedAmount = (puchaseHistory) => {
    var sum = puchaseHistory.map(function (item) {
        return item.purchase;
    }).reduce(addHelper);
    return sum;
}

