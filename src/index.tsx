import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { login } from 'redux/ducks/bepro';
import store from 'redux/store';

import { ScrollToTop } from 'components';
import ErrorBoundary from 'components/ErrorBoundary';

import ThemeProvider from 'contexts/theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'styles/main.scss';

login(store.dispatch);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <ErrorBoundary>
            <Router>
              <ScrollToTop />
              <App />
            </Router>
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

reportWebVitals();
