import { FETCH_COINS } from './../actions/index';
import { ADD_COIN } from './../actions/index';
import { GET_COIN_PRICE } from './../actions/index';
import addCoinHelper from './../helpers/addCoinHelper';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_COIN:
      return addCoinHelper(action.payload);
    case FETCH_COINS:
      return action.payload;
    case GET_COIN_PRICE:
      return action.payload;
  }
  return state;
}
