import { useEffect } from 'react';

import classNames from 'classnames';
import { Market, Outcome } from 'models/market';
import { marketSelected } from 'redux/ducks/market';
import {
  selectOutcome,
  changeChartsVisibility,
  changePredictionsVisibility
} from 'redux/ducks/trade';
import { closeTradeForm, openTradeForm } from 'redux/ducks/ui';

import { ArrowDownIcon, ArrowUpIcon } from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';

import { generateChartRandomData } from '../Category/utils';
import MiniAreaChart from '../MiniAreaChart';
import Text from '../Text';

const chartData = generateChartRandomData();

type MarketOptionsItemProps = {
  market: Market;
  option: Outcome;
};

function MarketOptionsItem({ market, option }: MarketOptionsItemProps) {
  const dispatch = useAppDispatch();

  const { id, marketId, title, price } = option;

  const selectedPredictionId = useAppSelector(
    state => state.trade.selectedOutcomeId
  );
  const selectedMarketId = useAppSelector(
    state => state.trade.selectedMarketId
  );

  const isCurrentSelectedPrediction =
    marketId === selectedMarketId && id === selectedPredictionId;

  useEffect(() => {
    if (selectedMarketId === marketId && selectedPredictionId === id) {
      dispatch(openTradeForm());
    }
  }, [selectedMarketId, marketId, selectedPredictionId, id, dispatch]);

  function handleItemSelection() {
    dispatch(openTradeForm());
    dispatch(marketSelected(market));
    dispatch(changePredictionsVisibility(false));
    dispatch(changeChartsVisibility(true));

    if (!isCurrentSelectedPrediction) {
      dispatch(selectOutcome(market.id, option.id));
    } else {
      dispatch(selectOutcome(market.id, ''));
      dispatch(closeTradeForm());
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
            PRICE
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
  market: Market;
};

function MarketOptions({ market }: MarketOptionsProps) {
  const { outcomes } = market;
  return (
    <ul className="pm-c-market-options">
      {outcomes.map(option => (
        <li key={option.id}>
          <MarketOptionsItem market={market} option={option} />
        </li>
      ))}
    </ul>
  );
}

MarketOptions.displayName = 'MarketOptions';

export default MarketOptions;
