import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import * as ACTIONS from './exchangeTypes';
import { getExchangeDataSuccess } from './exchangeActions';

// TODO - the end points should come from our server.
// A micro service, can then poll the actual service to retrieve
// the api data for these reasons:
// - We have control over the data coming through to a users server
// - We can normalise, tidy data our side
// - We can reduce the amount of calls going to other servers / we do not want
//   to DDOS a third parties service. 

const getExchangeDataEpic = action$ => {
  return action$.ofType(ACTIONS.GET_EXCHANGE_DATA)
    .switchMap(function (action) {
      return new Observable(obs => {
        axios.all([
          axios.get('/mocks/usd_btc.json') //,
          // axios.get('/mocks/usd_eth.json'),
          // axios.get('/mocks/usd_ltc.json'),
          // axios.get('/mocks/usd_xrp.json')
        ])
        .then(function (results) {
          
          /*

            TODO Create method to transform the data
            into the following formatted object.

            {
              btc: {},
              eth: {},
              xrp: {}
            }

          */

          // For development

          let resultsTransformed = {
            BTC: results[0].data.data
          };

          obs.next(getExchangeDataSuccess(resultsTransformed));
        });
      });
    });
  }

export default getExchangeDataEpic;