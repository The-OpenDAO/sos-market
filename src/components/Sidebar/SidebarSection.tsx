import React from 'react';
import { NavLink } from 'react-router-dom';

import Label from '../Label';

type Item = {
  name: string;
  count: number;
  icon: React.ReactNode | any;
  to: string;
};

type SidebarSectionProps = {
  title: string;
  items: Item[];
};

const SidebarSection = ({ title, items }: SidebarSectionProps) => {
  return (
    <div className="sidebar-section" aria-label={title} role="group">
      <ul className="sidebar-section__list">
        {items?.map(item => (
          <li key={item.name} className="sidebar-section__item">
            <NavLink className="sidebar-link" to={item.to}>
              <figure aria-label={item.name} className="sidebar-link__icon">
                {item.icon}
              </figure>
              <div className="sidebar-link__title">{item.name}</div>
              <Label color="default">{item.count}</Label>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

SidebarSection.displayName = 'Sidebar section';

export default SidebarSection;
