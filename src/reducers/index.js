import { combineReducers } from 'redux';
import CoinsReducer from './reducer_coins.js';

const rootReducer = combineReducers({
  weather: CoinsReducer
});

export default rootReducer;
