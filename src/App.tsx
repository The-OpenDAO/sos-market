import { useEffect } from 'react';

import Routes from 'routes';

import CurrencyProvider from 'contexts/currency';
import ViewportProvider from 'contexts/viewport';

import { useLocalStorage, useTheme } from 'hooks';

const App = () => {
  const { theme } = useTheme();
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage('theme');

  useEffect(() => {
    setLocalStorageTheme(theme);
  }, [theme, setLocalStorageTheme]);

  return (
    <div className={`theme--${localStorageTheme || theme}`}>
      <ViewportProvider>
        <CurrencyProvider>
          <Routes />
        </CurrencyProvider>
      </ViewportProvider>
    </div>
  );
};

export default App;
