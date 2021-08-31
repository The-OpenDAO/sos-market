import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import dayjs from 'dayjs';
import { getMarket, setChartViewType } from 'redux/ducks/market';
import { reset } from 'redux/ducks/trade';
import { openTradeForm } from 'redux/ducks/ui';

import { Tabs, Table, Text } from 'components';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketChartViewSelector from './MarketChartViewSelector';
import MarketHead from './MarketHead';
import MarketStats from './MarketStats';
import { formatMarketPositions } from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const dispatch = useAppDispatch();
  const { symbol, ticker } = useCurrency();
  const { marketId } = useParams<Params>();
  const { market, isLoading } = useAppSelector(state => state.market);
  const { actions, bondActions } = useAppSelector(state => state.bepro);

  useEffect(() => {
    async function fetchMarket() {
      dispatch(reset());
      await dispatch(getMarket(marketId));
      dispatch(setChartViewType('marketOverview'));
      dispatch(openTradeForm());
    }

    fetchMarket();
  }, [dispatch, marketId]);

  if (!market || market.id === '' || isLoading)
    return (
      <div className="pm-market__loading">
        <span className="spinner--primary" />
      </div>
    );

  const tableItems = formatMarketPositions(
    (actions as any).filter(action => action.marketId === market?.id),
    (bondActions as any).filter(
      action => action.questionId === market?.questionId
    ),
    market,
    symbol || ticker
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
      {market.tradingViewSymbol ? <MarketChartViewSelector /> : null}
      <div className="market-page__stats">
        <MarketChart />
        <MarketStats market={market} />
      </div>
      <Tabs defaultActiveId="positions">
        <Tabs.TabPane tab="Positions" id="positions">
          <Table
            columns={tableItems.columns}
            rows={tableItems.rows}
            isLoadingData={isLoading}
            emptyDataDescription="You have no positions."
          />
        </Tabs.TabPane>
        {/* market.description ? (
          <Tabs.TabPane tab="About market" id="about">
            <Text as="p" scale="body" fontWeight="medium" color="light">
              Coming Soon 🔥
            </Text>
          </Tabs.TabPane>
        ) : null */}
        <Tabs.TabPane tab="News" id="news">
          <Text
            as="p"
            scale="body"
            fontWeight="medium"
            className="market-page__news"
          >
            Coming Soon 🔥
          </Text>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
