import { useEffect, useState } from 'react';

import { useField } from 'formik';
import { Outcome as MarketOutcome } from 'models/market';
import { selectOutcome } from 'redux/ducks/trade';
import { BeproService } from 'services';

import { useAppSelector } from 'hooks';

import { BadgeColor } from '../Badge';
import Outcome from '../Outcome';

function ReportFormOutcomeSelect() {
  const { outcomes, questionId } = useAppSelector(state => state.market.market);
  const marketId = useAppSelector(state => state.market.market.id);
  const { portfolio, ethAddress } = useAppSelector(state => state.bepro);
  const [field, meta, helpers] = useField('outcome');
  const [bonds, setBonds] = useState({});

  const { bestAnswer } = useAppSelector(state => state.market.market.question);
  // converting bytes32 to int
  const resolvedOutcomeId = BeproService.bytes32ToInt(bestAnswer);

  const getOutcomeColor = (outcome: MarketOutcome): BadgeColor =>
    outcomes.indexOf(outcome) === 0 ? 'blue' : 'pink';

  function handleOutcomeSelect(id: string) {
    selectOutcome(marketId, id);
    helpers.setValue(id);
  }

  // TODO: get data from api
  async function getOutcomesBonds() {
    if (!ethAddress) return;

    const beproService = new BeproService();
    const response = await beproService.getQuestionBonds(
      questionId,
      ethAddress
    );

    setBonds(response);
  }

  useEffect(() => {
    getOutcomesBonds();
  }, [ethAddress]);

  return (
    <div className="pm-c-report-form-outcome-select">
      {outcomes.map(outcome => (
        <Outcome
          key={outcome.id}
          id={`${outcome.id}`}
          title={outcome.title}
          shares={portfolio[marketId]?.outcomes[outcome.id]?.shares || 0}
          bond={bonds[outcome.id] || 0}
          color={getOutcomeColor(outcome)}
          state={
            field.value && `${field.value}` === `${outcome.id}`
              ? 'selected'
              : 'default'
          }
          resolvedOutcomeId={resolvedOutcomeId}
          onSelect={handleOutcomeSelect}
        />
      ))}
      <Outcome
        id="-1"
        title="Invalid"
        helpText="Help text"
        color="warning"
        state={
          field.value && `${field.value}` === '-1' ? 'selected' : 'default'
        }
        bond={bonds[-1] || 0}
        onSelect={handleOutcomeSelect}
        resolvedOutcomeId={resolvedOutcomeId}
      />
    </div>
  );
}

export default ReportFormOutcomeSelect;
