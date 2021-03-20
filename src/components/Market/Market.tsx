import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Table from '../Table';
import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketHead from './MarketHead';
import { markets, tableItems } from './mock';
import {
  formatMarketAnalytics,
  formatMarketHead,
  generateMarketChartRandomData
} from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const { marketId } = useParams<Params>();
  const [market, setMarket] = useState<typeof markets[0] | undefined>();
  const [chartDataSize, setChartDataSize] = useState(40);

  useEffect(() => {
    const currentMarket = markets.find(m => m.id === parseInt(marketId, 10));

    setMarket(currentMarket);
  }, [marketId]);

  const randomMarketChartData = useMemo(
    () => generateMarketChartRandomData(chartDataSize),
    [chartDataSize]
  );

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
      <div className="market-chart__container">
        <MarketChart serie={randomMarketChartData} />
        <MarketAnalytics direction="column" items={graphMarketAnalytics} />
      </div>
      <Table headers={tableItems.headers} rows={tableItems.rows} />
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
