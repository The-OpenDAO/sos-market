import React from 'react';

import { Text } from 'components';

interface Props {
  open: boolean;
}

const InterfaceSettings = ({ open }: Props) => {
  return (
    <div
      className={open ? 'interface-settings--collapsed' : 'interface-settings'}
    >
      <Text as="h5" fontWeight="semibold">
        Interface Settings
      </Text>
    </div>
  );
};

export default InterfaceSettings;
