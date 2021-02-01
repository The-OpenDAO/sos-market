import React from 'react';

function ChartGrowthIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M8 0L3 6h3v9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V6h3L8 0zM3 11H1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1z" />
      <path d="M15 8h-2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1z" />
    </svg>
  );
}

export default React.memo(ChartGrowthIcon);
