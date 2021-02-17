import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CloseIcon } from 'assets/icons';

import Text from '../Text';
import Odd from '../Odd';
import ToggleButton from '../ToggleButton';
import BetAmountInput from '../BetAmountInput';
import Button from '../Button';

import odds from './mock';

import styles from './BetForm.module.scss';

function BetForm({ handleClose }) {
  return (
    <div className={styles.container}>
      <section className={styles.market}>
        <header className={styles.header}>
          <Text as="h1" variant="bold">
            Market Overview
          </Text>
          <button type="button" onClick={() => handleClose()}>
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
              {324}
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
              {23}
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

        <BetAmountInput />

        <ul className={styles.details}>
          <li className={styles.detail}>
            <Text as="span" variant="bold">
              Price per fraction
            </Text>
            <div className={styles.fill} />
            <Text as="strong" variant="xs-bold">
              {`${0.00034} DOT`}
            </Text>
          </li>
          <li className={styles.detail}>
            <Text as="span" variant="bold">
              Fractions bought
            </Text>
            <div className={styles.fill} />
            <Text as="strong" variant="xs-bold">
              3,5
            </Text>
          </li>
          <li className={styles.detail}>
            <Text as="span" variant="bold">
              Max ROI
            </Text>
            <div className={styles.fill} />
            <Text as="strong" variant="xs-bold">
              2,5%
            </Text>
          </li>
          <li className={styles.detail}>
            <Text as="span" variant="bold">
              Total stake
            </Text>
            <div className={styles.fill} />
            <Text as="strong" variant="xs-bold">
              {`${0.245} DOT`}
            </Text>
          </li>
          <li className={styles.detail}>
            <Text as="span" variant="bold">
              Potential returns
            </Text>
            <div className={styles.fill} />
            <Text as="h2" variant="xs-bold">
              {`${0.742} DOT`}
            </Text>
          </li>
        </ul>
        <div className={styles.actions}>
          <Button variant="default">Cancel</Button>
          <Button variant="pink">Place Bet</Button>
        </div>
      </section>
    </div>
  );
}

BetForm.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default BetForm;
