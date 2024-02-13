import React from "react";
import { Menu } from "../../components/Menu";
import "./style.css";

export const MenuOpen = (): JSX.Element => {
  return (
    <div className="menu-open">
      <div className="overlap-group">
        <div className="rectangle" />
      </div>
      <Menu className="menu-2-0" count="four" />
    </div>
  );
};
