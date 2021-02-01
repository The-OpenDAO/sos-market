import React from 'react';

function LaptopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0)">
        <path d="M15 9h-2V4H3v5H1V4a2.006 2.006 0 012-2h10a2.006 2.006 0 012 2v5zM14 14H2a2.006 2.006 0 01-2-2v-1h16v1a2.006 2.006 0 01-2 2z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default React.memo(LaptopIcon);
