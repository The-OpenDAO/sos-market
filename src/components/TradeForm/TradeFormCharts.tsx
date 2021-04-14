import { useState } from 'react';

import { fromPriceChartToLineChartSeries } from 'helpers/chart';

import { useAppSelector } from 'hooks';

import ChartHeader from '../ChartHeader';
import LineChart from '../LineChart';

function TradeFormCharts() {
  const showCharts = useAppSelector(state => state.trade.showCharts);
  const predictions = useAppSelector(state => state.market.market.outcomes);

  const [currentInterval, setCurrentInterval] = useState(24);

  if (!showCharts) return null;

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
    <div className="pm-c-trade-form-charts">
      <ChartHeader
        intervals={intervals}
        defaultIntervalId="hour"
        onChangeInterval={(_interval, value) => setCurrentInterval(value)}
      />
      <LineChart series={series} ticker="DOT" height={180} />
    </div>
  );
}

TradeFormCharts.displayName = 'TradeFormCharts';

export default TradeFormCharts;
