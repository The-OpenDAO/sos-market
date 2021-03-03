import React from 'react';

import { Text, ToggleSwitch } from 'components';

interface Props {
  open: boolean;
}

const InterfaceSettings = ({ open }: Props) => {
  return (
    <div
      className={open ? 'interface-settings--collapsed' : 'interface-settings'}
    >
      <Text fontWeight="semibold">Interface Settings</Text>
      <div className="interface-settings__actions">
        <Text as="label" fontWeight="medium">
          Toggle Dark Mode
        </Text>
        <ToggleSwitch name="dark-mode" />
      </div>
    </div>
  );
};

export default InterfaceSettings;
