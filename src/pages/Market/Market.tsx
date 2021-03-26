import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Tabs, Table } from 'components';

import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketHead from './MarketHead';
import { markets, tableItems } from './mock';
import { formatMarketAnalytics, formatMarketHead } from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const { marketId } = useParams<Params>();
  const [market, setMarket] = useState<typeof markets[0] | undefined>();

  useEffect(() => {
    const currentMarket = markets.find(m => m.id === parseInt(marketId, 10));

    setMarket(currentMarket);
  }, [marketId]);

  if (!market) return null;

  const headerMarketAnalytics = formatMarketAnalytics(market, true);
  const marketHead = formatMarketHead(market);
  const graphMarketAnalytics = formatMarketAnalytics(market, false);

  return (
    <div className="market-page">
      <MarketAnalytics direction="row" items={headerMarketAnalytics} />
      <MarketHead
        section={marketHead.section}
        subsection={marketHead.subsection}
        imageUrl={marketHead.imageUrl}
        description={marketHead.description}
      />
      <div className="market-page__stats">
        <MarketChart />
        <MarketAnalytics direction="column" items={graphMarketAnalytics} />
      </div>
      <br />
      <Tabs defaultActiveKey="positions">
        <Tabs.TabPane tab="Positions" id="positions">
          <Table headers={tableItems.headers} rows={tableItems.rows} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="About markets" id="about" />
        <Tabs.TabPane tab="News" id="news" />
      </Tabs>
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
