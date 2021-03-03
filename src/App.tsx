import React from 'react';

import Routes from 'routes';
// import useTheme from 'hooks/useTheme';

import { Layout } from 'components';

function App() {
  // const { theme, setTheme } = useTheme();
  // const browserUseDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  // useEffect(() => {
  //   if (browserUseDarkTheme.matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, [browserUseDarkTheme.matches]);

  return (
    <div className="theme--dark">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
