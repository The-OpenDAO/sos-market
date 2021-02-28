import React from 'react';

import SidebarSection from './SidebarSection';

import sidebarLinks from './mock';

function Sidebar() {
  const { markets } = sidebarLinks;

  return (
    <div className="sidebar">
      <SidebarSection title={markets.title} items={markets.items} />
    </div>
  );
}

export default Sidebar;
