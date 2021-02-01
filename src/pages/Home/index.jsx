import React from 'react';

import { Text, Tabs, Select, MarketList } from 'components';

import styles from './Home.module.scss';

import { tabs, markets } from './data';

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

      <div className={styles.navigation}>
        <Tabs items={tabs} />

        <div className={styles.filters}>
          <Select label="Sub-Category:" name="Sub-Category" disabled>
            <option value="USA">USA</option>
          </Select>
          <Select label="Sort by:" name="Sort by" disabled>
            <option value="Most traded">Most traded</option>
          </Select>
        </div>
      </div>

      <MarketList markets={markets} />
    </div>
  );
}

export default Home;
