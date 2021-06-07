import { useEffect } from 'react';

import { getMarkets } from 'redux/ducks/markets';
import { getPortfolio } from 'redux/ducks/portfolio';
import { closeRightSidebar } from 'redux/ducks/ui';

import { CategoryAnalytics } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import PortfolioChart from './PortfolioChart';
import PortfolioTabs from './PortfolioTabs';
import { formatPortfolioAnalytics } from './utils';

const PortfolioPage = () => {
  const dispatch = useAppDispatch();
  const { ticker } = useCurrency();
  const rightSidebarIsVisible = useAppSelector(
    state => state.ui.rightSidebar.visible
  );

  const ethAddress = useAppSelector(state => state.bepro.ethAddress);
  // portfolio stats fetched from api
  const apiPortfolio = useAppSelector(state => state.portfolio.portfolio);

  useEffect(() => {
    if (rightSidebarIsVisible) {
      dispatch(closeRightSidebar());
    }
    dispatch(getMarkets());
  }, [rightSidebarIsVisible, dispatch]);

  useEffect(() => {
    if (ethAddress) {
      dispatch(getPortfolio(ethAddress));
    }
  }, [ethAddress, dispatch]);

  const analytics = formatPortfolioAnalytics(apiPortfolio, ticker);

  return (
    <div className="portfolio-page">
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
      <PortfolioChart />
      <PortfolioTabs />
    </div>
  );
};

export default PortfolioPage;
