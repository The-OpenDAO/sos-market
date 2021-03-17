import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ScrollToTop } from 'components';

import ViewportProvider from 'contexts/viewport';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <ViewportProvider>
      {/* <ThemeProvider> */}
      <Router>
        <ScrollToTop />
        <App />
      </Router>
      {/* </ThemeProvider> */}
    </ViewportProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
