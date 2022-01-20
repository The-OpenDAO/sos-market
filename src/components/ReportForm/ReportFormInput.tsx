import { useEffect } from 'react';

import { fromTimestampToCustomFormatDate, relativeTimeToX } from 'helpers/date';
import { Currency } from 'models/currency';
import { changeQuestion } from 'redux/ducks/market';
import { changeMarketQuestion } from 'redux/ducks/markets';
import { useAppDispatch } from 'redux/store';
import { BeproService, SosmarketsApiService } from 'services';

import { SosmarketIconSmall } from 'assets/icons';

import { useAppSelector } from 'hooks';

import { AmountInput } from '../Input';
import Text from '../Text';
import Tooltip from '../Tooltip';

const POLK: Currency = {
  name: 'SOSMarket',
  ticker: 'POLK',
  icon: <SosmarketIconSmall />,
  symbol: 'P'
};

function ReportFormInput() {
  const dispatch = useAppDispatch();

  const { polkBalance } = useAppSelector(state => state.bepro);
  const { finalizeTs } = useAppSelector(state => state.market.market.question);
  const { id, questionId, slug } = useAppSelector(state => state.market.market);

  const isValidTimestamp = finalizeTs > 0;
  const isOutdated = Date.now() > finalizeTs * 1000;
  const timeLeftUntilDecision = relativeTimeToX(finalizeTs * 1000);

  async function fetchQuestion() {
    const beproService = new BeproService();
    const question = await beproService.getQuestion(questionId);
    dispatch(changeQuestion(question));
    dispatch(changeMarketQuestion({ marketId: id, question }));
    // triggering cache reload action on api
    new SosmarketsApiService().reloadMarket(slug);
  }

  useEffect(() => {
    // question outdated from api, fetching from bepro-js
    if (isValidTimestamp && isOutdated) {
      fetchQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // TODO: fetch question if now > finalizeTs

  return (
    <AmountInput
      name="bond"
      label={
        isValidTimestamp && !isOutdated ? 'Time left until market resolves' : ''
      }
      max={polkBalance}
      currency={POLK}
      customHeaderItem={
        isValidTimestamp && !isOutdated ? (
          <Tooltip
            text={`${fromTimestampToCustomFormatDate(
              finalizeTs * 1000,
              'YYYY-MM-DD HH:mm:ss'
            )}`}
            position="top"
          >
            <div className="pm-c-report-form-input__header-time-left">
              {timeLeftUntilDecision.months > 0 ? (
                <Text as="strong">
                  {timeLeftUntilDecision.months}
                  <Text as="span">M</Text>
                </Text>
              ) : null}
              {timeLeftUntilDecision.days > 0 ? (
                <Text as="strong">
                  {timeLeftUntilDecision.days}
                  <Text as="span">D</Text>
                </Text>
              ) : null}
              <Text as="strong">
                {timeLeftUntilDecision.hours}
                <Text as="span">H</Text>
              </Text>
              <Text as="strong">
                {timeLeftUntilDecision.minutes}
                <Text as="span">M</Text>
              </Text>
            </div>
          </Tooltip>
        ) : (
          <></>
        )
      }
    />
  );
}

export default ReportFormInput;
