import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import * as ACTIONS from './coinTypes';
import addCoinHelper from './../../helpers/addCoinHelper';
import { updateCoinsSuccess } from './coinActions';

const addCoinEpic = (action$, store) => {
  debugger;
  return action$.ofType(ACTIONS.ADD_COIN)
  .switchMap(function (action) {
    return new Observable(obs => {
      axios.all([
        axios.get('/mocks/userCoinsPost.json')
      ])
      .then(function (results) {

        // const state = store.getState(); // Get this working!

        // Mock with localstorage.
        // for now, get the stored coins from local storage.
        let coins = localStorage.getItem('cryptoWatchDbCoins');

        if(coins) {
          coins = JSON.parse(coins);
        } else {
          coins = [];
        }
        
        let { coin } = action.payload;
        let coinTransformed = addCoinHelper(coin);
        let updatedCoins = coins.concat([coinTransformed]);

        // store in local storage
        let dataToJSON = JSON.stringify(updatedCoins);
        localStorage.setItem('cryptoWatchDbCoins', dataToJSON);

        // merge return.
        obs.next(updateCoinsSuccess(updatedCoins));
      });
    });
  });
}

export default addCoinEpic;
