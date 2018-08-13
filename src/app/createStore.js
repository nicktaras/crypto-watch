import {
    createStore as _createStore,
    combineReducers,
    applyMiddleware
  } from 'redux';
  
  import { composeWithDevTools } from 'redux-devtools-extension';
  // import { combineEpics, createEpicMiddleware } from 'redux-observable';
  
  // Stores
  import CoinStore from './coins/coinReducers';

  // Epics TBC
  
  const rootReducer = combineReducers({
    CoinStore
  });
    
  const defaultState = {};
  
  const createStore = (history) => {
    // return _createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(epicMiddleware)));
    return _createStore(rootReducer, defaultState, composeWithDevTools());
  }
  
  export default createStore;