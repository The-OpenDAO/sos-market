import React from 'react';

import classNames from 'classnames';

type ButtonTextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'white'
  | 'white-50'
  | 'black'
  | 'gray'
  | 'lighter-gray'
  | 'light-gray'
  | 'dark-gray';

type ButtonTextSize = 'sm' | 'lg';

type ButtonTextProps = {
  /**
   * Color of the text
   * @default 'default'
   */
  color?: ButtonTextColor;
  /**
   * Size of the component
   * @default 'medium'
   */
  size?: ButtonTextSize;
  /**
   * Fill available width
   * @default 'false'
   */
  fullWidth?: boolean;
};

/**
 * Button to trigger an operation
 */
const ButtonText = React.forwardRef<
  HTMLButtonElement,
  ButtonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { color = 'default', size, fullWidth = false, children, onClick, ...props },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={classNames(
        `button-text--${color}`,
        size && `button-${size}`,
        fullWidth && 'button-fullWidth'
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
);

ButtonText.displayName = 'ButtonText';

export default ButtonText;
