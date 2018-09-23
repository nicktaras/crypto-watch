import {
  createStore as _createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
  
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

// Stores
import CoinStore from './coins/coinReducers';
import ExchangeStore from './exchange/exchangeReducers';

// Epics TBC
import getCoinsEpic from './coins/getCoinsEpic';
import addCoinEpic from './coins/addCoinEpic';
import getExchangeDataEpic from './exchange/getExchangeDataEpic';

const rootReducer = combineReducers({
  CoinStore,
  ExchangeStore
});

const epics = []
.concat(
  getCoinsEpic, 
  addCoinEpic,
  getExchangeDataEpic
);

const rootEpic = combineEpics(
  ...epics
);

const epicMiddleware = createEpicMiddleware();    
const defaultState = {};

const createStore = (history) => {
  let store = _createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic);
  return store;
}

export default createStore;