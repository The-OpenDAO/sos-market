import { useAppSelector } from 'hooks';

import TradeDetails from './TradeDetails';
import TradeInput from './TradeInput';
import TradePredictions from './TradePredictions';
import TradeTerms from './TradeTerms';
import TradeTypeSelector from './TradeTypeSelector';

function Trade() {
  const visible = useAppSelector(state => state.trade.visible);

  if (!visible) return null;

  return (
    <div className="trade">
      <TradePredictions />
      <TradeTypeSelector />
      <TradeInput max={0.0104} />
      <TradeDetails />
      <TradeTerms />
    </div>
  );
}

Trade.displayName = 'Trade';

export default Trade;
