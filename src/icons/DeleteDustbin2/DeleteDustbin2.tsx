/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const DeleteDustbin2 = ({ color = "#CD2B31", className }: Props): JSX.Element => {
  return (
    <svg
      className={`delete-dustbin-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.6665 4.66667L9.92946 3.19257C9.56401 2.46168 8.81699 2 7.99984 2C7.18268 2 6.43566 2.46168 6.07022 3.19257L5.33317 4.66667M2.6665 4.66667H13.3332M3.99984 4.66667H11.9998V10C11.9998 11.2425 11.9998 11.8638 11.7968 12.3538C11.5262 13.0072 11.0071 13.5264 10.3537 13.797C9.8636 14 9.24235 14 7.99984 14C6.75733 14 6.13607 14 5.64601 13.797C4.99261 13.5264 4.47348 13.0072 4.20283 12.3538C3.99984 11.8638 3.99984 11.2425 3.99984 10V4.66667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DeleteDustbin2.propTypes = {
  color: PropTypes.string,
};
