import React from 'react';
import styles from '../components/app.module.css'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer'

const Home = () => {
    return(
        <div className={styles.app}>
            <Navbar/>
            <Content/>
            <Footer />
        </div>
    );
};

export default Home;