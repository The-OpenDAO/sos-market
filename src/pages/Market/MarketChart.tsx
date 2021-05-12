import { useState } from 'react';
import { TradingViewStockChartWidget } from 'react-tradingview-components';

import { fromPriceChartToLineChartSeries } from 'helpers/chart';

import { ChartHeader, LineChart } from 'components';

import { useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

const MarketChart = () => {
  const { ticker } = useCurrency();
  const predictions = useAppSelector(state => state.market.market.outcomes);
  const { chartViewType } = useAppSelector(state => state.market);

  const [currentInterval, setCurrentInterval] = useState(24);

  const intervals = [
    { id: '24h', name: '24H', value: 24 },
    { id: '7d', name: '7D', value: 168 },
    { id: '30d', name: '30D', value: 720 },
    { id: 'all', name: 'ALL', value: 720 }
  ];

  const timeframe = intervals.find(
    interval => interval.value === currentInterval
  );

  const series = predictions.map(prediction => {
    const chart = prediction.priceCharts.find(
      priceChart => priceChart.timeframe === timeframe?.id
    );

    const data = fromPriceChartToLineChartSeries(chart?.prices || []);
    return {
      name: prediction.title,
      data
    };
  });

  return (
    <div className="market-chart">
      <div className="market-chart__view">
        {chartViewType === 'marketOverview' ? (
          <>
            <div className="market-chart__header">
              <div className="market-chart__header-actions">
                <ChartHeader
                  intervals={intervals}
                  defaultIntervalId="hour"
                  onChangeInterval={
                    (_interval, value) => setCurrentInterval(value)
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                />
              </div>
            </div>
            <LineChart series={series} ticker={ticker} height={332} />
          </>
        ) : null}
        {chartViewType === 'tradingView' ? (
          <TradingViewStockChartWidget
            symbol="BTCUSD"
            theme="Dark"
            range="D"
            autoSize
          />
        ) : null}
      </div>
    </div>
  );
};

export default MarketChart;
