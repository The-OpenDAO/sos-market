import React from 'react';

type ItemProps = {
  children: React.ReactNode;
};

type BreadcrumbProps = {
  children: React.ReactNode;
};

const Item = ({ children }: ItemProps) => {
  return (
    <>
      <span className="breadcrumb__separator">/</span>
      <span className="breadcrumb__item">{children}</span>
    </>
  );
};

/**
 * A breadcrumb displays the current location within a hierarchy
 */
const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <div className="breadcrumb">{children}</div>;
};

Breadcrumb.Item = Item;

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
