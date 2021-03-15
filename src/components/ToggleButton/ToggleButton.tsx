import React, { useState, useEffect } from 'react';
import clx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';

type Variant = 'default' | 'primary' | 'success' | 'danger';

type Button = {
  name: string;
  variant: Variant;
  default: boolean;
};

type ToggleButtonProps = {
  buttons: Button[];
};

const ToggleButton = ({ buttons }: ToggleButtonProps) => {
  const [activeButton, setActiveButton] = useState<Button | undefined>(
    undefined
  );

  useEffect(() => {
    if (!isEmpty(buttons)) {
      const defaultButton = buttons.find(button => button.default);
      setActiveButton(defaultButton);
    }
  }, [buttons]);

  function handleChangeButton(event: React.MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;

    const newActiveButton = buttons.find(button => button.name === name);

    setActiveButton(newActiveButton);
  }

  if (isUndefined(activeButton)) return null;

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
