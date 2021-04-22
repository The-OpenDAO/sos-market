import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames';
import { roundNumber } from 'helpers/math';
import { changePredictionsVisibility, selectOutcome } from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import MiniTable from '../MiniTable';
import Text from '../Text';

function TradeFormPredictions() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const showPredictions = useAppSelector(state => state.trade.showPredictions);
  const selectedMarketId = useAppSelector(
    state => state.trade.selectedMarketId
  );
  const selectedOutcomeId = useAppSelector(
    state => state.trade.selectedOutcomeId
  );
  const outcomes = useAppSelector(state => state.market.market.outcomes);
  const portfolio = useAppSelector(state => state.bepro.portfolio);

  useEffect(() => {
    if (location.pathname === '/home') {
      dispatch(changePredictionsVisibility(false));
    } else {
      dispatch(changePredictionsVisibility(true));
    }
  }, [showPredictions, location, dispatch]);

  if (!showPredictions) return null;

  function handleChangeSelectedPrediction(id: string | number) {
    dispatch(selectOutcome(selectedMarketId, id));
  }

  return (
    <div className="pm-c-trade-form-predictions">
      {outcomes.map((prediction, index) => (
        <div
          key={prediction.id}
          className={classNames({
            'pm-c-trade-form-predictions__item': true,
            active:
              prediction.id === selectedOutcomeId &&
              prediction.marketId === selectedMarketId
          })}
          role="button"
          tabIndex={index}
          onClick={() => handleChangeSelectedPrediction(prediction.id)}
          onKeyPress={() => handleChangeSelectedPrediction(prediction.id)}
        >
          <div className="pm-c-trade-form-predictions__item-prediction">
            <Text as="p" fontWeight="bold">
              {prediction.title}
            </Text>
            <Text as="span" fontWeight="bold">
              {`PRICE `}
              <Text as="strong" fontWeight="bold">
                {prediction.price.toFixed(3)}
              </Text>
            </Text>
          </div>
          <MiniTable
            rows={[
              {
                key: 'yourShares',
                title: 'Your Shares',
                // eslint-disable-next-line prettier/prettier
                value: roundNumber(portfolio[selectedMarketId]?.outcomes[prediction.id]?.shares, 3) || 0
              }
            ]}
          />
        </div>
      ))}
    </div>
  );
}

TradeFormPredictions.displayName = 'TradeFormPredictions';

export default TradeFormPredictions;
