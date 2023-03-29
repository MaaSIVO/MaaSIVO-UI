import React, { FC, SVGProps } from 'react';
import CustomDef from './CustomDef';

const DoubleArrow: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9297 28.8047C10.8281 27.7031 10.8281 25.916 11.9297 24.8203L19.0723 17.6777C20.5605 16.1895 20.5605 13.7812 19.0723 12.2988L11.9238 5.15039C10.8223 4.04883 10.8223 2.26758 11.9238 1.16602C13.0254 0.0644531 14.8066 0.0644531 15.9082 1.16602L28.0137 13.2715C28.9629 14.2207 28.9629 15.7617 28.0137 16.7109L15.9141 28.8047C14.8184 29.9063 13.0313 29.9063 11.9297 28.8047Z"
        fill="url(#paint0_linear_153_346)"
      />
      <path
        d="M2.05664 23.1973C0.955078 22.0957 0.955078 20.3145 2.05664 19.2129L4.35352 16.916C5.41992 15.8496 5.41992 14.1211 4.35352 13.0547L2.05664 10.7578C0.955078 9.65625 0.955078 7.875 2.05664 6.77344C3.1582 5.67188 4.93945 5.67188 6.04102 6.77344L12.5391 13.2598C13.4883 14.209 13.4883 15.75 12.5391 16.6992L6.04688 23.1973C4.94531 24.2988 3.1582 24.2988 2.05664 23.1973Z"
        fill="url(#paint1_linear_153_346)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_153_346"
          x1="11.0977"
          y1="14.9854"
          x2="28.7256"
          y2="14.9854"
          gradientUnits="userSpaceOnUse"
        >
          <CustomDef />
        </linearGradient>
        <linearGradient
          id="paint1_linear_153_346"
          x1="1.23047"
          y1="14.9854"
          x2="13.251"
          y2="14.9854"
          gradientUnits="userSpaceOnUse"
        >
          <CustomDef />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DoubleArrow;
