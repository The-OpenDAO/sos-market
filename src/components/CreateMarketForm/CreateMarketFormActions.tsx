import { useHistory } from 'react-router-dom';

import { useFormikContext } from 'formik';
import has from 'lodash/has';

import { Button } from '../Button';

function CreateMarketFormActions() {
  const { isSubmitting, errors } = useFormikContext();
  const history = useHistory();

  function handleCancel() {
    history.goBack();
  }

  return (
    <div className="pm-c-create-market-form__actions">
      <Button color="default" onClick={handleCancel}>
        Cancel
      </Button>
      <Button
        color="primary"
        type="submit"
        loading={isSubmitting}
        disabled={isSubmitting || has(errors, 'liquidity')}
      >
        Create Market
      </Button>
    </div>
  );
}

export default CreateMarketFormActions;
