import React from 'react';

import { Breadcrumb, Text } from 'components';

import PredictionSelection from './PredictionSelection';

type Market = {
  id: number;
  section: string;
  subsection: string;
  label: {
    enabled: boolean;
    title: string;
    variant: string;
  };
  imageUrl: string;
  description: string;
  volume: number;
  expiration: string;
  liquidity: number;
  favorite: boolean;
  options: [
    {
      id: number;
      name: string;
      odd: number;
      positive: boolean;
    }
  ];
};

interface Props {
  market: Market;
}

const PredictionCard = ({ market }: Props) => {
  return (
    <div className="prediction-card-container">
      <div className="prediction-card">
        <img
          className="prediction-card__image"
          alt="prediction card"
          src={market.imageUrl}
        />
        <div className="prediction-card__details">
          <Breadcrumb previous={market.section} actual={market.subsection} />
          <Text as="p" scale="body" fontWeight="medium">
            {market.description}
          </Text>
        </div>
        <ul className="prediction-card__actions">
          {market.options?.map(option => (
            <li key={option.id}>
              <PredictionSelection
                name={option.name}
                odd={option.odd}
                positive={option.positive}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="prediction-card-footer">
        <div className="prediction-card-footer__stats">
          <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
            {`Volume: `}
            <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
              {`${market.volume} DOT`}
            </Text>
          </Text>
          <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
            {`Expiration: `}
            <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
              {market.expiration}
            </Text>
          </Text>
          <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
            {`Liquidity: `}
            <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
              {`${market.liquidity} DOT`}
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
