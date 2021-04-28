/* eslint-disable react/jsx-one-expression-per-line */
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

import { CloseIcon, TwarningIcon } from 'assets/icons';

import useAlertNotification from 'hooks/useAlertNotification';

import { Button } from '../Button';
import Text from '../Text';

const icons = {
  warning: <TwarningIcon />
};

type AlertNotificationVariant = 'warning';

type AlertNotificationProps = {
  id: string;
  variant?: AlertNotificationVariant;
  description: string;
};

function AlertNotification({
  id,
  variant = 'warning',
  description
}: AlertNotificationProps) {
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
          <div className={`pm-c-alert-notification--${variant}`}>
            <div className="pm-c-alert-notification__body">
              {icons[variant]}
              <Text as="p" scale="tiny" fontWeight="semibold" color="white">
                {description}
              </Text>
              <Text as="p" scale="tiny" fontWeight="semibold" color="white">
                {'Your '}
                <Link target="_blank" to="//discord.gg/dfnvfHspe4">
                  feedback
                </Link>
                {' is highly appreciated 🎉'}
              </Text>
            </div>
            <div className="pm-c-alert-notification__actions">
              <Button color="noborder" onClick={() => close(id)}>
                <CloseIcon />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    ),
    document.querySelector('#alert-notification-portal') as Element
  );
}

AlertNotification.displayName = 'AlertNotification';

export default AlertNotification;
