import { useState, useEffect } from 'react';

import { TradingService } from 'services';

import { useAppSelector } from 'hooks';

import TradeActions from './TradeActions';
import TradeCharts from './TradeCharts';
import TradeDetails from './TradeDetails';
import TradeInput from './TradeInput';
import TradeLiquidity from './TradeLiquidity';
import TradePredictions from './TradePredictions';
import TradeTerms from './TradeTerms';
import TradeTypeSelector from './TradeTypeSelector';

function Trade() {
  const visible = useAppSelector(state => state.trade.visible);
  const [balance = 0, setBalance] = useState<any | undefined>();

  const loadBalance = async () => {
    const tradingService = new TradingService();
    const currentBalance = await tradingService.getBalance();

    setBalance(currentBalance);
  };

  useEffect(() => {
    loadBalance();
  }, []);

  if (!visible) return null;

  return (
    <div className="trade">
      <div className="trade__group" style={{ gap: '1.6rem' }}>
        <TradeCharts />
        <TradePredictions />
        <TradeLiquidity />
      </div>
      <div className="trade__group" style={{ gap: '2.4rem' }}>
        <TradeTypeSelector />
        <TradeInput max={balance} />
        <TradeDetails />
        <TradeTerms />
        <TradeActions />
      </div>
    </div>
  );
}

Trade.displayName = 'Trade';

export default Trade;
