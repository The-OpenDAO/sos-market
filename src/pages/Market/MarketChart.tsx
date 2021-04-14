import { useState } from 'react';

import { fromPriceChartToLineChartSeries } from 'helpers/chart';

import { ChartHeader, LineChart, Text } from 'components';

import { useAppSelector } from 'hooks';

const MarketChart = () => {
  const predictions = useAppSelector(state => state.market.market.outcomes);

  const [currentInterval, setCurrentInterval] = useState(24);
  const [currentView, setCurrentView] = useState<string | undefined>(
    'marketOverview'
  );

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
      <div className="market-chart__header">
        <Text as="h2" scale="body" fontWeight="semibold" color="light">
          Market Overview
        </Text>
        <div className="market-chart__header-actions">
          <ChartHeader
            intervals={intervals}
            defaultIntervalId="hour"
            onChangeInterval={(_interval, value) => setCurrentInterval(value)}
          />
        </div>
      </div>

      <div className="market-chart__view">
        {currentView === 'marketOverview' ? (
          <LineChart series={series} ticker="DOT" height={332} />
        ) : null}
      </div>
    </div>
  );
};

export default MarketChart;
