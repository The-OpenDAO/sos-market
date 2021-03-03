import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import ThemeProvider from 'contexts/theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <Router>
      <App />
    </Router>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
