import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink
            to="/profile"
            className={style.item}
            activeClassName={style.activeLink}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={style.item}
            activeClassName={style.activeLink}
          >
            Message
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={style.item}
            activeClassName={style.activeLink}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={style.item}
            activeClassName={style.activeLink}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={style.item}
            activeClassName={style.activeLink}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={style.item}
            activeClassName={style.activeLink}
          >
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
