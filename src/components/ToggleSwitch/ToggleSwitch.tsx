import React from 'react';

interface Props {
  name: string;
}

const ToggleSwitch = ({ name }: Props) => {
  return (
    <label className="toggle-switch" htmlFor={name}>
      <input type="checkbox" id={name} />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
