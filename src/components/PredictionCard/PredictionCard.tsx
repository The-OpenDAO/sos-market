import React from 'react';

interface Props {
  market: any;
}

const PredictionCard = ({ market }: Props) => {
  return (
    <div className="prediction-card">
      <img
        className="prediction-card__image"
        alt="prediction card"
        src={market.imageUrl}
      />
    </div>
  );
};

export default PredictionCard;
