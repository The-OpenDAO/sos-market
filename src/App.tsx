import Routes from 'routes';

import { Layout } from 'components';

import ViewportProvider from 'contexts/viewport';

const App = () => {
  return (
    <div className="app">
      <ViewportProvider>
        <Layout>
          <Routes />
        </Layout>
      </ViewportProvider>
    </div>
  );
};

export default App;
