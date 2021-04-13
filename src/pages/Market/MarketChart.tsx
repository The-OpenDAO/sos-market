import { useState } from 'react';

import { generateChartRandomData } from 'pages/Portfolio/utils';

import { ChartHeader, LineChart, Text } from 'components';

const MarketChart = () => {
  const [_currentInterval, setCurrentInterval] = useState(60);
  const [currentView, setCurrentView] = useState<string | undefined>(
    'marketOverview'
  );

  const lineChartDataA = generateChartRandomData();
  const lineChartDataB = generateChartRandomData(true);

  return (
    <div className="market-chart">
      <div className="market-chart__header">
        <Text as="h2" scale="body" fontWeight="semibold" color="light">
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
            defaultIntervalId="hour"
            onChangeInterval={(_interval, value) => setCurrentInterval(value)}
          />
        </div>
      </div>

      <div className="market-chart__view">
        {currentView === 'marketOverview' ? (
          <LineChart
            series={[
              { name: 'Yes', data: lineChartDataA },
              {
                name: 'No',
                data: lineChartDataB
              }
            ]}
            ticker="DOT"
            height={332}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MarketChart;
