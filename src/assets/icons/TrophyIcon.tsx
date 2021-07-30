import { SVGProps, memo } from 'react';

function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0.5V3.5C0 5.04911 1.20276 6.5 3.10606 6.5C3.36433 7.4971 4.118 8.28395 5.09262 8.59509C4.959 9.29794 4.71149 10.1783 4.25043 11H3V12.5H9V11H7.74957C7.28851 10.1783 7.041 9.29794 6.90738 8.59509C7.882 8.28395 8.63567 7.4971 8.89394 6.5C10.791 6.5 12 5.05384 12 3.5V0.5H0ZM1.5 3.5V2H3V5C2.1731 5 1.5 4.32727 1.5 3.5ZM10.5 3.5C10.5 4.32727 9.8269 5 9 5V2H10.5V3.5Z" />
    </svg>
  );
}

export default memo(TrophyIcon);
