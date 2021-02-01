import React from 'react';

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      fill="none"
      viewBox="0 0 16 14"
    >
      <path d="M15.716 6.504l-3.43-6A.996.996 0 0011.42 0H4.58a.999.999 0 00-.868.504l-3.43 6a.998.998 0 000 .992l3.43 6A.999.999 0 004.58 14h6.839c.359 0 .69-.192.868-.504l3.429-6a.998.998 0 000-.992zM8 10a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

export default React.memo(SettingsIcon);
