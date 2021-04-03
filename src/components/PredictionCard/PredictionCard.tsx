import { useState } from 'react';
import { Link } from 'react-router-dom';

import PredictionCardDetails from './PredictionCardDetails';
import PredictionCardFooter from './PredictionCardFooter';
import PredictionCardSelection from './PredictionCardSelection';

type ChangeType = 'up' | 'down';

type Option = {
  id: number | string;
  name: string;
  odd: number;
  oddChange: {
    type: ChangeType;
  };
  pricePerFraction: number;
};

type Market = {
  id: string | number;
  imageUrl: string;
  section: string;
  subsection: string;
  description: string;
  options: Option[];
  volume: number;
  expiration: string;
  liquidity: number;
  favorite: boolean;
};

type PredictionCardProps = {
  market: Market;
};

function PredictionCard({ market }: PredictionCardProps) {
  const [showFooter, setShowFooter] = useState(false);

  const { id, imageUrl, section, subsection, description, options } = market;

  return (
    <div className="prediction-card">
      <div className="prediction-card__content">
        <Link to={`/markets/${id}`}>
          <PredictionCardDetails
            imageUrl={imageUrl}
            section={section}
            subsection={subsection}
            description={description}
          />
        </Link>
        <PredictionCardSelection predictions={options} />
      </div>

      {showFooter ? (
        <PredictionCardFooter
          volume={0}
          expiration=""
          liquidity={0}
          favorite={false}
        />
      ) : null}
    </div>
  );
}

PredictionCard.displayName = 'PredictionCard';

export default PredictionCard;
