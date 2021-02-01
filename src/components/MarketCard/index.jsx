import React from 'react';

import Label from '../Label';

import styles from './MarketCard.module.scss';

function MarketCard({ market }) {
  const { id, section, imageUrl, label } = market;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={imageUrl} alt={`${id}`} width={40} height={40} />
        <div className={styles.header}>
          <strong>{section}</strong>

          {label.enabled && (
            <Label variant={label.variant}>{label.title}</Label>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <span>sddoi</span>
      </div>
    </div>
  );
}

export default MarketCard;
