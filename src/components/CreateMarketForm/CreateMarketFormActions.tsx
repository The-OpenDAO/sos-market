import { useHistory } from 'react-router-dom';

import { useFormikContext } from 'formik';

import { Button } from '../Button';

function CreateMarketFormActions() {
  const { isSubmitting } = useFormikContext();
  const history = useHistory();

  function handleCancel() {
    history.goBack();
  }

  return (
    <div className="pm-c-create-market-form__actions">
      <Button color="default" size="lg" onClick={handleCancel}>
        Cancel
      </Button>
      <Button color="primary" size="lg" type="submit" loading={isSubmitting}>
        Create Market
      </Button>
    </div>
  );
}

export default CreateMarketFormActions;
