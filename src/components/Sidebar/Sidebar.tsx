import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  HamburguerMenuIcon,
  ArrowBackIcon,
  MarketsIcon,
  PortfolioIcon
} from 'assets/icons';

import Button from '../Button';
import { navigationLinks, footerLinks } from './mock';
import SidebarFooter from './SidebarFooter';
import SidebarSection from './SidebarSection';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { markets } = navigationLinks;

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div className={collapsed ? 'sidebar--collapsed sticky' : 'sidebar sticky'}>
      <div className="sidebar__header">
        <Button
          variant="noborder"
          onClick={() => toggleCollapsed()}
          aria-label="Toggle sidebar"
        >
          {collapsed ? <HamburguerMenuIcon /> : <ArrowBackIcon />}
        </Button>
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
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
