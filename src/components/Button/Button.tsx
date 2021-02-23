import React from 'react';
import cx from 'classnames';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'pink'
  | 'noborder';

type Position = 'center' | 'left' | 'right';

interface Props {
  variant: Variant;
  icon?: React.ReactNode | any;
  iconPosition: Position;
  disabled: boolean;
  children?: React.ReactNode | any;
}

const Button = ({
  variant = 'default',
  icon,
  iconPosition = 'center',
  disabled = false,
  children
}: Props) => {
  return (
    <button type="button" className={`btn--${variant}`} disabled={disabled}>
      {children}
      {icon ? (
        <div className={cx('btn__icon', iconPosition)}>{icon}</div>
      ) : null}
    </button>
  );
};

export default Button;
