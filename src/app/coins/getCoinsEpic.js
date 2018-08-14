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
          obs.next(getCoinsSuccess(results));
        });
      });
    });
  }

export default getCoinsEpic;