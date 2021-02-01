import React from 'react';

function SunFogIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M16 9H0v2h16V9zM14 13H2v2h12v-2zM15 7h-2c0-2.8-2.2-5-5-5S3 4.2 3 7H1c0-3.9 3.1-7 7-7s7 3.1 7 7z" />
    </svg>
  );
}

export default React.memo(SunFogIcon);
