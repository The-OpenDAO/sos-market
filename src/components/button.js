import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/_button.scss';

const variants = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

function Button({ children, variant, disabled }) {
  return (
    <button
      type="button"
      className={variants[variant] || variants.default}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: variants.default,
  disabled: false
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  disabled: PropTypes.bool
};

export default Button;
