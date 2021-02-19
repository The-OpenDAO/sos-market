import React from 'react';

import Text from 'components/Text';
import SearchBar from 'components/SearchBar';

import styles from 'styles/components/LandingHeader.module.scss';

function LandingHeader() {
  return (
    <section className={styles.content}>
      <section className={styles.description}>
        <Text as="h1" variant="bold">
          Gamified Prediction Markets
        </Text>
        <Text as="p" variant="lg-medium">
          Powered by DeFi, NFTs and Polkadot.
        </Text>
      </section>
      <section className={styles.search}>
        <SearchBar />
      </section>
    </section>
  );
}

export default LandingHeader;
