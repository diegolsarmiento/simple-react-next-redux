import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Header = () => {
    return (
        <div>
            <Head>
                <title>Simple React Next Redux</title>
                <meta name="description" content="Typescript example combining React Next Redux." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.header}>
                <Link href="/"><a className={styles.menu} >Home</a></Link>
                <Link href="/post"><a className={styles.menu}>Post</a></Link>
            </main>
        </div>
    )
}

export default Header;