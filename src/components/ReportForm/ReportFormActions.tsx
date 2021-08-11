import { useLocation } from 'react-router-dom';

import { useField, useFormikContext } from 'formik';
import isUndefined from 'lodash/isUndefined';
import { closeReportForm } from 'redux/ducks/ui';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';

function ReportFormActions() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const marketSlug = useAppSelector(state => state.market.market.slug);
  const { questionId } = useAppSelector(state => state.market.market);
  // bond must be doubled in every tx
  const marketBond = useAppSelector(state => state.market.market.question.bond);
  const minimumBond = marketBond * 2;

  const [outcome] = useField('outcome');
  const [bond] = useField('bond');
  const { isSubmitting } = useFormikContext();

  const isMarketPage = location.pathname === `/markets/${marketSlug}`;

  function handleCancel() {
    dispatch(closeReportForm());
  }

  async function handleBond() {
    const beproService = new BeproService();

    try {
      // performing buy action on smart contract
      const response = await beproService.placeBond(
        questionId,
        outcome.value,
        bond.value
      );

      const { status, transactionHash } = response;
    } catch (error) {
      // TODO:
    }
  }

  return (
    <div className="pm-c-report-form-details__actions">
      {!isMarketPage ? (
        <Button variant="subtle" color="default" onClick={handleCancel}>
          Cancel
        </Button>
      ) : null}
      <Button
        type="submit"
        color="primary"
        fullwidth
        onClick={handleBond}
        disabled={
          !outcome.value ||
          !bond.value ||
          bond.value === 0 ||
          isUndefined(minimumBond) ||
          bond.value < minimumBond
        }
        loading={isSubmitting}
      >
        Bond
      </Button>
    </div>
  );
}

export default ReportFormActions;
