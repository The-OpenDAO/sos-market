import { useEffect } from 'react';

import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Routes from 'routes';

import { SEO } from 'components';

import FavoriteMarketsProvider from 'contexts/favoriteMarkets';

import { useLocalStorage, useTheme } from 'hooks';

const App = () => {
  const { theme } = useTheme();
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage('theme');

  useEffect(() => {
    setLocalStorageTheme(theme);
  }, [theme, setLocalStorageTheme]);

  return (
    <div className={`theme--${localStorageTheme || theme}`}>
      <SEO
        title="Polkamarkets - Gamified Prediction Markets"
        description="Polkamarkets is a DeFi-Powered Prediction Market built for cross-chain information exchange, based on Polkadot."
      />
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <FavoriteMarketsProvider>
          <Routes />
        </FavoriteMarketsProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default App;
