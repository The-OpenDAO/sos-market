import Toast from '../Toast';

function LiquidityFormInfo() {
  return (
    <div className="pm-c-liquidity-form__info">
      <Toast
        variant="info"
        title="Liquidity information"
        description="By adding liquidity you’ll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."
      />
    </div>
  );
}

LiquidityFormInfo.displayName = 'LiquidityFormInfo';

export default LiquidityFormInfo;
