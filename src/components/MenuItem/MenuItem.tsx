/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DeleteDustbin2 } from "../../icons/DeleteDustbin2";
import "./style.css";

interface Props {
  showTrailingicon: boolean;
  showCheckbox: boolean;
  showLeadingicon: boolean;
  text: string;
  stateProp: "hover" | "selected" | "default";
  destructive: boolean;
  disabled: boolean;
  className: any;
}

export const MenuItem = ({
  showTrailingicon = false,
  showCheckbox = false,
  showLeadingicon = false,
  text = "Menu Item",
  stateProp,
  destructive,
  disabled,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    destructive: destructive,

    disabled: disabled,
  });

  return (
    <div
      className={`menu-item ${state.state} disabled-${state.disabled} destructive-${state.destructive} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="wrapper">
        {state.destructive && (
          <DeleteDustbin2
            className="delete-dustbin"
            color={state.state === "default" ? "#687076" : state.disabled ? "#C5CCD3" : "#CD2B31"}
          />
        )}
      </div>
      <div className="frame">
        <div className="menu-item-wrapper">
          <div className="text-wrapper">{text}</div>
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

MenuItem.propTypes = {
  showTrailingicon: PropTypes.bool,
  showCheckbox: PropTypes.bool,
  showLeadingicon: PropTypes.bool,
  text: PropTypes.string,
  stateProp: PropTypes.oneOf(["hover", "selected", "default"]),
  destructive: PropTypes.bool,
  disabled: PropTypes.bool,
};
