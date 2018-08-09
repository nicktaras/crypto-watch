import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import AppRouter from './routers/appRouter/appRouter';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
