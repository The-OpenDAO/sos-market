import React, { useEffect, useState } from 'react';

import { ArrowDownSmallIcon } from 'assets/icons';

import Text from '../Text';

type Trigger = {
  name: string;
  icon: React.ReactNode;
};

type Option = {
  value: string | number;
  name: string;
  optionalTriggers?: Trigger[];
};

type FilterProps = {
  description: string;
  defaultOption: string;
  options: Option[];
  onChange: any;
};

function Filter({
  description,
  defaultOption,
  options,
  onChange
}: FilterProps) {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();
  const [selectedOptionalTrigger, setSelectedOptionalTrigger] = useState<
    Trigger | undefined
  >();

  useEffect(() => {
    const defaultSelectedOption = options.find(
      option => option.value === defaultOption
    );

    setSelectedOption(defaultSelectedOption);
  }, [defaultOption, options]);

  function handleChangeOption(option: Option) {
    setSelectedOption(option);

    if (option.optionalTriggers) {
      setSelectedOptionalTrigger(option.optionalTriggers[0]);
    } else {
      setSelectedOptionalTrigger(undefined);
    }
  }

  function handleChangeOptionalTrigger(option: Option, trigger: Trigger) {
    setSelectedOption(option);
    setSelectedOptionalTrigger(trigger);
  }

  useEffect(() => {
    if (selectedOption) {
      onChange({
        value: selectedOption?.value,
        optionalTrigger: selectedOptionalTrigger?.name
      });
    }
  }, [selectedOption, selectedOptionalTrigger, onChange]);

  if (!selectedOption) return null;

  return (
    <div className="pm-c-filter">
      <div className="pm-c-filter__header">
        <Text
          className="pm-c-filter__label"
          as="label"
          scale="caption"
          fontWeight="semibold"
        >
          {description}
        </Text>
        <button type="button" className="pm-c-filter__button">
          {selectedOption.name}
          <ArrowDownSmallIcon />
        </button>
      </div>

      <div className="pm-c-filter__content">
        {options.map(option => (
          <div key={option.value} className="pm-c-filter__group">
            <button
              type="button"
              className={
                selectedOption.value === option.value
                  ? 'pm-c-filter__item--active'
                  : 'pm-c-filter__item'
              }
              onClick={() => handleChangeOption(option)}
            >
              {option.name}
            </button>
            <div className="pm-c-filter__optional-triggers">
              {option.optionalTriggers?.map(trigger => (
                <button
                  key={trigger.name}
                  type="button"
                  className={
                    selectedOptionalTrigger?.name === trigger.name
                      ? 'pm-c-filter__optional-trigger--active'
                      : 'pm-c-filter__optional-trigger'
                  }
                  onClick={() => handleChangeOptionalTrigger(option, trigger)}
                >
                  {trigger.icon}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Filter.displayName = 'Filter';

export default Filter;
