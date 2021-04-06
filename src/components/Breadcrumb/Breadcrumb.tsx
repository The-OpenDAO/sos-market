import React from 'react';

type ItemProps = {
  children: React.ReactNode;
};

function Item({ children }: ItemProps) {
  return (
    <>
      <span className="breadcrumb__separator">/</span>
      <span className="breadcrumb__item">{children}</span>
    </>
  );
}

type BreadcrumbProps = {
  children: React.ReactNode;
};

/**
 * A breadcrumb displays the current location within a hierarchy
 */
function Breadcrumb({ children }: BreadcrumbProps) {
  return <div className="breadcrumb">{children}</div>;
}

Breadcrumb.Item = Item;

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
