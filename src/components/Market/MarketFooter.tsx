import { Market } from 'models/market';

import MarketFooterActions from './MarketFooterActions';
import MarketFooterStats from './MarketFooterStats';
import MarketFooterTags from './MarketFooterTags';

type MarketFooterProps = {
  market: Market;
  ticker: string;
};

function MarketFooter({ market, ticker }: MarketFooterProps) {
  return (
    <div className="pm-c-market-footer">
      <MarketFooterStats market={market} ticker={ticker} />
      <MarketFooterActions market={market} />
      <MarketFooterTags market={market} />
    </div>
  );
}

MarketFooter.displayName = 'MarketFooter';

export default MarketFooter;
