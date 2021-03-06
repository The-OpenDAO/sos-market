import React from 'react';

type FavoriteIconProps = {
  className: string;
};

function FavoriteIcon({ className }: FavoriteIconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11.358 4.07852L8.12095 3.60827L6.6727 0.67502C6.4192 0.16277 5.5807 0.16277 5.3272 0.67502L3.8797 3.60827L0.64195 4.07852C0.0292003 4.16777 -0.21905 4.92377 0.22645 5.35877L2.56945 7.64177L2.0167 10.866C1.91245 11.4765 2.55445 11.9453 3.10495 11.6565L5.99995 10.1348L8.8957 11.6573C9.4417 11.943 10.089 11.4818 9.98395 10.8668L9.4312 7.64252L11.7742 5.35952C12.219 4.92377 11.9707 4.16777 11.358 4.07852Z" />
    </svg>
  );
}

export default React.memo(FavoriteIcon);
