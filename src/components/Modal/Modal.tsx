import { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  return (
    <div className="pm-c-modal__wrapper">
      <div className="pm-c-modal__overlay">
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            role="status"
          >
            <section
              role="dialog"
              tabIndex={-1}
              aria-modal="true"
              className="pm-c-modal"
            >
              <div className="pm-c-modal__content">{children}</div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Modal;
