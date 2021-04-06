import { Link } from 'react-router-dom';

import { PolkamarketsIcon } from 'assets/icons';

import SearchBar from '../SearchBar';
import NavBarActions from './NavBarActions';
import NavBarMenu from './NavBarMenu';

function NavBar() {
  return (
    <nav className="navbar sticky">
      <Link to="/home" aria-label="Home">
        <figure className="navbar__icon">
          <PolkamarketsIcon />
        </figure>
      </Link>
      <SearchBar
        name="SearchMarkets"
        placeholder="Search markets"
        onSearch={text => {}}
      />
      <NavBarMenu />
      <NavBarActions />
    </nav>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
