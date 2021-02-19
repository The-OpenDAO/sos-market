import React from 'react';

import { PolkadotIcon } from 'assets/icons';

import styles from 'styles/components/BetAmountInput.module.scss';

import Text from '../Text';

function BetAmountInput() {
  return (
    <>
      <div className={styles.description}>
        <Text as="label" variant="medium">
          How much to bet?
        </Text>
        <Text as="span" variant="xs-medium">
          Available
          <Text as="strong" variant="medium">
            0.0104
          </Text>
          DOT
        </Text>
      </div>
      <div className={styles.container}>
        <div className={styles.group}>
          <input className={styles.input} />
          <button type="button" className={styles.button}>
            MAX
          </button>
          <div className={styles.end}>
            <PolkadotIcon />
            <Text as="span" variant="bold">
              DOT
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default BetAmountInput;
