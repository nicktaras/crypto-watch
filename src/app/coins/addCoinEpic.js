import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import * as ACTIONS from './coinTypes';
import addCoinHelper from './../../helpers/addCoinHelper';
import { updateCoinsSuccess } from './coinActions';

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

        // This will be helpful to get the state
        // of the application at this point for the following reason:
        // to update the current coin and merge back with coin store data
        // const state = store.getState(); 

        // Mock with localstorage.
        let coins = getMockStorage();

        if(!coins) {
          coins = [];
        } 
        
        let { coin } = action.payload;

        // Prepare coin for storage (transform object)
        let coinTransformed = addCoinHelper(coin);

        // update db with new coin (push to db)
        let updatedCoins = coins.concat([coinTransformed]);

        // store in local storage (store locally)
        setMockStorage(updatedCoins);

        // merge return
        let coinsStoreEnriched = updateCoinsSuccess(updatedCoins);

        obs.next(coinsStoreEnriched);
      });
    });
  });
}

export default addCoinEpic;
