import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Dropdown.scss";

const Dropdown = ({ size, title, desc, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dropdownOpen = isClicked ? "open" : "";

  return (
    <div className="detail-dropdown" style={{ "--size": size }}>
      <header
        className="dropdown-header"
        onClick={() => setIsClicked(!isClicked)}
      >
        <h3>{title}</h3>
        <span>{desc}</span>
        <IoIosArrowDown className={`${dropdownOpen} dropdown-arrow`} />
      </header>
      <div className={`${dropdownOpen} hidden`}>{isClicked && children}</div>
    </div>
  );
};

export default Dropdown;
