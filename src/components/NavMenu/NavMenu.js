import React, { useState } from "react";
import MenuCategory from "./MenuCategory/MenuCategory";

const NavMenu = ({ title, category }) => {
  const [isListHover, setIsListHover] = useState(false);
  console.log(isListHover);
  return (
    <li
      className="nav-menu"
      onMouseEnter={() => setIsListHover(true)}
      onMouseLeave={() => setIsListHover(false)}
    >
      <span className="nav-menu-title">{title}</span>
      <ul className="nav-menu-category">
        {isListHover &&
          category.map(element => {
            return (
              <MenuCategory
                key={element.type}
                type={element.type}
                content={element.device}
              />
            );
          })}
      </ul>
    </li>
  );
};

export default NavMenu;
