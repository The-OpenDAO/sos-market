import { useEffect, useState } from 'react';

import { useField } from 'formik';
import { Outcome as MarketOutcome } from 'models/market';
import { selectOutcome } from 'redux/ducks/trade';
import { BeproService } from 'services';

import { useAppSelector } from 'hooks';

import { BadgeColor } from '../Badge';
import Outcome from '../Outcome';

function ReportFormOutcomeSelect() {
  // Selectors
  const { outcomes, questionId } = useAppSelector(state => state.market.market);
  const marketId = useAppSelector(state => state.market.market.id);
  const isMarketQuestionFinalized = useAppSelector(
    state => state.market.market.question.isFinalized
  );
  const { bestAnswer } = useAppSelector(state => state.market.market.question);
  const { portfolio, ethAddress } = useAppSelector(state => state.bepro);

  // Form state
  const [field, meta, helpers] = useField('outcome');
  const [bonds, setBonds] = useState({});

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

  const isSelected = outcome =>
    field.value && `${field.value}` === `${outcome.id}`;

  const isWinningOutcome = outcome =>
    `${resolvedOutcomeId}` === `${outcome.id}`;

  const isWon = outcome =>
    isMarketQuestionFinalized && isWinningOutcome(outcome);

  const checkOutcomeState = outcome => {
    if (isWon(outcome)) return 'won';
    if (isMarketQuestionFinalized) return 'default';
    if (isSelected(outcome)) return 'selected';
    return 'default';
  };

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
          state={checkOutcomeState(outcome)}
          resolvedOutcomeId={resolvedOutcomeId}
          marketQuestionFinalized={isMarketQuestionFinalized}
          onSelect={handleOutcomeSelect}
        />
      ))}
      <Outcome
        id="-1"
        title="Invalid"
        helpText="Help text"
        color="warning"
        state={checkOutcomeState({ id: '-1' })}
        bond={bonds[-1] || 0}
        resolvedOutcomeId={resolvedOutcomeId}
        marketQuestionFinalized={isMarketQuestionFinalized}
        onSelect={handleOutcomeSelect}
      />
    </div>
  );
}

export default ReportFormOutcomeSelect;
