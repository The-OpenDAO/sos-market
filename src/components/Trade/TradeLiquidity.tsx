import { InfoIcon } from 'assets/icons';

import Button from '../Button';

function TradeLiquidity() {
  return (
    <div className="trade-liquidity">
      <Button variant="dark" size="sm" fullWidth>
        <span>Add Liquidity</span>
        <InfoIcon />
      </Button>
    </div>
  );
}

TradeLiquidity.displayName = 'TradeLiquidity';

export default TradeLiquidity;
