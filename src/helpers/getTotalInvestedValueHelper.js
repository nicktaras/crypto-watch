// Returns invested ammount from array of purchases.
import addHelper from './addHelper';

const getTotalInvestedValueHelper = (puchaseHistory) => {
    var sum = puchaseHistory.map(function (item) {
        return item.purchase;
    }).reduce(addHelper);
    return sum;
}

export default getTotalInvestedValueHelper;

