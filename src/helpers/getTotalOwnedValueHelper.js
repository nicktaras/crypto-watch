// Returns ammount of owned currency from array of purchases.
import addHelper from './addHelper';

const getTotalOwnedValueHelper = (puchaseHistory) => {
    var sum = puchaseHistory.map(function (item) {
      return item.amountRecieved;
    }).reduce(addHelper);
    return sum;
  }

export default getTotalOwnedValueHelper;