import { Link } from 'react-router-dom';

import {
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeVisibility,
  setPredictions,
  setSelectedPrediction
} from 'redux/ducks/trade';

import { useAppDispatch } from 'hooks';

import PredictionCardDetails from './PredictionCardDetails';
import PredictionCardFooter from './PredictionCardFooter';
import PredictionCardSelection from './PredictionCardSelection';

type ChangeType = 'up' | 'down';

type Option = {
  id: number | string;
  marketId: number | string;
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
  const dispatch = useAppDispatch();

  const {
    id,
    imageUrl,
    section,
    subsection,
    description,
    options,
    volume,
    expiration,
    liquidity
  } = market;

  function handleNavigation() {
    dispatch(changeTradeVisibility(true));
    dispatch(changeChartsVisibility(false));
    dispatch(setPredictions(market.options));
    dispatch(setSelectedPrediction(market.options[0].id));
    dispatch(changePredictionsVisibility(true));
  }

  return (
    <div className="prediction-card">
      <div className="prediction-card__content">
        <Link to={`/markets/${id}`} onClick={handleNavigation}>
          <PredictionCardDetails
            imageUrl={imageUrl}
            section={section}
            subsection={subsection}
            description={description}
          />
        </Link>
        <PredictionCardSelection predictions={options} />
      </div>
      <PredictionCardFooter
        volume={volume}
        expiration={expiration}
        liquidity={liquidity}
      />
    </div>
  );
}

PredictionCard.displayName = 'PredictionCard';

export default PredictionCard;
