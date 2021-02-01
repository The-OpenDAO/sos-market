import React from 'react';

import { CloseIcon } from 'assets/icons';

import Text from '../Text';

import styles from './BetForm.module.scss';

function BetForm() {
  return (
    <div className={styles.container}>
      <section className={styles.market}>
        <header className={styles.header}>
          <Text as="h1" variant="bold">
            Market Overview
          </Text>
          <button type="button">
            <CloseIcon />
          </button>
        </header>
        <ul className={styles.stats}>
          <li className={styles.item}>
            <Text as="label" variant="xs-medium">
              Market ends on
            </Text>
            <Text as="strong" variant="semibold">
              Feb 1st, 2021
            </Text>
          </li>
          <li className={styles.item}>
            <Text as="label" variant="xs-medium">
              Trade Volume
            </Text>
            <Text as="strong" variant="semibold">
              {324}{' '}
              <Text as="span" variant="semibold">
                DOT
              </Text>
            </Text>
          </li>
          <li className={styles.item}>
            <Text as="label" variant="xs-medium">
              Market ends on
            </Text>
            <Text as="strong" variant="semibold">
              Feb 1st, 2021
            </Text>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BetForm;
