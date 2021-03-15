import React, { useState } from 'react';
import clx from 'classnames';

import buttons from './mock';

type Variant = 'default' | 'primary' | 'success' | 'danger';

type Button = {
  name: string;
  variant: Variant;
  default: boolean;
};

const ToggleButton = () => {
  const [activeButton, setActiveButton] = useState<Button>(buttons[0]);

  function handleChangeButton(event: React.MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;

    const newActiveButton = buttons.find(button => button.name === name);

    setActiveButton(
      newActiveButton || { name: '', default: false, variant: 'default' }
    );
  }

  return (
    <div className={`toggle-button--${activeButton.variant}`}>
      {buttons?.map(button => (
        <button
          type="button"
          key={button.name}
          name={button.name}
          className={clx({
            'toggle-button__item': true,
            active: button.name === activeButton.name
          })}
          onClick={event => handleChangeButton(event)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

ToggleButton.displayName = 'Toggle button';

export default ToggleButton;
