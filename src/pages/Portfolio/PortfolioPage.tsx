import { useEffect } from 'react';

import { changeTradeVisibility } from 'redux/ducks/trade';

import { CategoryAnalytics, MarketTable, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { portfolioAnalytics, markets } from './mock';
import PortfolioChart from './PortfolioChart';

const PortfolioPage = () => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(state => state.trade.visible);

  useEffect(() => {
    if (visible) {
      dispatch(changeTradeVisibility(false));
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
        {portfolioAnalytics?.map(item => (
          <li key={item.title}>
            <CategoryAnalytics
              title={item.title}
              value={item.value}
              change={item.change}
              chartData={item.chartData}
              backgroundColor={item.backgroundColor}
            />
          </li>
        ))}
      </ul>

      <PortfolioChart />
      <MarketTable rows={markets} />
    </div>
  );
};

export default PortfolioPage;
