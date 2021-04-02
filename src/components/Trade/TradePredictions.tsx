import classNames from 'classnames';
import { setSelectedPrediction } from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import MiniTable from '../MiniTable';
import Text from '../Text';

function TradePredictions() {
  const dispatch = useAppDispatch();

  const predictions = useAppSelector(state => state.trade.predictions);
  const selectedPredictionId = useAppSelector(
    state => state.trade.selectedPredictionId
  );

  function handleChangeSelectedPrediction(id: string) {
    dispatch(setSelectedPrediction(id));
  }

  return (
    <div className="trade-predictions">
      {predictions?.map((prediction, index) => (
        <div
          key={prediction.id}
          className={classNames({
            'trade-predictions__item': true,
            active: prediction.id === selectedPredictionId
          })}
          role="button"
          tabIndex={index}
          onClick={() => handleChangeSelectedPrediction(prediction.id)}
          onKeyPress={() => handleChangeSelectedPrediction(prediction.id)}
        >
          <div className="trade-predictions__item-prediction">
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
            items={[
              { name: 'Price Per Fraction', value: prediction.pricePerFraction }
            ]}
          />
        </div>
      ))}
    </div>
  );
}

TradePredictions.displayName = 'TradePredictions';

export default TradePredictions;