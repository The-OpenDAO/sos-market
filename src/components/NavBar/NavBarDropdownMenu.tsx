import { useHistory } from 'react-router-dom';

import { closeRightSidebar } from 'redux/ducks/ui';

import { MoonIcon, SettingsIcon, SunIcon } from 'assets/icons';

import { useAppDispatch, useTheme } from 'hooks';

import { Button } from '../Button';
import ButtonGroup from '../ButtonGroup';

function NavBarDropdownMenu() {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();
  const history = useHistory();

  function handleCreateMarket() {
    dispatch(closeRightSidebar());
    history.push('/market/create');
  }

  return (
    <div className="pm-l-navbar-dropdown-menu">
      <Button variant="outline" color="default">
        <SettingsIcon />
      </Button>
      <div className="pm-l-navbar-dropdown-menu__content">
        <ButtonGroup
          fullwidth
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
