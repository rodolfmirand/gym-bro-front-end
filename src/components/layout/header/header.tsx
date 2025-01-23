import React from "react";
import style from "./header.module.sass";
import { NavLink, useLocation } from "react-router-dom";
import PopUpHome from "../../pages/home/popups/popup_home/popup_home";


const Header: React.FC = () => {
  const local = useLocation();

  const renderLocal = () => {
    if (local.pathname === '/home') {
      return (
        <>
          <img src="/assets/logo.svg" alt="" />
          <div className={style.user_container}>
            <p>{localStorage.getItem("userName")}</p>
            <PopUpHome />
          </div>
          
        </>
      );
    } else {
      return (
        <>
          <img src="/assets/logo.svg" alt="" />
          <NavLink to={"/home"}> <i className="fi fi-rs-arrow-turn-down-left"></i></NavLink>
        </>
      );
    }
  }

  return (
    <header className={style.header}>
      {renderLocal()}
    </header>
  );
};

export default Header;
