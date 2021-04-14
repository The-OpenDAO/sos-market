import { Link } from 'react-router-dom';

import { Market as MarketInterface } from 'models/market';
import {
  changeChartsVisibility,
  changePredictionsVisibility,
  setPredictions,
  setSelectedPrediction,
  setSelectedMarket
} from 'redux/ducks/trade';
import { openTradeForm } from 'redux/ducks/ui';

import { useAppDispatch } from 'hooks';

import Market from '../Market';

type PredictionCardProps = {
  market: MarketInterface;
};

function PredictionCard({ market }: PredictionCardProps) {
  const dispatch = useAppDispatch();

  const { id, outcomes } = market;

  function handleNavigation() {
    dispatch(openTradeForm());
    dispatch(changeChartsVisibility(false));
    dispatch(setPredictions(outcomes));
    dispatch(setSelectedPrediction(outcomes[0].id));
    dispatch(setSelectedMarket(id));
    dispatch(changePredictionsVisibility(true));
  }

  return (
    <div className="prediction-card">
      <div className="prediction-card__body">
        <Link to={`/markets/${id}`} onClick={handleNavigation}>
          <Market market={market} />
        </Link>
        <Market.Options options={outcomes} />
      </div>
      <div className="prediction-card__footer">
        <Market.Footer market={market} ticker="DOT" />
      </div>
    </div>
  );
}

PredictionCard.displayName = 'PredictionCard';

export default PredictionCard;
