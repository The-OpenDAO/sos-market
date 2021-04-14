import { useEffect } from 'react';

import { closeTradeForm } from 'redux/ducks/ui';

import { CategoryAnalytics, MarketTable, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { portfolioAnalytics, markets } from './mock';
import PortfolioChart from './PortfolioChart';

const PortfolioPage = () => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(state => state.ui.tradeForm.visible);

  useEffect(() => {
    if (visible) {
      dispatch(closeTradeForm());
    }
  }, [dispatch, visible]);

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
