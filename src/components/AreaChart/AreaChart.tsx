import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

import dayjs from 'dayjs';

import generateCustomOptions from './options';

type Event = {
  x: dayjs.Dayjs;
  y: number;
};

type AreaChartProps = {
  serie: Event[];
  ticker: string;
  height?: number | string;
};

const AreaChart = ({ serie, ticker, height = 200 }: AreaChartProps) => {
  const customOptions = useMemo(() => generateCustomOptions(ticker), [ticker]);

  return (
    <ReactApexChart
      options={customOptions}
      series={[{ data: serie }]}
      type="area"
      height={height}
    />
  );
};

export default AreaChart;
