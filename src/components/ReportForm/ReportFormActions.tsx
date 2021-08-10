import { useField, useFormikContext } from 'formik';
import isUndefined from 'lodash/isUndefined';
import { closeReportForm } from 'redux/ducks/ui';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';

function ReportFormActions() {
  const dispatch = useAppDispatch();

  const { questionId, minimumBond } = useAppSelector(
    state => state.market.market
  );

  const [outcome] = useField('outcome');
  const [bond] = useField('bond');
  const { isSubmitting } = useFormikContext();

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
      <Button variant="subtle" color="default" onClick={handleCancel}>
        Cancel
      </Button>
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
