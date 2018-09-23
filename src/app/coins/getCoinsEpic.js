import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import * as ACTIONS from './coinTypes';
import { updateCoinsSuccess } from './coinActions';

const getCoinsEpic = action$ => {
  return action$.ofType(ACTIONS.GET_COINS)
    .switchMap(function (action) {
      return new Observable(obs => {
        axios.all([
          axios.get('/mocks/userCoins.json')
        ])
        .then(function (results) {
          
          // Mocked with localstorage for now.
          // for now, get the stored coins from local storage.
          let coins = localStorage.getItem('cryptoWatchDbCoins');

          if(coins) {
            coins = JSON.parse(coins);
          } else {
            coins = [];
          }

          obs.next(updateCoinsSuccess(coins));

        });
      });
    });
  }

export default getCoinsEpic;