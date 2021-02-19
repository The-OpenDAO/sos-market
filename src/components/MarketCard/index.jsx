import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/components/MarketCard.module.scss';

import Label from '../Label';
import Breadcrumb from '../Breadcrumb';
import Text from '../Text';

function MarketCard({ market }) {
  const {
    id,
    section,
    subsection,
    imageUrl,
    label,
    description,
    volume,
    expiration
  } = market;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={imageUrl} alt={`${id}`} width={40} height={40} />
        <div className={styles.details}>
          <div className={styles.header}>
            <Breadcrumb previous={section} actual={subsection} />

            {label.enabled && (
              <Label variant={label.variant}>{label.title}</Label>
            )}
          </div>
          <Text as="p" variant="semibold">
            {description}
          </Text>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.stats}>
          <Text as="span" variant="bold">
            {`VOLUME: `}
            <Text as="strong" variant="bold">
              {`${volume} DOT`}
            </Text>
          </Text>
          <Text as="span" variant="bold">
            {`EXPIRATION: `}
            <Text as="strong" variant="bold">
              {expiration}
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
}

MarketCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  market: PropTypes.object.isRequired
};

export default MarketCard;
