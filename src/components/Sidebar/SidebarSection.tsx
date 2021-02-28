import React from 'react';

import { NavLink } from 'react-router-dom';
import { Label } from 'components';

type Item = {
  name: string;
  count: number;
  icon: React.ReactNode | any;
  to: string;
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
            <NavLink className="sidebar-link" to={item.to}>
              <div className="sidebar-link__icon">{item.icon}</div>
              <div className="sidebar-link__title">{item.name}</div>
              <Label>{item.count}</Label>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
