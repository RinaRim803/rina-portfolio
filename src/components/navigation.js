import React from "react";
import style from "./navigation.module.css";
const Navigation = () => {
  return (
    <nav className={style.nav}>
      <span className={style.logo}>Rina's Portfolio</span>
      <ul className={style.navRight}>
        <li className={style.navItem}>About</li>
        <li className={style.navItem}>Project</li>
        <li className={style.navItem}>Resume</li>
        <li className={style.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
