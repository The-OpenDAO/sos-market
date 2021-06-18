import { CSSProperties } from 'react';

import { CheckIcon, InfoIcon, WarningIcon } from 'assets/icons';

import Text from '../Text';

const variants = {
  information: { title: 'Information', icon: <InfoIcon /> },
  success: { title: 'Success', icon: <CheckIcon /> },
  warning: { title: 'Warning', icon: <WarningIcon /> },
  error: { title: 'Error', icon: <InfoIcon /> }
};

export type AlertVariant = 'information' | 'success' | 'warning' | 'error';

type AlertProps = {
  /**
   * Variant of Alert styles
   */
  variant: AlertVariant;
  /**
   * Title of Alert
   * @default 'Variant'
   */
  title?: string;
  /**
   * Additional content of Alert
   */
  description?: string;
  /**
   * Aditional CSS styles
   */
  style?: CSSProperties;
};

/**
 *
 * Alert show messages to users
 */
function Alert({ variant, title, description, style }: AlertProps) {
  return (
    <div className={`pm-c-alert--${variant}`} role="alert" style={style}>
      <div className="pm-c-alert__group">
        {variants[variant].icon}
        <Text
          as="span"
          scale="tiny-uppercase"
          fontWeight="semibold"
          className="pm-c-alert__title"
        >
          {title || variants[variant].title}
        </Text>
      </div>
      {description ? (
        <Text
          as="p"
          scale="caption"
          fontWeight="medium"
          className="pm-c-alert__description"
        >
          {description}
        </Text>
      ) : null}
    </div>
  );
}

export default Alert;
