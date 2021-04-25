import { Link } from 'react-router-dom';

import { PolkamarketsIcon } from 'assets/icons';

import NavBarActions from './NavBarActions';
import NavBarMenu from './NavBarMenu';
import NavBarSearch from './NavBarSearch';

function NavBar() {
  return (
    <div className="pm-c-navbar">
      <Link to="/home" aria-label="Home">
        <figure className="pm-c-navbar__icon">
          <PolkamarketsIcon />
        </figure>
      </Link>
      <NavBarSearch />
      <NavBarMenu />
      <NavBarActions />
    </div>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
