import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

import dayjs from 'dayjs';

import { useTheme } from 'hooks';

import generateCustomOptions from './options';

type Event = {
  x: dayjs.Dayjs;
  y: number;
};

type Serie = {
  name: string;
  data: Event[];
};

type LineChartProps = {
  series: Serie[];
  ticker: string;
  height?: number | string;
};

function LineChart({ series, ticker, height = 200 }: LineChartProps) {
  const { theme } = useTheme();
  const customOptions = useMemo(
    () => generateCustomOptions(theme, ticker),
    [theme, ticker]
  );

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
