import { combineReducers } from 'redux';
import CoinsReducer from './reducer_coins.js';

const rootReducer = combineReducers({
  coins: CoinsReducer
});

export default rootReducer;
