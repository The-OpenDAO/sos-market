import React from 'react';

import classNames from 'classnames';

type ItemProps = {
  /**
   * Aditional CSS inline style
   */
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Menu item
 */
function Item({ style, children, ...props }: ItemProps) {
  return (
    <li className="menu__item" style={style} {...props}>
      {children}
    </li>
  );
}

type MenuDirection = 'row' | 'column';

type MenuProps = {
  /**
   * Direction of menu
   */
  direction?: MenuDirection;
  /**
   * Aditional CSS inline style
   */
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * A menu for navigation
 */
function Menu({ direction = 'row', style, children }: MenuProps) {
  return (
    <ul className={classNames('menu', `menu--${direction}`)} style={style}>
      {children}
    </ul>
  );
}

Menu.displayName = 'Menu';

Menu.Item = Item;

export default Menu;
