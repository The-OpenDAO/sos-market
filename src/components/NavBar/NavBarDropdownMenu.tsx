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
        <a
          className="pm-c-button-normal--primary pm-c-button--sm pm-c-button--fullwidth"
          aria-label="Create market"
          target="_blank"
          href="https://docs.google.com/forms/d/1WA_WQ3Ma6iXr1HExs541cmquoI4n3SysI_DGuDyrRVQ/"
          rel="noreferrer"
        >
          Create Market
        </a>
      </div>
    </div>
  );
}

export default NavBarDropdownMenu;
