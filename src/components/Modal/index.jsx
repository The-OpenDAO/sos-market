import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';

import styles from 'styles/components/Modal.module.scss';

import BetForm from '../BetForm';

function Modal({ open, handleClose }) {
  return (
    <div className={clx(styles.overlay, open && styles.visible)}>
      <BetForm handleClose={handleClose} />
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Modal;
