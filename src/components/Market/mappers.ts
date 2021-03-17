import markets from './mock';

type Market = typeof markets[0];

function formatMarketAnalytics(market: Market) {
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

function formatMarketHead(market: Market) {
  const marketHead = {
    imageUrl: `../${market?.imageUrl}` || '',
    section: market?.section || '',
    subsection: market?.subsection || '',
    description: market?.description || ''
  };

  return marketHead;
}

export { formatMarketAnalytics, formatMarketHead };
