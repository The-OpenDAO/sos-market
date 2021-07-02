import { Link } from 'react-router-dom';

import Menu from '../Menu';

function NavBarMenu() {
  return (
    <div className="pm-l-navbar__menu">
      <Menu>
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
