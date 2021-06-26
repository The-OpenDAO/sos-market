import React from 'react';

import { useField } from 'formik';

import Badge, { BadgeColor } from '../Badge';
import InputErrorMessage from './InputErrorMessage';

type OutcomeInputProps = {
  name: string;
  badgeColor?: BadgeColor;
};

const OutcomeInput = React.forwardRef<
  HTMLInputElement,
  OutcomeInputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ name, badgeColor = 'default', ...props }, ref) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <div className="pm-c-outcome-input--default__group">
      <div
        className={`pm-c-outcome-input--${
          hasError ? 'error' : 'default'
        }__wrapper`}
      >
        <Badge color={badgeColor} />
        <input
          ref={ref}
          className={`pm-c-outcome-input--${hasError ? 'error' : 'default'}`}
          id={name}
          {...field}
          {...props}
        />
      </div>
      {hasError && meta.error ? (
        <InputErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
});

OutcomeInput.displayName = 'OutcomeInput';

export default OutcomeInput;
