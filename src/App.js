import Odd from 'components/Odd';
import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import GlobalStyle from 'styles/GlobalStyle';

import theme from 'styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Odd title="Benfica" value={1.26} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
