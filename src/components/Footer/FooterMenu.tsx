import { Link } from 'react-router-dom';

import Menu from '../Menu';

function FooterMenu() {
  return (
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
  );
}

export default FooterMenu;
