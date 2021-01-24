import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const variants = {
  default: 'default',
  error: 'error',
  success: 'success'
};

function Input({
  variant,
  label,
  name,
  placeholder,
  description,
  disabled,
  ...props
}) {
  return (
    <div className={styles.group}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles[variants[variant]] || styles.default}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {description ? (
        <span className={styles.description}>{description}</span>
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
