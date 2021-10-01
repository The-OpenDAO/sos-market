import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFilter } from 'redux/ducks/markets';

import { PolkamarketsIcon, BetaTagIcon } from 'assets/icons';

import NavBarActions from './NavBarActions';
import NavBarDropdownMenu from './NavBarDropdownMenu';
import NavBarMenu from './NavBarMenu';
import NavBarSearch from './NavBarSearch';

const RISK_DISCLOSURE_DOC_URL =
  'https://docs.google.com/document/d/1TR8HYTBOhZeZOb0E5uAo8lbK4v0Oxv3JnQD_AdYENBY/edit';

function NavBar() {
  const dispatch = useDispatch();

  function handleNavigation() {
    // clearing categories/search filter
    dispatch(setFilter(''));
  }

  return (
    <div className="pm-l-navbar">
      <figure className="pm-l-navbar__icon">
        <Link to="/home" aria-label="Home" onClick={handleNavigation}>
          <PolkamarketsIcon />
        </Link>
        <a href={RISK_DISCLOSURE_DOC_URL} target="_blank" rel="noreferrer">
          <BetaTagIcon />
        </a>
      </figure>
      <NavBarSearch />
      <NavBarMenu />
      <NavBarActions />
      <NavBarDropdownMenu />
    </div>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
