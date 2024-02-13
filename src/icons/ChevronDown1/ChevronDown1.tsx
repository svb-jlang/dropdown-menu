/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ChevronDown1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-down-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 10.1392C9.06206 11.6011 10.3071 12.9105 11.7021 14.0334C11.8774 14.1745 12.1226 14.1745 12.2979 14.0334C13.6929 12.9105 14.9379 11.6011 16 10.1392"
        stroke="#303A47"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
