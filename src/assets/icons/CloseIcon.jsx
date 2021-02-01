import React from 'react';

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <path d="M13.7.811c-.4-.4-1-.4-1.4 0L7 6.111 1.7.811c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-5.3-5.3 5.3-5.3c.4-.4.4-1 0-1.4z" />
    </svg>
  );
}

export default React.memo(CloseIcon);
