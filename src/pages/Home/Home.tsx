import { useEffect } from 'react';

import { filteredMarketsSelector, getMarkets } from 'redux/ducks/markets';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCategories from 'hooks/useCategories';

import HomeCategories from './HomeCategories';
import HomeMobileInfo from './HomeMobileInfo';
import HomeTabs from './HomeTabs';

function Home() {
  const dispatch = useAppDispatch();
  const categories = useCategories();
  const markets = useAppSelector(state =>
    filteredMarketsSelector(state.markets, categories)
  );

  const openMarkets = markets.filter(market => market.state === 'open');
  const closedMarkets = markets.filter(market => market.state === 'closed');
  const resolvedMarkets = markets.filter(market => market.state === 'resolved');

  useEffect(() => {
    dispatch(getMarkets());
  }, [dispatch]);

  return (
    <div className="pm-home">
      <div className="pm-home__content">
        <HomeMobileInfo />
        <HomeCategories />
        <HomeTabs
          openMarkets={openMarkets}
          closedMarkets={closedMarkets}
          resolvedMarkets={resolvedMarkets}
        />
      </div>
    </div>
  );
}

Home.displayName = 'Home';

export default Home;
