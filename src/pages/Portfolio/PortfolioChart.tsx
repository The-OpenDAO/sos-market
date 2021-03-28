import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import { AreaChart, Label, Text } from 'components';

import { balance } from './mock';
import { generateChartRandomData } from './utils';

const PortfolioChart = () => {
  const randomPortfolioChartData = generateChartRandomData();

  return (
    <div className="portfolio-chart">
      <div className="portfolio-chart__header">
        <div className="portfolio-chart__header-balance">
          <Text as="h4" scale="heading" fontWeight="semibold">
            {`${balance.total} DOT`}
          </Text>
          <Text as="span" scale="tiny" fontWeight="medium">
            Total Balance
          </Text>
        </div>
        <div
          className={`portfolio-chart__header-change--${balance.change.type}`}
        >
          <Label color={balance.change.type === 'up' ? 'success' : 'danger'}>
            {balance.change.type === 'up' ? <CaretUpIcon /> : <CaretDownIcon />}
            {`${balance.change.percentage}%`}
          </Label>
          <Text as="span" scale="body" fontWeight="semibold">
            {`${balance.change.amount} DOT`}
          </Text>
        </div>
      </div>
      <div className="portfolio-chart__view">
        <AreaChart serie={randomPortfolioChartData} ticker="DOT" height={210} />
      </div>
    </div>
  );
};

export default PortfolioChart;
