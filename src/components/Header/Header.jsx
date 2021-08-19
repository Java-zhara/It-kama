import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://st2.depositphotos.com/3649089/9095/i/600/depositphotos_90958378-stock-photo-luxury-ornament-floral-design-logo.jpg"
        alt="ico"
      />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
