import React from 'react';

import { useField } from 'formik';

import InputErrorMessage from './InputErrorMessage';

type InputProps = {
  label: string;
  name: string;
  description?: string;
};

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ label, name, description, ...props }, ref) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <div className="pm-c-input__group">
      <label
        htmlFor={name}
        className={`pm-c-input__label--${hasError ? 'error' : 'default'}`}
      >
        {label}
      </label>
      <input
        ref={ref}
        className={`pm-c-input--${hasError ? 'error' : 'default'}`}
        id={name}
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

Input.displayName = 'Input';

export default Input;
