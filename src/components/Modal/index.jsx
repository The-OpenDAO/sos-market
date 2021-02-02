import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';

import BetForm from '../BetForm';

import styles from './Modal.module.scss';

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
