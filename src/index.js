import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/appRouter/appRouter';
import { Provider } from 'react-redux';
import createStore from './app/createStore';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './app/rx';

const history = createHistory();
const store = createStore(history);

// local storage dev. Clear db
// localStorage.removeItem('cryptoWatchDbCoins');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
