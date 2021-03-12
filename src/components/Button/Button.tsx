/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';

type Position = 'center' | 'left' | 'right';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: React.ReactNode | any;
  iconPosition?: Position;
  children?: React.ReactNode | any;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { variant = 'default', icon, iconPosition = 'center', children, ...props },
    ref
  ) => (
    <button ref={ref} type="button" className={`button--${variant}`} {...props}>
      {children}
      {icon ? (
        <figure className={cx('button__icon', iconPosition)}>{icon}</figure>
      ) : null}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
