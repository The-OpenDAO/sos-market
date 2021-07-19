import { useEffect } from 'react';

import Routes from 'routes';

import CurrencyProvider from 'contexts/currency';
import FavoriteMarketsProvider from 'contexts/favoriteMarkets';
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
          <FavoriteMarketsProvider>
            <Routes />
          </FavoriteMarketsProvider>
        </CurrencyProvider>
      </ViewportProvider>
    </div>
  );
};

export default App;
