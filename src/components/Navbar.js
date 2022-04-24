import React from "react";
import styles from './navbar.module.css'

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <div className={styles.title}>
                Calculator
            </div>
            <div className={styles.container}>
                <button className={styles.button}>
                    <div>Login</div>
                </button>
                <button className={styles.button}>
                    <div>Sign Up</div>
                </button>
            </div>        
        </nav>
    );
};

export default Navbar;