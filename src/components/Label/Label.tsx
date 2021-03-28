import React from 'react';

import classNames from 'classnames';

type LabelVariant = 'normal' | 'outline';

type LabelColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white';

type LabelSize = 'sm' | 'lg';

type LabelProps = {
  /**
   * Variant to use
   * @default 'normal'
   */
  variant?: LabelVariant;
  /**
   * Color of the component
   * @default 'primary'
   */
  color?: LabelColor;
  /**
   * Size of the component
   * @default 'sm'
   */
  size?: LabelSize;
  children: React.ReactNode | any;
};

/**
 * Label for categorizing or markup
 */
const Label = ({
  variant = 'normal',
  color = 'primary',
  size = 'sm',
  children
}: LabelProps) => {
  return (
    <span
      className={classNames(
        `label-${variant}--${color}`,
        size && `label-${size}`
      )}
    >
      {children}
    </span>
  );
};

Label.displayName = 'Label';

export default Label;
