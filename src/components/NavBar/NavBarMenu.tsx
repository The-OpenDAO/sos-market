import { Link } from 'react-router-dom';

import Menu from '../Menu';

function NavBarMenu() {
  return (
    <Menu>
      <Menu.Item key="howitworks">
        <Link to="/howitworks">How It Works</Link>
      </Menu.Item>
      <Menu.Item key="faq">
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
    </Menu>
  );
}

NavBarMenu.displayName = 'NavBarMenu';

export default NavBarMenu;
