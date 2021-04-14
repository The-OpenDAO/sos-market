import { fromTimestampToDate } from 'helpers/date';
import { PriceChartPoint } from 'models/market';

function fromPriceChartToLineChartSeries(chartData: PriceChartPoint[]) {
  return chartData.map(point => {
    return {
      x: fromTimestampToDate(point.timestamp * 1000),
      y: point.value
    };
  });
}

// eslint-disable-next-line import/prefer-default-export
export { fromPriceChartToLineChartSeries };
