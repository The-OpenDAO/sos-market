import { useEffect } from 'react';

import { changeTradeVisibility } from 'redux/ducks/trade';

import { MarketTable, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { portfolioCards, markets } from './mock';
import PortfolioCard from './PortfolioCard';
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
      <div className="portfolio-page__cards">
        {portfolioCards?.map(card => (
          <PortfolioCard
            key={card.title}
            title={card.title}
            value={card.value}
            change={card.change}
            variant={card.variant}
          />
        ))}
      </div>

      <PortfolioChart />
      <MarketTable rows={markets} />
    </div>
  );
};

export default PortfolioPage;
