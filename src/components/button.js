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

function Button({ children, variant, disabled, leftIcon, rightIcon }) {
  return (
    <button
      type="button"
      className={variants[variant] || variants.default}
      disabled={disabled}
    >
      {leftIcon ? (
        <div className="button__icon left">{{ leftIcon }}</div>
      ) : null}
      {children}
      {rightIcon ? (
        <div className="button__icon right">{{ rightIcon }}</div>
      ) : null}
    </button>
  );
}

Button.defaultProps = {
  variant: variants.default,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element
};

export default Button;
