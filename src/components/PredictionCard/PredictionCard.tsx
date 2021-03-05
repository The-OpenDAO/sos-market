import React from 'react';

import { Breadcrumb, Text } from 'components';

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
  liked: boolean;
};

interface Props {
  market: Market;
}

const PredictionCard = ({ market }: Props) => {
  return (
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
    </div>
  );
};

export default PredictionCard;
