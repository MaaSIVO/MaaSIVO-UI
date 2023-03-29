import React, { FC, SVGProps } from 'react';
import CustomDef from './CustomDef';

const Check: FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M19 12.9C19 12.9 18.9 12.9 18.8 12.9C18.7 12.9 18.6 12.9 18.5 13L17.7 13.8C17.6 13.9 17.6 14 17.6 14.1V17.3C17.6 17.9 17.4 18.3 17 18.7C16.6 19.1 16.1 19.2999 15.6 19.2999H5.19998C4.59998 19.2999 4.19998 19.1 3.79998 18.7C3.39998 18.3 3.19998 17.8 3.19998 17.3V6.79995C3.19998 6.29995 3.39998 5.79995 3.79998 5.39995C4.19998 4.99995 4.69998 4.79995 5.19998 4.79995H15.6C15.8 4.79995 16 4.79995 16.2 4.89995C16.3 4.89995 16.3 4.89995 16.3 4.89995C16.4 4.89995 16.5 4.89995 16.6 4.79995L17.2 4.19995C17.3 4.09995 17.3 3.99995 17.3 3.79995C17.3 3.69995 17.2 3.59995 17.1 3.49995C16.7 3.29995 16.2 3.19995 15.6 3.19995H5.19998C4.19998 3.19995 3.39998 3.59995 2.69998 4.29995C1.99998 4.99995 1.59998 5.79995 1.59998 6.79995V17.2C1.59998 18.2 1.99998 19 2.69998 19.7C3.39998 20.4 4.29998 20.7999 5.19998 20.7999H15.6C16.6 20.7999 17.4 20.4 18.1 19.7C18.8 19 19.2 18.1 19.2 17.2V13.2C19.2 13 19.1 12.9 19 12.9Z"
        fill="url(#paint0_linear_172_442)"
      />
      <path
        d="M22.1 5.7L20.7 4.3C20.5 4.1 20.3 4 20 4C19.7 4 19.5 4.1 19.3 4.3L11.2 12.4L7.89999 9.1C7.69999 8.9 7.49999 8.8 7.19999 8.8C6.89999 8.8 6.69999 8.9 6.49999 9.1L5.09999 10.5C4.89999 10.7 4.79999 10.9 4.79999 11.2C4.79999 11.5 4.89999 11.7 5.09999 11.9L10.5 17.3C10.7 17.5 10.9 17.6 11.2 17.6C11.5 17.6 11.7 17.5 11.9 17.3L22.1 7.1C22.3 6.9 22.4 6.7 22.4 6.4C22.4 6.1 22.3 5.9 22.1 5.7Z"
        fill="url(#paint1_linear_172_442)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_172_442"
          x1="1.60618"
          y1="12"
          x2="19.2066"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <CustomDef />
        </linearGradient>
        <linearGradient
          id="paint1_linear_172_442"
          x1="4.81869"
          y1="10.7998"
          x2="22.3938"
          y2="10.7998"
          gradientUnits="userSpaceOnUse"
        >
          <CustomDef />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Check;