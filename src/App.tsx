import React from 'react';

import Routes from 'routes';

import { Layout } from 'components';

function App() {
  return (
    <div className="theme--dark">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
