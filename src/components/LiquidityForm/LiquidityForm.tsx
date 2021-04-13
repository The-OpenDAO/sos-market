import { useState } from 'react';

import Checkbox from '../Checkbox';
import Toast from '../Toast';
import LiquidityFormInput from './LiquidityFormInput';
import LiquidityFormTypeSelector from './LiquidityFormTypeSelector';

function LiquidityForm() {
  const [acceptedRules, setAcceptedRules] = useState(false);

  return (
    <div className="pm-c-liquidity-form">
      <div className="pm-c-liquidity-form__info">
        <Toast
          variant="info"
          title="Liquidity information"
          description="By adding liquidity you’ll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."
        />
      </div>
      <LiquidityFormTypeSelector />
      <LiquidityFormInput />
      <div className="pm-c-liquidity-form__actions" />
      <div className="pm-c-liquidity-form__terms">
        <Checkbox
          label="By using Polkamarkets you are agreeing to our Terms of Service and Privacy Policy"
          checked={acceptedRules}
          onChange={() => setAcceptedRules(!acceptedRules)}
        />
      </div>
    </div>
  );
}

LiquidityForm.displayName = 'LiquidityForm';

export default LiquidityForm;
