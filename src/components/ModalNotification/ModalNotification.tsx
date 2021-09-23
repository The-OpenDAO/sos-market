import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';

type ModalNotificationProps = {
  visible: boolean;
  children: ReactNode;
};

function ModalNotification({
  visible = false,
  children
}: ModalNotificationProps) {
  return createPortal(
    <AnimatePresence>
      {visible && (
        <div className="pm-c-modal-notification">
          <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            role="status"
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.querySelector('#modal-notification-portal') as Element
  );
}

export default ModalNotification;
