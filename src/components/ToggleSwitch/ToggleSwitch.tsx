import React from 'react';

interface Props {
  name: string;
  checked?: boolean;
  handleChange: any;
}

const ToggleSwitch = ({ name, checked, handleChange }: Props) => {
  return (
    <label className="toggle-switch" htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={event => handleChange(event)}
      />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
