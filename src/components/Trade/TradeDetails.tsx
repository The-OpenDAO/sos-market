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
      <MiniTable items={miniTableItems} style={{ paddingBottom: '0.4rem' }} />
      {type === 'buy' ? (
        <MiniTable
          items={[
            { name: 'Potential returns', value: `${potentialReturns} DOT` }
          ]}
          variant="success"
        />
      ) : null}
      {type === 'sell' ? (
        <MiniTable
          items={[{ name: 'Loss amount', value: `${lossAmount} DOT` }]}
          variant="danger"
        />
      ) : null}
    </div>
  );
}

TradeDetails.displayName = 'TradeDetails';

export default TradeDetails;
