import { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { fetchAditionalData } from 'redux/ducks/bepro';
import store from 'redux/store';

import { Layout } from 'components';

import { useAppSelector, useNetwork } from 'hooks';

const Home = lazy(() => import('pages/Home'));
const Market = lazy(() => import('pages/Market'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const WrongNetwork = lazy(() => import('pages/WrongNetwork'));

const { REACT_APP_NETWORK_ID } = process.env;

const AppRoutes = () => {
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);
  const network = useNetwork();

  const isAllowedNetwork =
    !walletConnected || network?.id === REACT_APP_NETWORK_ID;

  useEffect(() => {
    if (isAllowedNetwork && walletConnected) {
      fetchAditionalData(store.dispatch);
    }
  }, [isAllowedNetwork]);

  if (!isAllowedNetwork)
    return (
      <Suspense fallback={null}>
        <WrongNetwork />
      </Suspense>
    );

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
