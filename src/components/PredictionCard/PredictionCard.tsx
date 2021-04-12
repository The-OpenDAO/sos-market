import { Link } from 'react-router-dom';

import { Market } from 'models/market';
import {
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeVisibility,
  setPredictions,
  setSelectedPrediction,
  setSelectedMarket
} from 'redux/ducks/trade';

import { useAppDispatch } from 'hooks';

import PredictionCardDetails from './PredictionCardDetails';
import PredictionCardFooter from './PredictionCardFooter';
import PredictionCardSelection from './PredictionCardSelection';

type PredictionCardProps = {
  market: Market;
};

function PredictionCard({ market }: PredictionCardProps) {
  const dispatch = useAppDispatch();

  const {
    id,
    imageUrl,
    category,
    subcategory,
    title,
    outcomes,
    volume,
    expiresAt,
    liquidity
  } = market;

  function handleNavigation() {
    dispatch(changeTradeVisibility(true));
    dispatch(changeChartsVisibility(false));
    dispatch(setPredictions(outcomes));
    dispatch(setSelectedPrediction(outcomes[0].id));
    dispatch(setSelectedMarket(id));
    dispatch(changePredictionsVisibility(true));
  }

  return (
    <div className="prediction-card">
      <div className="prediction-card__content">
        <Link to={`/markets/${id}`} onClick={handleNavigation}>
          <PredictionCardDetails
            imageUrl={imageUrl}
            section={category}
            subsection={subcategory}
            description={title}
          />
        </Link>
        {/* <PredictionCardSelection predictions={outcomes} /> */}
      </div>
      <PredictionCardFooter
        volume={volume}
        expiration={expiresAt}
        liquidity={liquidity}
      />
    </div>
  );
}

PredictionCard.displayName = 'PredictionCard';

export default PredictionCard;
