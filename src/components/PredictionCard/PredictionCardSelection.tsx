import classNames from 'classnames';
import {
  changeTradeVisibility,
  setSelectedPrediction,
  setPredictions,
  changeChartsVisibility
} from 'redux/ducks/trade';

import { ArrowUpIcon, ArrowDownIcon } from 'assets/icons';

import { generateChartRandomData } from 'pages/Portfolio/utils';

import { useAppDispatch, useAppSelector } from 'hooks';

import MiniAreaChart from '../MiniAreaChart';
import Text from '../Text';

const chartData = generateChartRandomData();

type ChangeType = 'up' | 'down';

type PredictionCardSelectionItemProps = {
  id: number | string;
  name: string;
  odd: number;
  oddChange: {
    type: ChangeType;
  };
  onChange: () => void;
};

function PredictionCardSelectionItem({
  id,
  name,
  odd,
  oddChange,
  onChange
}: PredictionCardSelectionItemProps) {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(state => state.trade.visible);
  const selectedPredictionId = useAppSelector(
    state => state.trade.selectedPredictionId
  );

  function updatePredictions() {
    onChange();
  }

  function removePredictions() {
    dispatch(
      setPredictions([
        {
          id: '',
          name: '',
          odd: 0,
          pricePerFraction: 0
        },
        {
          id: '',
          name: '',
          odd: 0,
          pricePerFraction: 0
        }
      ])
    );
  }

  function handleItemSelection() {
    if (!visible) {
      dispatch(changeTradeVisibility(true));
    }

    dispatch(changeChartsVisibility(true));
    updatePredictions();

    if (id !== selectedPredictionId) {
      dispatch(setSelectedPrediction(id));
    } else if (id === selectedPredictionId) {
      dispatch(setSelectedPrediction(''));
      dispatch(changeTradeVisibility(false));
      dispatch(changeChartsVisibility(false));
      removePredictions();
    }
  }

  return (
    <button
      type="button"
      className={classNames({
        'prediction-card-selection__item': true,
        active: id === selectedPredictionId
      })}
      onClick={handleItemSelection}
    >
      <div className="prediction-card-selection__item-group">
        <Text as="p" scale="caption" fontWeight="semibold">
          {name}
        </Text>
        <div className="prediction-card-selection__item-odd">
          <Text as="p" scale="tiny-uppercase" fontWeight="bold">
            ODD
          </Text>
          <Text as="span" scale="tiny" fontWeight="bold">
            {odd}
          </Text>
          {oddChange.type === 'up' ? <ArrowUpIcon /> : null}
          {oddChange.type === 'down' ? <ArrowDownIcon /> : null}
        </div>
      </div>
      <MiniAreaChart
        serie={chartData}
        color={oddChange.type === 'up' ? 'success' : 'danger'}
        width={48}
      />
    </button>
  );
}

PredictionCardSelectionItem.displayName = 'PredictionCardSelectionItem';

type Prediction = {
  id: number | string;
  name: string;
  odd: number;
  oddChange: {
    type: ChangeType;
  };
  pricePerFraction: number;
};

type PredictionSelectionProps = {
  predictions: Prediction[];
};

const PredictionSelection = ({ predictions }: PredictionSelectionProps) => {
  const dispatch = useAppDispatch();

  function handleChangeSelectedPrediction() {
    dispatch(setPredictions(predictions));
  }

  return (
    <ul className="prediction-card-selection">
      {predictions?.map(prediction => (
        <li key={prediction.name}>
          <PredictionCardSelectionItem
            id={prediction.id}
            name={prediction.name}
            odd={prediction.odd}
            oddChange={prediction.oddChange}
            onChange={handleChangeSelectedPrediction}
          />
        </li>
      ))}
    </ul>
  );
};

PredictionSelection.displayName = 'PredictionSelection';

export default PredictionSelection;
