import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  HamburguerMenuIcon,
  ArrowBackIcon,
  MarketsIcon,
  PortfolioIcon
} from 'assets/icons';

import { Button } from 'components';

import { navigationLinks, footerLinks } from './mock';
import SidebarFooter from './SidebarFooter';
import SidebarSection from './SidebarSection';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { markets } = navigationLinks;

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div className={collapsed ? 'sidebar--collapsed' : 'sidebar'}>
      <div className="sidebar__header">
        <Button
          variant="noborder"
          icon={collapsed ? <HamburguerMenuIcon /> : <ArrowBackIcon />}
          iconPosition="center"
          onClick={() => toggleCollapsed()}
        />
      </div>
      <div className="sidebar__tabs">
        <ul className="sidebar-section__list">
          <li key="markets" className="sidebar-section__item">
            <NavLink className="sidebar-link" to="/markets">
              <figure aria-label="markets" className="sidebar-link__icon">
                <MarketsIcon />
              </figure>
              <div className="sidebar-link__title">Markets</div>
            </NavLink>
          </li>
          <li key="portfolio" className="sidebar-section__item">
            <NavLink className="sidebar-link" to="/portfolio">
              <figure aria-label="portfolio" className="sidebar-link__icon">
                <PortfolioIcon />
              </figure>
              <div className="sidebar-link__title">Portfolio</div>
            </NavLink>
          </li>
        </ul>
      </div>
      <SidebarSection title={markets.title} items={markets.items} />
      <SidebarFooter links={footerLinks} />
    </div>
  );
}

export default Sidebar;
