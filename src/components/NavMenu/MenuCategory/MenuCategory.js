import React from "react";
import Device from "./Device/Device";

const MenuCategory = ({ type, content }) => {
  return (
    <li>
      <span>{type}</span>
      <ul className="nav-menu-device">
        {content.map(element => {
          return <Device key={element} deviceType={element} />;
        })}
      </ul>
    </li>
  );
};

export default MenuCategory;
