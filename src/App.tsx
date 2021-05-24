import Routes from 'routes';

import CurrencyProvider from 'contexts/currency';
import ViewportProvider from 'contexts/viewport';

import { useTheme } from 'hooks';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`theme--${theme}`}>
      <ViewportProvider>
        <CurrencyProvider>
          <Routes />
        </CurrencyProvider>
      </ViewportProvider>
    </div>
  );
};

export default App;
