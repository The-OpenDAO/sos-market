import React from 'react';

import QuickTrade from 'components/QuickTrade';

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
        <div className="main__group">
          <section className="vertical-section">{children}</section>
          <QuickTrade />
        </div>
      </main>
    </div>
  );
};

export default Layout;
