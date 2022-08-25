import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [dim, setDim] = useState(false);

  const updateNavBar = () => {
    if (window.scrollY >= 100) {
      setDim(true);
    } else {
      setDim(false);
    }
  };

  window.addEventListener("scroll", updateNavBar);

  let navClass = styles.header;
  if(dim) {
    navClass += ` ${styles.active}`
  }
  console.log(navClass)
  return (
    <header className={navClass}>
      <img
        className={styles.logo}
        src="marvel-logo.png"
        alt="Lord of the Rings logo"
      />
    </header>
  );
};

export default Header;
