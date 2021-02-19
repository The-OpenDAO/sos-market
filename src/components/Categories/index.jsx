import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Label from 'components/Label';

import styles from 'styles/components/Categories.module.scss';

function Categories({ title, items }) {
  return (
    <div className={styles.container}>
      <label htmlFor={title} className={styles.title}>
        {title}
      </label>
      <ul name={title} className={styles.list}>
        {!isEmpty(items) &&
          items.map(item => (
            <li key={item.name} className={styles.item}>
              <NavLink
                className={cx(styles.item, item.active && styles.active)}
                to={item.name.toLowerCase()}
              >
                {item.icon}
                {item.name}
              </NavLink>
              <Label variant={item.active ? 'primary' : 'default'}>
                {item.amount}
              </Label>
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
