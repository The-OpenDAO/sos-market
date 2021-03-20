import ReactApexChart from 'react-apexcharts';

import dayjs from 'dayjs';

import options from './options';

type Event = {
  x: dayjs.Dayjs;
  y: number[];
};

type MarketChartProps = {
  serie: Event[];
  height?: number;
};

const CandleStickChart = ({ serie, height = 350 }: MarketChartProps) => {
  return (
    <ReactApexChart
      options={options}
      series={[{ data: serie }]}
      type="candlestick"
      height={height}
    />
  );
};

export default CandleStickChart;
