import React from 'react';

import Routes from 'routes';

import { Layout } from 'components';

function App() {
  const [dark, setDark] = React.useState(false);

  return (
    <div className={`${dark ? 'theme--dark' : 'theme--light'}`}>
      <button type="button" onClick={() => setDark(!dark)}>
        Change Theme
      </button>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
