import TradeFormActions from './TradeFormActions';
import TradeFormCharts from './TradeFormCharts';
import TradeFormDetails from './TradeFormDetails';
import TradeFormInput from './TradeFormInput';
import TradeFormLiquidity from './TradeFormLiquidity';
import TradeFormPredictions from './TradeFormPredictions';
import TradeFormTerms from './TradeFormTerms';
import TradeFormTypeSelector from './TradeFormTypeSelector';

function TradeForm() {
  return (
    <div className="pm-c-trade-form">
      <div className="pm-c-trade-form__group" style={{ gap: '1.6rem' }}>
        <TradeFormCharts />
        <TradeFormPredictions />
        <TradeFormLiquidity />
      </div>
      <div className="pm-c-trade-form__group" style={{ gap: '2.4rem' }}>
        <TradeFormTypeSelector />
        <TradeFormInput />
        <TradeFormDetails />
        <TradeFormTerms />
        <TradeFormActions />
      </div>
    </div>
  );
}

TradeForm.displayName = 'TradeForm';

export default TradeForm;
