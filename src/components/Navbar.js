import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import NavMenu from "./NavMenu/NavMenu";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1>SAMSUNG</h1>
        <nav className="nav">
          <ul className="nav-menulist">
            {NAVMENU.map(element => {
              return (
                <NavMenu
                  key={element.title}
                  title={element.title}
                  category={element.category}
                />
              );
            })}
          </ul>
          <ul className="nav-icons">
            <i>
              <AiOutlineSearch />
            </i>
            <i>
              <BsCart2 />
            </i>
            <i>
              <BiUser />
            </i>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NAVMENU = [
  {
    title: "모바일",
    category: [
      {
        type: "스마트폰",
        device: ["전체 스마트폰", "갤럭시 Z", "갤럭시 S", "갤럭시 A"],
      },
      {
        type: "태블릿",
        device: ["전체 태블릿", "갤럭시 탭 A", "갤럭시 탭 S"],
      },
      {
        type: "갤럭시 북",
        device: [
          "전체 갤럭시 북",
          "갤럭시 북 Pro",
          "갤럭시 북 Flex",
          "갤럭시 북 Ion",
        ],
      },
    ],
  },
  {
    title: "Team",
    category: [
      {
        type: "민욱",
        device: ["hi"],
      },
      {
        type: "준영",
        device: ["hi"],
      },
      {
        type: "종호",
        device: ["hi"],
      },
      {
        type: "민성",
        device: ["hi"],
      },
      {
        type: "병연",
        device: ["hi"],
      },
    ],
  },
];

export default Navbar;
