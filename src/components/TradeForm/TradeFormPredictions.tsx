import classNames from 'classnames';
import { setSelectedPrediction } from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import MiniTable from '../MiniTable';
import Text from '../Text';

function TradeFormPredictions() {
  const dispatch = useAppDispatch();
  const showPredictions = useAppSelector(state => state.trade.showPredictions);
  const predictions = useAppSelector(state => state.trade.predictions);
  const selectedPredictionId = useAppSelector(
    state => state.trade.selectedPredictionId
  );
  const selectedMarketId = useAppSelector(
    state => state.trade.selectedMarketId
  );

  if (!showPredictions) return null;

  function handleChangeSelectedPrediction(id: string) {
    dispatch(setSelectedPrediction(id));
  }

  return (
    <div className="pm-c-trade-form-predictions">
      {predictions?.map((prediction, index) => (
        <div
          key={prediction.id}
          className={classNames({
            'pm-c-trade-form-predictions__item': true,
            active:
              prediction.id === selectedPredictionId &&
              prediction.marketId === selectedMarketId
          })}
          role="button"
          tabIndex={index}
          onClick={() => handleChangeSelectedPrediction(prediction.id)}
          onKeyPress={() => handleChangeSelectedPrediction(prediction.id)}
        >
          <div className="pm-c-trade-form-predictions__item-prediction">
            <Text as="p" fontWeight="bold">
              {prediction.name}
            </Text>
            <Text as="span" fontWeight="bold">
              {`ODD `}
              <Text as="strong" fontWeight="bold">
                {prediction.odd}
              </Text>
            </Text>
          </div>
          <MiniTable
            rows={[
              {
                key: 'pricePerFraction',
                title: 'Price Per Fraction',
                value: prediction.pricePerFraction
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
