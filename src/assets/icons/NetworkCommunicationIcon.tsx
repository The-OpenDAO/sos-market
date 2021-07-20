import React from 'react';

type NetworkCommunicationIconProps = {
  className: string;
};

function NetworkCommunicationIcon({
  className
}: NetworkCommunicationIconProps) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9 5C10.2405 5 11.25 3.9905 11.25 2.75C11.25 1.5095 10.2405 0.5 9 0.5C7.7595 0.5 6.75 1.5095 6.75 2.75C6.75 2.91725 6.77175 3.07925 6.80625 3.23675L4.39125 4.74575C4.00725 4.4405 3.528 4.25 3 4.25C1.7595 4.25 0.75 5.2595 0.75 6.5C0.75 7.7405 1.7595 8.75 3 8.75C3.528 8.75 4.00725 8.5595 4.39125 8.25425L6.80625 9.76325C6.77175 9.92075 6.75 10.0828 6.75 10.25C6.75 11.4905 7.7595 12.5 9 12.5C10.2405 12.5 11.25 11.4905 11.25 10.25C11.25 9.0095 10.2405 8 9 8C8.472 8 7.99275 8.1905 7.60875 8.49575L5.19375 6.98675C5.22825 6.82925 5.25 6.66725 5.25 6.5C5.25 6.33275 5.22825 6.17075 5.19375 6.01325L7.60875 4.50425C7.99275 4.8095 8.472 5 9 5Z" />
    </svg>
  );
}

export default React.memo(NetworkCommunicationIcon);
