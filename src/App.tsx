import Routes from 'routes';

import { Layout } from 'components';

import CurrencyProvider from 'contexts/currency';
import ViewportProvider from 'contexts/viewport';

const App = () => {
  return (
    <div className="app">
      <ViewportProvider>
        <CurrencyProvider>
          <Layout>
            <Routes />
          </Layout>
        </CurrencyProvider>
      </ViewportProvider>
    </div>
  );
};

export default App;
