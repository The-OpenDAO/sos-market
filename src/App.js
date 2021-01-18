import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import GlobalStyle from 'styles/GlobalStyle';

import theme from 'styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App" />
      </ThemeProvider>
    </>
  );
}

export default App;
