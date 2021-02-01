import React from 'react';

import { Text, Tabs } from 'components';

import styles from './Home.module.scss';

const items = [
  { name: 'Open', content: <h1>Open</h1> },
  { name: 'In-Reporting', content: <h1>In-reporting</h1> },
  { name: 'Resolved', content: <h1>Resolved</h1> }
];

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

      <Tabs items={items} />
    </div>
  );
}

export default Home;
