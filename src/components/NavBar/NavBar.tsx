import React from 'react';

import { PolkamarketsIcon } from 'assets/icons';
import { SearchBar } from 'components';

const NavBar = () => {
  return (
    <nav className="navbar">
      <figure className="navbar__icon">
        <PolkamarketsIcon />
      </figure>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
