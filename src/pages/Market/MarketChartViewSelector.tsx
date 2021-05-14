import { setChartViewType } from 'redux/ducks/market';

import { ButtonGroup } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

function MarketChartViewSelector() {
  const dispatch = useAppDispatch();
  const { chartViews, chartViewType } = useAppSelector(state => state.market);
  const { tradingViewSymbol } = useAppSelector(state => state.market.market);

  function filterChartViewOptions() {
    if (!tradingViewSymbol) {
      return chartViews.filter(view => view.id === 'marketOverview');
    }
    return chartViews;
  }

  function handleChangeChartViewType(type: string) {
    if (type !== chartViewType) {
      dispatch(setChartViewType(type));
    }
  }

  const availableChartViews = filterChartViewOptions();

  return (
    <div className="market-chart__view-selector">
      <ButtonGroup
        buttons={availableChartViews}
        defaultActiveId="marketOverview"
        onChange={handleChangeChartViewType}
      />
    </div>
  );
}

MarketChartViewSelector.displayName = 'MarketChartViewSelector';

export default MarketChartViewSelector;
