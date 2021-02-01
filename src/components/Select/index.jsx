import React from 'react';
import PropTypes, { element } from 'prop-types';

import styles from './Select.module.scss';

const variants = {
  default: 'default'
};

function Select({ variant, label, name, description, disabled, children }) {
  return (
    <div className={styles.group}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        className={styles[variants[variant]] || styles.default}
        name={name}
        disabled={disabled}
      >
        {children}
      </select>
      {description ? (
        <span className={styles.description}>{description}</span>
      ) : null}
    </div>
  );
}

Select.defaultProps = {
  variant: variants.default,
  description: undefined,
  disabled: false
};

Select.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool
};

export default Select;
