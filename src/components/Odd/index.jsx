/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import clx from 'classnames';
import Text from '../Text';

import styles from './Odd.module.scss';

function Odd({ odd }) {
  return (
    <div
      role="button"
      className={clx(styles.container, odd.active === true && styles.active)}
    >
      <header className={styles.header}>
        <Text as="h1" variant="bold">
          {odd.name}
        </Text>
        <Text as="span" variant="xs-bold">
          {`ODD `}
          <Text as="strong">{odd.odd}</Text>
        </Text>
      </header>
      <ul className={styles.details}>
        <li className={styles.item}>
          <Text as="span" variant="bold">
            Price per fraction
          </Text>
          <div className={styles.fill} />
          <Text as="strong" variant="xs-bold">
            {`${odd.pricePerFraction} DOT`}
          </Text>
        </li>
        <li className={styles.item}>
          <Text as="span" variant="bold">
            Price per fraction
          </Text>
          <div className={styles.fill} />
          <Text as="strong" variant="xs-bold">
            {odd.totalFractions}
          </Text>
        </li>
      </ul>
    </div>
  );
}

Odd.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  odd: PropTypes.object.isRequired
};

export default Odd;
