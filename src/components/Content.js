import React from "react";
import { Link } from "react-router-dom";
import styles from '../components/content.module.css'

const Content = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.title}>WELCOME TO</div>
                    <div className={styles.title}>CALCULATOR WEB APP</div>
                    <div className={styles.caption}>Go To Calculator Page And Calculate Simple Mathematic Expression</div>
                    <div><Link to={'/calculator'}><button className={styles.button}>LETS CALCULATE!</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Content;