import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MarketAnalytics from './MarketAnalytics';
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

  function formatMarketAnalytics() {
    const marketAnalytics = [
      {
        title: 'Liquidity',
        value: `${market?.liquidity || 0} DOT`,
        color: 'yellow'
      },
      {
        title: 'Volume (24H)',
        value: `${market?.volume || 0} DOT`,
        color: 'blue'
      },
      { title: 'Fractions', value: `${market?.fractions || 0}`, color: 'pink' },
      { title: 'Expiration', value: market?.expiration || '', color: 'orange' }
    ];

    return marketAnalytics;
  }

  if (!market) return null;

  const marketAnalytics = formatMarketAnalytics();

  return (
    <div className="market-page">
      <MarketAnalytics items={marketAnalytics} />
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
