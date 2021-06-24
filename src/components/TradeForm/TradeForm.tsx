import { useEffect } from 'react';

import { changePredictionsVisibility, selectOutcome } from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import TradeFormActions from './TradeFormActions';
import TradeFormCharts from './TradeFormCharts';
import TradeFormDetails from './TradeFormDetails';
import TradeFormInput from './TradeFormInput';
import TradeFormLiquidity from './TradeFormLiquidity';
import TradeFormPredictions from './TradeFormPredictions';
import TradeFormTerms from './TradeFormTerms';
import TradeFormTypeSelector from './TradeFormTypeSelector';

function TradeForm() {
  const dispatch = useAppDispatch();
  const { id, outcomes } = useAppSelector(state => state.market.market);
  const selectedMarketId = useAppSelector(
    state => state.trade.selectedMarketId
  );

  useEffect(() => {
    if (id !== '' && id !== selectedMarketId) {
      dispatch(changePredictionsVisibility(true));
      dispatch(selectOutcome(id, outcomes[0].id));
    }
  }, [dispatch, id, outcomes, selectedMarketId]);

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
        {/* <TradeFormTerms /> */}
        <TradeFormActions />
      </div>
    </div>
  );
}

TradeForm.displayName = 'TradeForm';

export default TradeForm;
