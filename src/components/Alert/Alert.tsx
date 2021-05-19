import React from 'react';

import { CheckIcon, InfoIcon, WarningIcon } from 'assets/icons';

import Text from '../Text';

const variants = {
  information: { title: 'Information', icon: <InfoIcon /> },
  success: { title: 'Success', icon: <CheckIcon /> },
  warning: { title: 'Warning', icon: <WarningIcon /> },
  error: { title: 'Error', icon: <InfoIcon /> }
};

type AlertVariant = 'information' | 'success' | 'warning' | 'error';

type AlertProps = {
  variant: AlertVariant;
  title?: string;
  description: string;
  style?: React.CSSProperties;
};

function Alert({ variant, title, description, style }: AlertProps) {
  return (
    <div className={`pm-c-alert--${variant}`} role="alert" style={style}>
      <div className="pm-c-alert__title">
        {variants[variant].icon}
        <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
          {title || variants[variant].title}
        </Text>
      </div>
      <Text as="p" scale="caption" fontWeight="medium" color="lighter-gray-50">
        {description}
      </Text>
    </div>
  );
}

Alert.displayName = 'Alert';

export default Alert;
