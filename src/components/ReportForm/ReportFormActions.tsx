import { useField, useFormikContext } from 'formik';
import { closeReportForm } from 'redux/ducks/ui';

import { useAppDispatch } from 'hooks';

import { Button } from '../Button';

function ReportFormActions() {
  const dispatch = useAppDispatch();

  const [outcome] = useField('outcome');
  const [bond] = useField('bond');
  const { isSubmitting } = useFormikContext();

  function handleCancel() {
    dispatch(closeReportForm());
  }

  return (
    <div className="pm-c-report-form-details__actions">
      <Button variant="dark" color="default" size="lg" onClick={handleCancel}>
        Cancel
      </Button>
      <Button
        type="submit"
        size="lg"
        color="primary"
        fullWidth
        disabled={!outcome.value || !bond.value || bond.value === 0}
        loading={isSubmitting}
      >
        Bond
      </Button>
    </div>
  );
}

export default ReportFormActions;
