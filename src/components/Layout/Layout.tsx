import React from 'react';

import NavBar from 'components/NavBar';
import Sidebar from 'components/Sidebar';

type LayoutProps = {
  children: React.ReactNode | any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <header className="header">
        <NavBar />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main className="main">
        <section className="vertical">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
