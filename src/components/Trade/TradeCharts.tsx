import { useAppSelector } from 'hooks';

// import CandleStickChart from '../CandleStickChart';

function TradeCharts() {
  const showCharts = useAppSelector(state => state.trade.showCharts);

  if (!showCharts) return null;

  return (
    <div className="trade-charts">
      {/* <CandleStickChart height={180} /> */}
    </div>
  );
}

TradeCharts.displayName = 'TradeCharts';

export default TradeCharts;
