import React from 'react';

import Text from '../Text';

type Variant = 'default' | 'success' | 'danger' | 'warning';

type Item = {
  name: string;
  value: string | number;
};

interface Props {
  items: Item[];
  variant?: Variant;
}

function MiniTable({ items, variant = 'default' }: Props) {
  return (
    <ul className="mini-table">
      {items?.map(item => (
        <li key={item.name} className={`mini-table__item--${variant}`}>
          <Text as="span" scale="tiny-uppercase" fontWeight="bold">
            {item.name}
          </Text>
          <div className="fill" />
          <Text as="strong" scale="caption" fontWeight="bold">
            {item.value}
          </Text>
        </li>
      ))}
    </ul>
  );
}

export default MiniTable;
