import { setSorter } from 'redux/ducks/markets';

import { Tabs, MarketList, MarketListAsync, Filter } from 'components';

import { useAppDispatch } from 'hooks';

import { filters } from './utils';

function HomeTabs({
  openMarkets,
  closedMarkets,
  resolvedMarkets,
  favoritesMarkets
}) {
  const dispatch = useAppDispatch();

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
        <MarketListAsync marketState="open" markets={openMarkets} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="In-Reporting" id="in-reporting">
        <MarketListAsync marketState="closed" markets={closedMarkets} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Resolved" id="resolved">
        <MarketListAsync marketState="resolved" markets={resolvedMarkets} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Favorites" id="favorites">
        <MarketList markets={favoritesMarkets} />
      </Tabs.TabPane>
    </Tabs>
  );
}

HomeTabs.displayName = 'HomeTabs';

export default HomeTabs;
