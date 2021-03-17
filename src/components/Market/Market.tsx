import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { formatMarketAnalytics, formatMarketHead } from './mappers';
import MarketAnalytics from './MarketAnalytics';
import MarketHead from './MarketHead';
import markets from './mock';

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

  const marketAnalytics = formatMarketAnalytics(market);
  const marketHead = formatMarketHead(market);

  return (
    <div className="market-page">
      <MarketAnalytics items={marketAnalytics} />
      <MarketHead
        section={marketHead.section}
        subsection={marketHead.subsection}
        imageUrl={marketHead.imageUrl}
        description={marketHead.description}
      />
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
