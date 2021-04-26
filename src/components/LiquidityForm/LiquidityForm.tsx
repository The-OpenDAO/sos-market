import LiquidityFormActions from './LiquidityFormActions';
import LiquidityFormInfo from './LiquidityFormInfo';
import LiquidityFormInput from './LiquidityFormInput';
import LiquidityFormTerms from './LiquidityFormTerms';
import LiquidityFormTypeSelector from './LiquidityFormTypeSelector';

function LiquidityForm() {
  return (
    <div className="pm-c-liquidity-form">
      <div className="pm-c-liquidity-form__group">
        <LiquidityFormInfo />
      </div>
      <div className="pm-c-liquidity-form__group">
        <LiquidityFormTypeSelector />
        <LiquidityFormInput />
        {/* <LiquidityFormTerms /> */}
        <LiquidityFormActions />
      </div>
    </div>
  );
}

LiquidityForm.displayName = 'LiquidityForm';

export default LiquidityForm;
