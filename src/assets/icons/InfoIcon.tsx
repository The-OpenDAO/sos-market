import React from 'react';

function InfoIcon() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3" clipPath="url(#clip0)">
        <g filter="url(#filter0_d)">
          <path
            d="M8 0.5C3.6 0.5 0 4.1 0 8.5C0 12.9 3.6 16.5 8 16.5C12.4 16.5 16 12.9 16 8.5C16 4.1 12.4 0.5 8 0.5ZM9 12.5H7V7.5H9V12.5ZM8 6.5C7.4 6.5 7 6.1 7 5.5C7 4.9 7.4 4.5 8 4.5C8.6 4.5 9 4.9 9 5.5C9 6.1 8.6 6.5 8 6.5Z"
            fill="#A8B0BD"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0.5"
          width="16"
          height="17"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default React.memo(InfoIcon);
