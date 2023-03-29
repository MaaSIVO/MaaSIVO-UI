import React, { FC, SVGProps } from 'react';
import CustomDef from './CustomDef';

const Scooter: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_137_203)">
        <path
          d="M26.4375 19.6875L23.4375 4.5C23.3438 4.03125 22.9688 3.75 22.5 3.75H19.6875C19.125 3.75 18.75 4.125 18.75 4.6875C18.75 5.25 19.125 5.625 19.6875 5.625H21.75L23.7188 15.375L23.625 15.4688L19.125 22.5H10.2188C9.75 19.3125 7.03125 16.875 3.75 16.875C3.1875 16.875 2.8125 17.25 2.8125 17.8125C2.8125 18.375 3.1875 18.75 3.75 18.75C6 18.75 7.875 20.3438 8.34375 22.5H7.40625C7.03125 20.9062 5.53125 19.6875 3.75 19.6875C1.6875 19.6875 0 21.375 0 23.4375C0 25.5 1.6875 27.1875 3.75 27.1875C5.53125 27.1875 6.9375 25.9688 7.40625 24.375H19.6875C19.9688 24.375 20.3438 24.1875 20.4375 23.9062L24.1875 18L24.5625 20.0625C23.3438 20.625 22.4062 21.9375 22.4062 23.4375C22.4062 25.5 24.0938 27.1875 26.1562 27.1875C28.2188 27.1875 29.9062 25.5 29.9062 23.4375C30 21.4688 28.4062 19.7812 26.4375 19.6875Z"
          fill="url(#paint0_linear_137_203)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_137_203"
          x1="0"
          y1="15.4688"
          x2="29.9102"
          y2="15.4688"
          gradientUnits="userSpaceOnUse"
        >
          <CustomDef />
        </linearGradient>
        <clipPath id="clip0_137_203">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Scooter;
