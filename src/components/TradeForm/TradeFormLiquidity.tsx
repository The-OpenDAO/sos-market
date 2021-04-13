import { InfoIcon } from 'assets/icons';

import { Button } from '../Button';

function TradeFormLiquidity() {
  return (
    <div className="pm-c-trade-form-liquidity">
      <Button variant="dark" size="sm" fullWidth>
        <span>Add Liquidity</span>
        <InfoIcon />
      </Button>
    </div>
  );
}

TradeFormLiquidity.displayName = 'TradeFormLiquidity';

export default TradeFormLiquidity;
