import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));

function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Suspense>
  );
}

export default AppRoutes;
