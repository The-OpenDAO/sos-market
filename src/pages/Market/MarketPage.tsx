import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

function MarketPage() {
  const { path } = useRouteMatch();

  return (
    <Route exact path={path}>
      <div className="market-page">
        <h1>Please, select an market</h1>
      </div>
    </Route>
  );
}

export default MarketPage;
