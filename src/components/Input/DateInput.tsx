import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useField, useFormikContext } from 'formik';

import InputErrorMessage from './InputErrorMessage';

type DateInputProps = {
  label: string;
  name: string;
  description?: string;
};

function DateInput({ label, name, description }: DateInputProps) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const hasError = meta.touched && meta.error;

  return (
    <div className="pm-c-date-input__group">
      <label
        htmlFor={name}
        className={`pm-c-date-input__label--${hasError ? 'error' : 'default'}`}
      >
        {label}
      </label>
      <DatePicker
        className={`pm-c-input--${
          hasError ? 'error' : 'default'
        } pm-c-input--fullwidth`}
        selected={field.value}
        name={name}
        placeholderText="DD/MM/YYYY, --:-- --"
        dateFormat="dd/MM/yyyy, hh:mm aa"
        showTimeSelect
        timeIntervals={15}
        onChange={date => setFieldValue(name, date)}
      />
      {hasError && meta.error ? (
        <InputErrorMessage message={meta.error} />
      ) : null}
      {description && !hasError ? (
        <span className="pm-c-input__description">{description}</span>
      ) : null}
    </div>
  );
}

export default DateInput;
