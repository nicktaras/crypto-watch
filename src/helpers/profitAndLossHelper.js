// Return profit / loss value

const profitAndLossHelper = (invested, currentValue) => {

    /*
      "out": {
        "usd": 10,
        "perc": 100
      }
    */

    let profit = currentValue - invested;

    return {
      "usd": profit,
      "perc": profit / invested * 100
    }
}

export default profitAndLossHelper;
