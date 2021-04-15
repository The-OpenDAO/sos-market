/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';

import useToastNotification from 'hooks/useToastNotification';

type ToastNotificationProps = {
  id: string;
  duration?: number;
  children: React.ReactNode;
};

function ToastNotification({
  id,
  duration = 3500,
  children
}: ToastNotificationProps) {
  const { toastList, close } = useToastNotification();

  const isShown = toastList.has(id);

  useEffect(() => {
    if (!duration || !isShown) {
      return;
    }

    const timeoutId = setTimeout(() => {
      close(id);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, isShown, duration, close]);

  return createPortal(
    <AnimatePresence>
      {isShown && (
        <motion.div
          key={id}
          layout
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          role="status"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.querySelector('#toast-notification-portal') as Element
  );
}

ToastNotification.displayName = 'ToastNotification';

export default ToastNotification;
