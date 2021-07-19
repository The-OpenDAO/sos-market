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
      <div className="pm-c-market-footer__group--row">
        <MarketFooterActions market={market} />
        <div className="pm-c-market-footer__divider--circle" />
        <MarketFooterTags market={market} />
      </div>
    </div>
  );
}

MarketFooter.displayName = 'MarketFooter';

export default MarketFooter;
