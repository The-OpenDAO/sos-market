import React from 'react';

import styles from './button.module.scss';

function Button() {
  return (
    <>
      <button type="button" className={styles.default}>
        Text
      </button>
      <button type="button" className={styles.primary}>
        Text
      </button>
      <button type="button" className={styles.secondary}>
        Text
      </button>
    </>
  );
}

export default Button;
