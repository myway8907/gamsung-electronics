import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import NavMenu from "./NavMenu/NavMenu";
import UserMenu from "./NavMenu/UserMenu";
import "./Navbar.scss";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <h1>GAMSUNG</h1>
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
            <i
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <BiUser />
              {isHover && (
                <ul className="nav-icons-user">
                  {USER_MENU.map(element => {
                    return <UserMenu key={element.menu} menu={element.menu} />;
                  })}
                </ul>
              )}
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
        image:
          "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
      },
      {
        type: "태블릿",
        device: ["전체 태블릿", "갤럭시 탭 A", "갤럭시 탭 S"],
        image:
          "https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      },
      {
        type: "갤럭시 북",
        device: [
          "전체 갤럭시 북",
          "갤럭시 북 Pro",
          "갤럭시 북 Flex",
          "갤럭시 북 Ion",
        ],
        image:
          "https://images.unsplash.com/photo-1522202195465-df8a5f26fa15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  {
    title: "Team",
    category: [
      {
        type: "민욱",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "준영",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "종호",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "민성",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "병연",
        device: ["hi"],
        image: "asd",
      },
    ],
  },
];

const USER_MENU = [
  {
    menu: "로그인",
  },
  {
    menu: "마이페이지",
  },
  {
    menu: "구매내역",
  },
  {
    menu: "도움말",
  },
];

export default Navbar;
