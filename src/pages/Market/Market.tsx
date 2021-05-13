import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import dayjs from 'dayjs';
import { getMarket } from 'redux/ducks/market';
import { reset } from 'redux/ducks/trade';
import { openTradeForm } from 'redux/ducks/ui';

import { Tabs, Table, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketHead from './MarketHead';
import MarketStats from './MarketStats';
import { formatMarketActions, generateMarketChartRandomData } from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const dispatch = useAppDispatch();
  const { ticker } = useCurrency();
  const { marketId } = useParams<Params>();
  const { market, isLoading } = useAppSelector(state => state.market);
  const actions = useAppSelector(state => state.bepro.actions);

  useEffect(() => {
    dispatch(reset());
    dispatch(getMarket(marketId));
    dispatch(openTradeForm());
  }, [dispatch, marketId]);

  if (!market || market.id === '' || isLoading)
    return (
      <div className="pm-market__loading">
        <span className="spinner--primary" />
      </div>
    );

  const marketLastWeek = generateMarketChartRandomData(10);
  const tableItems = formatMarketActions(
    (actions as any).filter(action => action.marketId === market?.id),
    market,
    ticker
  );

  return (
    <div className="market-page">
      <MarketAnalytics
        liquidity={market.liquidity}
        volume={market.volume}
        expiration={dayjs(market.expiresAt).format('YYYY-MM-DD')}
      />
      <MarketHead
        section={market.category}
        subsection={market.subcategory}
        imageUrl={market.imageUrl}
        description={market.title}
      />
      <div className="market-page__stats">
        <MarketChart />
        <MarketStats market={market} />
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
          href={market.oracleSource}
          target="_blank"
          className="tiny semibold text-primary"
          rel="noreferrer"
        >
          {market.oracleSource}
        </a>
      </Text>
      <Tabs defaultActiveId="positions">
        <Tabs.TabPane tab="Positions" id="positions">
          <Table columns={tableItems.columns} rows={tableItems.rows} />
        </Tabs.TabPane>
        {/* market.description ? (
          <Tabs.TabPane tab="About market" id="about">
            <Text as="p" scale="body" fontWeight="medium" color="light">
              Coming Soon 🔥
            </Text>
          </Tabs.TabPane>
        ) : null */}
        <Tabs.TabPane tab="News" id="news">
          <Text as="p" scale="body" fontWeight="medium" color="light">
            Coming Soon 🔥
          </Text>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
