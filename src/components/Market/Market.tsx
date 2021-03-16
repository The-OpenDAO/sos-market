import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Text } from 'components';

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

  return (
    <div className="market-page">
      <Text as="p">{market.description}</Text>
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
