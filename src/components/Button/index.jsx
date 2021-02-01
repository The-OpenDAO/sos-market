import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.module.scss';

const variants = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

const positions = {
  center: 'center',
  left: 'left',
  right: 'right'
};

function Button({ variant, disabled, icon, iconPosition, children, ...props }) {
  return (
    <button
      type="button"
      className={styles[variants[variant]] || styles[variants.default]}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon ? (
        <div className={cx(styles.icon, styles[positions[iconPosition]])}>
          {icon}
        </div>
      ) : null}
    </button>
  );
}

Button.defaultProps = {
  variant: variants.default,
  disabled: false,
  icon: undefined,
  iconPosition: 'right'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(Object.values(positions))
};

export default Button;
