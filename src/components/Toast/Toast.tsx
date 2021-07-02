import React from 'react';

import { CheckIcon, InfoIcon, RemoveIcon, WarningIcon } from 'assets/icons';

import Text from '../Text';
import ToastActions from './ToastActions';

const icons = {
  danger: <RemoveIcon />,
  warning: <WarningIcon />,
  success: <CheckIcon />,
  info: <InfoIcon />
};

type ToastVariant = 'danger' | 'warning' | 'success' | 'info';

type ToastProps = {
  variant: ToastVariant;
  title?: string;
  description?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

function Toast({ variant, title, description, style, children }: ToastProps) {
  return (
    <div className={`pm-c-toast--${variant}`} style={style}>
      <div className="pm-c-toast__header">
        {icons[variant]}
        <Text
          scale="tiny-uppercase"
          fontWeight="semibold"
          className="pm-c-toast__header-title"
        >
          {title}
        </Text>
      </div>
      <div className="pm-c-toast__body">
        {description ? (
          <Text
            scale="caption"
            fontWeight="medium"
            className="pm-c-toast__body-description"
          >
            {description}
          </Text>
        ) : null}
        {children}
      </div>
    </div>
  );
}

Toast.Actions = ToastActions;

Toast.displayName = 'Toast';

export default Toast;
