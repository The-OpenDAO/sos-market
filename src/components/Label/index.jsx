import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import styles from './Label.module.scss';

const variants = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  pink: 'pink'
};

const positions = {
  left: 'left',
  right: 'right'
};

function Label({ variant, icon, iconPosition, children }) {
  return (
    <div className={styles[variants[variant]] || styles.default}>
      <Text as="label" variant="semibold">
        {children}
      </Text>
      {icon ? (
        <div
          className={`label__icon ${
            positions[iconPosition] || positions.right
          }`}
        >
          {{ icon }}
        </div>
      ) : null}
    </div>
  );
}

Label.defaultProps = {
  children: '',
  variant: variants.default,
  icon: undefined,
  iconPosition: 'right'
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(Object.values(variants)),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(Object.values(positions))
};

export default Label;
