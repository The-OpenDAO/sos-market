import classNames from 'classnames';
import { selectOutcome } from 'redux/ducks/market';

import { useAppDispatch, useAppSelector } from 'hooks';

import MiniTable from '../MiniTable';
import Text from '../Text';

function TradeFormPredictions() {
  const dispatch = useAppDispatch();
  const showPredictions = useAppSelector(state => state.trade.showPredictions);
  const { market, selectedOutcomeId } = useAppSelector(state => state.market);

  if (!showPredictions) return null;

  function handleChangeSelectedPrediction(id: string | number) {
    dispatch(selectOutcome(market, id));
  }

  return (
    <div className="pm-c-trade-form-predictions">
      {market.outcomes.map((prediction, index) => (
        <div
          key={prediction.id}
          className={classNames({
            'pm-c-trade-form-predictions__item': true,
            active:
              prediction.id === selectedOutcomeId &&
              prediction.marketId === market.id
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
              {`ODD `}
              <Text as="strong" fontWeight="bold">
                {prediction.price.toFixed(3)}
              </Text>
            </Text>
          </div>
          <MiniTable
            rows={[
              {
                key: 'pricePerFraction',
                title: 'Price Per Fraction',
                value: prediction.price
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
