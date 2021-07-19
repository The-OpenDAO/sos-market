import { getFavoriteMarkets, getMarkets, setSorter } from 'redux/ducks/markets';

import { Tabs, MarketListAsync, Filter } from 'components';

import { useAppDispatch, useFavoriteMarkets } from 'hooks';

import { filters } from './utils';

function HomeTabs({
  openMarkets,
  closedMarkets,
  resolvedMarkets,
  favoritesMarkets
}) {
  const dispatch = useAppDispatch();
  const { favoriteMarkets } = useFavoriteMarkets();

  function handleSelectedFilter(filter: {
    value: string | number;
    optionalTrigger?: string;
  }) {
    dispatch(
      setSorter({ value: filter.value, sortBy: filter.optionalTrigger })
    );
  }

  return (
    <Tabs
      defaultActiveId="open"
      filter={
        <Filter
          description="Sort by"
          defaultOption="volume"
          options={filters}
          onChange={handleSelectedFilter}
        />
      }
    >
      <Tabs.TabPane tab="Open" id="open">
        <MarketListAsync
          id="open"
          asyncAction={getMarkets}
          filterBy="open"
          markets={openMarkets}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="In-Reporting" id="in-reporting">
        <MarketListAsync
          id="closed"
          asyncAction={getMarkets}
          filterBy="closed"
          markets={closedMarkets}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Resolved" id="resolved">
        <MarketListAsync
          id="resolved"
          asyncAction={getMarkets}
          filterBy="resolved"
          markets={resolvedMarkets}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Favorites" id="favorites">
        <MarketListAsync
          id="favorites"
          asyncAction={getFavoriteMarkets}
          filterBy={favoriteMarkets}
          markets={favoritesMarkets}
        />
      </Tabs.TabPane>
    </Tabs>
  );
}

HomeTabs.displayName = 'HomeTabs';

export default HomeTabs;
