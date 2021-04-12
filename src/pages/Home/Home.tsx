import { useEffect } from 'react';

import { getMarkets } from 'redux/ducks/markets';

import { Tabs, MarketList } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import HomeCategories from './HomeCategories';

function Home() {
  const dispatch = useAppDispatch();
  const { markets, isLoading, error } = useAppSelector(state => state.markets);

  useEffect(() => {
    dispatch(getMarkets());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__content">
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
            <MarketList markets={markets} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Favorites" id="favorites" />
          <Tabs.TabPane tab="In-Reporting" id="in-reporting" />
          <Tabs.TabPane tab="Resolved" id="resolved" />
        </Tabs>
      </div>
    </div>
  );
}

Home.displayName = 'Home';

export default Home;
