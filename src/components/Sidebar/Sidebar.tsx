import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { setFilter } from 'redux/ducks/markets';
import { openSidebar, closeSidebar } from 'redux/ducks/ui';

import {
  HamburguerMenuIcon,
  ArrowBackIcon,
  MarketsIcon,
  PortfolioIcon
} from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCategories from 'hooks/useCategories';

import { Button } from '../Button';
import Menu from '../Menu';
import Text from '../Text';
import Tooltip from '../Tooltip';
import { footerLinks } from './mock';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector(state => state.ui.sidebar.collapsed);
  const filter = useAppSelector(state => state.markets.filter);
  const categories = useCategories();

  function toggleCollapsed() {
    dispatch(collapsed ? openSidebar() : closeSidebar());
  }

  function handleCategorySelected(title: string) {
    if (title === filter) {
      dispatch(setFilter(''));
    } else {
      dispatch(setFilter(title));
    }
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
          <Tooltip text="Markets" position="right" disabled={!collapsed}>
            <Menu.Item key="markets" style={{ padding: '1.8rem 0rem' }}>
              <NavLink
                to="/"
                className="sidebar__link--lg"
                activeClassName="sidebar__link--lg active"
                isActive={(_match, location) => {
                  return location.pathname === '/' && filter === '';
                }}
                onClick={() => handleCategorySelected('')}
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
          </Tooltip>
          <Tooltip text="Portfolio" position="right" disabled={!collapsed}>
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
          </Tooltip>
        </Menu>

        <hr className="sidebar__separator" />

        <Menu direction="column">
          {categories?.map(category => (
            <Tooltip
              key={category.title}
              text={category.title}
              position="right"
              disabled={!collapsed}
            >
              <Menu.Item
                key={category.title}
                style={{ padding: '1.6rem 0rem' }}
              >
                <NavLink
                  to="/"
                  className="sidebar__link"
                  activeClassName="sidebar__link active"
                  isActive={(_match, location) => {
                    return (
                      location.pathname === '/' && category.title === filter
                    );
                  }}
                  onClick={() => handleCategorySelected(category.title)}
                >
                  {category.icon}
                  <span
                    className={classNames(
                      'sidebar__link-title',
                      collapsed && 'hidden'
                    )}
                  >
                    {category.title}
                  </span>
                  {
                    // TODO: calculate categories market count
                    false ? (
                      <span
                        className={classNames(
                          'sidebar__link-counter',
                          collapsed && 'hidden'
                        )}
                      >
                        {123}
                      </span>
                    ) : null
                  }
                </NavLink>
              </Menu.Item>
            </Tooltip>
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
                target="_blank"
                className="sidebar__link"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            </Menu.Item>
          ))}
        </Menu>

        <Text as="p" scale="caption" fontWeight="medium">
          @ 2021 SOSMarket
        </Text>
      </div>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
