import Routes from 'routes';

import CurrencyProvider from 'contexts/currency';
import ViewportProvider from 'contexts/viewport';

const App = () => {
  return (
    <div className="app">
      <ViewportProvider>
        <CurrencyProvider>
          <Routes />
        </CurrencyProvider>
      </ViewportProvider>
    </div>
  );
};

export default App;
