type ToggleSwitchProps = {
  name: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange: any;
};

const ToggleSwitch = ({
  name,
  checked,
  disabled = false,
  handleChange
}: ToggleSwitchProps) => {
  return (
    <label className="toggle-switch" htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        disabled={disabled}
        onChange={event => handleChange(event)}
      />
      <span className="slider" />
    </label>
  );
};

ToggleSwitch.displayName = 'Toggle switch';

export default ToggleSwitch;
