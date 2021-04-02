/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import clx from 'classnames';
import isUndefined from 'lodash/isUndefined';

type Variant = 'default' | 'primary' | 'success' | 'danger';

type Button = {
  id: string;
  name: string;
  variant: Variant;
};

type ToggleButtonProps = {
  /**
   * Id of the default active button
   */
  defaultActiveId: string;
  buttons: Button[];
  onChange: (id: string | undefined) => void;
};

function ToggleButton({
  defaultActiveId,
  buttons,
  onChange
}: ToggleButtonProps) {
  const [activeButton, setActiveButton] = useState<Button | undefined>(
    undefined
  );

  useEffect(() => {
    const newActiveButton = buttons.find(
      button => button.id === defaultActiveId
    );
    setActiveButton(newActiveButton);
  }, [buttons, defaultActiveId]);

  if (isUndefined(activeButton)) return null;

  function handleChangeActiveButton(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const { id } = event.currentTarget;

    if (id !== activeButton?.id) {
      const newActiveButton = buttons.find(button => button.id === id);

      setActiveButton(newActiveButton);
      onChange(newActiveButton?.id);
    }
  }

  return (
    <div className={`toggle-button--${activeButton.variant}`}>
      {buttons?.map(button => (
        <button
          type="button"
          key={button.id}
          id={button.id}
          name={button.name}
          className={clx({
            'toggle-button__item': true,
            active: button.id === activeButton.id
          })}
          onClick={event => handleChangeActiveButton(event)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
