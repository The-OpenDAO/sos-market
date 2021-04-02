import React from 'react';

import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import Trade from '../Trade';

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
          <Trade />
        </div>
      </main>
    </div>
  );
}

Layout.displayName = 'Layout';

export default Layout;
