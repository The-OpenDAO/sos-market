import { useEffect } from 'react';

import { fromPriceChartToLineChartSeries } from 'helpers/chart';
import { getPortfolio } from 'redux/ducks/portfolio';

import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import { AreaChart, Label, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import { balance } from './mock';

const PortfolioChart = () => {
  const dispatch = useAppDispatch();
  const ethAddress = useAppSelector(state => state.bepro.ethAddress);
  const holdingsChart = useAppSelector(
    state => state.portfolio.portfolio.holdingsChart
  );

  useEffect(() => {
    if (ethAddress) {
      dispatch(getPortfolio(ethAddress));
    }
  }, [ethAddress, dispatch]);

  const holdingsChartData = fromPriceChartToLineChartSeries(holdingsChart);

  return (
    <div className="portfolio-chart">
      <div className="portfolio-chart__header">
        <div className="portfolio-chart__header-balance">
          <Text as="h4" scale="heading" fontWeight="semibold" color="light">
            {`${balance.total} ETH`}
          </Text>
          <Text as="span" scale="tiny" fontWeight="medium" color="dark-gray">
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
          <Text as="span" scale="body" fontWeight="semibold" color="success">
            {`${balance.change.amount} ETH`}
          </Text>
        </div>
      </div>
      <div className="portfolio-chart__view">
        <AreaChart serie={holdingsChartData} ticker="ETH" height={210} />
      </div>
    </div>
  );
};

export default PortfolioChart;
