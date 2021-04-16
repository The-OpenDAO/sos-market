import { useEffect } from 'react';

import { getMarkets } from 'redux/ducks/markets';
import { closeRightSidebar } from 'redux/ducks/ui';

import { CategoryAnalytics, MarketTable, Tabs, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { portfolioAnalytics } from './mock';
import PortfolioChart from './PortfolioChart';
import { formatMarketPositions } from './utils';

const PortfolioPage = () => {
  const dispatch = useAppDispatch();
  const rightSidebarIsVisible = useAppSelector(
    state => state.ui.rightSidebar.visible
  );
  const { markets, isLoading, error } = useAppSelector(state => state.markets);
  const portfolio = useAppSelector(state => state.bepro.portfolio);

  useEffect(() => {
    if (rightSidebarIsVisible) {
      dispatch(closeRightSidebar());
    }
    dispatch(getMarkets());
  }, [rightSidebarIsVisible, dispatch]);

  const marketPositions = formatMarketPositions(portfolio, markets);

  return (
    <div className="portfolio-page">
      <div className="portfolio-page__header">
        <Text
          className="portfolio-page__header-title"
          as="h1"
          scale="heading"
          fontWeight="semibold"
        >
          Portfolio
        </Text>
      </div>
      <ul className="portfolio-page__analytics">
        {portfolioAnalytics?.map(
          ({ title, value, change, chartData, backgroundColor }) => (
            <li key={title}>
              <CategoryAnalytics
                title={title}
                value={value}
                change={change}
                chartData={chartData}
                backgroundColor={backgroundColor}
              />
            </li>
          )
        )}
      </ul>

      <PortfolioChart />

      <Tabs defaultActiveId="positions">
        <Tabs.TabPane tab="Market Positions" id="positions">
          <MarketTable
            rows={marketPositions.rows}
            headers={marketPositions.headers}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Liquidity Positions" id="news">
          <MarketTable
            rows={marketPositions.rows}
            headers={marketPositions.headers}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default PortfolioPage;
