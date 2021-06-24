import { filteredMarketsSelector } from 'redux/ducks/markets';

import { useAppSelector } from 'hooks';
import useCategories from 'hooks/useCategories';

import HomeCategories from './HomeCategories';
import HomeMobileInfo from './HomeMobileInfo';
import HomeTabs from './HomeTabs';

function Home() {
  const categories = useCategories();
  const markets = useAppSelector(state =>
    filteredMarketsSelector(state.markets, categories)
  );

  const openMarkets = markets.filter(market => market.state === 'open');
  const closedMarkets = markets.filter(market => market.state === 'closed');
  const resolvedMarkets = markets.filter(market => market.state === 'resolved');

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
