import { useEffect, useState } from 'react';

import { useField } from 'formik';
import { Outcome as MarketOutcome } from 'models/market';
import { BeproService } from 'services';

import { useAppSelector } from 'hooks';

import { BadgeColor } from '../Badge';
import Outcome from '../Outcome';

function ReportFormOutcomeSelect() {
  const { outcomes, resolvedOutcomeId } = useAppSelector(
    state => state.market.market
  );
  const { questionId } = useAppSelector(state => state.market.market);
  const [field, meta, helpers] = useField('outcome');
  const [bonds, setBonds] = useState({});

  const getOutcomeColor = (outcome: MarketOutcome): BadgeColor =>
    outcomes.indexOf(outcome) === 0 ? 'blue' : 'pink';

  function handleOutcomeSelect(id: string) {
    helpers.setValue(id);
  }

  // TODO: get data from api
  async function getOutcomesBonds() {
    const beproService = new BeproService();
    // await beproService.login();

    const response = await beproService.getQuestionBonds(questionId);
    setBonds(response);
  }

  useEffect(() => {
    getOutcomesBonds();
  }, []);

  return (
    <div className="pm-c-report-form-outcome-select">
      {outcomes.map(outcome => (
        <Outcome
          key={outcome.id}
          id={`${outcome.id}`}
          title={outcome.title}
          shares={outcome.shares}
          bond={bonds[outcome.id] || 0}
          color={getOutcomeColor(outcome)}
          state={
            field.value && field.value === `${outcome.id}`
              ? 'selected'
              : 'default'
          }
          resolvedOutcomeId={resolvedOutcomeId}
          onSelect={handleOutcomeSelect}
        />
      ))}
      <Outcome
        id="invalid"
        title="Invalid"
        helpText="Help text"
        color="warning"
        state={
          field.value && field.value === 'invalid' ? 'selected' : 'default'
        }
        onSelect={handleOutcomeSelect}
        resolvedOutcomeId={resolvedOutcomeId}
      />
    </div>
  );
}

export default ReportFormOutcomeSelect;
