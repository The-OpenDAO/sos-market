import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { fetchWallet } from 'redux/ducks/bepro';
import store from 'redux/store';

import { ScrollToTop } from 'components';

import ViewportProvider from 'contexts/viewport';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'styles/main.scss';

// fetching wallet state and sending to dispatcher
fetchWallet(store.dispatch);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ViewportProvider>
          <Router>
            <ScrollToTop />
            <App />
          </Router>
        </ViewportProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

reportWebVitals();
