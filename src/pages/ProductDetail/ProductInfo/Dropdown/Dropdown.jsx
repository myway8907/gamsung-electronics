import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Dropdown.scss";

const Dropdown = ({ size, title, desc, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dropdownOpen = isClicked ? "open" : "";

  return (
    <div className="detail-dropdown" style={{ "--size": size }}>
      <header className="dropdown-header">
        <h3>{title}</h3>
        <span onClick={() => setIsClicked(!isClicked)}>{desc}</span>
        <IoIosArrowDown
          className={`${dropdownOpen}`}
          onClick={() => setIsClicked(!isClicked)}
        />
      </header>
      {isClicked && (
        <div className={`${dropdownOpen} dropdown-detail`}>{children}</div>
      )}
    </div>
  );
};

export default Dropdown;
