/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

import Checkbox from '../Checkbox';

type FilterInlineProps = {
  label: string;
  onChange: (checked: boolean) => void;
};

function FilterInline({ label, onChange }: FilterInlineProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.currentTarget;
    onChange(checked);
  }

  return (
    <div className="pm-c-filter-inline">
      <Checkbox label={label} onChange={event => handleChange(event)} />
    </div>
  );
}

export default FilterInline;
