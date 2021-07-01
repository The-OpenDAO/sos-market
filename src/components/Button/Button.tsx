/* eslint-disable react/button-has-type */
import React from 'react';

import classNames from 'classnames';

type ButtonVariant = 'normal' | 'outline' | 'subtle';

type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';

type ButtonSize = 'normal' | 'sm' | 'xs';

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
   * @default 'normal'
   */
  size?: ButtonSize;
  /**
   * Fill available width
   * @default 'false'
   */
  fullwidth?: boolean;
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
      size = 'normal',
      fullwidth = false,
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
        `pm-c-button-${variant}--${color}`,
        `pm-c-button--${size}`,
        fullwidth && 'pm-c-button--fullwidth'
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
