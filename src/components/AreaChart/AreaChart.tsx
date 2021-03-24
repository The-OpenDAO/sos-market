import React from 'react';
import ReactApexChart from 'react-apexcharts';

import dayjs from 'dayjs';

import options from './options';

type Event = {
  x: dayjs.Dayjs;
  y: number;
};

type AreaChartProps = {
  serie: Event[];
};

const AreaChart = ({ serie }: AreaChartProps) => {
  return (
    <ReactApexChart
      options={options}
      series={[{ data: serie }]}
      type="area"
      height="200"
    />
  );
};

export default AreaChart;
