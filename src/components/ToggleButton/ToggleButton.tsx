/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Button from '../Button';

import buttons from './mock';

function ToggleButton() {
  const [activeButton, setActiveButton] = useState(buttons[0].name);

  function handleChangeButton(event: React.MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;
    setActiveButton(name);
  }

  return (
    <div className="toggle-button">
      {buttons?.map(button => (
        <Button
          key={button.name}
          name={button.name}
          variant={button.name === activeButton ? 'primary' : 'noborder'}
          onClick={event => handleChangeButton(event)}
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
}

export default ToggleButton;
