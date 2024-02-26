'use client';

import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SignIn from './sign-in';

export default function Navbar(){
    
    return (
        <nav className={styles.nav}>
            <Link href="/">
                
                <Image  width={70} height={70} className={styles.logo}
                src="/fragTrackerLogo.png" alt="frag logo"/>
            </Link>
            <h1 className={styles.title}>Fragrance Tracker</h1>
            <SignIn />
        </nav>
    )
}