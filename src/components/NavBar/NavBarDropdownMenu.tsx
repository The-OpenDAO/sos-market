import { MoonIcon, SettingsIcon, SunIcon } from 'assets/icons';

import { useTheme } from 'hooks';

import { Button } from '../Button';
import ButtonGroup from '../ButtonGroup';

function NavBarDropdownMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="pm-l-navbar-dropdown-menu">
      <Button variant="outline" color="default">
        <SettingsIcon />
      </Button>
      <div className="pm-l-navbar-dropdown-menu__content">
        <ButtonGroup
          defaultActiveId={theme}
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
      </div>
    </div>
  );
}

export default NavBarDropdownMenu;
