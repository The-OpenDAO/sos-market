import React from 'react';
import cx from 'classnames';

import Text from '../Text';

type Variant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'pink';

type Position = 'left' | 'right';

interface Props {
  variant?: Variant;
  icon?: React.ReactNode | any;
  iconPosition?: Position;
  children: React.ReactNode | any;
}

const Label = ({
  variant = 'default',
  icon,
  iconPosition,
  children
}: Props) => {
  return (
    <div className={`label--${variant}`}>
      <Text as="label" fontWeight="semibold">
        {children}
      </Text>
      {icon ? (
        <div className={cx(`label--${variant}__icon`, iconPosition)}>
          {{ icon }}
        </div>
      ) : null}
    </div>
  );
};

export default Label;
