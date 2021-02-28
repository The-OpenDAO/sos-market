import React from 'react';

type Item = {
  title: string;
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
      {items?.map(item => (
        <a
          key={item.title}
          href={`/${item.title.toLowerCase()}`}
          className="sidebar-section__link"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default SidebarSection;
