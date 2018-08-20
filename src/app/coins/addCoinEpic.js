import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import * as ACTIONS from './coinTypes';
import addCoinHelper from './../../helpers/addCoinHelper';
import { updateCoinsSuccess } from './coinActions';
import createStore from './../../app/createStore';

// Dev use only
import { 
  get as getMockStorage,
  set as setMockStorage  
} from './../../mocks/mockLocalStorage';

const addCoinEpic = (action$, store) => {
  return action$.ofType(ACTIONS.ADD_COIN)
  .switchMap(function (action) {
    return new Observable(obs => {
      axios.all([
        axios.get('/mocks/userCoinsPost.json')
      ])
      .then(function (results) {

        // const state = store.getState(); // Get this working!

        // Mock with localstorage.
        let coins = getMockStorage();

        if(!coins) {
          coins = [];
        } 
        
        let { coin } = action.payload;
        let coinTransformed = addCoinHelper(coin);
        let updatedCoins = coins.concat([coinTransformed]);

        // store in local storage
        setMockStorage(updatedCoins);

        // merge return.
        obs.next(updateCoinsSuccess(updatedCoins));
      });
    });
  });
}

export default addCoinEpic;
