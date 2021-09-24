import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  return (
    <section
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      className="pm-c-modal"
    >
      <div className="pm-c-modal__content">{children}</div>
    </section>
  );
}

export default Modal;
