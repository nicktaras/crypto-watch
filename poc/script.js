// First test.

var gbpToUsdFxRate = undefined;
var usdToGBPFxRate = undefined;

function sellCheck(crytoCoinType, price, invested, coinsOwned, feePercentage, minProfitPercentageNotification) {

  var asset = price * coinsOwned;
  var profitBeforeFee = asset - invested;
  var profitAfterCost = profitBeforeFee - (feePercentage / profitBeforeFee * 100);

  var notifyProfit = ((profitAfterCost / invested * 100) > minProfitPercentageNotification);
  var profitAsPercentage = profitAfterCost / invested * 100;

  var title = '<p>Current <b>' + crytoCoinType + '</b> price: <b>' + price + ' USD</b></p>';
  var investment = '<p>'+ 'You have currently invested: <b>' + invested + ' USD</b></p>';
  var profit = '<p>'+ crytoCoinType + ' current' + ' Percentage of <b>' + profitAsPercentage + ' %' + '</b></p>';
  var profitUSD = '<p>'+ crytoCoinType + ' current' + ' <b> ' + profitAfterCost + ' USD</b></p>';
  var profitGBP = '<p>'+ crytoCoinType + ' current' + ' <b> ' + getReturnAsGBP(profitAfterCost) + ' GBP</b></p>';

  var quarterReturnUSD = '<p> Third return: ' + profitAfterCost / 3  + ' USD</p>';
  var quarterReturnGBP = '<p> Third return: ' + getReturnAsGBP(profitAfterCost) / 3  + ' GBP</p>';

  var targetMet = '';

  if (notifyProfit) {
    targetMet = '<h3>Your target of +' + minProfitPercentageNotification + '% increase has been met.</h3>';
  }

  document.getElementsByClassName('output')[0].innerHTML += '<div style="margin: 10px; padding: 10px; border: 1px solid">' + title + investment + profit + profitUSD + profitGBP + quarterReturnGBP + quarterReturnUSD + targetMet + '</div>';


}

function init() {

  $.ajax({
    type: "GET",
    url: "http://www.floatrates.com/daily/gbp.xml",
    dataType: "xml",
    success: function(xml) {

      if (!gbpToUsdFxRate) {

        $(xml).find('item').each(function(item) {

          var targetCurrency = $(this).find('targetCurrency').text();
          var baseCurrency = $(this).find('baseCurrency').text();

          if (baseCurrency === 'GBP' && targetCurrency === 'USD') {
            gbpToUsdFxRate = baseCurrency = $(this).find('exchangeRate').text();
          }

        });

      }

    }
  });

  $.ajax({
    type: "GET",
    url: "http://www.floatrates.com/daily/usd.xml",
    dataType: "xml",
    success: function(xml) {

      if (!usdToGBPFxRate) {

        $(xml).find('item').each(function(item) {

          var targetCurrency = $(this).find('targetCurrency').text();
          var baseCurrency = $(this).find('baseCurrency').text();

          if (targetCurrency === 'GBP' && baseCurrency === 'USD') {
            usdToGBPFxRate = baseCurrency = $(this).find('exchangeRate').text();
          }

        });

      }

    }
  });

  poll();

}

function poll() {
  console.log('Data Ready: ', usdToGBPFxRate, gbpToUsdFxRate);
  if(usdToGBPFxRate && gbpToUsdFxRate){
    fetchCoinPrices();
  } else {
    setTimeout(function () {
      poll();
    }, 1000);
  }
}

function getInvestedGbpToUsd(invested) {

  return invested * gbpToUsdFxRate;

}

function getReturnAsGBP(invested) {

  return invested * usdToGBPFxRate;

}

init();

function fetchCoinPrices() {

  // Bitcoin

  $.get("http://api.coindesk.com/v1/bpi/currentprice/allcurrencies.json?showex=1&calc=1", function(data, status) {

    var _data = jQuery.parseJSON(data);
    var price = _data.bpi.USD.rate_float;
    var invested = 100;
    var coinsOwned = 0.05;
    var feePerecentage = 1.49;
    var minProfitPercentageNotification = 1;

    invested = getInvestedGbpToUsd(invested);

    sellCheck('Bitcoin (BTC)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);

  });

  // Etherium

  $.get("https://ethereumprice.org/wp-content/themes/theme/inc/exchanges/json.php?cur=ethusd&ex=waex&time=1%20Year", function(data, status) {

    var _data = jQuery.parseJSON(data);
    var price = _data[_data.length - 1][1];

    var invested = 360;
    var coinsOwned = 1.77; // 203 GBP 263 USD a coin.
    var feePerecentage = 1.49;
    var minProfitPercentageNotification = 1;

    invested = getInvestedGbpToUsd(invested);

    sellCheck('Etherium (ETH)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);

  });

  // Fee 2.99 to remove. Coin Base.

  // Litecoin

  $.get("https://ethereumprice.org/wp-content/themes/theme/inc/exchanges/price-data.php?coin=ltc&cur=ltcusd&ex=waex&dec=2&start_time=24%20Hour", function(data, status) {

    var _data = jQuery.parseJSON(data);
    var price = _data.current_price;

    var invested = 30; // GBP
    var coinsOwned = 2.617; //
    var feePerecentage = 1.49;
    var minProfitPercentageNotification = 25;

    invested = getInvestedGbpToUsd(invested);

    sellCheck('Lite Coin (LTC)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);

  });

  $.get("https://ethereumprice.org/wp-content/themes/theme/inc/exchanges/price-data.php?coin=xrp&cur=xrpusd&ex=waex&dec=2&start_time=24%20Hour", function(data, status) {

    var _data = jQuery.parseJSON(data);
    var price = _data.current_price;

    var invested = 120; // 30 GBP / 40 USD a coin
    var coinsOwned = 598;
    var feePerecentage = 0.025;
    var minProfitPercentageNotification = 1;

    invested = getInvestedGbpToUsd(invested);

    sellCheck('Ripple (RP)', price, invested, coinsOwned, feePerecentage, minProfitPercentageNotification);

  });


}