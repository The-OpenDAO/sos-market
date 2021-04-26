import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { openSidebar, closeSidebar } from 'redux/ducks/ui';

import {
  HamburguerMenuIcon,
  ArrowBackIcon,
  MarketsIcon,
  PortfolioIcon
} from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';
import Menu from '../Menu';
import Text from '../Text';
import { navigationLinks, footerLinks } from './mock';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector(state => state.ui.sidebar.collapsed);
  const { markets } = navigationLinks;

  function toggleCollapsed() {
    dispatch(collapsed ? openSidebar() : closeSidebar());
  }

  return (
    <div className={collapsed ? 'sidebar--collapsed sticky' : 'sidebar sticky'}>
      <div className="sidebar__header">
        <Button
          color="noborder"
          onClick={() => toggleCollapsed()}
          aria-label="Toggle sidebar"
        >
          {collapsed ? <HamburguerMenuIcon /> : <ArrowBackIcon />}
        </Button>
      </div>
      <div className="sidebar__content">
        <Menu direction="column">
          <Menu.Item key="markets" style={{ padding: '1.8rem 0rem' }}>
            <NavLink
              to="/home"
              className="sidebar__link--lg"
              activeClassName="sidebar__link--lg active"
            >
              <MarketsIcon />
              <span
                className={classNames(
                  'market__link-title--lg',
                  collapsed && 'hidden'
                )}
              >
                Markets
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="portfolio" style={{ padding: '1.8rem 0rem' }}>
            <NavLink
              to="/portfolio"
              className="sidebar__link--lg"
              activeClassName="sidebar__link--lg active"
            >
              <PortfolioIcon />
              <span
                className={classNames(
                  'market__link-title--lg',
                  collapsed && 'hidden'
                )}
              >
                Portfolio
              </span>
            </NavLink>
          </Menu.Item>
        </Menu>

        <hr className="sidebar__separator" />

        <Menu direction="column">
          {markets.items?.map(market => (
            <Menu.Item key={market.name} style={{ padding: '1.6rem 0rem' }}>
              <NavLink
                to={market.to}
                className="sidebar__link"
                activeClassName="sidebar__link active"
              >
                {market.icon}
                <span
                  className={classNames(
                    'sidebar__link-title',
                    collapsed && 'hidden'
                  )}
                >
                  {market.name}
                </span>
                <span
                  className={classNames(
                    'sidebar__link-counter',
                    collapsed && 'hidden'
                  )}
                >
                  {market.count}
                </span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className={classNames('sidebar__footer', collapsed && 'hidden')}>
        <Menu>
          {footerLinks?.map(link => (
            <Menu.Item key={link.name} style={{ padding: '0rem 0.8rem' }}>
              <a
                href={link.url}
                aria-label={link.name}
                className="sidebar__link"
              >
                {link.icon}
              </a>
            </Menu.Item>
          ))}
        </Menu>

        <Text as="p" scale="caption" fontWeight="medium">
          @ 2021 Polkamarkets
        </Text>
      </div>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
