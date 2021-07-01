import React from 'react';

import Footer from '../Footer';
import NavBar from '../NavBar';
import RightSidebar from '../RightSidebar';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode | any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="pm-l-layout">
      <header className="pm-l-layout__header sticky">
        <div id="alert-notification-portal" />
        <NavBar />
      </header>
      <nav className="pm-l-layout__nav">
        <Sidebar />
      </nav>
      <main className="pm-l-layout__main">{children}</main>
      <footer className="pm-l-layout__footer">
        <Footer />
      </footer>
      <aside className="pm-l-layout__aside">
        <RightSidebar />
      </aside>
    </div>
  );
}

Layout.displayName = 'Layout';

export default Layout;
