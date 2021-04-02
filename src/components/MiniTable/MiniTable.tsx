import React from 'react';

import Text from '../Text';

type Variant = 'default' | 'success' | 'danger' | 'warning';

type Item = {
  name: string;
  value: string | number;
};

type MiniTableProps = {
  items: Item[];
  variant?: Variant;
  style?: React.CSSProperties;
};

function MiniTable({ items, variant = 'default', style }: MiniTableProps) {
  return (
    <ul className="mini-table" style={style}>
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

MiniTable.displayName = 'MiniTable';

export default MiniTable;
