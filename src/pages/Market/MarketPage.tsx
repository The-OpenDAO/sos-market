import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Text, Market } from 'components';

const MarketPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <div className="market-page">
          <Text as="p" scale="body">
            Please, select an market
          </Text>
        </div>
      </Route>
      <Route path={`${path}/:marketId`}>
        <Market />
      </Route>
    </Switch>
  );
};

export default MarketPage;
