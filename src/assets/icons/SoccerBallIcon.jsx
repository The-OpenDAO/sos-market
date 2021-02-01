import React from 'react';

function SoccerBallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
    >
      <path d="M8 .512c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.7 11.8h-2l-.6 1.9c-1.4.5-2.9.5-4.3 0l-.6-1.9h-2c-.8-1.1-1.3-2.5-1.2-4.1l1.6-1.1-.6-1.9c.8-1.2 2-2.1 3.5-2.5l1.5 1.2 1.6-1.2c1.4.4 2.6 1.3 3.4 2.5l-.6 1.9 1.6 1.1c.1 1.6-.4 3-1.3 4.1z" />
      <path d="M5.5 7.912l1.2 2.5h2.6l1.2-2.5-2.5-1.9-2.5 1.9z" />
    </svg>
  );
}

export default React.memo(SoccerBallIcon);
