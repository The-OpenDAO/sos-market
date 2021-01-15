import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import GlobalStyle from 'styles/GlobalStyle';

import theme from 'styles/theme';
import Text from 'components/Text';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Text as="h1" variant="body">
            Teste
          </Text>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
