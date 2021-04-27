import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import WrongNetwork from 'pages/WrongNetwork';

import { Layout } from 'components';

import { useNetwork } from 'hooks';

const Home = lazy(() => import('pages/Home'));
const Market = lazy(() => import('pages/Market'));
const Portfolio = lazy(() => import('pages/Portfolio'));

const { REACT_APP_NETWORK_ID } = process.env;

const AppRoutes = () => {
  const { network } = useNetwork();

  const isAllowedNetwork = network?.id === REACT_APP_NETWORK_ID;

  if (!isAllowedNetwork) return <WrongNetwork />;

  return (
    <Layout>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route component={Home} path="/home" />
          <Route component={Market} path="/markets" />
          <Route component={Portfolio} path="/portfolio" />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
