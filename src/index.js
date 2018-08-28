import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/appRouter/appRouter';
import { Provider } from 'react-redux';
import createStore from './app/createStore';
// import createHistory from 'history/createHashHistory';
import history from './history';
import { ConnectedRouter } from 'react-router-redux';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './app/rx';

// DEV Clear Mock Storage
// import { clear as ClearMockStorage } from './mocks/mockLocalStorage';
// //local storage dev. Clear db
// ClearMockStorage(); // (optional for dev)

const store = createStore(history);

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
