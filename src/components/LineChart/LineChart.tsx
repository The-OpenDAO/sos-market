import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

import dayjs from 'dayjs';

import generateCustomOptions from './options';

type Event = {
  x: dayjs.Dayjs;
  y: number;
};

type Serie = {
  data: Event[];
};

type AreaChartProps = {
  series: Serie[];
  ticker: string;
  height?: number | string;
  showGrid?: boolean;
};

function LineChart({
  series,
  ticker,
  height = 200,
  showGrid = true
}: AreaChartProps) {
  const customOptions = useMemo(() => generateCustomOptions(ticker, showGrid), [
    ticker,
    showGrid
  ]);

  return (
    <ReactApexChart
      options={customOptions}
      series={series}
      type="line"
      height={height}
    />
  );
}

LineChart.displayName = 'LineChart';

export default LineChart;
