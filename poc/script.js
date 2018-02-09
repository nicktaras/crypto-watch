function sellCheck(crytoCoinType, price, invested, coinsOwned, feePercentage, minProfitPercentageNotification) {

  var asset = parseInt(price) * coinsOwned;

  var profitBeforeFee = asset - invested;
  var profitAfterCost = profitBeforeFee - (feePercentage / profitBeforeFee * 100);

  var notifyProfit = ((profitAfterCost / invested * 100) > minProfitPercentageNotification);
  var profitAsPercentage = profitAfterCost / invested * 100;

  var title = '<p><b>' + crytoCoinType + '</b> price: <b>' + price + ' USD</b></p>';
  var investment = '<p>'+ 'Invested: <b>' + invested + ' USD</b></p>';
  var profit = '<p>'+ crytoCoinType + ' Profit % <b>' + profitAsPercentage + ' %' + '</b></p>';
  var profitUSD = '<p>'+ crytoCoinType + ' Profit $' + ' <b> ' + profitAfterCost + ' USD</b></p>';
  var assetTotal = '<p>Asset total: '+ asset +' USD</p>';
  var quarterReturnUSD = '<p> Third return: $' + profitAfterCost / 3  + ' USD</p>';

  var targetMet = '';

  if (notifyProfit) {
    targetMet = '<h3>Your target of +' + minProfitPercentageNotification + '% increase has been met.</h3>';
  }

  document.getElementsByClassName('output')[0].innerHTML += '<div style="margin: 10px; padding: 10px; border: 1px solid">' + title + investment + profit + profitUSD + quarterReturnUSD + targetMet + assetTotal + '</div>';

}

fetchCoinPrices();

function fetchCoinPrices() {

  // Bitcoin
  $.get("https://v2.ethereumprice.org:8080/snapshot/btc/usd/waex/24h?_=1516101017976", function(data) {
    var price = data.data.price;
    var invested = 198.58;
    var coinsOwned = 0.2;
    var feePerecentage = 0;
    var minProfitPercentageNotification = 1;
    sellCheck('Bitcoin (BTC)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);
  });

  // Etherium
  $.get("https://v2.ethereumprice.org:8080/snapshot/eth/usd/waex/24h?_=1516101017976", function(data) {
    var price = data.data.price;
    var invested = 1000;
    var coinsOwned = 2.7;
    var feePerecentage = 0;
    var minProfitPercentageNotification = 1;
    sellCheck('Etherium (ETH)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);
  });

  // Litecoin
  $.get("https://v2.ethereumprice.org:8080/snapshot/ltc/usd/waex/24h?_=1516101017976", function(data) {
    var price = data.data.price;
    var invested = 159.27;
    var coinsOwned = 4.19;
    var feePerecentage = 0;
    var minProfitPercentageNotification = 25;
    sellCheck('Lite Coin (LTC)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);
  });

  // Ripple
  $.get("https://v2.ethereumprice.org:8080/snapshot/xrp/usd/waex/24h?_=1516101017976", function(data) {
    var price = data.data.price;
    var invested = 120;
    var coinsOwned = 598;
    var feePerecentage = 0;
    var minProfitPercentageNotification = 1;
    sellCheck('Ripple (RP)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);
  });

}
