import { useField } from 'formik';
import { Outcome as MarketOutcome } from 'models/market';

import { useAppSelector } from 'hooks';

import { BadgeColor } from '../Badge';
import Outcome from '../Outcome';

function ReportFormOutcomeSelect() {
  const { outcomes } = useAppSelector(state => state.market.market);
  const [field, meta, helpers] = useField('outcome');

  const getOutcomeColor = (outcome: MarketOutcome): BadgeColor =>
    outcomes.indexOf(outcome) === 0 ? 'blue' : 'pink';

  function handleOutcomeSelect(id: string) {
    helpers.setValue(id);
  }

  return (
    <div className="pm-c-report-form-outcome-select">
      {outcomes.map(outcome => (
        <Outcome
          key={outcome.id}
          id={`${outcome.id}`}
          title={outcome.title}
          shares={outcome.shares}
          color={getOutcomeColor(outcome)}
          state={
            field.value && field.value === `${outcome.id}`
              ? 'selected'
              : 'default'
          }
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
      />
    </div>
  );
}

export default ReportFormOutcomeSelect;
