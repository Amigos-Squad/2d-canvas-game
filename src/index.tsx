import React from 'react';
import { hydrate } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { loadableReady } from '@loadable/component';
import { store } from './redux';

import { App } from './pages';

import './styles/index.scss';

if (module.hot) {
  module.hot.accept();
}

loadableReady(() => {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={createBrowserHistory()}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
