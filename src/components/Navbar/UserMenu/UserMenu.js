import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import UserMenuItem from "./UserMenuItem/UserMenuItem";
import "./UserMenu.scss";

const UserMenu = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <i
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <BiUser />
      {isHover && (
        <ul className="nav-icons-user">
          {USER_MENU.map(element => {
            return <UserMenuItem key={element.menu} menu={element.menu} />;
          })}
        </ul>
      )}
    </i>
  );
};

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

export default UserMenu;
