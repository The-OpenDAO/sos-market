import React, { useMemo } from 'react';

import { CategoryAnalytics } from 'components';

import { useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import { formatPortfolioAnalytics } from './utils';

function PortfolioAnalytics() {
  const { ticker } = useCurrency();

  const apiPortfolio = useAppSelector(state => state.portfolio.portfolio);

  const analytics = useMemo(
    () => formatPortfolioAnalytics(apiPortfolio, ticker),
    [apiPortfolio, ticker]
  );

  return (
    <ul className="portfolio-page__analytics">
      {analytics?.map(
        ({ title, value, change, chartData, backgroundColor }) => (
          <li key={title}>
            <CategoryAnalytics
              title={title}
              value={value}
              change={change}
              chartData={chartData}
              backgroundColor={backgroundColor}
            />
          </li>
        )
      )}
    </ul>
  );
}

PortfolioAnalytics.displayName = 'PortfolioAnalytics';

export default PortfolioAnalytics;
