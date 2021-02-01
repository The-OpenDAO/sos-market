import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { CloseIcon } from 'assets/icons';

import Text from '../Text';
import Odd from '../Odd';
import ToggleButton from '../ToggleButton';

import odds from './mock';

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
              Liquidity
            </Text>
            <Text as="strong" variant="semibold">
              {23}{' '}
              <Text as="span" variant="semibold">
                DOT
              </Text>
            </Text>
          </li>
        </ul>
        <section className={styles.odds}>
          <Text as="p" variant="lg-bold">
            Who will be in 1st place in the Liga NOS by April 15th?
          </Text>

          <ul>
            {!isEmpty(odds) &&
              odds.map(odd => (
                <li key={odd.id}>
                  <Odd odd={odd} />
                </li>
              ))}
          </ul>

          <button type="button">
            <Text as="span" variant="xs-bold">
              Add Liquidity
            </Text>
          </button>
        </section>
      </section>
      <section className={styles.bet}>
        <ToggleButton />
      </section>
    </div>
  );
}

export default BetForm;
