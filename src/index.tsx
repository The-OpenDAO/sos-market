import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { login } from 'redux/ducks/bepro';
import store from 'redux/store';

import { ScrollToTop } from 'components';

import ThemeProvider from 'contexts/theme';
import ViewportProvider from 'contexts/viewport';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'styles/main.scss';

login(store.dispatch);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <ViewportProvider>
            <Router>
              <ScrollToTop />
              <App />
            </Router>
          </ViewportProvider>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

reportWebVitals();
