import React, { useState } from 'react';

import styles from 'styles/components/ToggleButton.module.scss';

import Button from '../Button';

import buttons from './mock';

function ToggleButton() {
  const [activeButton, setActiveButton] = useState(buttons[0].name);

  function handleChangeButton(event) {
    setActiveButton(event.target.name);
  }

  return (
    <div className={styles.container}>
      {buttons.map(button => (
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
