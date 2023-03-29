import React, { FC, SVGProps } from 'react';
import CustomDef from './CustomDef';

const Heart: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.7 6C20.7 5 19.3 4.5 17.5 4.5C17 4.5 16.5 4.6 16 4.8C15.5 5 15 5.2 14.6 5.5C14.2 5.8 13.8 6.1 13.5 6.3C13.2 6.6 12.9 6.8 12.6 7.1C12.3 6.8 12 6.5 11.7 6.3C11.4 6 11 5.8 10.6 5.5C9.99999 5.2 9.49999 4.9 8.99999 4.8C8.49999 4.6 7.99999 4.5 7.49999 4.5C5.69999 4.5 4.29999 5 3.29999 6C2.29999 7 1.79999 8.4 1.79999 10.1C1.79999 10.6 1.89999 11.2 2.09999 11.8C2.29999 12.4 2.49999 12.9 2.69999 13.2C2.89999 13.6 3.19999 14 3.49999 14.4C3.79999 14.8 3.99999 15 4.19999 15.2C4.29999 15.3 4.39999 15.4 4.49999 15.5L12 22.7C12.1 22.8 12.3 22.9 12.5 22.9C12.7 22.9 12.9 22.8 13 22.7L20.5 15.5C22.3 13.7 23.2 11.9 23.2 10.1C23.2 8.4 22.7 7 21.7 6Z"
        fill="url(#paint0_linear_138_261)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_138_261"
          x1="1.75519"
          y1="13.7102"
          x2="23.2214"
          y2="13.7102"
          gradientUnits="userSpaceOnUse"
        >
          <CustomDef />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Heart;
