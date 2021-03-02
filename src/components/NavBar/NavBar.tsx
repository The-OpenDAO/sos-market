import React from 'react';
import { NavLink } from 'react-router-dom';

import { PolkamarketsIcon } from 'assets/icons';
import { SearchBar } from 'components';

const NavBar = () => {
  return (
    <nav className="navbar">
      <figure className="navbar__icon">
        <PolkamarketsIcon />
      </figure>
      <SearchBar />
      <ul className="navbar-menu">
        <li className="navbar-menu__item">
          <NavLink exact to="/howitworks">
            How It Works
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
