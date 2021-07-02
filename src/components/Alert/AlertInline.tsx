import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import {
  CloseIcon,
  InfoIcon,
  CheckIcon,
  WarningIcon,
  RemoveIcon
} from 'assets/icons';

import useAlertNotification from 'hooks/useAlertNotification';

import { Button } from '../Button';
import Text from '../Text';

const icons = {
  default: <InfoIcon />,
  info: <InfoIcon />,
  success: <CheckIcon />,
  warning: <WarningIcon />,
  danger: <RemoveIcon />
};

type AlertInlineStyle = 'subtle';

type AlertInlineVariant = 'default' | 'info' | 'success' | 'warning' | 'danger';

type AlertInlineAlignment = 'left' | 'center' | 'right';

type AlertInlineProps = {
  id: string;
  style?: AlertInlineStyle;
  variant?: AlertInlineVariant;
  alignment?: AlertInlineAlignment;
  description: ReactNode;
  dismissable?: boolean;
};

function AlertInline({
  id,
  style = 'subtle',
  variant = 'warning',
  alignment = 'left',
  description,
  dismissable = true
}: AlertInlineProps) {
  const { alertList, close } = useAlertNotification();

  const isShown = alertList.has(id);

  return createPortal(
    isShown && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <div
            className={classNames({
              [`pm-c-alert-inline-${style}--${variant}`]: true,
              [`pm-c-alert-inline--${alignment}-align`]: true
            })}
          >
            {icons[variant]}
            <Text
              as="p"
              scale="caption"
              fontWeight="semibold"
              className="pm-c-alert-inline__description"
            >
              {description}
            </Text>
            {dismissable ? (
              <div className="pm-c-alert-inline__actions">
                <Button color="noborder" onClick={() => close(id)}>
                  <CloseIcon />
                </Button>
              </div>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>
    ),
    document.querySelector('#alert-notification-portal') as Element
  );
}

export default AlertInline;
