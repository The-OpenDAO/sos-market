import { useEffect } from 'react';

import { changePredictionsVisibility, selectOutcome } from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import { AlertMini } from '../Alert';
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
  const { isLoading } = useAppSelector(state => state.market);
  const { id, outcomes } = useAppSelector(state => state.market.market);
  const marketState = useAppSelector(state => state.market.market.state);
  const selectedMarketId = useAppSelector(
    state => state.trade.selectedMarketId
  );

  useEffect(() => {
    if (id !== '' && id !== selectedMarketId) {
      dispatch(changePredictionsVisibility(true));
      dispatch(selectOutcome(id, outcomes[0].id));
    }
  }, [dispatch, id, outcomes, selectedMarketId]);

  if (isLoading) return null;

  return (
    <div className="pm-c-trade-form">
      <div className="pm-c-trade-form__group" style={{ gap: '1.6rem' }}>
        {marketState !== 'open' ? (
          <AlertMini
            variant="warning"
            description="This market is closed. If you have any winnings to claim please check
      your portfolio"
          />
        ) : null}
        <TradeFormCharts />
        {marketState === 'open' ? (
          <>
            <TradeFormPredictions />
            <TradeFormLiquidity />
          </>
        ) : null}
      </div>
      <div className="pm-c-trade-form__group" style={{ gap: '2.4rem' }}>
        {marketState === 'open' ? (
          <>
            <TradeFormTypeSelector />
            <TradeFormInput />
            <TradeFormDetails />
            {/* <TradeFormTerms /> */}
          </>
        ) : null}
        <TradeFormActions />
      </div>
    </div>
  );
}

TradeForm.displayName = 'TradeForm';

export default TradeForm;
