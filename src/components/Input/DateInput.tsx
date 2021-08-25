import React from 'react';

import { useField } from 'formik';

import InputErrorMessage from './InputErrorMessage';

type DateInputProps = {
  label: string;
  name: string;
  description?: string;
};

const DateInput = React.forwardRef<
  HTMLInputElement,
  DateInputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ label, name, description, ...props }, ref) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <div className="pm-c-date-input__group">
      <label
        htmlFor={name}
        className={`pm-c-date-input__label--${hasError ? 'error' : 'default'}`}
      >
        {label}
      </label>
      <input
        ref={ref}
        className={`pm-c-input--${hasError ? 'error' : 'default'}`}
        id={name}
        type="datetime-local"
        {...field}
        {...props}
      />
      {hasError && meta.error ? (
        <InputErrorMessage message={meta.error} />
      ) : null}
      {description && !hasError ? (
        <span className="pm-c-input__description">{description}</span>
      ) : null}
    </div>
  );
});

DateInput.displayName = 'DateInput';

export default DateInput;
