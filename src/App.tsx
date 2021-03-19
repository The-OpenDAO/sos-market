import Routes from 'routes';

import { Layout } from 'components';

const App = () => {
  return (
    <div className="theme--dark">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

export default App;
