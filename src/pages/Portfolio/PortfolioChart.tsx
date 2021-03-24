import { AreaChart } from 'components';

import { generateChartRandomData } from './utils';

const PortfolioChart = () => {
  const randomPortfolioChartData = generateChartRandomData();

  return (
    <div className="portfolio-chart">
      <div className="portfolio-chart__view">
        <AreaChart serie={randomPortfolioChartData} />
      </div>
    </div>
  );
};

export default PortfolioChart;
