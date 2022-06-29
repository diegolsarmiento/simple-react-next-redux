import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <Link href="https://diegosarmiento.com" target="_blank">Diego Sarmiento</Link>
            </footer>
        </div>
    )
}

export default Footer;