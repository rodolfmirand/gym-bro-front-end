import React from "react";
import style from "./header.module.sass";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img src="/assets/logo.svg" alt="" />
      <NavLink to ={"/home"}> <i className="fi fi-rs-arrow-turn-down-left"></i></NavLink>

    </header>
  );
};

export default Header;
