import React from 'react';

function WhiteHouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M15.333 10H14V7.333c0-.066 0-.133-.067-.2v-.066c0-.067-.066-.134-.133-.2l-.067-.067-5.066-3.2V2H10V.667H8.667V0H7.333v3.6l-5 3.133c-.066 0-.066.067-.066.067-.067.067-.067.133-.134.2v.067C2 7.2 2 7.267 2 7.333V10H.667c-.4 0-.667.267-.667.667v4.666c0 .4.267.667.667.667h14.666c.4 0 .667-.267.667-.667v-4.666c0-.4-.267-.667-.667-.667zm-12 4.667v-6h2v6h-2zm3.334-6h2.666v6H6.667v-6zm4 6v-6h2v6h-2z" />
    </svg>
  );
}

export default React.memo(WhiteHouseIcon);
