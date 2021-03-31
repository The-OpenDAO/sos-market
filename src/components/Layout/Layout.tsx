import React from 'react';

import QuickTrade from 'components/QuickTrade';

import { useAppSelector } from 'hooks';

import NavBar from '../NavBar';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode | any;
};

const Layout = ({ children }: LayoutProps) => {
  const { showSidebar } = useAppSelector(state => state.trade);

  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <NavBar />
        <div className="main__group">
          <section className="vertical-section">{children}</section>
          {showSidebar ? <QuickTrade /> : null}
        </div>
      </main>
    </div>
  );
};

export default Layout;
