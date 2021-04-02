import { useAppSelector } from 'hooks';

import TradeActions from './TradeActions';
import TradeDetails from './TradeDetails';
import TradePredictions from './TradePredictions';
import TradeTerms from './TradeTerms';

function Trade() {
  const visible = useAppSelector(state => state.trade.visible);

  if (!visible) return null;

  return (
    <div className="trade">
      <TradePredictions />
      <TradeActions />
      <TradeDetails />
      <TradeTerms />
    </div>
  );
}

Trade.displayName = 'Trade';

export default Trade;
