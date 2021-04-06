/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';

type ButtonColor = 'default' | 'primary' | 'success' | 'danger';

type Button = {
  /**
   * Unique id of this button
   */
  id: string;
  /**
   * Name of this button
   */
  name: string;
  /**
   * Color of the component
   * @default 'default'
   */
  color: ButtonColor;
};

type ToggleButtonProps = {
  /**
   * Id of the default active button
   */
  defaultActiveId: string;
  /**
   * Array of buttons to be displayed
   */
  buttons: Button[];
  /**
   * The callback function triggered when click on button
   */
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
    <div className={`toggle-button--${activeButton.color}`}>
      {buttons?.map(button => (
        <button
          type="button"
          key={button.id}
          id={button.id}
          name={button.name}
          className={classNames({
            'toggle-button__item': true,
            active: button.id === activeButton.id
          })}
          onClick={handleChangeActiveButton}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
