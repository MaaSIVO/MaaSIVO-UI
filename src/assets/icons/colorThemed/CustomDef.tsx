import React, { FC, SVGProps } from 'react';

const CustomDef: FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <>
      <stop stopColor="#9F2FFF" />
      <stop offset="1" stopColor="#0BB1D3" />
    </>
  );
};

export default CustomDef;
