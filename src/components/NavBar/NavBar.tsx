import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFilter } from 'redux/ducks/markets';

import { SosmarketIcon, BetaTagIcon } from 'assets/icons';

import { useTheme } from 'hooks';

import NavBarActions from './NavBarActions';
import NavBarDropdownMenu from './NavBarDropdownMenu';
// import NavBarMenu from './NavBarMenu';
import NavBarSearch from './NavBarSearch';

const RISK_DISCLOSURE_DOC_URL =
  'https://docs.google.com/document/d/1VoyCJ2feVyYtHF4hm3J8ReBzDrH9CO0egH21vYVY_t8/edit';

function NavBar() {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  function handleNavigation() {
    // clearing categories/search filter
    dispatch(setFilter(''));
  }

  return (
    <div className="pm-l-navbar">
      <figure className="pm-l-navbar__icon">
        <Link to="/" aria-label="Home" onClick={handleNavigation}>
          <SosmarketIcon />
        </Link>
        <a href={RISK_DISCLOSURE_DOC_URL} target="_blank" rel="noreferrer">
          <BetaTagIcon theme={theme} />
        </a>
      </figure>
      <NavBarSearch />
      {/* <NavBarMenu /> */}
      <NavBarActions />
      <NavBarDropdownMenu />
    </div>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
