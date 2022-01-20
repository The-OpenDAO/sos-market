import { Link } from 'react-router-dom';

import Menu from '../Menu';

function NavBarMenu() {
  return (
    <div className="pm-l-navbar__menu">
      <Menu>
        <Menu.Item key="howitworks">
          <Link
            to="//help.sosmarket.com/en/collections/3155287-getting-started"
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
