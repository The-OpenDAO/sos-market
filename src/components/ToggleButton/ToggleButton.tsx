/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import clx from 'classnames';

import buttons from './mock';

type Variant = 'default' | 'primary' | 'success' | 'danger';

interface Props {
  variant?: Variant;
}

function ToggleButton({ variant = 'default' }: Props) {
  const [activeButton, setActiveButton] = useState(buttons[0].name);

  function handleChangeButton(event: React.MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;
    setActiveButton(name);
  }

  return (
    <div className={`toggle-button--${variant}`}>
      {buttons?.map(button => (
        <button
          type="button"
          key={button.name}
          name={button.name}
          className={clx({
            'toggle-button__item': true,
            active: button.name === activeButton
          })}
          onClick={event => handleChangeButton(event)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default ToggleButton;
