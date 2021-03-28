import { NavLink } from 'react-router-dom';

import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';

import Label from '../Label';

type CategoriesProps = {
  title: string;
  items: any[];
};

const Categories = ({ title, items }: CategoriesProps) => {
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
              <Label color={item.active ? 'primary' : 'default'}>
                {item.amount}
              </Label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
