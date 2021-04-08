import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Market from './Market';

const MarketPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:marketId`}>
        <Market />
      </Route>
    </Switch>
  );
};

export default MarketPage;
