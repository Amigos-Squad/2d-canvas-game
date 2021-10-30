import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { store } from './redux';

import { App } from './pages';

import './styles/index.scss';

ReactDOM.hydrate(
  <React.StrictMode>
    {hot(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);
