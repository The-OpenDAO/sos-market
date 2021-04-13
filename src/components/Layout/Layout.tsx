import React from 'react';

import NavBar from '../NavBar';
import RightSidebar from '../RightSidebar';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode | any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <NavBar />
        <div className="main__group">
          <section className="vertical-section">{children}</section>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}

Layout.displayName = 'Layout';

export default Layout;
