import { CandleStickChartIcon, LineChartIcon } from 'assets/icons';

import { generateMarketChartRandomData } from 'pages/Market/utils';

import { useAppSelector } from 'hooks';

import CandleStickChart from '../CandleStickChart';
import ChartHeader from '../ChartHeader';

function TradeCharts() {
  const showCharts = useAppSelector(state => state.trade.showCharts);

  if (!showCharts) return null;

  const chartData = generateMarketChartRandomData(30);

  return (
    <div className="trade-charts">
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
        onChangeInterval={(interval, value) => console.log(interval, value)}
        onChangeView={view => console.log(view)}
      />
      <CandleStickChart serie={chartData} height={180} />
    </div>
  );
}

TradeCharts.displayName = 'TradeCharts';

export default TradeCharts;
