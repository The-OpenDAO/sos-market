import { useAppSelector } from 'hooks';

import LiquidityForm from '../LiquidityForm';
import TradeForm from '../TradeForm';

function RightSidebar() {
  const tradeFormIsVisible = useAppSelector(
    state => state.ui.tradeForm.visible
  );
  const liquidityFormIsVisible = useAppSelector(
    state => state.ui.liquidityForm.visible
  );

  if (tradeFormIsVisible)
    return (
      <div className="pm-l-right-sidebar">
        <TradeForm />
      </div>
    );

  if (liquidityFormIsVisible)
    return (
      <div className="pm-l-right-sidebar">
        <LiquidityForm />
      </div>
    );

  return null;
}

RightSidebar.displayName = 'RightSidebar';

export default RightSidebar;
