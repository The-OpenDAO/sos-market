import { Link } from 'react-router-dom';

import { PolkamarketsIcon, PolkamarketsLogo } from 'assets/icons';

import { useViewport } from 'hooks';

import SearchBar from '../SearchBar';
import NavBarActions from './NavBarActions';
import NavBarMenu from './NavBarMenu';

function NavBar() {
  const { isMobile } = useViewport();

  function handleSearch(text: string) {
    return text;
  }

  return (
    <nav className="navbar sticky">
      <Link to="/home" aria-label="Home">
        <figure className="navbar__icon">
          {!isMobile ? <PolkamarketsIcon /> : <PolkamarketsLogo />}
        </figure>
      </Link>
      {!isMobile ? (
        <>
          <SearchBar
            name="SearchMarkets"
            placeholder="Search markets"
            onSearch={handleSearch}
          />
          <NavBarMenu />
          <NavBarActions />
        </>
      ) : null}
    </nav>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
