/* eslint-disable no-unused-vars */
import Slider from 'rc-slider';

const marks = {
  0: '0%',
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%'
};

type StepSliderProps = {
  currentValue: number;
  onChange: (value: number) => void;
};

function StepSlider({ currentValue, onChange }: StepSliderProps) {
  return (
    <div className="step-slider">
      <Slider
        value={currentValue}
        min={0}
        max={100}
        marks={marks}
        onChange={value => onChange(value)}
        trackStyle={{ backgroundColor: '#637084' }}
        railStyle={{ backgroundColor: '#252C3B' }}
        dotStyle={{
          height: 10,
          width: 10,
          marginBottom: -1,
          backgroundColor: '#252C3B',
          borderColor: '#0E1016',
          borderWidth: 2
        }}
        activeDotStyle={{
          height: 10,
          width: 10,
          backgroundColor: '#637084'
        }}
        handleStyle={{
          height: 14,
          width: 14,
          backgroundColor: '#FFFFFF',
          borderColor: '#3D455C',
          borderWidth: 3,
          boxShadow: 'none'
        }}
      />
    </div>
  );
}

StepSlider.displayName = 'StepSlider';

export default StepSlider;
