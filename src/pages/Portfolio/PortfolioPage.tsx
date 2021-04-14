import { useEffect } from 'react';

import { closeRightSidebar } from 'redux/ducks/ui';

import { CategoryAnalytics, MarketTable, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { portfolioAnalytics, markets } from './mock';
import PortfolioChart from './PortfolioChart';

const PortfolioPage = () => {
  const dispatch = useAppDispatch();
  const rightSidebarIsVisible = useAppSelector(
    state => state.ui.rightSidebar.visible
  );

  useEffect(() => {
    if (rightSidebarIsVisible) {
      dispatch(closeRightSidebar());
    }
  }, [rightSidebarIsVisible, dispatch]);

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
      <MarketTable rows={markets} />
    </div>
  );
};

export default PortfolioPage;
