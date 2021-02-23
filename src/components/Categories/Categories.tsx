import React from 'react';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Label from 'components/Label';

interface Props {
  title: string;
  items: any[];
}

const Categories = ({ title, items }: Props) => {
  return (
    <div className="categories">
      <label htmlFor={title} className="categories__title">
        {title}
      </label>
      <ul className="categories__list">
        {!isEmpty(items) &&
          items.map(item => (
            <li key={item.name} className="categories__item">
              <NavLink
                className={cx(
                  'categories__item',
                  item.active && 'categories__item--active'
                )}
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
};

export default Categories;
