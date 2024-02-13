/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menuitem } from "../Menuitem";
import "./style.css";

interface Props {
  count: "seven" | "two" | "ten" | "three" | "nine" | "four" | "five" | "eight" | "six";
  className: any;
}

export const Menu = ({ count, className }: Props): JSX.Element => {
  return (
    <div className={`menu ${className}`}>
      <Menuitem className="item" />
      <Menuitem className="item" />
      {(count === "eight" ||
        count === "five" ||
        count === "four" ||
        count === "nine" ||
        count === "seven" ||
        count === "six" ||
        count === "ten" ||
        count === "three") && <Menuitem className="item" />}

      {(count === "eight" ||
        count === "five" ||
        count === "four" ||
        count === "nine" ||
        count === "seven" ||
        count === "six" ||
        count === "ten") && <Menuitem className="item" />}

      {["eight", "five", "nine", "seven", "six", "ten"].includes(count) && <Menuitem className="item" />}

      {["eight", "nine", "seven", "six", "ten"].includes(count) && <Menuitem className="item" />}

      {["eight", "nine", "seven", "ten"].includes(count) && <Menuitem className="item" />}

      {["eight", "nine", "ten"].includes(count) && <Menuitem className="item" />}

      {["nine", "ten"].includes(count) && <Menuitem className="item" />}

      {count === "ten" && <Menuitem className="item" />}
    </div>
  );
};

Menu.propTypes = {
  count: PropTypes.oneOf(["seven", "two", "ten", "three", "nine", "four", "five", "eight", "six"]),
};
