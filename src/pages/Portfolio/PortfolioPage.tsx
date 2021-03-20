import React from 'react';

import { Text } from 'components';

import { portfolioCards } from './mock';
import PortfolioCard from './PortfolioCard';

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
    </div>
  );
};

export default PortfolioPage;
