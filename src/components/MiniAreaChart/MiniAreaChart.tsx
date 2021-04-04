import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

import dayjs from 'dayjs';

import generateCustomOptions from './options';

const colors = {
  primary: '#5751fc',
  success: '#46d39a',
  danger: '#ef4444',
  white: '#FFFFFF'
};

type Event = {
  x: dayjs.Dayjs;
  y: number;
};

type StrokeCurve = 'smooth' | 'straight';

type Color = keyof typeof colors;

type MiniAreaChartProps = {
  serie: Event[];
  strokeCurve?: StrokeCurve;
  color?: Color;
  height?: number | string;
  width?: number | string;
};

function MiniAreaChart({
  serie,
  strokeCurve = 'smooth',
  color = 'primary',
  height = 30,
  width = 50
}: MiniAreaChartProps) {
  const customOptions = useMemo(
    () => generateCustomOptions(strokeCurve, colors[color]),
    [strokeCurve, color]
  );
  return (
    <ReactApexChart
      options={customOptions}
      series={[{ data: serie }]}
      type="area"
      width={width}
      height={height}
    />
  );
}

MiniAreaChart.displayName = 'MiniAreaChart';

export default MiniAreaChart;