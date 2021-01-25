import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Text from '../Text';

import styles from './Categories.module.scss';

function Categories({ title, items }) {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>{title}</h6>
      <ul className={styles.list}>
        {!isEmpty(items) &&
          items.map(item => (
            <li key={item.key} className={styles.item}>
              {item.icon}
              <Text as="p" variant="xs-semibold">
                {item.name}
              </Text>
              {item.amount}
            </li>
          ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Categories;
