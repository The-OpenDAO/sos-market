import React from 'react';

function ToDoIcon() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.725 9.275L3.225 7.775C2.925 7.475 2.925 7.025 3.225 6.725C3.525 6.425 3.975 6.425 4.275 6.725L5.25 7.7L7.725 5.225C8.025 4.925 8.475 4.925 8.775 5.225C9.075 5.525 9.075 5.975 8.775 6.275L5.775 9.275C5.475 9.575 5.1 9.65 4.725 9.275Z" />
      <path d="M11.25 1.25H9V2.75H10.5V11H1.5V2.75H3V1.25H0.75C0.3 1.25 0 1.55 0 2V11.75C0 12.2 0.3 12.5 0.75 12.5H11.25C11.7 12.5 12 12.2 12 11.75V2C12 1.55 11.7 1.25 11.25 1.25Z" />
      <path d="M8.25 0.5H3.75V3.5H8.25V0.5Z" />
    </svg>
  );
}

export default React.memo(ToDoIcon);
