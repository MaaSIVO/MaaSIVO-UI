import React, { FC, SVGProps } from 'react';

const Mail: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 16.8L29.8 7.6C29.2 5.5 27.3 4 25 4H7.00001C4.70001 4 2.80001 5.5 2.20001 7.6L16 16.8Z"
        fill={props.color ?? 'white'}
      />
      <path
        d="M16.6 18.8C16.4 18.9 16.2 19 16 19C15.8 19 15.6 18.9 15.4 18.8L2 9.90002V23C2 25.8 4.2 28 7 28H25C27.8 28 30 25.8 30 23V9.90002L16.6 18.8Z"
        fill={props.color ?? 'white'}
      />
    </svg>
  );
};

export default Mail;