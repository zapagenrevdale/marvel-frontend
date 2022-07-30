import React from "react";
import styles from "./Header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <img className={styles.logo} src="marvel-logo.png" alt="Lord of the Rings logo"/>
        </header>
    );

}


export default Header;