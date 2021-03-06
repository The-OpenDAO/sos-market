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
  defaultTrigger?: number | undefined;
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

    const defaultTrigger = defaultSelectedOption?.defaultTrigger || 0;
    const defaultSelectedTrigger =
      defaultSelectedOption?.optionalTriggers?.[defaultTrigger];

    setSelectedOption(defaultSelectedOption);
    setSelectedOptionalTrigger(defaultSelectedTrigger || undefined);
  }, [defaultOption, options]);

  function handleChangeOption(option: Option) {
    setSelectedOption(option);

    if (option.optionalTriggers) {
      const defaultTrigger = option.defaultTrigger || 0;
      setSelectedOptionalTrigger(option.optionalTriggers[defaultTrigger]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption, selectedOptionalTrigger]);

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
            {selectedOption.value === option.value ? (
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
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

Filter.displayName = 'Filter';

export default React.memo(Filter);
