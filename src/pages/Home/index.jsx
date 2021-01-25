import React from 'react';

import { Text } from 'components';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.content}>
      <Text as="h1" variant="bold">
        Popular Markets
      </Text>

      <ul className={styles.markets}>
        <li className={styles.market}>
          <Text as="p" variant="lg-bold">
            Politics
          </Text>
        </li>
        <li className={styles.market}>
          <Text as="p" variant="lg-bold">
            Sports
          </Text>
        </li>
        <li className={styles.market}>
          <Text as="p" variant="lg-bold">
            Finance
          </Text>
        </li>
        <li className={styles.market}>
          <Text as="p" variant="lg-bold">
            Crypto
          </Text>
        </li>
      </ul>
    </div>
  );
}

export default Home;
