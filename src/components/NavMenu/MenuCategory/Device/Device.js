import React from "react";
import "./Device.scss";

const Device = ({ deviceType }) => {
  return (
    <li className="nav-menu-item">
      <span>{deviceType}</span>
    </li>
  );
};

export default Device;
