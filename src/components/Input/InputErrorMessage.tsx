import { RemoveIcon } from 'assets/icons';

import Text from '../Text';

type InputErrorMessageProps = {
  message: string;
};

function InputErrorMessage({ message }: InputErrorMessageProps) {
  return (
    <div className="pm-c-input__error">
      <RemoveIcon />
      <Text
        as="span"
        scale="tiny"
        fontWeight="medium"
        className="pm-c-input__error-message"
      >
        {message}
      </Text>
    </div>
  );
}

export default InputErrorMessage;
