import React, { useEffect } from 'react';

import Routes from 'routes';
import useTheme from 'hooks/useTheme';

import { Layout } from 'components';

function App() {
  const { theme, setTheme } = useTheme();
  const browserUseDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (browserUseDarkTheme.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [browserUseDarkTheme.matches]);

  return (
    <div className={`theme--${theme}`}>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
