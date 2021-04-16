import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from 'components';

const Home = lazy(() => import('pages/Home'));
const Market = lazy(() => import('pages/Market'));
const Portfolio = lazy(() => import('pages/Portfolio'));

const AppRoutes = () => {
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
