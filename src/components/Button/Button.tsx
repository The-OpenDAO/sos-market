/* eslint-disable react/button-has-type */
import React from 'react';

import classNames from 'classnames';

type ButtonVariant = 'normal' | 'dark' | 'outline';

type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';

type ButtonSize = 'sm' | 'lg';

type ButtonProps = {
  /**
   * Variant to use
   * @default 'normal'
   */
  variant?: ButtonVariant;
  /**
   * Color of the component
   * @default 'default'
   */
  color?: ButtonColor;
  /**
   * Size of the component
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * Fill available width
   * @default 'false'
   */
  fullWidth?: boolean;
  /**
   * Loading state
   * @default 'false'
   */
  loading?: boolean;
};

/**
 * Button to trigger an operation
 */
const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      type = 'button',
      variant = 'normal',
      color = 'default',
      size,
      fullWidth = false,
      loading = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={classNames(
        `button-${variant}--${color}`,
        size && `button-${size}`,
        fullWidth && 'button-fullWidth'
      )}
      onClick={onClick}
      {...props}
    >
      {loading ? <span className="spinner" /> : children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
