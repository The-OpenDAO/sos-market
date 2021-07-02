import React from 'react';

import { footerLinks } from 'components/Sidebar/mock';

import { useAppSelector } from 'hooks';

import Menu from '../Menu';

function FooterLinks() {
  const sidebarCollapsed = useAppSelector(state => state.ui.sidebar.collapsed);

  if (!sidebarCollapsed) return null;

  return (
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
  );
}

export default FooterLinks;
