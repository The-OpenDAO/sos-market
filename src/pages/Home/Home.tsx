import { useEffect } from 'react';

import { getMarkets } from 'redux/ducks/markets';

import { Tabs, MarketList } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import HomeCategories from './HomeCategories';
import HomeMobileInfo from './HomeMobileInfo';

function Home() {
  const dispatch = useAppDispatch();
  const { markets } = useAppSelector(state => state.markets);

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

        {/* <div className="navigation">
          <div className="filters">
            <Select label="Sort by:" name="Sort by" disabled>
              <option value="Most traded">Most traded</option>
            </Select>
          </div>
        </div> */}

        <Tabs defaultActiveId="open">
          <Tabs.TabPane tab="Open" id="open">
            <MarketList markets={openMarkets} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="In-Reporting" id="in-reporting">
            <MarketList markets={closedMarkets} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Resolved" id="resolved">
            <MarketList markets={resolvedMarkets} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

Home.displayName = 'Home';

export default Home;
