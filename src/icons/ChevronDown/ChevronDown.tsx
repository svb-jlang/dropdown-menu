/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ChevronDown = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-down ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.6665 8.44922C7.55155 9.66745 8.58907 10.7586 9.75161 11.6944C9.89765 11.8119 10.102 11.8119 10.2481 11.6944C11.4106 10.7586 12.4481 9.66745 13.3332 8.44922"
        stroke="#54626D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
