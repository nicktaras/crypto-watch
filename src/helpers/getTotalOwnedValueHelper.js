// Returns ammount of owned currency from array of purchases.
import addHelper from './addHelper';

export function getTotalOwnedValue(puchaseHistory){
    var sum = puchaseHistory.map(function (item) {
      return item.amountRecieved;
    }).reduce(addHelper);
    return sum;
  }