import React from 'react';

import NavBar from '../NavBar';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode | any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <NavBar />
        <section className="vertical-section">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
