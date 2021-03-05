import React from 'react';

import { Text, ToggleSwitch } from 'components';

import useTheme from 'hooks/useTheme';

interface Props {
  open: boolean;
}

const InterfaceSettings = ({ open }: Props) => {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setTheme(checked ? 'dark' : 'light');
  }

  return (
    <div
      className={open ? 'interface-settings--collapsed' : 'interface-settings'}
    >
      <Text fontWeight="semibold">Interface Settings</Text>
      <div className="interface-settings__actions">
        <Text as="label" scale="caption" fontWeight="medium">
          Toggle Dark Mode
        </Text>
        <ToggleSwitch
          name="dark-mode"
          checked={theme === 'dark'}
          disabled
          handleChange={handleChangeTheme}
        />
      </div>
    </div>
  );
};

export default InterfaceSettings;
