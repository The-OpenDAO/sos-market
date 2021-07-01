import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFilter } from 'redux/ducks/markets';

import { PolkamarketsIcon } from 'assets/icons';

import NavBarActions from './NavBarActions';
import NavBarDropdownMenu from './NavBarDropdownMenu';
import NavBarMenu from './NavBarMenu';
import NavBarSearch from './NavBarSearch';

function NavBar() {
  const dispatch = useDispatch();

  function handleNavigation() {
    // clearing categories/search filter
    dispatch(setFilter(''));
  }

  return (
    <div className="pm-l-navbar">
      <Link to="/home" aria-label="Home" onClick={handleNavigation}>
        <figure className="pm-l-navbar__icon">
          <PolkamarketsIcon />
        </figure>
      </Link>
      <NavBarSearch />
      <NavBarMenu />
      <NavBarActions />
      <NavBarDropdownMenu />
    </div>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
