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

  return (
    <div className="pm-c-outcome-input--default__group">
      <div
        className={`pm-c-outcome-input--${
          meta.error ? 'error' : 'default'
        }__wrapper`}
      >
        <Badge color={badgeColor} />
        <input
          ref={ref}
          className={`pm-c-outcome-input--${meta.error ? 'error' : 'default'}`}
          id={name}
          {...field}
          {...props}
        />
      </div>
      {meta.error ? <InputErrorMessage message={meta.error} /> : null}
    </div>
  );
});

OutcomeInput.displayName = 'OutcomeInput';

export default OutcomeInput;
