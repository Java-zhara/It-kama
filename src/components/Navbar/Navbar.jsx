import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a href="/profile" className={style.item}>Profile</a></li>
                <li><a href="/dialogs" className={`${style.item} ${style.active}`}>Message</a></li>
                <li><a href="/news" className={style.item}>News</a></li>
                <li><a href="/music" className={style.item}>Music</a></li>
                <li><a href="/setting" className={style.item}>Setting</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;