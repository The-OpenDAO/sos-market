import React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';
import { Label } from 'components';

type Item = {
  name: string;
  count: number;
  icon: React.ReactNode | any;
};

interface Props {
  title: string;
  items: Item[];
}

const SidebarSection = ({ title, items }: Props) => {
  return (
    <div className="sidebar-section" aria-label={title} role="group">
      <ul className="sidebar-section__list">
        {items?.map(item => (
          <li key={item.name} className="sidebar-section__item">
            <NavLink
              className={cx('sidebar-section__item')}
              to={item.name.toLowerCase()}
            >
              {item.icon}
              {item.name}
              <Label>{item.count}</Label>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
