import React from 'react';

import NavBar from 'components/NavBar';
import Sidebar from 'components/Sidebar';
import LandingHeader from 'components/LandingHeader';

interface Props {
  children: React.ReactNode | any;
}

function Layout({ children }: Props) {
  return (
    <div className="wrapper">
      <header className="header">
        <NavBar />
      </header>
      <LandingHeader />
      <main className="main">
        <section className="vertical">
          <Sidebar />
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
