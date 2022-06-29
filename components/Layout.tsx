import React from 'react';
import Header from './Header';
import styles from '../styles/Home.module.scss';

const Layout = ({children}: any) => {
    return (
        <div className={styles.container}>
            <Header />
            {children}
        </div>
    )
}

export default Layout;