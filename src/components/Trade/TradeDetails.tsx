import { useAppSelector } from 'hooks';

import MiniTable from '../MiniTable';
import formatMiniTableItems from './utils';

function TradeDetails() {
  const {
    type,
    predictions,
    selectedPredictionId,
    fractionsBought,
    currentROI,
    totalStake,
    potentialReturns,
    lossAmount
  } = useAppSelector(state => state.trade);

  const miniTableItems = formatMiniTableItems(
    predictions,
    selectedPredictionId,
    fractionsBought,
    currentROI,
    totalStake
  );

  return (
    <div className="trade-details">
      <MiniTable rows={miniTableItems} style={{ paddingBottom: '0.4rem' }} />
      {type === 'buy' ? (
        <MiniTable
          rows={[
            {
              key: 'returns',
              title: 'Potential returns',
              value: `${potentialReturns} DOT`
            }
          ]}
          color="success"
        />
      ) : null}
      {type === 'sell' ? (
        <MiniTable
          rows={[
            { key: 'loss', title: 'Loss amount', value: `${lossAmount} DOT` }
          ]}
          color="danger"
        />
      ) : null}
    </div>
  );
}

TradeDetails.displayName = 'TradeDetails';

export default TradeDetails;
