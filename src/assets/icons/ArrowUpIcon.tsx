import React from 'react';

function ArrowUpIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.8125 4.1875L1.6875 5.0625L4.375 2.375V10H5.625V2.375L8.3125 5.0625L9.1875 4.1875L5 0L0.8125 4.1875Z"
        fill="hsl(156, 62%, 55%)"
      />
    </svg>
  );
}
export default React.memo(ArrowUpIcon);
