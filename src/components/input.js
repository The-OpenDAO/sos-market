import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/_input.scss';

const variants = {
  default: 'default',
  error: 'error',
  success: 'success'
};

function Input({ variant, label, name, placeholder, description, disabled }) {
  return (
    <div className="input__group">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        className={variants[variant] || variants.default}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {description ? (
        <span className="input__description">{description}</span>
      ) : null}
    </div>
  );
}

Input.defaultProps = {
  variant: variants.default,
  description: undefined,
  disabled: false
};

Input.propTypes = {
  variant: PropTypes.oneOf(Object.values(variants)),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
