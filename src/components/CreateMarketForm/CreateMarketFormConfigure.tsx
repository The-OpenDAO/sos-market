import { ChangeEvent } from 'react';

import { useField } from 'formik';

import { Input } from '../Input';
import Text from '../Text';

function CreateMarketFormConfigure() {
  const [question, meta, helpers] = useField('question');

  function handleChangeQuestion(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    helpers.setValue(value);
  }

  return (
    <div className="pm-c-create-market-form__card">
      <Text
        as="h5"
        scale="body"
        fontWeight="medium"
        className="pm-c-create-market-form__card-title"
      >
        Configure Market
      </Text>
      <Input
        name="question"
        label="Market Question"
        placeholder="What would you like to see the world predict?"
        onChange={handleChangeQuestion}
      />
    </div>
  );
}

export default CreateMarketFormConfigure;
