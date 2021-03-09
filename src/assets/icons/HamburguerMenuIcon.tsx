import React from 'react';

function HamburguerMenuIcon() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 9H1C0.4 9 0 8.6 0 8C0 7.4 0.4 7 1 7H14C14.6 7 15 7.4 15 8C15 8.6 14.6 9 14 9Z" />
      <path d="M23 2H1C0.4 2 0 1.6 0 1C0 0.4 0.4 0 1 0H23C23.6 0 24 0.4 24 1C24 1.6 23.6 2 23 2Z" />
      <path d="M23 16H1C0.4 16 0 15.6 0 15C0 14.4 0.4 14 1 14H23C23.6 14 24 14.4 24 15C24 15.6 23.6 16 23 16Z" />
    </svg>
  );
}

export default React.memo(HamburguerMenuIcon);
