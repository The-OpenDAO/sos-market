import { useHistory } from 'react-router-dom';

import { MoonIcon, SettingsIcon, SunIcon } from 'assets/icons';

import { useTheme } from 'hooks';

import { Button } from '../Button';
import ButtonGroup from '../ButtonGroup';

function NavBarDropdownMenu() {
  const { theme, setTheme } = useTheme();
  const history = useHistory();

  function handleCreateMarket() {
    history.push('market/create');
  }

  return (
    <div className="pm-l-navbar-dropdown-menu">
      <Button variant="outline" color="default">
        <SettingsIcon />
      </Button>
      <div className="pm-l-navbar-dropdown-menu__content">
        <ButtonGroup
          defaultActiveId={theme}
          size="lg"
          buttons={[
            {
              id: 'light',
              name: <SunIcon />,
              color: 'default'
            },
            {
              id: 'dark',
              name: <MoonIcon />,
              color: 'default'
            }
          ]}
          onChange={newTheme => setTheme(newTheme)}
        />
        <br />
        <Button
          size="sm"
          color="primary"
          fullwidth
          onClick={handleCreateMarket}
        >
          Create Market
        </Button>
      </div>
    </div>
  );
}

export default NavBarDropdownMenu;
