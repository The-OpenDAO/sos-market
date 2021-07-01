import React from 'react';

function MoonIcon() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 0.5C1.875 1.175 0 3.575 0 6.425C0 9.8 2.7 12.5 6.075 12.5C8.925 12.5 11.25 10.625 12 8C7.425 9.275 3.225 5.075 4.5 0.5Z" />
    </svg>
  );
}

export default React.memo(MoonIcon);
