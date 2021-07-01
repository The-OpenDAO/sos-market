import { Link } from 'react-router-dom';

import { useAppSelector } from 'hooks';

import Menu from '../Menu';

function NavBarMenu() {
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  return (
    <div className="pm-l-navbar__menu">
      <Menu>
        <Menu.Item key="markets">
          <Link to="/home">Markets</Link>
        </Menu.Item>
        {walletConnected && (
          <Menu.Item key="portfolio">
            <Link to="/portfolio">Portfolio</Link>
          </Menu.Item>
        )}
        <Menu.Item key="howitworks">
          <Link
            to="//polkamarkets.medium.com/mvp-pre-launch-whitelist-beta-testers-5424ce5fb32"
            target="_blank"
          >
            How It Works
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBarMenu;
