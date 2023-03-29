import React, { FC, SVGProps } from 'react';

const CustomDef: FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <>
      <stop stopColor="#380e31" />
      <stop offset="1" stopColor="#0BB1D3" />
    </>
  );
};

export default CustomDef;
