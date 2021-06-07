import { useState } from 'react';

import { setFilter } from 'redux/ducks/portfolio';

import {
  ButtonGroup,
  Filter,
  PortfolioLiquidityTable,
  PortfolioMarketTable
} from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { formatLiquidityPositions, formatMarketPositions } from './utils';

const defaultTabId = 'marketPositions';
const defaultFilterId = 'open';

function PortfolioTabs() {
  const [currentTab, setCurrentTab] = useState(defaultTabId);

  const dispatch = useAppDispatch();

  const { markets } = useAppSelector(state => state.markets);
  const portfolio = useAppSelector(state => state.bepro.portfolio);

  function handleChangeFilter(newFilter: { value: string; name: string }) {
    dispatch(setFilter(newFilter.value));
  }

  const marketPositions = formatMarketPositions(portfolio, markets);
  const liquidityPositions = formatLiquidityPositions(portfolio, markets);

  return (
    <>
      <div className="portfolio-tabs">
        <ButtonGroup
          defaultActiveId={defaultTabId}
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
        <Filter
          description="Sort by"
          defaultOption={defaultFilterId}
          options={[
            { value: 'open', name: 'Open' },
            { value: 'resolved', name: 'Resolved' }
          ]}
          onChange={handleChangeFilter}
        />
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
    </>
  );
}

PortfolioTabs.displayName = 'PortfolioTabs';

export default PortfolioTabs;
