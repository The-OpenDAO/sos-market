import { useState, useMemo } from 'react';

import { CandleStickChartIcon, LineChartIcon } from 'assets/icons';

import { generateChartRandomData } from 'pages/Portfolio/utils';

import { CandleStickChart, ChartHeader, LineChart, Text } from 'components';

import { generateMarketChartRandomData } from './utils';

const MarketChart = () => {
  const [currentInterval, setCurrentInterval] = useState(60);
  const [currentView, setCurrentView] = useState('candleStick');

  const randomMarketChartData = useMemo(
    () => generateMarketChartRandomData(currentInterval),
    [currentInterval]
  );

  const lineChartDataA = generateChartRandomData();
  const lineChartDataB = generateChartRandomData(true);

  return (
    <div className="market-chart">
      <div className="market-chart__header">
        <Text
          className="market-chart__header-title"
          as="h2"
          scale="body"
          fontWeight="semibold"
        >
          Market Overview
        </Text>
        <div className="market-chart__header-actions">
          <ChartHeader
            intervals={[
              { id: 'hour', name: '1H', value: 60 },
              { id: '12hour', name: '12H', value: 120 },
              { id: 'day', name: '1D', value: 120 },
              { id: 'month', name: '1M', value: 120 }
            ]}
            views={[
              {
                id: 'candleStick',
                icon: <CandleStickChartIcon />
              },
              {
                id: 'line',
                icon: <LineChartIcon />
              }
            ]}
            defaultIntervalId="hour"
            defaultViewId="candleStick"
            onChangeInterval={(_interval, value) => setCurrentInterval(value)}
            onChangeView={view => setCurrentView(view)}
          />
        </div>
      </div>

      <div className="market-chart__view">
        {currentView === 'candleStick' ? (
          <CandleStickChart serie={randomMarketChartData} height={288} />
        ) : null}
        {currentView === 'line' ? (
          <LineChart
            series={[
              { data: lineChartDataA },
              {
                data: lineChartDataB
              }
            ]}
            ticker="DOT"
            height={288}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MarketChart;
