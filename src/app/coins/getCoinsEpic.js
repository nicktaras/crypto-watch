import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import * as ACTIONS from './coinTypes';
import { getCoinsSuccess } from './coinActions';

const getCoinsEpic = action$ => {
  return action$.ofType(ACTIONS.GET_COINS)
    .switchMap(function (action) {
      return new Observable(obs => {
        axios.all([
          axios.get('/mocks/userCoins.json')
        ])
        .then(function (results) {
          const coins = results[0].data;
          obs.next(getCoinsSuccess(coins));
        });
      });
    });
  }

export default getCoinsEpic;