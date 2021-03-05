import React from 'react';
import { NavLink } from 'react-router-dom';

import { ArrowBackIcon, MarketsIcon, PortfolioIcon } from 'assets/icons';

import { Button } from 'components';
import SidebarSection from './SidebarSection';

import sidebarLinks from './mock';

function Sidebar() {
  const { markets } = sidebarLinks;

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Button
          variant="noborder"
          icon={<ArrowBackIcon />}
          iconPosition="center"
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
    </div>
  );
}

export default Sidebar;
