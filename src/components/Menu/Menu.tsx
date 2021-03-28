import React from 'react';

import classNames from 'classnames';

type ItemProps = {
  /**
   * Unique key of this item
   */
  key: string;
  children: React.ReactNode;
};

const Item = ({ key, children }: ItemProps) => {
  return (
    <li key={key} className="menu__item">
      {children}
    </li>
  );
};

type MenuDirection = 'row' | 'column';

type MenuProps = {
  /**
   * Direction of menu
   */
  direction?: MenuDirection;
  children: React.ReactNode;
};

/**
 * A menu for navigation
 */
const Menu = ({ direction = 'row', children }: MenuProps) => {
  return (
    <ul className={classNames('menu', `menu--${direction}`)}>{children}</ul>
  );
};

Menu.Item = Item;

Menu.displayName = 'Menu';

export default Menu;
