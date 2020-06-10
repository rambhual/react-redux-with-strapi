import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

import { store, persistor } from './store';
axios.defaults.baseURL = 'http://localhost:1337';
axios.defaults.headers.common['Content-Type'] = 'application/json';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HashRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
