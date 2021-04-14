import classNames from 'classnames';
import { Outcome } from 'models/market';
import {
  changeChartsVisibility,
  setPredictions,
  setSelectedMarket,
  setSelectedPrediction
} from 'redux/ducks/trade';
import { closeTradeForm, openTradeForm } from 'redux/ducks/ui';

import { ArrowDownIcon, ArrowUpIcon } from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';

import { generateChartRandomData } from '../Category/utils';
import MiniAreaChart from '../MiniAreaChart';
import Text from '../Text';

const chartData = generateChartRandomData();

type MarketOptionsItemProps = {
  option: Outcome;
  onSelect: () => void;
};

function MarketOptionsItem({ option, onSelect }: MarketOptionsItemProps) {
  const { id, marketId, title, price } = option;

  const dispatch = useAppDispatch();
  const visible = useAppSelector(state => state.ui.tradeForm.visible);
  const selectedPredictionId = useAppSelector(
    state => state.trade.selectedPredictionId
  );
  const selectedMarketId = useAppSelector(
    state => state.trade.selectedMarketId
  );

  function updatePredictions() {
    onSelect();
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
      dispatch(openTradeForm());
    }

    dispatch(changeChartsVisibility(true));
    updatePredictions();

    if (id !== selectedPredictionId || marketId !== selectedMarketId) {
      dispatch(setSelectedPrediction(id));
      dispatch(setSelectedMarket(marketId));
    } else if (id === selectedPredictionId && marketId === selectedMarketId) {
      dispatch(setSelectedPrediction(''));
      dispatch(setSelectedMarket(''));
      dispatch(closeTradeForm());
      dispatch(changeChartsVisibility(false));
      removePredictions();
    }
  }

  return (
    <button
      type="button"
      className={classNames({
        'pm-c-market-options__item': true,
        active: id === selectedPredictionId && marketId === selectedMarketId
      })}
      onClick={handleItemSelection}
    >
      <div className="pm-c-market-options__item-group">
        <Text as="p" scale="caption" fontWeight="semibold" color="light">
          {title}
        </Text>
        <div className="pm-c-market-options__item-odd">
          <Text
            as="p"
            scale="tiny-uppercase"
            fontWeight="bold"
            color="white-50"
          >
            ODD
          </Text>
          <Text as="span" scale="tiny" fontWeight="bold" color="light">
            {price.toFixed(3)}
          </Text>
          {Math.random() > 0.5 ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </div>
      <MiniAreaChart
        serie={chartData}
        color={Math.random() > 0.5 ? 'success' : 'danger'}
        width={48}
      />
    </button>
  );
}

type MarketOptionsProps = {
  options: Outcome[];
};

function MarketOptions({ options }: MarketOptionsProps) {
  const dispatch = useAppDispatch();

  function handleChangeSelectedPrediction() {
    dispatch(setPredictions(options));
  }

  return (
    <ul className="pm-c-market-options">
      {options.map(option => (
        <li key={option.id}>
          <MarketOptionsItem
            option={option}
            onSelect={handleChangeSelectedPrediction}
          />
        </li>
      ))}
    </ul>
  );
}

MarketOptions.displayName = 'MarketOptions';

export default MarketOptions;
