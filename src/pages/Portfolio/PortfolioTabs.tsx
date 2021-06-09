import { useState, memo } from 'react';

import { setFilter } from 'redux/ducks/portfolio';

import {
  ButtonGroup,
  PortfolioLiquidityTable,
  PortfolioMarketTable,
  Filter
} from 'components';

import { useAppSelector, useAppDispatch } from 'hooks';

import { formatLiquidityPositions, formatMarketPositions } from './utils';

function TabsFilter() {
  const dispatch = useAppDispatch();

  function handleChangeFilter(newFilter: { value: string; name: string }) {
    dispatch(setFilter(newFilter.value));
  }

  return (
    <Filter
      description="Filter by"
      defaultOption="open"
      options={[
        { value: 'open', name: 'Open' },
        { value: 'resolved', name: 'Resolved' }
      ]}
      onChange={handleChangeFilter}
    />
  );
}

const PortfolioTabsFilter = memo(TabsFilter);

function PortfolioTabs() {
  const [currentTab, setCurrentTab] = useState('marketPositions');

  const markets = useAppSelector(state => state.markets.markets);
  const portfolio = useAppSelector(state => state.bepro.portfolio);

  const marketPositions = formatMarketPositions(portfolio, markets);
  const liquidityPositions = formatLiquidityPositions(portfolio, markets);

  return (
    <div className="portfolio-tabs">
      <div className="portfolio-tabs__header">
        <ButtonGroup
          defaultActiveId="marketPositions"
          buttons={[
            {
              id: 'marketPositions',
              name: 'Market Positions',
              color: 'default'
            },
            {
              id: 'liquidityPositions',
              name: 'Liquidity Positions',
              color: 'default'
            }
          ]}
          onChange={setCurrentTab}
          style={{ width: 'fit-content' }}
        />
        <PortfolioTabsFilter />
      </div>
      <div className="portfolio-tabs__content">
        {currentTab === 'marketPositions' ? (
          <PortfolioMarketTable
            rows={marketPositions.rows}
            headers={marketPositions.headers}
          />
        ) : null}
        {currentTab === 'liquidityPositions' ? (
          <PortfolioLiquidityTable
            rows={liquidityPositions.rows}
            headers={liquidityPositions.headers}
          />
        ) : null}
      </div>
    </div>
  );
}

PortfolioTabs.displayName = 'PortfolioTabs';

export default PortfolioTabs;
