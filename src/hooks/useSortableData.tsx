import { useState, useMemo } from 'react';

import orderBy from 'lodash/orderBy';

type Direction = {
  name: 'ascending' | 'descending';
  value: 'asc' | 'desc';
};

type Config = {
  key: string;
  direction: Direction;
};

function useSortableData(items) {
  const [config, setConfig] = useState<Config | undefined>();

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];

    if (config) {
      return orderBy(sortableItems, [config.key], [config.direction.value]);
    }

    return sortableItems;
  }, [items, config]);

  function requestSort(key) {
    let direction: Direction = { name: 'ascending', value: 'asc' };
    if (config && config.key === key && config.direction.name === 'ascending') {
      direction = { name: 'descending', value: 'desc' };
    }
    setConfig({ key, direction });
  }

  return {
    sortedItems,
    requestSort,
    key: config?.key,
    sortDirection: config?.direction.name
  };
}

export default useSortableData;
