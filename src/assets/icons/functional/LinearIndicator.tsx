import React, { FC, SVGProps } from 'react';

const LinearIndicator: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="573"
      height="100"
      viewBox="0 0 573 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="568" cy="67.4995" r="5" fill="white" />
      <path d="M7 56.4995L21.9756 67.9375L568 67.9375" stroke="white" stroke-width="3" />
      <circle cx="5" cy="54.4995" r="5" fill="white" />
    </svg>
  );
};

export default LinearIndicator;
