import React from 'react';

import Text from '../Text';

type FooterLink = {
  name: string;
  url: string;
  icon: React.ReactNode | any;
};

type SidebarFooterProps = {
  links: FooterLink[];
};

const SidebarFooter = ({ links }: SidebarFooterProps) => {
  return (
    <div className="sidebar-footer">
      <ul className="sidebar-footer__links">
        {links?.map(link => (
          <li key={link.name} className="sidebar-footer__link">
            <a href={link.url}>{link.icon}</a>
          </li>
        ))}
      </ul>
      <Text as="p" scale="caption" fontWeight="medium">
        @ 2021 Polkamarkets
      </Text>
    </div>
  );
};

export default SidebarFooter;
