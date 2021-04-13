import { useAppSelector } from 'hooks';

import { generateChartRandomData } from '../Category/utils';
import ChartHeader from '../ChartHeader';
import LineChart from '../LineChart';

function TradeFormCharts() {
  const showCharts = useAppSelector(state => state.trade.showCharts);
  const predictions = useAppSelector(state => state.trade.predictions);

  if (!showCharts) return null;

  const lineChartDataA = generateChartRandomData();
  const lineChartDataB = generateChartRandomData(true);

  return (
    <div className="pm-c-trade-form-charts">
      <ChartHeader
        intervals={[
          { id: 'hour', name: '1H', value: 60 },
          { id: '12hour', name: '12H', value: 120 },
          { id: 'day', name: '1D', value: 120 },
          { id: 'month', name: '1M', value: 120 }
        ]}
        defaultIntervalId="hour"
        onChangeInterval={(interval, value) => console.log(interval, value)}
      />
      <LineChart
        series={[
          { name: predictions[0].name, data: lineChartDataA },
          {
            name: predictions[1].name,
            data: lineChartDataB
          }
        ]}
        ticker="DOT"
        height={180}
      />
    </div>
  );
}

TradeFormCharts.displayName = 'TradeFormCharts';

export default TradeFormCharts;
