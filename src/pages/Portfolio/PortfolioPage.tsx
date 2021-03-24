import React from 'react';

import { MarketTable, Text } from 'components';

import { portfolioCards, markets } from './mock';
import PortfolioCard from './PortfolioCard';
import PortfolioChart from './PortfolioChart';

const PortfolioPage = () => {
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
