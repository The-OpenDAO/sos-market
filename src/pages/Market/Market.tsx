import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMarket } from 'redux/ducks/market';
import { openTradeForm } from 'redux/ducks/ui';

import { Tabs, Table, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';

import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketHead from './MarketHead';
import MarketStats from './MarketStats';
import { tableItems } from './mock';
import { generateMarketChartRandomData } from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const dispatch = useAppDispatch();
  const { marketId } = useParams<Params>();
  const { market, isLoading } = useAppSelector(state => state.market);

  useEffect(() => {
    dispatch(getMarket(marketId));
    dispatch(openTradeForm());
  }, [dispatch, marketId]);

  if (!market || isLoading) return null;

  const marketLastWeek = generateMarketChartRandomData(10);

  return (
    <div className="market-page">
      <MarketAnalytics
        liquidity={market.liquidity}
        volume={market.volume}
        expiration={market.expiresAt}
      />
      <MarketHead
        section={market.category}
        subsection={market.subcategory}
        imageUrl={market.imageUrl}
        description={market.title}
      />
      <div className="market-page__stats">
        <MarketChart />
        <MarketStats
          price={2.55}
          dayChangePercentage={10}
          weekChangePercentage={2}
          lastWeekPrices={marketLastWeek}
        />
      </div>
      <Text
        as="p"
        scale="tiny"
        fontWeight="semibold"
        style={{ margin: '0.8rem 0rem', alignSelf: 'center' }}
        color="lighter-gray"
      >
        {`Resolution source: `}
        <a
          href="https://www.google.com/finance"
          className="tiny semibold text-primary"
        >
          google.com/finance
        </a>
      </Text>
      <Tabs defaultActiveId="positions">
        <Tabs.TabPane tab="Positions" id="positions">
          <Table columns={tableItems.columns} rows={tableItems.rows} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="About market" id="about">
          <Text as="p" scale="body" fontWeight="medium" color="light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            vitae arcu morbi ultrices mollis tortor ac. Natoque interdum non
            iaculis lacinia ultricies et. Facilisi dui consequat iaculis
            facilisis feugiat vitae, urna. Sapien lorem turpis id lacus odio
            risus morbi cursus morbi. Imperdiet nunc, neque, tellus, id
            pellentesque sagittis. Porttitor blandit sem felis sed. At nunc,
            pellentesque vel morbi sed tristique aliquam. At urna erat augue
            quis consequat neque, accumsan. Mauris cras porta...
          </Text>
        </Tabs.TabPane>
        <Tabs.TabPane tab="News" id="news" />
      </Tabs>
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
