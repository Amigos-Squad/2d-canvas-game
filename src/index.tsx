import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { store } from './redux';

import { App } from './pages';

import './styles/index.scss';

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={createBrowserHistory()}>
        {hot(<App />)}
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
