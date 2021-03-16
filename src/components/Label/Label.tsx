import React from 'react';

import cx from 'classnames';

import Text from '../Text';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white';

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
      {icon ? (
        <div className={cx(`label--${variant}__icon`, iconPosition)}>
          {icon}
        </div>
      ) : null}
      <Text as="label" scale="tiny" fontWeight="semibold">
        {children}
      </Text>
    </div>
  );
};

export default Label;
