import { useEffect } from 'react';

import { getMarkets } from 'redux/ducks/markets';
import { getPortfolio } from 'redux/ducks/portfolio';
import { closeRightSidebar } from 'redux/ducks/ui';

import {
  CategoryAnalytics,
  PortfolioLiquidityTable,
  PortfolioMarketTable,
  Tabs,
  Text
} from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import PortfolioChart from './PortfolioChart';
import {
  formatLiquidityPositions,
  formatMarketPositions,
  formatPortfolioAnalytics
} from './utils';

const PortfolioPage = () => {
  const dispatch = useAppDispatch();
  const { ticker } = useCurrency();
  const rightSidebarIsVisible = useAppSelector(
    state => state.ui.rightSidebar.visible
  );
  const { markets, isLoading, error } = useAppSelector(state => state.markets);
  const ethAddress = useAppSelector(state => state.bepro.ethAddress);
  // portfolio data fetched from wallet
  const portfolio = useAppSelector(state => state.bepro.portfolio);
  // portfolio stats fetched from api
  const apiPortfolio = useAppSelector(state => state.portfolio.portfolio);

  useEffect(() => {
    if (rightSidebarIsVisible) {
      dispatch(closeRightSidebar());
    }
    dispatch(getMarkets());
  }, [rightSidebarIsVisible, dispatch]);

  useEffect(() => {
    if (ethAddress) {
      dispatch(getPortfolio(ethAddress));
    }
  }, [ethAddress, dispatch]);

  const analytics = formatPortfolioAnalytics(apiPortfolio, ticker);
  const marketPositions = formatMarketPositions(portfolio, markets);
  const liquidityPositions = formatLiquidityPositions(portfolio, markets);

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
        {analytics?.map(
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
          <PortfolioMarketTable
            rows={marketPositions.rows}
            headers={marketPositions.headers}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Liquidity Positions" id="news">
          <PortfolioLiquidityTable
            rows={liquidityPositions.rows}
            headers={liquidityPositions.headers}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default PortfolioPage;
