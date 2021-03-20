import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Market = lazy(() => import('pages/Market'));
const Portfolio = lazy(() => import('pages/Portfolio'));

const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={Home} path="/home" />
        <Route component={Market} path="/market" />
        <Route component={Portfolio} path="/portfolio" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
